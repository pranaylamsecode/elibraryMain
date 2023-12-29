<!DOCTYPE html>
<html>
<head>
    <title>{{ config('app.name') }} APIs</title>
    <!-- needed for adaptive design -->
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--
    ReDoc doesn't change outer page styles
    -->
    <style>
        body {
            margin: 0;
            padding: 0;
        }
    </style>
</head>
<body>
<redoc spec-url='{{ asset('redoc/v1/openapi.yaml') }}' hide-download-button></redoc>
<script src="{{ mix('js/redoc.standalone.js') }}"></script>
</body>
</html>
