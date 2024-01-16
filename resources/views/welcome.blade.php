<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Elibrary</title>
    <!-- Fonts -->

    <link rel="stylesheet" href="{{ asset('css/style.min.css') }}">

    <link rel="stylesheet" href="{{ asset('css/style.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/bookSearch.css') }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/vendors/owl-carousel/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendors/owl-carousel/css/owl.theme.default.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendors/mdi/css/materialdesignicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendors/aos/css/aos.css') }}">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Philosopher:wght@400;700&display=swap" rel="stylesheet">



    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    {{-- <link rel="stylesheet" href="{{ asset('css/style.min.css?v=' . filemtime(public_path('css/style.min.css'))) }}" /> --}}

</head>
<style>
    #loading {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 1;
        background-color: #fff;
        z-index: 9999;
    }

    .paytm-loader {
        color: #c27b7f;
        width: 3px;
        aspect-ratio: 1;
        border-radius: 50%;
        box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
        transform: translateX(-38px);
        animation: loader 0.5s infinite alternate linear;
        -webkit-box-shadow: 19px 0 0 7px, 38px 0 0 3px, 57px 0 0 0;
        -webkit-transform: translateX(-38px);
        -webkit-animation: loader 0.5s infinite alternate linear;
        padding: 0px !important;
    }


    .backend .table-bordered.table-striped::-webkit-scrollbar-thumb {
        background: #ccc !important;
    }

    .backend .table-bordered.table-striped::-webkit-scrollbar {
        height: 14px;
    }

    .backend .table-bordered.table-striped {
        overflow-y: auto;
        max-height: 60vh;
    }


    .backend .table-responsive {
        overflow-y: auto;
        max-height: 60vh;
    }

    .backend .table-responsive::-webkit-scrollbar-thumb {
        background: #ccc !important;
    }

    .backend .table-responsive::-webkit-scrollbar {
        height: 14px !important;
    }


    img#loader-welcome,
    .spinner img {
        width: 46px;
    }

    @keyframes loader {
        50% {
            box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
        }

        100% {
            box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
        }
    }

    @-webkit-keyframes loader {
        50% {
            box-shadow: 19px 0 0 3px, 38px 0 0 7px, 57px 0 0 3px;
        }

        100% {
            box-shadow: 19px 0 0 0, 38px 0 0 3px, 57px 0 0 7px;
        }
    }

    #loading-image {
        z-index: 9999;
    }


    .frontend .table-bordered::-webkit-scrollbar,
    .frontend .table-responsive::-webkit-scrollbar {
        height: 14px;
    }

    .frontend #resources-list .table-responsive {
        max-height: 600px !important;
    }

    .frontend #resources-list table.sheet0.gridlines {
        margin: 0px !important;
    }

    .frontend #resources-list .table-responsive::-webkit-scrollbar-thumb {
        background: #c27b7f !important;
    }

    .frontend #resources-list .table-responsive::-webkit-scrollbar {
        height: 13px;
    }

    .frontend .table-responsive::-webkit-scrollbar {
        background: #e4e5e8;
    }


    #resources-list thead,
    #resources-list tbody,
    #resources-list tfoot,
    #resources-list tr,
    #resources-list td,
    #resources-list th {
        border-color: inherit;
        border-style: solid;
        border-width: 0;
        border: 1px solid #c0bfbf !important;

        padding: 4px;
    }

    #resources-list .table-responsive {
        overflow: auto !important;
    }

    #resources-list tbody,
    #resources-list td,
    #resources-list tfoot,
    #resources-list th,
    #resources-list thead,
    #resources-list tr {
        border: 1px solid #c1c1c1 !important;
        border-color: inherit;
    }

    #resources-list table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    #resources-list td,
    #resources-list th {
        padding: 0;
        text-align: left;
    }

    #resources-list table {
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        background-color: #fff;
        border-radius: 4px;
        font-size: 12px;
        line-height: 1.25;
        margin-bottom: 24px;
        width: 100%;
    }

    #resources-list table td {
        padding: 12px 6px 12px 22px;
        word-wrap: break-word;
        font-size: 15px;
    }

    #resources-list thead th {
        background-color: #f6f6f6;
        padding: 18px 6px 18px 22px;
        font-size: 15px;
        color: #444;
        border-bottom-color: rgba(113, 110, 182, 0.15) !important;
    }

    #resources-list thead th:first-child {
        border-top-left-radius: 4px;
    }

    #resources-list thead th:last-child {
        border-top-right-radius: 4px;
    }

    #resources-list table {
        border: 1px solid rgba(113, 110, 182, 0.15);
    }

    #resources-list table tr {
        border-bottom: 1px solid rgba(113, 110, 182, 0.15);
    }

    #resources-list table tr:hover {
        background-color: rgba(113, 110, 182, 0.15);
        color: #272b37;
    }
</style>

<body class="antialiased" id="body" data-spy="scroll" data-target=".app-navbar" data-offset="100">
    <div id="loading">
        <img id="loader-welcome" src="/public/images/301.gif">
    </div>
    <div id="root"></div>
</body>

{{-- <script type="text/javascript">
    window.addEventListener("load", (e) => {
        const loader = document.getElementById(".spinner");
        if (loader) {
            loader.style.display = "none";
        }
    });
</script> --}}

<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
    integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<script src="{{ asset('css/vendors/jquery/jquery.min.js') }}"></script>
<script src="{{ asset('css/vendors/bootstrap/bootstrap.min.js') }}"></script>
<script src="{{ asset('css/vendors/owl-carousel/js/owl.carousel.min.js') }}"></script>
<script src="{{ asset('css/vendors/aos/js/aos.js') }}"></script>
{{-- <script src="{{ asset('js/choices.js') }}"></script> --}}
<script src="{{ asset('js/landingpage.js') }}"></script>


<script>
    $(window).on('load', function() {
        $('#loading').fadeOut();

    });
    jQuery(document).ready(function() {

        setInterval(() => {


            jQuery(".genres select").click(function() {

                jQuery('.genres select option:first-child').attr("selected", false);


            });


            jQuery(".publisher select").click(function() {

                jQuery('.publisher select option:first-child').attr("selected", false);


            });
            jQuery(".reset button").click(function() {

                jQuery('.genres select option:first-child').attr("selected", true);
                jQuery('.publisher select option:first-child').attr("selected", true);
            });

            jQuery("div:not(.admin-wrapper) .data-table > div:nth-child(2)").addClass(
                "table-bordered table-striped  mt-2");
        }, 100);


        setInterval(() => {

            jQuery(".genres select").click(function() {
                jQuery('.genres select option:first-child').attr("selected", false);
            });
            jQuery(".publisher select").click(function() {

                jQuery('.publisher select option:first-child').attr("selected", false);

            });
            jQuery(".reset button").click(function() {

                jQuery('.genres select option:first-child').attr("selected", true);
                jQuery('.publisher select option:first-child').attr("selected", true);
            });
        }, 1000);
        var src = jQuery('.video_popup iframe').attr('src');

        setInterval(function() {
            jQuery('.video-btn').click(function() {
                jQuery('.video_popup iframe').attr('src', src);
            });
            jQuery('.video_popup .close').click(function() {
                jQuery('.video_popup iframe').attr('src', '');
            });

            if (window.location.href.indexOf("admin") > -1) {
                jQuery("body").removeClass("frontend");
            } else {
                jQuery("body").addClass("frontend");
            }


        }, 1000);

        if (window.location.href.indexOf("admin") > -1) {
            jQuery("body").removeClass("frontend");
        } else {
            jQuery("body").addClass("frontend");
        }


        jQuery(document).on('click', '.elibrary', function() {
            jQuery(this).addClass("active_dash");
            jQuery('.erp').removeClass("active_dash");
            //   window.location.href="#/admin/pos/lms-dashboard";

        });
        jQuery(document).on('click', '.erp', function() {
            jQuery(this).addClass("active_dash");
            jQuery('.elibrary').removeClass("active_dash");

        });


        setInterval(() => {

            jQuery(".image__holder button:contains('Cancel')").addClass("remove");

            jQuery(".frontend .navbar .navbar-menu-wrapper.navbar-collapse.show li:not(.dropdown)")
                .each(function() {

                    jQuery(this).find("a").click(function() {
                        jQuery(
                                ".frontend .navbar .navbar-menu-wrapper.navbar-collapse.show"
                            )
                            .removeClass("show");
                    });
                });
        }, 1000);


    });
</script>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
    integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
</script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
    integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous">
</script>
<script src="{{ mix('js/manifest.js') }}"></script>
<script src="{{ mix('/js/vendor.js') }}"></script>

</html>
