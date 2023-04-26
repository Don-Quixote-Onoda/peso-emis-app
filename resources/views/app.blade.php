<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>PESO</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Favicons -->
    <link href="{{ asset('img\homepage\peso_icon_1.png') }}" rel="icon">
    <link href="{{ asset('img\homepage\apple-touch-icon.png') }}" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{ asset('vendor\homevendor\animate.css\animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor\homevendor\aos\aos.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor\homevendor\bootstrap\css\bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor\homevendor\bootstrap-icons\bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor\homevendor\boxicons\css\boxicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor\homevendor\glightbox\css\glightbox.min.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor\homevendor\remixicon\remixicon.css') }}" rel="stylesheet">
    <link href="{{ asset('vendor\homevendor\swiper\swiper-bundle.min.css') }}" rel="stylesheet">

    <!-- Template Main CSS File -->
    <link href="{{ asset('css\homepage.css') }}" rel="stylesheet">
    <link href="{{ asset('css\style.css') }}" rel="stylesheet">

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
    <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i
        class="bi bi-arrow-up-short"></i></a>

<!-- Vendor JS Files -->
<script src="{{ asset('vendor\homevendor\aos\aos.js') }}"></script>
<script src="{{ asset('vendor\homevendor\bootstrap\js\bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('vendor\homevendor\glightbox\js\glightbox.min.js') }}"></script>
<script src="{{ asset('vendor\homevendor\isotope-layout\isotope.pkgd.min.js') }}"></script>
<script src="{{ asset('vendor\homevendorphp-email-form\validate.js') }}"></script>
<script src="{{ asset('vendor\homevendor\swiper\swiper-bundle.min.js') }}"></script>

<!-- Template Main JS File -->
<script src="{{ asset('js\homepage.js') }}"></script>
</html>
