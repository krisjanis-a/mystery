<?php

namespace App\Http\Controllers;

use LastFmApi\Api\AuthApi;
use LastFmApi\Api\TrackApi;

require __DIR__.'/../../Utils/createSpotifyApiInstance.php';
class SongController extends Controller
{
    public function showSong($artistName, $songName)
    {
        $lastfmApi = new TrackApi(new AuthApi('setsession', [
            'apiKey'=>env('LASTFM_API_KEY')
        ]));

        $songDataLastfm = $lastfmApi->getInfo([
            'artist'=>$artistName,
            'track'=>$songName
        ]);

        $spotifyApi = createSpotifyApiInstance();

        // Search spotify for artist's name
        $query = 'track:'.$songDataLastfm['name'].' artist:'.$songDataLastfm['artist']['name'];
        $songSearchResults = $spotifyApi->search($query,['artist,track'])->tracks->items;

        $songDataSpotify = [];
        $popularities = [];

        foreach ($songSearchResults as $track){
            array_push($popularities, $track->popularity);
        }

        foreach ($songSearchResults as $track){
            if($track->popularity === max($popularities)){
                $artists = $track->artists;
                foreach ($artists as $artist) {
                    if($artist->name === $artistName)
                    {
                        array_push($songDataSpotify, $track);
                        break;
                    }
                }
            }

        }

        // return dd($songDataSpotify[0]);

        // return dd($songDataLastfm, $songDataSpotify[0]);

        return view('song',[
            'songDataLastfm'=>$songDataLastfm,
            'songDataSpotify'=>$songDataSpotify[0]
        ]);
    }
}
