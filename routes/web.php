<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\SettingsController;
use App\Http\Controllers\HomeController;
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

Route::get('/', function () {
    return view('welcome');
});


Route::get('/artist', function(){
    return view('artist');
});

Route::get('/album', function(){
    return view('album');
});

Route::get('/collections', function(){
    return view('collections');
});

Route::get('/discover', function(){
    return view('discover');
});

Route::get('/friends', function(){
    return view('friends');
});

Route::get('/listening-history', function(){
    return view('listening-history');
});

Route::get('/profile', function(){
    return view('profile');
});

/* 
    Settings routing
*/

Route::get('/settings', [SettingsController::class, 'index']);

Route::get('/settings/create-lastfm-session', [SettingsController::class, 'createLastfmSession']);

Route::get('/settings/disconnect-lastfm-account', [SettingsController::class, 'disconnectLastfmAccount']);

Route::get('/settings/lastfm-session', [SettingsController::class, 'lastfmSession']);


/* 
    Authentication routing
*/

Auth::routes();

Route::get('/home', [HomeController::class, 'index'])->name('home');