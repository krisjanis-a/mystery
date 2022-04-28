<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

require __DIR__ . "/../../Utils/createSpotifyApiInstance.php";
require __DIR__ . "/../../../write_to_log.php";

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

    // Get collection data

    public function fetchCollection()
    {
        return "Collection";
    }

    // Create collection
    public function createCollection(Request $request)
    {
        $data = json_decode($request->getContent());
        $name = $data->name;
        $creator = $data->creator;
        $songs = $data->songs;

        $creatorId = $creator;

        DB::table("collections")->update([
            "name" => $name,
            "creator_id" => $creatorId,
        ]);

        DB::table("songs")->insert([]);

        return $data->songs;
    }

    // Update collection
    public function udpateCollection()
    {
    }

    // Delete collection
    public function deleteCollection()
    {
    }
}
