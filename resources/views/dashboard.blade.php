<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <title>DASHMIN - Bootstrap Admin Template</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="{{asset('assets/dashboard/img/favicon.ico')}}" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Style2sheet -->
    <link href="{{asset('assets/dashboard/lib/owlcarousel/assets/owl.carousel.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets/dashboard/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css')}}" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="{{asset('assets/dashboard/css/bootstrap.min.css')}}" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="{{asset('assets/dashboard/css/style.css')}}" rel="stylesheet">
</head>
<body class="antialiased">
<div id="dashboard">
<panel/>
</div>
<script>
    window._asset = '{{ asset('') }}';
    //window.langs = @-json($settings['langs']);
    //window.settings = @-json($settings);
    //console.log(window.langs);
</script>
<script src="{{ mix('js/dashboard/panel.js') }}"></script>
{{--++--}}
<!-- JavaScript Libraries -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="{{asset('assets/dashboard/lib/chart/chart.min.js')}}"></script>
<script src="{{asset('assets/dashboard/lib/easing/easing.min.js')}}"></script>
<script src="{{asset('assets/dashboard/lib/waypoints/waypoints.min.js')}}"></script>
<script src="{{asset('assets/dashboard/lib/owlcarousel/owl.carousel.min.js')}}"></script>
<script src="{{asset('assets/dashboard/lib/tempusdominus/js/moment.min.js')}}"></script>
<script src="{{asset('assets/dashboard/lib/tempusdominus/js/moment-timezone.min.js')}}"></script>
<script src="{{asset('assets/dashboard/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js')}}"></script>

<!-- Template Javascript -->
<script src="{{asset('assets/dashboard/js/main.js')}}"></script>
</body>

</html>

