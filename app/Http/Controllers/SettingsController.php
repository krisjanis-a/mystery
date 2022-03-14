<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SettingsController extends Controller
{
    public function index(Request $request)
    {
        return view('settings.index');
    }

    public function lastfmSession(Request $request)
    {
        return view('settings.lastfmsession');
    }

    public function createLastfmSession(Request $request)
    {
        // Received auth token
        $authToken = isset($_GET['token']) ? $_GET['token'] : null;

        // Last.fm endpoint url
        $endpoint = env('LASTFM_API_ENDPOINT');

        // API key
        $apiKey = env('LASTFM_API_KEY');

        // API secret
        $apiSecret = env('LASTFM_API_SECRET_KEY');

        //Prehashed API signature
        $apiSignaturePreHashed = 'api_key'.$apiKey.'methodauth.getSessiontoken'.$authToken.$apiSecret;

        // API signature final version
        $apiSignature = md5($apiSignaturePreHashed);

        // Last.fm API request URL 
        $url = $endpoint.'?method=auth.getSession&format=json&api_key='.$apiKey.'&token='.$authToken.'&api_sig='.$apiSignature;


        // RANDOM CODE MAYBE WORKS => need to refactor at some point
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        
        $headers = array(
           "Accept: */*",
        );
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
        if(property_exists($response, 'error'))
        {
            return dd($response);
        }

        // Received data retrieval
        $lastfm_username = $response->session->name;
        $lastfm_session_key = $response->session->key;
        $user_id = Auth::user()->id;


        // Add response data to database
        DB::update('update users set lastfm_username = ?, lastfm_session_key = ? where id = ?', [$lastfm_username, $lastfm_session_key, $user_id]);

        // Return to lastfm session page
        return redirect('settings/lastfm-session');
    }

    public function disconnectLastfmAccount()
    {
        $user_id = Auth::user()->id;
        
        /* 
            A function that goes to last.fm page and disconnects Mystery application instance from last.fm user's account
        */

        // Remove last.fm username and session key from user account
        DB::update('update users set lastfm_username = ?, lastfm_session_key = ? where id = ?', [NULL, NULL, $user_id]);

        // Return to lastfm session page
        return redirect('settings');
    }

}
