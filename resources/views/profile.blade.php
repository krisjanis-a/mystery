@extends('/layouts/app')

@section('content')
    <div class="profile">
        Profile
        <p>Welcome, {{ $name }}</p>

        <h4>Recent tracks</h4>

        <div class="recent-tracks d-flex flex-column">
            <div class="recent-tracks-header d-flex flex-row justify-content-left">
                <h5>Artist</h5>
                <h5>Song</h5>
            </div>

            @foreach ($recentTracks as $track )
                <div class="recent-tracks-single d-flex flex-row justify-content-left">
                    <img src="{{ $track['images']['large'] }}" alt="">
                    <a href="/artist/{{ $track['artist']['name'] }}">
                        <p>{{ $track['artist']['name'] }}</p>
                    </a>
                    <a href="/artist/{{ $track['artist']['name'] }}/song/{{ $track['name'] }}">
                        <p>{{ $track['name'] }}</p>
                    </a>
                    @if (isset($track['nowplaying']))
                    <i class="fa-solid fa-ear-listen"></i>
                    @endif
                </div>
                <hr>
            @endforeach
        </div>
    </div>   
@endsection