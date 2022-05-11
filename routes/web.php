<?php

use App\Http\Controllers\AlbumController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\CollectionsController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SettingsController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SongController;
use Illuminate\Support\Facades\Auth;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* 
    Welcome screen
*/

Route::get("/", function () {
    return view("welcome");
});

/* 
    Artist routing
*/

Route::get("/artist/{artist}", [ArtistController::class, "showArtist"]);

Route::get("/artist/{artist}/song/{song}", [SongController::class, "showSong"]);

Route::get("/artist/{artist}/album/{album}", [
    AlbumController::class,
    "showAlbum",
]);

/* 
    Collections routing
*/

Route::get("/collections", [CollectionsController::class, "index"]);

Route::get("/collections/user/me", [
    CollectionsController::class,
    "fetchUserMe",
]);

Route::get("/collections/playlists", [
    CollectionsController::class,
    "fetchAllPlaylists",
]);

Route::get("/collections/playlist/{id}", [
    CollectionsController::class,
    "fetchPlaylistContent",
]);

Route::get("/collections/collections", [
    CollectionsController::class,
    "fetchAllCollections",
]);

// Route::post("/collections/collection/create", [
//     "CollectionsController@createCollection",
// ]);

Route::post("/collections/collection/create", [
    CollectionsController::class,
    "createCollection",
]);

Route::get("/collections/collection/fetch/{id}", [
    CollectionsController::class,
    "fetchCollection",
]);

Route::get("/collections/collection/update/{id}", [
    CollectionsController::class,
    "updateCollection",
]);

/* 
    Other routes
*/

Route::get("/discover", function () {
    return view("discover");
});

Route::get("/friends", function () {
    return view("friends");
});

Route::get("/listening-history", function () {
    return view("listening-history");
});

/* 
    Profile routing
*/

Route::get("/profile", [ProfileController::class, "index"]);

/* 
    Settings routing
*/

Route::get("/settings", [SettingsController::class, "index"]);

// last.fm routes
Route::get("/settings/lastfm-session", [
    SettingsController::class,
    "lastfmSession",
]);

Route::get("/settings/request-lastfm-authorization", [
    SettingsController::class,
    "requestLastfmAuthorization",
]);

Route::get("/settings/create-lastfm-session", [
    SettingsController::class,
    "createLastfmSession",
]);

Route::get("/settings/disconnect-lastfm-account", [
    SettingsController::class,
    "disconnectLastfmAccount",
]);

// Spotify routes
Route::get("/settings/spotify-session", [
    SettingsController::class,
    "spotifySession",
]);

Route::get("/settings/request-spotify-authorization", [
    SettingsController::class,
    "requestSpotifyAuthorization",
]);

Route::get("/settings/connect-spotify-account", [
    SettingsController::class,
    "connectSpotifyAccount",
]);

/* 
    Authentication routing
*/

Auth::routes();

/* 
    Home routing
*/
Route::get("/home", [HomeController::class, "index"])->name("home");
