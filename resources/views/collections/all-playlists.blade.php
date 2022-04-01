@extends('/layouts/app')

@section('content')
    <div class="all-playlists">
        <h1>Playlists</h1>
        <h4>Your Spotify playlists</h4>
        @foreach ($userPlaylists as $playlist)
            <a href="/collections/playlist/{{ $playlist->id }}">{{ $playlist->name }}</a>
            <br>
        @endforeach
    </div>   
@endsection