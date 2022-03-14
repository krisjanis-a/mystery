@extends('/layouts/app')

@section('content')
    <div class="profile">
        Profile
        <p>Welcome, {{ Auth::user()->name }}</p>
    </div>   
@endsection