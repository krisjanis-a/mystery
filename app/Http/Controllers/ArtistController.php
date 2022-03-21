<?php

namespace App\Http\Controllers;

use LastFmApi\Api\ArtistApi;
use LastFmApi\Api\AuthApi;
use SpotifyWebAPI\SpotifyWebAPI;

require __DIR__.'/../../Utils/createSpotifyApiInstance.php';


class ArtistController extends Controller
{
    public function showArtist($name)
    {
        $lastfmApi = new ArtistApi(new AuthApi('setsession', [
            'apiKey'=>env('LASTFM_API_KEY')
        ]));

        $artistDataLastfm = $lastfmApi->getInfo([
            'artist'=>$name
        ]);

        $spotifyApi = createSpotifyApiInstance();

        // Search spotify for artist's name
        $query = $artistDataLastfm['name'];
        $artistSearch = $spotifyApi->search($query, 'artist')->artists->items;
        $popularities = [];

        // Get most popular result
        foreach($artistSearch as $artist)
        {
            if($artist->name === $artistDataLastfm['name'])
            {
                array_push($popularities, $artist->popularity);
            };
        };

        $maxPopularity = max($popularities);

        foreach($artistSearch as $artist)
        {
            if($artist->popularity === $maxPopularity && $artist->name === $artistDataLastfm['name'])
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
