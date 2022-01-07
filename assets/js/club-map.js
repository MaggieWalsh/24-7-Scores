"use strict"
// let map;

function initMap() {
    // Map options
    const options = {
        zoom: 12,
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
    }

    // New map
    const map = new google.maps.Map(document.getElementById("map"), options);


    addMarker({ coords: { lat: 51.554, lng: -0.108 } });
    addMarker({ coords: { lat: 52.509, lng: -1.884 } });
    addMarker({ coords: { lat: 51.490, lng: -0.289 } });
    addMarker({ coords: { lat: 50.861, lng: -0.083 } });
    addMarker({ coords: { lat: 53.788, lng: -2.230 } });
    addMarker({ coords: { lat: 51.481, lng: -0.191 } });
    addMarker({ coords: { lat: 51.398, lng: -0.086 } });
    addMarker({ coords: { lat: 53.438, lng: -2.966 } });
    addMarker({ coords: { lat: 53.777, lng: -1.572 } });
    addMarker({ coords: { lat: 52.620, lng: -1.142 } });
    addMarker({ coords: { lat: 53.430, lng: -2.960 } });
    addMarker({ coords: { lat: 53.483, lng: -2.200 } });
    addMarker({ coords: { lat: 53.463, lng: -2.291 } });
    addMarker({ coords: { lat: 54.975, lng: -1.621 } });
    addMarker({ coords: { lat: 52.622, lng: 1.309 } });
    addMarker({ coords: { lat: 50.905, lng: -1.391 } });
    addMarker({ coords: { lat: 51.604, lng: -0.066 } });
    addMarker({ coords: { lat: 51.649, lng: -0.401 } });
    addMarker({ coords: { lat: 51.538, lng: -0.016 } });
    addMarker({ coords: { lat: 52.590, lng: -2.130 } });



    // Add marker function
    function addMarker(props) {
        const marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });


    };



    /*
        // New marker
        const marker = new google.maps.Marker({
            position: { lat: 53.430, lng: -2.961 },
            map,
        });
    
        const infoWindow = new google.maps.InfoWindow({
            content: '<h4>Anfield Stadium</h4>'
        });
    
        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });
        */
}
