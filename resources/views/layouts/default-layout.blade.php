<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap" rel="stylesheet">

    @include('common/favicon')

    @includeWhen(!empty($seo), 'seo')
    @if(empty($seo))
        <title>AndrewCPP</title>
    @endif

    @vite('resources/css/app.scss')
    @stack('styles')
</head>
<body class="loading">
    @include('common.preloader')

    <main id="--main">
        @yield('content')
    </main>

    @vite('resources/js/app.js')
    @stack('scripts')
</body>
</html>
