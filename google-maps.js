/*
 * Google Maps (lazy loaded) V.0
 * TO DO: protect API key
 * BUILD: 01.07.2020 | anthonysalamin.ch
 */
console.log("Google Maps (lazy loaded) V.0 loaded");
document.addEventListener("DOMContentLoaded", () => {
    loadGoolgeMapsAPI();
});

// create Google Maps API source
function loadGoolgeMapsAPI() {
    let script = document.createElement("script");
    let key = `AIzaSyBx_RKxcocR9mbmf5aGe2HxLadt1lAsb4c`, // 😈 website restricted
        language = `en`,
        region = `us`,
        callback = `initMap`;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&language=${language}&region=${region}&callback=${callback}`; // 🥑 production
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}

// Google Maps callback triggered when Google Maps API script is loaded
function initMap() {
    "use strict";
    // Options  
    const lattitude = 37.40665844521265,
        longitude = 25.347776714013662,
        zoom = 13,
        markerLocation = { lat: 37.406401281812364, lng: 25.347959628186004 };

    // definition of the map and its options
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoom,
        center: markerLocation,
        mapTypeControl: false,
        gestureHandling: "cooperative",
        fullscreenControl: false,
        styles: [
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e9e9e9"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#333333"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f2f2f2"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#fefefe"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            }
        ]
    });

    // marker incon definition
    const markerIcon = {
        url:
            "https://uploads-ssl.webflow.com/5b05ed948ee27f736bbe9315/5bd8be2551cc3d4596ee6e3c_marker-office-animated.svg",
        anchor: new google.maps.Point(60, 100),
        scaledSize: new google.maps.Size(120, 120)
    };

    // creation of the marker
    const marker = new google.maps.Marker({
        position: markerLocation,
        map: map,
        // icon: markerIcon,
    });
} // end initMap()