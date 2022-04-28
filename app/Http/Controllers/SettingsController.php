<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use SpotifyWebAPI\Session;
use SpotifyWebAPI\SpotifyWebAPI;
use SpotifyWebAPI\SpotifyWebAPIException;

class SettingsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index(Request $request)
    {
        return view("settings.index");
    }

    /* last.fm settings */

    public function lastfmSession(Request $request)
    {
        return view("settings.lastfmsession");
    }

    public function requestLastfmAuthorization()
    {
        // Send authentication request
        $authEndpoint =
            "http://www.last.fm/api/auth/?api_key=" .
            env("LASTFM_API_KEY") .
            "&cb=http://localhost:8000/settings/create-lastfm-session";

        return redirect($authEndpoint);
    }

    public function createLastfmSession(Request $request)
    {
        // Received auth token
        $authToken = isset($_GET["token"]) ? $_GET["token"] : null;

        // Last.fm endpoint url
        $endpoint = env("LASTFM_API_ENDPOINT");

        // API key
        $apiKey = env("LASTFM_API_KEY");

        // API secret
        $apiSecret = env("LASTFM_API_SECRET_KEY");

        //Prehashed API signature
        $apiSignaturePreHashed =
            "api_key" .
            $apiKey .
            "methodauth.getSessiontoken" .
            $authToken .
            $apiSecret;

        // API signature final version
        $apiSignature = md5($apiSignaturePreHashed);

        // Last.fm API request URL
        $url =
            $endpoint .
            "?method=auth.getSession&format=json&api_key=" .
            $apiKey .
            "&token=" .
            $authToken .
            "&api_sig=" .
            $apiSignature;

        // RANDOM CODE MAYBE WORKS => need to refactor at some point
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $headers = ["Accept: */*"];
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        //for debug only!
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

        $resp = curl_exec($curl);
        curl_close($curl);

        // Response from string to JSON
        $response = json_decode($resp);
        // dd($response);

        // Very sophisticated error handling...
        if (property_exists($response, "error")) {
            return dd($response);
        }

        // Received data retrieval
        $lastfm_username = $response->session->name;
        $lastfm_session_key = $response->session->key;
        $user_id = Auth::user()->id;

        // Add response data to database
        DB::update(
            "update users set lastfm_username = ?, lastfm_session_key = ? where id = ?",
            [$lastfm_username, $lastfm_session_key, $user_id]
        );

        // Return to lastfm session page
        return redirect("settings/lastfm-session");
    }

    public function disconnectLastfmAccount()
    {
        $user_id = Auth::user()->id;

        /* 
            A function that goes to last.fm page and disconnects Mystery application instance from last.fm user's account
        */

        // Remove last.fm username and session key from user account
        DB::update(
            "update users set lastfm_username = ?, lastfm_session_key = ? where id = ?",
            [null, null, $user_id]
        );

        // Return to lastfm session page
        return redirect("settings");
    }

    /* Spotify settings */
    public function spotifySession(Request $request)
    {
        // Create API instance
        $session = new Session(
            env("SPOTIFY_CLIENT_ID"),
            env("SPOTIFY_CLIENT_SECRET")
        );
        $session->setAccessToken(Auth::user()->spotify_access_token);
        $session->setRefreshToken(Auth::user()->spotify_refresh_token);

        $options = [
            "auto_refresh" => true,
        ];

        $spotifyAPI = new SpotifyWebAPI($options, $session);

        $response = $spotifyAPI->me();

        $userID = $response->id;
        $username = $response->display_name;
        $accessToken = $session->getAccessToken();

        if (Auth::user()->spotify_access_token !== $accessToken) {
            DB::update(
                "update users set spotify_access_token = ? where id = ?",
                [$accessToken, Auth::user()->id]
            );
        }

        return view("settings.spotifysession", [
            "username" => $username,
            "userID" => $userID,
        ]);
    }

    public function requestSpotifyAuthorization(Request $request)
    {
        $redirect_uri = "http://$_SERVER[HTTP_HOST]/settings/connect-spotify-account";

        // Send authorization request to Spotify API
        return redirect(
            "https://accounts.spotify.com/authorize?client_id=" .
                env("SPOTIFY_CLIENT_ID") .
                "&response_type=code&redirect_uri=" .
                $redirect_uri
        );
    }

    public function connectSpotifyAccount(Request $request)
    {
        // Retrieve authorization code

        // Check error
        /* 
            Handle errors
        */

        $code = isset($_GET["code"]) ? $_GET["code"] : null;

        // Request access token
        $apiEndpoint = "https://accounts.spotify.com/api/token";
        $redirect_uri = "http://$_SERVER[HTTP_HOST]/settings/connect-spotify-account";

        // Setup and make cURL POST request
        $data = [
            "code" => $code,
            "redirect_uri" => $redirect_uri,
            "grant_type" => "authorization_code",
        ];

        // $query = http_build_query($data, "", "&");
        $query = urldecode(http_build_query($data, "", "&"));

        $url = $apiEndpoint . "?" . $query;
        $curl = curl_init($url);

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLINFO_HEADER_OUT, true);

        $clientID = env("SPOTIFY_CLIENT_ID");
        $clientSecret = env("SPOTIFY_CLIENT_SECRET");

        $headers = [
            "Authorization: Basic " .
            base64_encode($clientID . ":" . $clientSecret),
            "Content-Type: application/x-www-form-urlencoded",
        ];

        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

        //for debug only!
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

        $resp = curl_exec($curl);
        curl_close($curl);

        // Response from string to JSON
        $response = json_decode($resp);
        // dd($response);

        // Very sophisticated error handling...
        if (property_exists($response, "error")) {
            return dd($response);
        }

        // Received data retrieval
        $access_token = $response->access_token;
        $refresh_token = $response->refresh_token;
        $user_id = Auth::user()->id;

        // Add response data to database
        DB::update(
            "update users set spotify_access_token = ?, spotify_refresh_token = ?, spotify_scope = ? where id = ?",
            [$access_token, $refresh_token, "playlist-read-private", $user_id]
        );

        return redirect("settings/spotify-session");
    }
}
