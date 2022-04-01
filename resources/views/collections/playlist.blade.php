@extends('/layouts/app')

@section('content')
    <div class="playlist">
        <h3>Playlist</h3>
        <h1>{{ $playlist->name }}</h1>
        <h5>Created by {{ $playlist->owner->display_name }}</h5>
        <hr>
        <h4>Tracks</h4>
        @foreach ($playlist->tracks->items as $track)
            <hr>
            <a href="/artist/{{ $track->track->artists[0]->name }}/song/{{ $track->track->name }}"><span style="font-weight:bold">{{ $track->track->name }}</span> by {{ $track->track->artists[0]->name }}</a>
        @endforeach
    </div>   
@endsection