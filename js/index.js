
document.addEventListener('click', function () {
    if (mobileMenu.hasClass("show-nav")) {
        setTimeout(function () {
            mobileMenu.addClass("hide-nav").removeClass("show-nav");
        }, 100)
    }
});

