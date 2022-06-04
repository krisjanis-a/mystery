<?php

namespace App\Http\Controllers;

use App\Models\Collection;
use App\Models\CollectionSong;
use App\Models\Song;
use App\Models\User;
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
        $creator = User::where("id", $collection[0]->creator_id)->get();
        $songIds = CollectionSong::select("song_id")
            ->where("collection_id", $id)
            ->get()
            ->toArray();

        $spotifyAPI = createSpotifyApiInstance();

        // Prepare songs array
        $songs = array_map(
            fn($song_id) => array_merge(
                ...Song::where("song_id", $song_id)
                    ->get()
                    ->toArray(),
                ...CollectionSong::select("song_position")
                    ->where("collection_id", $id)
                    ->where("song_id", $song_id)
                    ->get()
                    ->toArray()
            ),
            $songIds
        );
        
        // Get spotify data for songs using getTracks - max 50 songs can be fetched
        $allSongsSpotifyData = [];
        $querySongIDs = "";
        $songsLength = count($songs);
        $currentTrackCount = 0;
        $currentTrackIndex = 0;

        // Loop through songs concatenating each song's id to query ids string
        // If 50 tracks reached make API call & save fetched songs to spotify data array
        // Repeat the same steps for following songs until all songs are fetched 
        foreach($songs as $songEntry){
            
            if($currentTrackCount < 50){
                // Build correct query string from song IDs
                if($currentTrackCount === 49 || $currentTrackIndex === $songsLength - 1 || $currentTrackCount === $songsLength-1){
                    $querySongIDs .= $songEntry["spotify_id"];
                } else {
                    $querySongIDs .= $songEntry["spotify_id"].",";
                }
                
                $currentTrackCount++;
            }

            // TODO this could moved in previous if later
            // If 50 songs reached / all songs added and query is ready - fetch data from spotify API 
            if($currentTrackCount === 50 || $currentTrackIndex === $songsLength - 1 || $currentTrackCount === $songsLength){
                $spotifyDataBatch = $spotifyAPI->getTracks($querySongIDs)->tracks;

                foreach($spotifyDataBatch as $spotifyDataBatchEntry){
                    array_push($allSongsSpotifyData, $spotifyDataBatchEntry);
                }
                
                if($currentTrackCount === 50){
                    $currentTrackCount = 0;
                    $querySongIDs = "";
                }
            }
            
            $currentTrackIndex++;
        }

        // Using References (with the & symbol) to modify each entry
        foreach ($songs as &$songEntry) {
            foreach($allSongsSpotifyData as $allSongsSpotifyDataEntry){
                if($allSongsSpotifyDataEntry->id === $songEntry["spotify_id"]){
                    $songSpotifyData = $allSongsSpotifyDataEntry;
                    $songEntry["song_spotify_data"] = $songSpotifyData;
                }
            }

        }

        $response = $collection[0];
        $response->creator_username = $creator[0]->username;
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
