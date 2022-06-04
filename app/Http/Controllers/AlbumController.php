<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use LastFmApi\Api\AlbumApi;
use LastFmApi\Api\AuthApi;

require __DIR__ . "/../../Utils/createSpotifyApiInstance.php";

class AlbumController extends Controller
{
    public function showAlbum($artistName, $albumName)
    {
        $lastfmApi = new AlbumApi(
            new AuthApi("setsession", [
                "apiKey" => env("LASTFM_API_KEY"),
            ])
        );

        $albumDataLastfm = $lastfmApi->getInfo([
            "artist" => $artistName,
            "album" => $albumName,
        ]);

        $spotifyApi = createSpotifyApiInstance();

        // Search spotify for artist's name
        $query =
            "album:" .
            $albumDataLastfm["name"] .
            " artist:" .
            $albumDataLastfm["artist"];
        $albumSearchResults = $spotifyApi->search($query, ["artist,album"])
            ->albums->items;

        $albumDataSpotify = $albumSearchResults[0];

        // return dd($albumDataSpotify);

        // return dd($albumDataLastfm, $albumDataSpotify);

        return view("album", [
            "albumDataLastfm" => $albumDataLastfm,
            "albumDataSpotify" => $albumDataSpotify,
        ]);
    }
}
