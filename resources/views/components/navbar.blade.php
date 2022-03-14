<div class="navbar">
    <nav class="navbar">
        <div class="container">
            <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->

                {{-- Navigation menu --}}
                <div class="navbar-left d-flex flex-row justify-content-left align-items-center">
                    <ul class="navbar-nav navigation-menu">
                        <div class="menu-toggle">
                            <button class="bars-button border-0 d-flex align-items-center" id="navigation-menu-dropdown-button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa-solid fa-bars"></i>
                            </button>
                            <ul class="navigation-menu-dropdown dropdown-menu" aria-labelledby="navigation-menu-dropdown-button">
                                <li><a href="/home">Home</a></li>
                                <li><a href="/profile">Profile</a></li>
                                <li><a href="/discover">Discover</a></li>
                                <li><a href="/listening-history">Listening History</a></li>
                                <li><a href="/collections">Collections</a></li>
                                <li><a href="/friends">Friends</a></li>
                                <li><a href="/settings">Settings</a></li>
                            </ul>
                        </div>
                    </ul>
                
                    {{-- Search bar --}}
                    <form class="navbar-search-form form-inline d-flex flex-row align-items-center">
                        <input class="form-control navbar-search-bar" type="search" placeholder="Search" aria-label="Search">
                        <button class="navbar-search-button d-flex align-items-center" type="submit">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
                
                {{-- App name --}}
                <div class="navbar-app-name d-flex flex-row justify-content-center">
                    <a class="navbar-brand" href="{{ url('/') }}">
                        {{ config('app.name', 'Mystery') }}
                    </a>
                </div>

                <!-- Right Side Of Navbar -->
                <div class="navbar-right d-flex flex-row justify-content-right">
                    <ul class="navbar-nav navbar-user d-flex flex-row">
                        <!-- Authentication Links -->
                        @guest
                            @if (Route::has('login'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                                </li>
                            @endif

                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown d-flex flex-row align-items-center">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->username }}
                                </a>

                                <img class="navbar-user-image" src="{{ URL::asset('assets/images/no-user-picture.jpg') }}" alt="User picture">

                                <div class="navbar-user-dropdown dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                    onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</div>