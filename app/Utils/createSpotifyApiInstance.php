<?php

// namespace App\Utils;

use Illuminate\Support\Facades\Auth;
use SpotifyWebAPI\Session;
use SpotifyWebAPI\SpotifyWebAPI;

/* 
    Use this to create Spotify API instance
*/

function createSpotifyApiInstance()
{
    // Create new session instance
    $session = new Session(env('SPOTIFY_CLIENT_ID'), env('SPOTIFY_CLIENT_SECRET'));
    $session->setAccessToken(Auth::user()->spotify_access_token);
    $session->setRefreshToken(Auth::user()->spotify_refresh_token);

    $options = [
        'auto_refresh' => true,
    ];

    // Create Spotify API instance
    $spotifyAPI = new SpotifyWebAPI($options, $session);

    return $spotifyAPI;
}