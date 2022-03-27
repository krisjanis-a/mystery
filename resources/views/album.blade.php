@extends('/layouts/app')

@section('content')
    <div class="album">
        <h1>{{ $albumDataLastfm['name'] }}</h1>
        <h3>by {{ $albumDataLastfm['artist'] }}</h3>
        <img class="album-cover"src="{{ $albumDataSpotify->images[1]->url }}" alt="">
        <br>
        <a href="{{ $albumDataSpotify->external_urls->spotify }}" target="_blank">Open in Spotify</a>
    </div>   
@endsection