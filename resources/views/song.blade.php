@extends('/layouts/app')

@section('content')
    <div class="artist">
        <h1>{{ $artistDataLastfm['name'] }}</h1>
        <img src="{{ $artistDataSpotify->images[0]->url}}" alt="">
        <p>{{ $artistDataLastfm['bio']['content'] }}</p>
    </div>   
@endsection