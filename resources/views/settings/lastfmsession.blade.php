@extends('/layouts/app')

@section('content')
    <a href="/settings">
        Return to settings
    </a>

    <div class="settings lastfm-session">
        <h4>Your last.fm account has been added and session has been created</h4>
        <p>Your last.fm username: <span class="lastfm_username">{{ Auth::user()->lastfm_username }}</span></p>
        <p>Your last.fm session key: <span class="lastfm_session_key">{{ Auth::user()->lastfm_session_key }}</span></p>
    </div>
    
    <a href="/settings/disconnect-lastfm-account">
        <button>
            Disconnect last.fm account from Mystery
        </button>
    </a>
@endsection