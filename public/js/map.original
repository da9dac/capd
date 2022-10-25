var map;

var customicon = '/images/markers.png'
var bus = '/images/bus.png'
var cafe = '/images/cafe.png'
var food = '/images/food.png'
var health = '/images/health.png'
var hospital = '/images/hospital.png'
var mart = '/images/mart.png'

// 마커 정리 시작 //
/*
var 마커명 = new google.maps.Marker({
    position: { lat: 37.75536, lng: 128.897229 },
    map: map,
    label: `장소명`
});
var info마커명 = new google.maps.InfoWindow({
    content: `  <div class="mar">
                    <div class="text-box">
                        <h4>장소명</h4>
                        <div class="img-box">
                            <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                        </div>
                        <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                            <p>홈페이지 방문하기</p>
                        </a>
                    </div>
                </div>`
});
google.maps.event.addListener(마커명, 'click', function () {
    info마커명.open(map, 마커명);
});
*/
//

//
var imsickuplayground = 
                `  <div class="mar">
                    <div class="text-box">
                        <h4>가톨릭관동대학교 운동장</h4>
                        <div class="img-box">
                            <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                        </div>
                        <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                            <p>홈페이지 방문하기</p>
                        </a>
                    </div>
                </div>`;
var imsi창조관 = 
                `  <div class="mar">
                    <div class="text-box">
                        <h4>창조관</h4>
                        <div class="img-box">
                            사진 및 설명 들어가는 공간
                        </div>
                        <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                            <p>홈페이지 방문하기</p>
                        </a>
                    </div>
                </div>`;
var imsi학교도서관 = 
                `  <div class="mar">
                    <div class="text-box">
                        <h4>학교도서관</h4>
                        <div class="img-box">
                            사진 및 설명 들어가는 공간
                        </div>
                        <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                            <p>홈페이지 방문하기</p>
                        </a>
                    </div>
                </div>`;
// 마커 정리 끝 //

//지도출력 및 마커설정
function initMap() {
    map = new google.maps.Map(
        document.getElementById('map'), {
        zoom: 18,
        center: { lat: 37.736048, lng: 128.873676 }
    }
    );
}
initMap();

//버튼들
//교내 건물 위치
function changeMap1() {
    initMap();
}
//학교 근처 음식집 추천 37.7384 128.8768
function changeMap2() {
    map = new google.maps.Map(
        document.getElementById("map"),
        { zoom: 17, center: { lat: 37.7384 , lng: 128.8768 } }
    );
    var 김부자 = new google.maps.Marker({
        position: { lat: 37.7382, lng: 128.8785 },
        map: map,
        label: `김부자`
    });
    var info김부자 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>김부자</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                                <p>대표메뉴:2</p>
                                <p>평균가격:</p>
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(김부자, 'click', function () {
        info김부자.open(map, 김부자);
    });

    var 뿅가곱창 = new google.maps.Marker({
        position: { lat: 37.7409, lng: 128.8781 },
        map: map,
        label: `뿅가곱창`
    });
    var info뿅가곱창 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>뿅가곱창</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(뿅가곱창, 'click', function () {
        info뿅가곱창.open(map, 뿅가곱창);
    });

    var 가면요루 = new google.maps.Marker({
        position: { lat: 37.7396, lng: 128.8781 },
        map: map,
        label: `가면요루`
    });
    var info가면요루 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>가면요루</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(가면요루, 'click', function () {
        info가면요루.open(map, 가면요루);
    });

    var 밥풀 = new google.maps.Marker({
        position: { lat: 37.7365, lng: 128.8739 },
        map: map,
        label: `밥풀`
    });
    var info밥풀 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>밥풀</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(밥풀, 'click', function () {
        info밥풀.open(map, 밥풀);
    });

    var 부리또인 = new google.maps.Marker({
        position: { lat: 37.7394, lng: 128.877 },
        map: map,
        label: `부리또인`
    });
    var info부리또인 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>부리또인</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(부리또인, 'click', function () {
        info부리또인.open(map, 부리또인);
    });

    var 나우스푼 = new google.maps.Marker({
        position: { lat: 37.7394, lng: 128.8765 },
        map: map,
        label: `나우스푼`
    });
    var info나우스푼 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>나우스푼</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(나우스푼, 'click', function () {
        info나우스푼.open(map, 나우스푼);
    });

    var 낮보다밤 = new google.maps.Marker({
        position: { lat: 37.7394, lng: 128.8768 },
        map: map,
        label: `낮보다밤`
    });
    var info낮보다밤 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>낮보다밤</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(낮보다밤, 'click', function () {
        info낮보다밤.open(map, 낮보다밤);
    });

    var 옹기종기 = new google.maps.Marker({
        position: { lat: 37.7398, lng: 128.8787 },
        map: map,
        label: `옹기종기`
    });
    var info옹기종기 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>옹기종기</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(옹기종기, 'click', function () {
        info옹기종기.open(map, 옹기종기);
    });

    var 갱스터김치볶음밥 = new google.maps.Marker({
        position: { lat: 37.7389, lng: 128.8767 },
        map: map,
        label: `갱스터 김치볶음밥`
    });
    var info갱스터김치볶음밥 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>갱스터 김치볶음밥</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(갱스터김치볶음밥, 'click', function () {
        info갱스터김치볶음밥.open(map, 갱스터김치볶음밥);
    });

    var 형분식돈까스 = new google.maps.Marker({
        position: { lat: 37.7390, lng: 128.8767 },
        map: map,
        label: `형분식 돈까스`
    });
    var info형분식돈까스 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>형분식 돈까스</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(형분식돈까스, 'click', function () {
        info형분식돈까스.open(map, 형분식돈까스);
    });

    var 임추어탕 = new google.maps.Marker({
        position: { lat: 37.7372, lng: 128.8797 },
        map: map,
        label: `임추어탕`
    });
    var info임추어탕 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>임추어탕</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(임추어탕, 'click', function () {
        info임추어탕.open(map, 임추어탕);
    });

    var 홍짜장 = new google.maps.Marker({
        position: { lat: 37.7396, lng: 128.8779 },
        map: map,
        label: `홍짜장`
    });
    var info홍짜장 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>홍짜장</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(홍짜장, 'click', function () {
        info홍짜장.open(map, 홍짜장);
    });

    var 육영퓨전탕수육 = new google.maps.Marker({
        position: { lat: 37.7408, lng: 128.8783 },
        map: map,
        label: `육영퓨전탕수육`
    });
    var info육영퓨전탕수육 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>육영퓨전탕수육</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(육영퓨전탕수육, 'click', function () {
        info육영퓨전탕수육.open(map, 육영퓨전탕수육);
    });
}
//학교 근처 카페
function changeMap3() {
    map = new google.maps.Map(
        document.getElementById("map"),
        { zoom: 16.5, center: { lat: 37.7384 , lng: 128.8768 } }
    );
    
    //카페
    var 이디야 = new google.maps.Marker({
        position: { lat: 37.7412, lng: 128.8799 },
        map: map,
        label: `이디야`
    });
    var info이디야 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>이디야</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                                <p>홈페이지 방문하기</p>
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(이디야, 'click', function () {
        info이디야.open(map, 이디야);
    });

    var 윤카페 = new google.maps.Marker({
        position: { lat: 37.7363, lng: 128.8749 },
        map: map,
        label: `윤카페`
    });
    var info윤카페 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>윤카페</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(윤카페, 'click', function () {
        info윤카페.open(map, 윤카페);
    });

    var 닥터쥬스 = new google.maps.Marker({
        position: { lat: 37.7384, lng: 128.877 },
        map: map,
        label: `닥터쥬스`
    });
    var info닥터쥬스 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>닥터쥬스</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(닥터쥬스, 'click', function () {
        info닥터쥬스.open(map, 닥터쥬스);
    });
    var 눈가루 = new google.maps.Marker({
        position: { lat: 37.7383, lng: 128.8785 },
        map: map,
        label: `눈가루`
    });
    var info눈가루 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>눈가루</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(눈가루, 'click', function () {
        info눈가루.open(map, 눈가루);
    });

    var 리갤러리카페 = new google.maps.Marker({
        position: { lat: 37.7394, lng: 128.8765 },
        map: map,
        label: `리갤러리카페`
    });
    var info리갤러리카페 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>리갤러리카페</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(리갤러리카페, 'click', function () {
        info리갤러리카페.open(map, 리갤러리카페);
    });

    var 슈슈차 = new google.maps.Marker({
        position: { lat: 37.7391, lng: 128.8769 },
        map: map,
        label: `슈슈차`
    });
    var info슈슈차 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>슈슈차</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(슈슈차, 'click', function () {
        info슈슈차.open(map, 슈슈차);
    });

    var 스테딜리 = new google.maps.Marker({
        position: { lat: 37.7394, lng: 128.8783 },
        map: map,
        label: `스테딜리`
    });
    var info스테딜리 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>스테딜리</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(스테딜리, 'click', function () {
        info스테딜리.open(map, 스테딜리);
    });

    var 알마즈커피 = new google.maps.Marker({
        position: { lat: 37.739, lng: 128.8782 },
        map: map,
        label: `알마즈커피`
    });
    var info알마즈커피 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>알마즈커피</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(알마즈커피, 'click', function () {
        info알마즈커피.open(map, 알마즈커피);
    });

    var 디캣웨이브 = new google.maps.Marker({
        position: { lat: 37.7405, lng: 128.8781 },
        map: map,
        label: `디캣웨이브`
    });
    var info디캣웨이브 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>디캣웨이브</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(디캣웨이브, 'click', function () {
        info디캣웨이브.open(map, 디캣웨이브);
    });

    var 블랙오브다라자 = new google.maps.Marker({
        position: { lat: 37.7392, lng: 128.8795 },
        map: map,
        label: `블랙오브다라자`
    });
    var info블랙오브다라자 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>블랙오브다라자</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(블랙오브다라자, 'click', function () {
        info블랙오브다라자.open(map, 블랙오브다라자);
    });

    var 커피마실 = new google.maps.Marker({
        position: { lat: 37.7402, lng: 128.8803 },
        map: map,
        label: `커피마실`
    });
    var info커피마실 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>커피마실</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(커피마실, 'click', function () {
        info커피마실.open(map, 커피마실);
    });

    var 하랑베이글 = new google.maps.Marker({
        position: { lat: 37.741, lng: 128.88 },
        map: map,
        label: `하랑베이글`
    });
    var info하랑베이글 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>하랑베이글</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(하랑베이글, 'click', function () {
        info하랑베이글.open(map, 하랑베이글);
    });

    var 위즈위즈 = new google.maps.Marker({
        position: { lat: 37.7412, lng: 128.88 },
        map: map,
        label: `위즈위즈`
    });
    var info위즈위즈 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>위즈위즈</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(위즈위즈, 'click', function () {
        info위즈위즈.open(map, 위즈위즈);
    });

    var 당신은당신일때가가장아름답다 = new google.maps.Marker({
        position: { lat: 37.739, lng: 128.8771 },
        map: map,
        label: `당신은 당신일 때가 가장 아름답다`
    });
    var info위즈위즈 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>당신은 당신일 때가 가장 아름답다</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(당신은당신일때가가장아름답다, 'click', function () {
        info당신은당신일때가가장아름답다.open(map, 당신은당신일때가가장아름답다);
    });

    //헬스장
    var 팀엑스헬스 = new google.maps.Marker({
        position: { lat: 37.742, lng: 128.8815 },
        map: map,
        label: `팀엑스헬스`
    });
    var info팀엑스헬스 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>팀엑스헬스</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(팀엑스헬스, 'click', function () {
        info팀엑스헬스.open(map, 팀엑스헬스);
    });
    //
    var 레드플렉스짐 = new google.maps.Marker({
        position: { lat: 37.7426, lng: 128.8817 },
        map: map,
        label: `레드플렉스짐`
    });
    var info레드플렉스짐 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>레드플렉스짐</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(레드플렉스짐, 'click', function () {
        info레드플렉스짐.open(map, 레드플렉스짐);
    });
    //
    var 강남통바디헬스클럽 = new google.maps.Marker({
        position: { lat: 37.7364, lng: 128.8697 },
        map: map,
        label: `강남통바디헬스클럽`
    });
    var info강남통바디헬스클럽 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>강남통바디헬스클럽</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(강남통바디헬스클럽, 'click', function () {
        info강남통바디헬스클럽.open(map, 강남통바디헬스클럽);
    });
    //
    var 팀관동 = new google.maps.Marker({
        position: { lat: 37.7446, lng: 128.8841 },
        map: map,
        label: `팀관동`
    });
    var info팀관동 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>팀관동</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(팀관동, 'click', function () {
        info팀관동.open(map, 팀관동);
    });
    //
    var 새로워짐 = new google.maps.Marker({
        position: { lat: 37.7393, lng: 128.8638 },
        map: map,
        label: `새로워짐`
    });
    var info새로워짐 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>새로워짐</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(새로워짐, 'click', function () {
        info새로워짐.open(map, 새로워짐);
    });
    //서점
    var 다올서적 = new google.maps.Marker({
        position: { lat: 37.7366, lng: 128.8736 },
        map: map,
        label: `다올서적`
    });
    var info다올서적 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>다올서적</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(다올서적, 'click', function () {
        info다올서적.open(map, 다올서적);
    });
    //
    var 대교문고 = new google.maps.Marker({
        position: { lat: 37.7364, lng: 128.8742 },
        map: map,
        label: `대교문고`
    });
    var info대교문고 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>대교문고</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(대교문고, 'click', function () {
        info대교문고.open(map, 대교문고);
    });

    //빨래방
    var 워시프렌즈 = new google.maps.Marker({
        position: { lat: 37.7429, lng: 128.8777 },
        map: map,
        label: `워시프렌즈`
    });
    var info워시프렌즈 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>워시프렌즈</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(워시프렌즈, 'click', function () {
        info워시프렌즈.open(map, 워시프렌즈);
    });
    //
    var 다모아24시 = new google.maps.Marker({
        position: { lat: 37.7433, lng: 128.8822 },
        map: map,
        label: `다모아24시`
    });
    var info다모아24시 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>다모아24시</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(다모아24시, 'click', function () {
        info다모아24시.open(map, 다모아24시);
    });
    //
    var 맘스핸즈 = new google.maps.Marker({
        position: { lat: 37.7459, lng: 128.8858 },
        map: map,
        label: `맘스핸즈`
    });
    var info맘스핸즈 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>맘스핸즈</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(맘스핸즈, 'click', function () {
        info맘스핸즈.open(map, 맘스핸즈);
    });

    //피시방
    var 피씨피씨 = new google.maps.Marker({
        position: { lat: 37.7355, lng: 128.8762 },
        map: map,
        label: `피씨피씨`
    });
    var info피씨피씨 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>피씨피씨</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(피씨피씨, 'click', function () {
        info피씨피씨.open(map, 피씨피씨);
    });
    //
    var 블루PC존 = new google.maps.Marker({
        position: { lat: 37.7394, lng: 128.8768 },
        map: map,
        label: `블루PC존`
    });
    var info블루PC존 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>블루PC존</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(블루PC존, 'click', function () {
        info블루PC존.open(map, 블루PC존);
    });
    //
    var 라이또PC방 = new google.maps.Marker({
        position: { lat: 37.7382, lng: 128.8784 },
        map: map,
        label: `라이또PC방`
    });
    var info라이또PC방 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>라이또PC방</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(라이또PC방, 'click', function () {
        info라이또PC방.open(map, 라이또PC방);
    });
    //
    var RPCCafe = new google.maps.Marker({
        position: { lat: 37.7378, lng: 128.8786 },
        map: map,
        label: `R PC Cafe`
    });
    var infoRPCCafe = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>R PC Cafe</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(RPCCafe, 'click', function () {
        infoRPCCafe.open(map, RPCCafe);
    });
    //
    var 무등PC방 = new google.maps.Marker({
        position: { lat: 37.7442, lng: 128.8809 },
        map: map,
        label: `무등PC방`
    });
    var info무등PC방 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>무등PC방</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(무등PC방, 'click', function () {
        info무등PC방.open(map, 무등PC방);
    });
    //
    var 노리PC방 = new google.maps.Marker({
        position: { lat: 37.7439, lng: 128.882 },
        map: map,
        label: `노리PC방`
    });
    var info노리PC방 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>노리PC방</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(노리PC방, 'click', function () {
        info노리PC방.open(map, 노리PC방);
    });
    //
    var 아레나xPC = new google.maps.Marker({
        position: { lat: 37.7446, lng: 128.884 },
        map: map,
        label: `아레나 X PC`
    });
    var info아레나xPC = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>아레나 X PC</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(아레나xPC, 'click', function () {
        info아레나xPC.open(map, 아레나xPC);
    });
    //
    var 자유피씨방 = new google.maps.Marker({
        position: { lat: 37.7439, lng: 128.882 },
        map: map,
        label: `자유피씨방`
    });
    var info자유피씨방 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>자유피씨방</h4>
                            <div class="img-box">
                                <img class="marimg" src="https://cdn-icons-png.flaticon.com/512/91/91560.png">
                            </div>
                            <a target="_blank" href="https://www.royalpalace.go.kr/" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(자유피씨방, 'click', function () {
        info자유피씨방.open(map, 자유피씨방);
    });
}
//강릉 편의시설
function changeMap4() {
    map = new google.maps.Map(
        document.getElementById("map"),
        { zoom: 17, center: { lat: 37.756393, lng: 128.898782 } }
    );

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
}
//강릉 추천 음식집
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

function mapSelector(mapSelect) {
    if (mapSelect == 1) {
        changeMap1();
    }
    else if (mapSelect == 2) {
        changeMap2();
    }
    else if (mapSelect == 3) {
        changeMap3();
    }
    else if (mapSelect == 4) {
        changeMap4();
    }
    else if (mapSelect == 5) {
        changeMap5();
    }
}