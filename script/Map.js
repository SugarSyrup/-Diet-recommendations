var storeinfo = JSON.parse(localStorage.getItem("store-info"));
var mapContainer = document.getElementById('map-section'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); 

var geocoder = new kakao.maps.services.Geocoder();

geocoder.addressSearch(storeinfo.주소, function(result, status) {
       var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
       console.log("coords : ", coords);
       var marker = new kakao.maps.Marker({
           map:map,
           position: coords
       });
       console.log("Marker : ", marker);
       map.setCenter(coords);
});    


/*
var markerPosition  = new kakao.maps.LatLng(33.450701, 126.570667); 

var marker = new kakao.maps.Marker({
    position: markerPosition
});

kakao.maps.event.addListener(map, 'center_changed', function() {
    map.setCenter(new kakao.maps.LatLng(33.450701, 126.570667));
})

marker.setMap(map);*/

/*var infowindow = new kakao.maps.InfoWindow({
            content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
        });
        infowindow.open(map, marker);

        */