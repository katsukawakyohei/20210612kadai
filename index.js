
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 33.586981807599365, lng: 130.416709466204 },
        zoom: 16,
    });
    var myLatlng = new google.maps.LatLng(33.586981807599365, 130.416709466204);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
    });
}



function pageTopBpttun() {
    var pagetop = $('#page-top');
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
};


