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
                                <p>인기메뉴:얼큰닭곰탕</p>
                                <p>평균가격:7,500원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EA%B9%80%EB%B6%80%EC%9E%90&oquery=%EA%B0%95%EB%A6%89+%ED%93%A8%ED%83%95&tqi=hymDSlprvhGssfGQmlVsssssshK-297278" tabindex="0">
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
                                <p>인기메뉴:치즈곱창2~3인분</p>
                                <p>평균가격:22,000원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%BF%85%EA%B0%80%EA%B3%B1%EC%B0%BD&oquery=%EA%B0%95%EB%A6%89+%EA%B9%80%EB%B6%80%EC%9E%90&tqi=hymDFsprvN8ssa6EtvVssssssOC-208490" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EA%B0%80%EB%A9%B4%EC%9A%94%EB%A3%A8&oquery=%EA%B0%95%EB%A6%89+%EB%BF%85%EA%B0%80%EA%B3%B1%EC%B0%BD&tqi=hymDpwprvTVssZE71AVssssstC8-278100" tabindex="0">
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
                                <p>인기메뉴:오리지널밥풀</p>
                                <p>평균가격:9,000원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%B0%A5%ED%92%80&oquery=%EA%B0%95%EB%A6%89+%EA%B0%80%EB%A9%B4%EC%9A%94%EB%A3%A8&tqi=hymDWlprvmsss6c%2FLGZssssstc0-353305" tabindex="0">
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
                                <p>인기메뉴:부리또+음료</p>
                                <p>평균가격:6,050원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%B6%80%EB%A6%AC%EB%98%90&oquery=%EA%B0%95%EB%A6%89+%EB%B0%A5%ED%92%80&tqi=hymDwlprvN8ssZBnkPGssssstrG-303447" tabindex="0">
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
                                <p>인기메뉴:1인 스키야키</p>
                                <p>평균가격:10,250원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%82%98%EC%9A%B0%EC%8A%A4%ED%91%BC&oquery=%EA%B0%95%EB%A6%89+%EB%B6%80%EB%A6%AC%EB%98%90&tqi=hymD0dprvmZssT82uc4ssssstr8-393262" tabindex="0">
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
                                <p>인기메뉴:곱창,막창,껍데기</p>
                                <p>평균가격:18,000원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%82%AE%EB%B3%B4%EB%8B%A4%EB%B0%A4&oquery=%EA%B0%95%EB%A6%89+%EB%82%98%EC%9A%B0%EC%8A%A4%ED%91%BC&tqi=hymDJwprvxZssPuhrTRssssstUG-516271" tabindex="0">
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
                                <p>인기메뉴:딸기막걸리</p>
                                <p>평균가격:8,000원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%98%B9%EA%B8%B0%EC%A2%85%EA%B8%B0&oquery=%EA%B0%95%EB%A6%89+%EB%82%AE%EB%B3%B4%EB%8B%A4%EB%B0%A4&tqi=hymD%2FsprvxZssPc34PZssssstxZ-291137" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(옹기종기, 'click', function () {
        info옹기종기.open(map, 옹기종기);
    });

    var 갱스터분식카페 = new google.maps.Marker({
        position: { lat: 37.7389, lng: 128.8767 },
        map: map,
        label: `갱스터분식카페`
    });
    var info갱스터분식카페 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>갱스터분식카페</h4>
                            <div class="img-box">
                                <p>인기메뉴:김떡순 세트</p>
                                <p>평균가격:14,500원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EA%B0%B1%EC%8A%A4%ED%84%B0&oquery=%EA%B0%95%EB%A6%89+%EC%98%B9%EA%B8%B0%EC%A2%85%EA%B8%B0&tqi=hymEvsprvhGssgCy%2BCNssssstAl-164049" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(갱스터분식카페, 'click', function () {
        info갱스터분식카페.open(map, 갱스터분식카페);
    });

    var 형분식돈까스 = new google.maps.Marker({
        position: { lat: 37.7390, lng: 128.8767 },
        map: map,
        label: `형분식돈까스`
    });
    var info형분식돈까스 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>형분식 돈까스</h4>
                            <div class="img-box">
                                <p>인기메뉴:돈까스</p>
                                <p>평균가격:7,375원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%ED%98%95%EB%B6%84%EC%8B%9D&oquery=%EA%B0%95%EB%A6%89+%EA%B0%B1%EC%8A%A4%ED%84%B0&tqi=hymEblprvOsssfKRUi8ssssss4o-218149" tabindex="0">
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
                                <p>인기메뉴:추어탕</p>
                                <p>평균가격:7,000원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%9E%84%EC%B6%94%EC%96%B4%ED%83%95&oquery=%EA%B0%95%EB%A6%89+%ED%98%95%EB%B6%84%EC%8B%9D&tqi=hymEKdprvxsssOXBfOossssstdC-521773" tabindex="0">
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
                                <p>인기메뉴:홍짬뽕</p>
                                <p>평균가격:6,375원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%ED%99%8D%EC%A7%9C%EC%9E%A5&oquery=%EA%B0%95%EB%A6%89+%EC%9E%84%EC%B6%94%EC%96%B4%ED%83%95&tqi=hymEnwprvmZssUTvHVossssssXN-274576" tabindex="0">
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
                                <p>인기메뉴:김치치즈탕수육</p>
                                <p>평균가격:17,000원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%ED%93%A8%ED%83%95&oquery=%EA%B0%95%EB%A6%89+%EC%9D%B4%EB%94%94%EC%95%BC+%EB%82%B4%EA%B3%A1%EC%A0%90&tqi=hymDMdprvmZssUc9UR4sssssto8-276669" tabindex="0">
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
    var 이디야내곡점 = new google.maps.Marker({
        position: { lat: 37.7412, lng: 128.8799 },
        map: map,
        label: `이디야내곡점`
    });
    var info이디야내곡점 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>이디야내곡점</h4>
                            <div class="img-box">
                                <p>인기메뉴:쌍쌍 츄로스 세트</p>
                                <p>평균가격:8,200원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%9D%B4%EB%94%94%EC%95%BC+%EB%82%B4%EA%B3%A1%EC%A0%90&oquery=%EA%B0%95%EB%A6%89+%EC%9D%B4%EB%94%94%EC%95%BC&tqi=hymD5wprvN8ssaaGrYKssssstPK-512038" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(이디야내곡점, 'click', function () {
        info이디야내곡점.open(map, 이디야내곡점);
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%9C%A4%EC%B9%B4%ED%8E%98&oquery=%EA%B0%95%EB%A6%89+%EB%8B%A5%ED%84%B0%EC%A5%AC%EC%8A%A4&tqi=hymDZsprvh8ss6DCKIossssstGh-081915" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(윤카페, 'click', function () {
        info윤카페.open(map, 윤카페);
    });

    var 닥터쥬스관동점 = new google.maps.Marker({
        position: { lat: 37.7384, lng: 128.877 },
        map: map,
        label: `닥터쥬스관동점`
    });
    var info닥터쥬스관동점 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>닥터쥬스관동점</h4>
                            <div class="img-box">
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%8B%A5%ED%84%B0%EC%A5%AC%EC%8A%A4&oquery=%EA%B0%95%EB%A6%89+%EB%88%88%EA%B0%80%EB%A3%A8&tqi=hymDswprvxZssOkK6Qdssssst7K-476246" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(닥터쥬스관동점, 'click', function () {
        info닥터쥬스관동점.open(map, 닥터쥬스관동점);
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
                                <p>인기메뉴:매일 삶는 국산팥 눈가루</p>
                                <p>평균가격:9,875원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%88%88%EA%B0%80%EB%A3%A8&oquery=%EA%B0%95%EB%A6%89+%EB%A6%AC%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%B9%B4%ED%8E%98&tqi=hymCIlprvhGssg5aRQGssssstfR-112007" tabindex="0">
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
                                <p>인기메뉴:아메리카노</p>
                                <p>평균가격:3,750원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%A6%AC%EA%B0%A4%EB%9F%AC%EB%A6%AC%EC%B9%B4%ED%8E%98&oquery=%EA%B0%95%EB%A6%89+%EC%8A%88%EC%8A%88%EC%B0%A8&tqi=hymC2lprvmZssU6VETsssssssRC-090209" tabindex="0">
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
                                <p>인기메뉴:밀크폼 홍차/녹차/우롱차</p>
                                <p>평균가격:4,500원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%8A%88%EC%8A%88%EC%B0%A8&oquery=%EA%B0%95%EB%A6%89+%EC%8A%A4%ED%85%8C%EB%94%9C%EB%A6%AC&tqi=hymCzdprvh8ss6Dg7Rhssssss%2FC-174820" tabindex="0">
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
                                <p>인기메뉴:Long black</p>
                                <p>평균가격:4,000원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%8A%A4%ED%85%8C%EB%94%9C%EB%A6%AC&oquery=%EA%B0%95%EB%A6%89+%EC%95%8C%EB%A7%88%EC%A6%88%EC%BB%A4%ED%94%BC&tqi=hymCXsprvxZssOok7dNssssss%2Bd-207331" tabindex="0">
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
                                <p>인기메뉴:마들렌</p>
                                <p>평균가격:3,250원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%95%8C%EB%A7%88%EC%A6%88%EC%BB%A4%ED%94%BC&oquery=%EA%B0%95%EB%A6%89+%EB%94%94%EC%BA%A3%EC%9B%A8%EC%9D%B4%EB%B8%8C&tqi=hymCrsprvN8ssZErycdssssssO4-002868" tabindex="0">
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
                                <p>인기메뉴:오징어먹물소금빵</p>
                                <p>평균가격:3,000원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%94%94%EC%BA%A3%EC%9B%A8%EC%9D%B4%EB%B8%8C&oquery=%EA%B0%95%EB%A6%89+%EB%B8%94%EB%9E%99%EC%98%A4%EB%B8%8C%EB%8B%A4%EB%9D%BC%EC%9E%90&tqi=hymCFlprvxZssOFDb9dssssst80-143931" tabindex="0">
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
                                <p>인기메뉴:Irish Coffe</p>
                                <p>평균가격:8,000원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%B8%94%EB%9E%99%EC%98%A4%EB%B8%8C%EB%8B%A4%EB%9D%BC%EC%9E%90&oquery=%EA%B0%95%EB%A6%89+%EC%BB%A4%ED%94%BC%EB%A7%88%EC%8B%A4&tqi=hymCAdprvN8ssZ%2BjNxsssssstRZ-005441" tabindex="0">
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
                                <p>인기메뉴:아메리카노</p>
                                <p>평균가격:2,500원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%BB%A4%ED%94%BC%EB%A7%88%EC%8B%A4&oquery=%EA%B0%95%EB%A6%89+%ED%95%98%EB%9E%91%EB%B2%A0%EC%9D%B4%EA%B8%80&tqi=hymCPdprvxsssN%2Fc4TNssssstw0-117369" tabindex="0">
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
                                <p>인기메뉴:베이글</p>
                                <p>평균가격:3,440원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%ED%95%98%EB%9E%91%EB%B2%A0%EC%9D%B4%EA%B8%80&oquery=%EA%B0%95%EB%A6%89+%EC%9C%84%EC%A6%88%EC%9C%84%EC%A6%88&tqi=hymCilprvmZssUE5dpZssssst1R-198065" tabindex="0">
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
                                <p>인기메뉴:마카롱</p>
                                <p>평균가격:3,200원</p>
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%9C%84%EC%A6%88%EC%9C%84%EC%A6%88&oquery=%EA%B0%95%EB%A6%89+%EB%8B%B9%EC%8B%A0%EC%9D%80+%EB%8B%B9%EC%8B%A0%EC%9D%BC+%EB%95%8C%EA%B0%80+%EA%B0%80%EC%9E%A5+%EC%95%84%EB%A6%84%EB%8B%B5%EB%8B%A4&tqi=hymCgsprvxZssOY56RdssssssFs-242835" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(위즈위즈, 'click', function () {
        info위즈위즈.open(map, 위즈위즈);
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%ED%8C%80%EC%97%91%EC%8A%A4%ED%97%AC%EC%8A%A4&oquery=%EA%B0%95%EB%A6%89+%EB%A0%88%EB%93%9C%ED%94%8C%EB%A0%89%EC%8A%A4%EC%A7%90&tqi=hyjGAsp0JXossLOU5FdssssssrG-101744" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%A0%88%EB%93%9C%ED%94%8C%EB%A0%89%EC%8A%A4%EC%A7%90&oquery=%EA%B0%95%EB%A6%89+%EA%B0%95%EB%82%A8%ED%86%B5%EB%B0%94%EB%94%94%ED%97%AC%EC%8A%A4%ED%81%B4%EB%9F%BD&tqi=hyjGhlp0YiRss4jkU%2BossssssQN-158678" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EA%B0%95%EB%82%A8%ED%86%B5%EB%B0%94%EB%94%94%ED%97%AC%EC%8A%A4%ED%81%B4%EB%9F%BD&oquery=%EA%B0%95%EB%A6%89+%EA%B0%95%EB%82%A8%ED%86%A0%EB%B0%94%EB%94%94%ED%97%AC%EC%8A%A4%ED%81%B4%EB%9F%BD&tqi=hyjGTlp0JXVssUNhY6GssssstG8-051231" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%ED%8C%80%EA%B4%80%EB%8F%99&oquery=%EA%B0%95%EB%A6%89+%EC%83%88%EB%A1%9C%EC%9B%8C%EC%A7%90+%ED%9A%8C%EC%82%B0%EC%A0%90&tqi=hyjGvsp0JXossLR6%2FqGsssssseR-518465" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(팀관동, 'click', function () {
        info팀관동.open(map, 팀관동);
    });
    //
    var 새로워짐회산점 = new google.maps.Marker({
        position: { lat: 37.7393, lng: 128.8638 },
        map: map,
        label: `새로워짐회산점`
    });
    var info새로워짐회산점 = new google.maps.InfoWindow({
        content: `  <div class="mar">
                        <div class="text-box">
                            <h4>새로워짐회산점</h4>
                            <div class="img-box">
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%83%88%EB%A1%9C%EC%9B%8C%EC%A7%90+%ED%9A%8C%EC%82%B0%EC%A0%90&oquery=%EA%B0%95%EB%A6%89+%EB%B8%8C%EB%9D%BC%EC%9A%B4%EA%B5%90%EC%9C%A1&tqi=hyj3rlp0J14ssLBNudhssssstpG-065070" tabindex="0">
                                <p>홈페이지 방문하기</p>
                            </a>
                        </div>
                    </div>`
    });
    google.maps.event.addListener(새로워짐회산점, 'click', function () {
        info새로워짐.open(map, 새로워짐회산점);
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%8B%A4%EC%98%AC%EC%84%9C%EC%A0%81&oquery=%EA%B0%95%EB%A6%89+%EC%9B%8C%EC%8B%9C%ED%94%84%EB%A0%8C%EC%A6%88&tqi=hyj3idp0YidssmA0tKwssssst%2BK-298628" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%8C%80%EA%B5%90%EB%AC%B8%EA%B3%A0&oquery=%EA%B0%95%EB%A6%89+%EB%8B%A4%EC%98%AC%EC%84%9C%EC%A0%81&tqi=hyj3Csp0YidssmNoqgRssssstvG-415762" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%9B%8C%EC%8B%9C%ED%94%84%EB%A0%8C%EC%A6%88&oquery=%EA%B0%95%EB%A6%89+%EB%8B%A4%EB%AA%A8%EC%95%8424%EC%8B%9C&tqi=hyj3Rlp0Jy0ssEY1mfNssssstmh-116773" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%8B%A4%EB%AA%A8%EC%95%8424%EC%8B%9C&oquery=%EA%B0%95%EB%A6%89+%EB%A7%98%EC%8A%A4%ED%95%B8%EC%A6%88&tqi=hyj3Ksp0J14ssMscOE8ssssssnw-010011" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%A7%98%EC%8A%A4%ED%95%B8%EC%A6%88&oquery=%EA%B0%95%EB%A6%89+%EC%95%84%EB%A0%88%EB%82%98x+pc&tqi=hyj29wp0YidssmPXxb0ssssss84-200254" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%ED%94%BC%EC%94%A8%ED%94%BC%EC%94%A8&oquery=%EA%B0%95%EB%A6%89+%EC%9E%90%EC%9C%A0%ED%94%BC%EC%94%A8%EB%B0%A9&tqi=hyj2Llp0JXossLDFr5KssssssWR-188140" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%B8%94%EB%A3%A8pc%EC%A1%B4&oquery=%EA%B0%95%EB%A6%89+%ED%94%BC%EC%94%A8%ED%94%BC%EC%94%A8&tqi=hyj2jsp0YiRss4lAzb4ssssstnC-185241" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%9D%BC%EC%9D%B4%EB%98%90pc%EB%B0%A9&oquery=%EA%B0%95%EB%A6%89+%EB%B8%94%EB%A3%A8pc%EC%A1%B4&tqi=hyj2Plp0YidssmUcdh4ssssssg8-327842" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+R+pc+cafe&oquery=%EA%B0%95%EB%A6%89+%EB%9D%BC%EC%9D%B4%EB%98%90pc%EB%B0%A9&tqi=hyj2Bsp0J1ZssC9WrPGssssstb4-260717" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%AC%B4%EB%93%B1pc%EB%B0%A9&oquery=%EA%B0%95%EB%A6%89+R+pc+cafe&tqi=hyj2owp0JXossLSdaX0ssssssEl-334367" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EB%85%B8%EB%A6%ACpc%EB%B0%A9&oquery=%EA%B0%95%EB%A6%89+%EB%AC%B4%EB%93%B1pc%EB%B0%A9&tqi=hyj2Vwp0JXVssUTheJNssssstBN-290845" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%95%84%EB%A0%88%EB%82%98x+pc&oquery=%EA%B0%95%EB%A6%89+%EB%85%B8%EB%A6%ACpc%EB%B0%A9&tqi=hyj2Hlp0JywssmxekxVssssst4N-465392" tabindex="0">
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
                            </div>
                            <a target="_blank" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EA%B0%95%EB%A6%89+%EC%9E%90%EC%9C%A0%ED%94%BC%EC%94%A8%EB%B0%A9&oquery=%EA%B0%95%EB%A6%89+%ED%83%95%ED%99%94%EC%BF%B5%ED%91%B8&tqi=hyj2Zdp0Jy0ssEBVX1ossssstMN-135023" tabindex="0">
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