"use strict"
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 53.430, lng: -2.961 },
        zoom: 12,
    });
}