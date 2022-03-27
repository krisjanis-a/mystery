<?php

namespace App\Http\Controllers;

use LastFmApi\Api\ArtistApi;
use LastFmApi\Api\AuthApi;

require __DIR__.'/../../Utils/createSpotifyApiInstance.php';


class ArtistController extends Controller
{
    public function showArtist($artist)
    {
        $lastfmApi = new ArtistApi(new AuthApi('setsession', [
            'apiKey'=>env('LASTFM_API_KEY')
        ]));

        $artistDataLastfm = $lastfmApi->getInfo([
            'artist'=>$artist
        ]);

        $spotifyApi = createSpotifyApiInstance();

        // Search spotify for artist's name
        $query = $artistDataLastfm['name'];
        $artistSearch = $spotifyApi->search($query, 'artist')->artists->items;
        $popularities = [];

        // Get most popular result
        foreach($artistSearch as $artist)
        {
            if(strcasecmp($artist->name, $artistDataLastfm['name']) === 0) // Case insensitive comparison
            // if($artist->name === $artistDataLastfm['name'])
            {
                array_push($popularities, $artist->popularity);
            };
        };

        $maxPopularity = max($popularities);

        foreach($artistSearch as $artist)
        {
            if($artist->popularity === $maxPopularity && strcasecmp($artist->name, $artistDataLastfm['name']) === 0)
            {
                $artistId = $artist->id;
            };
        };

        $artistDataSpotify = $spotifyApi->getArtist($artistId);

        // return dd($artistDataLastfm, $artistDataSpotify);

        return view('artist', [
            'artistDataLastfm'=>$artistDataLastfm,
            'artistDataSpotify'=>$artistDataSpotify
        ]);
    }
}
