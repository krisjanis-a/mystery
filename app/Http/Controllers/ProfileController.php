<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use LastFmApi\Api;
use LastFmApi\Api\AuthApi;
use LastFmApi\Api\UserApi;

class ProfileController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $user = Auth::user();
        $name = $user->name;

        $lastfmUsername = $user->lastfm_username;
        $lastfmApi = new UserApi(new AuthApi('setsession', [
            'apiKey'=>env('LASTFM_API_KEY')
        ]));

        $limit = 20; // Amount of recent tracks to fetch

        $recentTracks = $lastfmApi->getRecentTracks([
            'user' => $lastfmUsername,
            'limit' => $limit
        ]);

        // dd($recentTracks);

        return view('profile',[
            'name'=>$name,
            'recentTracks'=>$recentTracks
        ]);
    }
}
