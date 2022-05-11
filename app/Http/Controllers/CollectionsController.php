<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\CollectionSong;
use App\Models\Song;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use stdClass;

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

    public function fetchUserMe()
    {
        $user = Auth::user();

        $response = new stdClass();

        $response->name = $user->name;
        $response->surname = $user->surname;
        $response->username = $user->username;
        $response->id = $user->id;

        return $response;
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
        /* 
            Find all collections which belong to user
            Return collection name & id
        */
        $user = Auth::user();
        $collections = Collection::where("creator_id", $user->id)->get();

        return $collections;
    }

    // Get collection data
    public function fetchCollection($id)
    {
        $collection = Collection::where("collection_id", $id)->get();
        $songIds = CollectionSong::select("song_id")
            ->where("collection_id", $id)
            ->get()
            ->toArray();

        $songs = array_map(
            fn($song_id) => array_merge(
                Song::where("song_id", $song_id)
                    ->get()
                    ->toArray(),
                CollectionSong::select("song_position")
                    ->where("collection_id", $id)
                    ->where("song_id", $song_id)
                    ->get()
                    ->toArray()
            ),
            $songIds
        );

        $response = new stdClass();

        $response->collection = $collection;
        $response->songs = $songs;

        return $response;
    }

    // Create collection
    public function createCollection(Request $request)
    {
        $data = json_decode($request->getContent());
        $name = $data->name;
        $creatorId = $data->creatorId;
        $description = $data->description;
        $songs = $data->songs;

        $collection = Collection::create([
            "name" => $name,
            "creator_id" => $creatorId,
            "description" => $description,
        ]);

        $position = 1;

        foreach ($songs as $song) {
            if (
                empty(
                    DB::table("songs")
                        ->where("spotify_id", "=", $song->track->id)
                        ->value("spotify_id")
                )
            ) {
                $songData = Song::create([
                    "name" => $song->track->name,
                    "spotify_id" => $song->track->id,
                ]);
            } else {
                $songData = Song::where(
                    "spotify_id",
                    $song->track->id
                )->first();
            }

            CollectionSong::create([
                "collection_id" => $collection->collection_id,
                "song_id" => $songData->song_id,
                "song_position" => $position,
            ]);

            $position++;
        }

        return $collection;
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
