//   lightGallery(document.getElementById('lightgallery'), {
//     plugins: [lgZoom, lgThumbnail],
//     licenseKey: 'your_license_key',
//     speed: 500,
//     thembnail:true,
//     autoplay:true,
//     pause:3000,
//     progressBar:true
//     // ... other settings
// });

lightGallery(document.querySelector(".lightgallery"), {
    plugins: [lgZoom, lgThumbnail],
    licenseKey: 'your_license_key',
    speed: 500,
    thembnail: true,
    autoplay: true,
    pause: 3000,
    progressBar: true
    // ... other settings
});




//윈도우 팝업
$(".windowPopup").click(function (e) {
    e.preventDefault();
    //window.open("파일명", "파일이름", "옵션설정");
    //옵션 :left, top , width, height, status, toolbar, location, menubar, scrollbars, fullscreen
    window.open("popup.html", "popup01", "width=800, height=590px ,left=50, top=50, scrollbars=0, toolbar=0, menubar=0");
})



//배너
//html 마크업 셋팅 -> css 연동  -> 제이쿼리 연동 -> 제이쿼리 호출
$(document).ready(function () {
    $('.ban').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });

    //탭 메뉴
    $(".tab_menu > ul li").on("click", function (e) {
        e.preventDefault();
        $(".tab_menu > ul li").removeClass("active");
        $(".tab_menu > ul li ul").hide();

        $(this).addClass("active").find("ul").show();
    });


    //갤러리
    $(".gallery_img").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        speed: 300
    });

    $(".play").click(function () {
        $(".gallery_img").slick("slickPlay");
    });

    $(".pause").click(function () {
        $(".gallery_img").slick("slickPause");
    });

    $(".prev").click(function () {
        $(".gallery_img").slick("slickPrev");
    });

    $(".next").click(function () {
        $(".gallery_img").slick("slickNext");
    });



    $(".layerPopup").on("click", function (e) {
        e.preventDefault();
        //$("#layer").slideDown();
        $("#layer").fadeIn();
    })

    $(".close").on("click", function (e) {
        e.preventDefault();
        //$("#layer").slideUp();
        $("#layer").fadeOut();
    })



});


$(".tit .btn").on("click", function (e) {
    e.preventDefault();
    // $("#cont_nav").css("display", "block");
    // $("#cont_nav").show();
    // $("#cont_nav").fadeIn();
    // $("#cont_nav").slideDown();
    // $("#cont_nav").toggle();
    //  $("#cont_nav").fadeToggle();
    $("#cont_nav").slideToggle(200);
    $(this).toggleClass("on");
});

