<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Elibrary</title>
    <!-- Fonts -->

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

    <link rel="stylesheet" href="{{ asset('css/bookSearch.css') }}">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
    <link rel="stylesheet" href="{{ asset('css/vendors/owl-carousel/css/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendors/owl-carousel/css/owl.theme.default.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendors/mdi/css/materialdesignicons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/vendors/aos/css/aos.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.min.css') }}">
  
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">


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

{{-- <script>
    $(document).ready(function() {

        if (jQuery("[data-trigger]").length > 0) {
            const choices = new Choices('[data-trigger]', {

                : false,
                itemSelectText: '',
            });

        }

    });
</script> --}}

<script>
    $(window).on('load', function() {
        $('#loading').fadeOut();

    });
    jQuery(document).ready(function() {

        // setTimeout(() => {
        //     jQuery(".react-slidedown.pro-inner-list-item li.pro-sub-menu").each(function() {
        //         if (jQuery(this).find(".pro-menu-item").hasClass("active")) {
        //             jQuery(this).find(".react-slidedown.pro-inner-list-item").removeClass(
        //                     "closed")
        //                 .addClass("open").css("height", "auto");
        //             jQuery(this).addClass("open");
        //             jQuery(this).find(".pro-inner-item").trigger("click");
        //         }

        //     });

        // }, 1500);

        // setInterval(() => {
        //     setTimeout(() => {
        //         jQuery(".react-slidedown.pro-inner-list-item li.pro-sub-menu").each(function() {

        //             if (jQuery(this).find(".pro-menu-item").hasClass("active")) {
        //                 jQuery(this).find(".react-slidedown.pro-inner-list-item")
        //                     .removeClass(
        //                         "closed")
        //                     .addClass("open").css("height", "auto");
        //                 jQuery(this).addClass("open");
        //                 // jQuery(this).find(".pro-inner-item").trigger("click");
        //             }

        //         });
        //     }, 2000);
        // }, 1);
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


        // jQuery('.video-btn').click(function() {
        //     ytPlayer.playVideo();

        // });

        setInterval(() => {
            // jQuery(".react-slidedown.pro-inner-list-item li.pro-sub-menu").each(function() {
            //     if (jQuery(this).find(".pro-menu-item").hasClass("active")) {
            //         jQuery(this).find(".react-slidedown.pro-inner-list-item").removeClass(
            //                 "closed")
            //             .addClass("open").css("height", "auto");
            //         jQuery(this).addClass("open");
            //         // jQuery(this).find(".pro-inner-item").trigger("click");
            //     }

            // });

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
        // jQuery('.video_popup iframe').attr('data-src', src);
        // var src_new = jQuery('.video_popup iframe').attr('data-src');
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

            //   window.location.href="#/admin/pos/pos-dashboard";
        });


        setInterval(() => {
            // if (window.location.href.indexOf("pos-dashboard") > -1) {

            //             jQuery('.erp').addClass("active_dash");
            //             // jQuery('.erp').trigger("click");
            //         jQuery('.elibrary').removeClass("active_dash");

            // }
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

        // setTimeout(function() {
        //     var ebook = jQuery(".e-book-avilable").html();
        //     jQuery(".product_content").append(ebook);
        // }, 2000);

        //    setInterval(() => {
        //     if (window.location.href.indexOf("lms-dashboard") > -1) {

        //                 jQuery('.elibrary').addClass("active_dash");
        //                 // jQuery('.erp').trigger("click");
        //             jQuery('.erp').removeClass("active_dash");

        //         }
        //    }, 1000);




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
