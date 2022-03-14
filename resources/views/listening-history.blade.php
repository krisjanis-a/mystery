@extends('/layouts/app')

@section('content')
    <div class="listening-history">
        <h2 class="text-center py-2">
            Listening history
        </h2>

        <form action="{{ env('LASTFM_API_ENDPOINT') }}?method=library.getartists&api_key={{ env('LASTFM_API_KEY') }}&user=">
            <label for="lastfm-username-input">Enter last.fm user's username:</label>
            <input type="text" id="lastfm-username-input">

            <button type="submit">Get user data</button>
        </form>
    </div>   
@endsection