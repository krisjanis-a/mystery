@extends('/layouts/app')

@section('content')
    <div class="settings">

        <h1>Settings</h1>

        <div class="user-information">
            <div class="user-information-field d-flex flex-row">
                <label for="username">Username:</label>
                <span id="username">{{ Auth::user()->username }}</span>
            </div>
            
            <div class="user-information-field d-flex flex-row">
                <label for="name">Name:</label>
                <span id="name">{{ Auth::user()->name }}</span>
            </div>
            
            <div class="user-information-field d-flex flex-row">
                <label for="surname">Surname:</label>
                <span id="surname">{{ Auth::user()->surname }}</span>
            </div>
       
            <div class="user-information-field d-flex flex-row">
                <label for="email">E-mail adress:</label>
                <span id="email">{{ Auth::user()->email }}</span>
            </div>
            
            {{-- Connect last.fm account --}}
            @if (Auth::user()->lastfm_session_key)
            <div class="user-information-field d-flex flex-row">
                <label for="lastfm-username">last.fm username:</label>
                <span id="lastfm-username">{{ Auth::user()->lastfm_username }}</span>
            </div>

            <a href="/settings/lastfm-session">
                <button>
                    View last.fm details
                </button>
            </a>

            @else
            <a href="/settings/request-lastfm-authorization">
                <button>
                    Connect to last.fm
                </button>
            </a>
            @endif
            
            {{-- Connect Spotify account --}}
            @if (Auth::user()->spotify_access_token)
            <a href="/settings/spotify-session">
                <button>
                    View Spotify account details
                </button>
            </a>

            @else
                <a href="/settings/request-spotify-authorization">
                    <button>
                        Connect to Spotify account
                    </button>
                </a>
            @endif
        </div>   


    </div>
@endsection