/*jshint esversion: 6 */
/*jshint globalstrict: true*/
"use strict";


function initMap() {
    // Map options
    const options = {
        zoom: 6,
        center: { lat: 53.430, lng: -2.961 },
        styles: [
            { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "poi.park",
                elementType: "geometry",
                stylers: [{ color: "#263c3f" }],
            },
            {
                featureType: "poi.park",
                elementType: "labels.text.fill",
                stylers: [{ color: "#6b9a76" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#38414e" }],
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#212a37" }],
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#9ca5b3" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#746855" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry.stroke",
                stylers: [{ color: "#1f2835" }],
            },
            {
                featureType: "road.highway",
                elementType: "labels.text.fill",
                stylers: [{ color: "#f3d19c" }],
            },
            {
                featureType: "transit",
                elementType: "geometry",
                stylers: [{ color: "#2f3948" }],
            },
            {
                featureType: "transit.station",
                elementType: "labels.text.fill",
                stylers: [{ color: "#d59563" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#17263c" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.fill",
                stylers: [{ color: "#515c6d" }],
            },
            {
                featureType: "water",
                elementType: "labels.text.stroke",
                stylers: [{ color: "#17263c" }],
            },
        ],
    };


    // New map
    const map = new google.maps.Map(document.getElementById("map"), options);

    // Marker locations
    addMarker({
        coords: { lat: 51.554, lng: -0.108 },
        content: '<h4>The Emirates</h4><p>Arsenal FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 52.509, lng: -1.884 },
        content: '<h4>Villa Park</h4><p>Aston Villa FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 51.490, lng: -0.289 },
        content: '<h4>Brentford Community</h4><p>Brentford FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 50.861, lng: -0.083 },
        content: '<h4>Amex</h4><p>Brighton & Hove Albion FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 53.788, lng: -2.230 },
        content: '<h4>Turfmoor</h4><p>Burnley FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 51.481, lng: -0.191 },
        content: '<h4>Stamford Bridge</h4><p>Chelsea FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 51.398, lng: -0.086 },
        content: '<h4>Selhurst Park</h4><p>Crystal Palace FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 53.438, lng: -2.966 },
        content: '<h4>Goodison Park</h4><p>Everton FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 53.777, lng: -1.572 },
        content: '<h4>Elland Road</h4><p>Leeds FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 52.620, lng: -1.142 },
        content: '<h4>King Power Stadium</h4><p>Leceister FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 53.430, lng: -2.960 },
        content: '<h4>Anfield</h4><p>Liverpool FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 53.483, lng: -2.200 },
        content: '<h4>The Etihad</h4><p>Manchester City FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 53.463, lng: -2.291 },
        content: '<h4>Old Trafford</h4><p>Manchester United FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 54.975, lng: -1.621 },
        content: "<h4>St. James' Park</h4><p>Newcastle FC Stadium</p>"
    });
    addMarker({
        coords: { lat: 52.622, lng: 1.309 },
        content: '<h4>Carrow Road</h4><p>Norwich FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 50.905, lng: -1.391 },
        content: "<h4>St. Mary's</h4><p>Southampton FC Stadium</p>"
    });
    addMarker({
        coords: { lat: 51.604, lng: -0.066 },
        content: '<h4>Tottenham Hotspur Stadium</h4><p>Tottenham Hotspur FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 51.649, lng: -0.401 },
        content: '<h4>Vicarage Road</h4><p>Watford FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 51.538, lng: -0.016 },
        content: '<h4>The London Stadium</h4><p>West Ham FC Stadium</p>'
    });
    addMarker({
        coords: { lat: 52.590, lng: -2.130 },
        content: '<h4>Molineux</h4><p>Wolverhampton Wanderers FC Stadium</p>'
    });



    // Add marker function
    function addMarker(props) {
        const marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });
        // Add infoWindow
        if (props.content) {
            const infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            // Add listener to open infoWindow once clicked
            marker.addListener('click', function () {
                infoWindow.open(map, marker);
            });
        }

    }

}

