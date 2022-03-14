<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Mystery') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="https://kit.fontawesome.com/c0e08ab959.js" crossorigin="anonymous"></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- Favicon -->
    <link rel="icon">

</head>

<body class="antialiased">
    <div class="welcome-section">
        {{-- Background image --}}
        <div class="background-image">
            {{-- <img src="{{URL::asset('assets/images/space_3_original_flipped.jpg')}}" alt="Welcome section background - space"> --}}
            <img src="{{URL::asset('assets/images/space_3_mod_1.jpg')}}" alt="Welcome section background - space">
        </div>

        <div class="content">
            <div class="titles">
                <h1>Mystery</h1>
                <h3>Discover and organize music.</h3>
            </div>
            
            <div class="actions">
                @if(!Auth::user())
                <div class="guest-actions-container d-flex flex-row align-items-center">
                    <a href="/login" class="welcome-button-link">
                        <button class="welcome-button welcome-login-button">
                            Login
                        </button>
                    </a>
                    <br>
                    <a href="/register" class="welcome-button-link">
                        <button class="welcome-button welcome-register-button">
                            Register
                        </button>
                    </a>
                    <a href="/home" class='continue-as-guest-link'>Continue as a Guest</a>
                </div>
                @else
                <div class="user-actions-container">
                    <h4>Welcome back, <span class="welcome-username">{{ Auth::user()->name }}</span> !</h4>
                    <a href="/home" class='continue-to-site'>Continue to site</a>
                </div>
                @endif
            </div>
        </div>

        <div class="affiliates">
            <span class="affiliates-text">Powered by</span>
            <i class="fa-brands fa-spotify affiliate-icon"></i>
            <i class="fa-brands fa-lastfm affiliate-icon"></i>
        </div>

    </div>
</body>
</html>