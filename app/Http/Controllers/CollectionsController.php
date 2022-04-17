<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

require __DIR__ . "/../../Utils/createSpotifyApiInstance.php";

class CollectionsController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index()
    {
        return view("collections.index");
    }

    public function fetchAllPlaylists()
    {
        // Load user's Spotify playlists
        $spotifyAPI = createSpotifyApiInstance();
        $userPlaylists = $spotifyAPI->getMyPlaylists(["limit" => 50])->items;

        return $userPlaylists;
    }

    // Open playlist display page
    public function fetchPlaylistContent($id)
    {
        $spotifyAPI = createSpotifyApiInstance();

        $playlist = $spotifyAPI->getPlaylist($id);

        return $playlist;
    }

    // Load user's collections
    public function fetchAllCollections()
    {
    }

    // Create collection
    public function createCollection()
    {
    }
}
