// 버튼들 불러와서 변수에 담아주고
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");


// 각각 버튼에 이벤트 추가
btn1.addEventListener("click", changeMap1);
btn2.addEventListener("click", changeMap2);
btn3.addEventListener("click", changeMap3);
btn4.addEventListener("click", changeMap4);
btn5.addEventListener("click", changeMap5);



var map;

//지도출력 및 마커설정
function initMap() {
    var home = { lat: 37.737469, lng: 128.875502 };
    var xya = { lat: 37.737231, lng: 128.876554 };
    var test = { lat: 37.737231, lng: 128.876554 };

    map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 18,
        center: home
    }
    );

    new google.maps.Marker({
        position: home,
        map: map,
        title: `a`,
        snippet: `b`,
        label: `운동장`
    });
    new google.maps.Marker({
        position: test,
        map: map,
        label: `테스트`
    });
}
//마커 클릭시 내용


initMap();

//버튼들
//학교-운동장기준
function changeMap1() {
    var home = { lat: 37.737469, lng: 128.875502 };
    map.panTo(home);
    map.setZoom(18);
}
//학교근처맛집
function changeMap2() {
    var home = { lat: 37.737469, lng: 128.875502 };
    map.panTo(home);
    map.setZoom(16);
}
//시내-홈플러스기준 37.756393, 128.898782
function changeMap3() {
    var home = { lat: 37.756393, lng: 128.898782 };
    map.panTo(home);
    map.setZoom(18);
}
//학교-운동장기준
function changeMap4() {
    var home = { lat: 37.737469, lng: 128.875502 };
    map = new google.maps.Map(
        document.getElementById("map"),
        { zoom: 17, center: home }
    );
    new google.maps.Marker({
        position: home,
        map: map,
        title: `a`,
        snippet: `b`,
        label: `운동장`
    });
}
//시내-홈플러스기준 37.756393, 128.898782
function changeMap5() {
    var home = { lat: 37.756393, lng: 128.898782 };
    map.panTo(home);
    map.setZoom(18);
}
/*
// 새로운 지도를 여는 작업 -> 마커 지워짐
function changeMap2(){
    var ll = {lat:-40.339098, lng: 175.609729};
    map = new google.maps.Map(
    document.getElementById("map"),
    {zoom:17, center: ll}
    );
}
*/



//

/*
function initMap() {

    //지도 스타일
    var map = new google.maps.Map(document.getElementById('map'), {

        //처음 중심 좌표
        center: {
            lat: 37.737469, lng: 128.875502
        },

        //처음 줌 값. 숫자가 작을수록 낮은 배율
        zoom: 18
    });

    //마커 정보
    var locations = [

        //경복궁 마커
        ['<div class="wrap"><div class="text-box"><h4>경복궁</h4><div class="img-box"><img src="https://image.shutterstock.com/image-vector/palace-icon-outline-vector-web-260nw-1046855677.jpg"></div><a target="_blank" href="https://www.royalpalace.go.kr/"><p>홈페이지 방문하기</p></a></div>', 37.577624, 126.976020],


        //딸기케이크 마커
        ['<div class="wrap"><div class="text-box"><h4>딸기케이크</h4><div class="img-box"><img src="https://media.istockphoto.com/vectors/piece-of-cake-with-strawberries-icon-element-of-bakery-icon-premium-vector-id931551700"></div><a target="_blank" href="https://noa-xyz.tistory.com"><p>홈페이지 방문하기</p></a></div>', 37.559524, 126.976710],


        //창덕궁 마커
        ['<a target="_blank" href="https://cdg.go.kr/">창덕궁 홈페이지</a>', 37.579711, 126.991043]


    ]



    //마커 이미지
    //var customicon = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/info-i_maps.png'
    //var customicon = '/images/feed-star.svg'
    var customicon = '/images/markers.png'

    //인포윈도우
    var infowindow = new google.maps.InfoWindow();

    //마커 생성
    var marker, i;
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({

            //마커의 위치
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),

            //마커 아이콘
            icon: customicon,

            //마커를 표시할 지도
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {

                //html로 표시될 인포 윈도우의 내용
                infowindow.setContent(locations[i][0]);

                //인포윈도우가 표시될 위치
                infowindow.open(map, marker);
            }
        })(marker, i));

        if (marker) {
            marker.addListener('click', function () {

                //중심 위치를 클릭된 마커의 위치로 변경
                map.setCenter(this.getPosition());

                //마커 클릭 시의 줌 변화
                map.setZoom(14);
            });
        }
    }
}
*/