@extends('/layouts/app')

@section('content')
    <div class="song">
        <h1>{{ $songDataLastfm['name'] }}</h1>
        <h3>by {{ $songDataLastfm['artist']['name'] }}</h3>
        <img class="album-cover"src="{{ $songDataSpotify->album->images[1]->url }}" alt="">
        <br>
        <a href="{{ $songDataSpotify->external_urls->spotify }}" target="_blank">Play on Spotify</a>
        <br>
        <a href="/artist/{{ $songDataLastfm['artist']['name'] }}/album/{{ $songDataSpotify->album->name }}">Album: {{ $songDataSpotify->album->name }}</a>
    </div>   
@endsection