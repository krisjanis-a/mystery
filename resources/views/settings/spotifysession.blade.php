@extends('/layouts/app')

@section('content')
    <a href="/settings">
        Return to settings
    </a>

    <div class="settings spotify-session">
        <h4>Your Spotify account has been added and session has been created</h4>
        <p>Your Spotify user ID: <span class="spotify_username">{{ $userID }}</span></p>
        <p>Your current Spotify access token: <span class="spotify_session_key">{{ Auth::user()->spotify_access_token }}</span></p>
        <p>Your Spotify refresh token: <span class="spotify_session_key">{{ Auth::user()->spotify_refresh_token}}</span></p>
    </div>
    
    <a href="/settings/disconnect-spotify-account">
        <button>
            Disconnect Spotify account from Mystery
        </button>
    </a>
@endsection