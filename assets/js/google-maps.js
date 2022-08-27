function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 32.219044, lng: 76.323402};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Dharamshala, HP' // Title Location
    });
}