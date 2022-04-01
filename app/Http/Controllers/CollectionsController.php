<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

require __DIR__.'/../../Utils/createSpotifyApiInstance.php';

class CollectionsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('collections.index');
    }    
    
    public function showAllPlaylists()
    {
        // Load users Spotify playlists
        $spotifyAPI = createSpotifyApiInstance();
        $userPlaylists = $spotifyAPI->getMyPlaylists(['limit'=>50])->items;
        
        // return dd($userPlaylists);

        return view('collections.all-playlists', [
            'userPlaylists'=>$userPlaylists
        ]);
    }

    // Open playlist display page
    public function showPlaylist($id)
    {
        $spotifyAPI = createSpotifyApiInstance();

        $playlist = $spotifyAPI->getPlaylist($id);

        // return dd($playlist);

        return view('collections.playlist',[
            'playlist'=>$playlist
        ]);
    }

    // Open collection display page
    public function showCollection()
    {

    }
    
}
