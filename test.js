var $body = $('body');

function hideSidebar() {
    $('.sidebar').removeClass('active');
    $body.removeAttr('style')
}

function showSidebar() {
    $('.sidebar').addClass('active');
    $body.css({
        'padding-right': SW
    })
}

function hidePopup() {
    $('.popup').css('display', 'none');
    $('.bg-popup').css('display', 'none');
    $body.removeClass('popup-active');

    if (!$('.sidebar').hasClass('active')) {
        $body.css({
            'padding-right': 0
        });
    }
}

function hidePopupOrSidebar() {
    if ($('body').hasClass('popup-active')) {
        hidePopup()
    } else {
        hideSidebar()
    }
}

$('.popup .btn-close').click(function (eventObject) {
    eventObject.preventDefault();
    hidePopup()
});

$window.on('click', function (event) {
    var eventTarget = event.target;
    console.log(eventTarget)

    if ((
        $('.bg-popup').is(eventTarget)
        && !$('.popup, .popup *').is(eventTarget)
    ) || (
        $('.sidebar').is(eventTarget)
        && !$('.sidebar-nav, .sidebar-nav *').is(eventTarget)
    )) {
        hidePopupOrSidebar()
    }
});

$window.on('keyup', function (event) {
    var keyCode = event.keyCode || event.which;

    if (keyCode === 27) {
        hidePopupOrSidebar()
    }
});
