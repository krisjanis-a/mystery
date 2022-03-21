@extends('/layouts/app')

@section('content')
    <a href="/settings">
        Return to settings
    </a>

    <div class="settings spotify-session">
        <h4>Your Spotify account has been added and session has been created</h4>
        <p>Your Spotify username: <span class="spotify_username">{{ $username }}</span></p>
        <p>Your Spotify user ID: <span class="spotify_username">{{ $userID }}</span></p>
    <a href="/settings/disconnect-spotify-account">
        <button>
            Disconnect Spotify account from Mystery
        </button>
    </a>
@endsection