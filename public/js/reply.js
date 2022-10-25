//메뉴들
//메인메뉴
var menu =`<div>
자주 찾는 메뉴들을 모아놨어요! 📃<br>필요한 메뉴를 선택해주세요! 😉
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='kkinfoButton()'>🎓교육과정 안내</a>
  <a class="btn_link" onclick='facilinfoButton()'>🌁시설안내</a>
  <a class="btn_link" onclick='phoneinfoButton()'>📞교내 연락처</a>
  <a class="btn_link" onclick='kkButton()'>📃공지사항</a>
</div>`
//교육과정 안내 전체메뉴
var kkinfo =`<div>
🌼 필요한 메뉴를 선택해주세요!
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='kkButton()'>🎓교육과정</a>
  <a class="btn_link" onclick='mpButton()'>🎓최소이수학점</a>
  <a class="btn_link" onclick='hakjumButton()'>🎓나의 남은학점</a>
  <a class="btn_link" onclick='haksafaqButton()'>🎓학사제도 FAQ</a>
</div>`;
//교내 연락처 전체메뉴
var phoneinfo = `<div>
🌼 필요한 메뉴를 선택해주세요!
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='depphoneButton()'>📞학과 연락처</a>
  <a class="btn_link" onclick='mainphoneButton()'>📞주요 연락처</a>
  <a class="btn_link" onclick='phonepop()'>📞전체 연락처</a>
</div>`;
//시설안내 전체메뉴
var facilinfo = `<div>
🌼 필요한 메뉴를 선택해주세요!
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='library()'>📖도서관 이용안내</a>
  <a class="btn_link" onclick='dormitory()'>🏠기숙사 이용안내</a>
  <a class="btn_link" onclick='wifi()'>💻와이파이 이용안내</a>
  <a class="btn_link" onclick='physical()'>⚽체육시설 이용안내</a>
  <a class="btn_link" onclick='mappop()'>🕍캠퍼스맵</a>
</div>`;
//캘린더
var cal = `<div>
📆 날짜를 선택해주세요!
</div>
<div>
<select name="monthList" id="monthList" onchange="iljung(this.value)">
  <option>원하시는 달을 선택해주세요.</option>
  <option value="1">1월</option>
  <option value="2">2월</option>
  <option value="3">3월</option>
  <option value="4">4월</option>
  <option value="5">5월</option>
  <option value="6">6월</option>
  <option value="7">7월</option>
  <option value="8">8월</option>
  <option value="9">9월</option>
  <option value="10">10월</option>
  <option value="11">11월</option>
  <option value="12">12월</option>
</select>
</div>
<div class="btn_group">
<a class="btn_link" onclick='calenderButton()'>전체일정 보러가기</a>
</div>`;

//교육과정  코드
var civil = `<h3>토목공학과 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>토목직업의탐색</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>공업정역학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>창의적토목설계입문</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>기초응용역학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>유체역학및실험</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>공학전산실무</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>구조역학및실험</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>측량학및실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>토질역학및실험1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>지형공간정보학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>철근콘크리트공학1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>관수로종합설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>상하수도공학및설계1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>PS콘크리트구조설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>토질역학및실험2</td>
                      <td>전공선택</td>
                    </tr>
                    <td>3 - 2</td>
                    <td>수문학종합설계</td>
                    <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>개수로종합설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>상하수도공학및설계2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>토목종합설계1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>강구조및합성구조설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>기초공학및설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>토목시공학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건설교재연구및지도법</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건설교육론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>토목종합설계2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>해양항만및종합설계</td>
                      <td>전공선택</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;

var arche = `<h3>건축공학과 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>건축설계기초1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>1 - 1</td>
                      <td>건축개론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>창의적공학설계입문</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>BIM및연습</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축일반구조</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축재료학</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축공정관리실습</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축컴퓨터프로그래밍</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축일반구조</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축환경및설비</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축구조역학1</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축시공학</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건설관리</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축재료실험및설계</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축구조역학2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>리모델링공학</td>
                      <td>전공심환</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축산학</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축구조실험캡스톤디자인</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축실무캡스톤디자인</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축품질관리</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축법규</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>건축공학종합설계1</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>강구조공학</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>건설교과교육론</td>
                      <td>전공심화</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>전산해석및실습</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건축공학종합설계2</td>
                      <td>전공기초</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건설교과교재연구및지도법</td>
                      <td>전공심화</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;

var sw = `<h3>소프트웨어학과 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>문제해결기법과 코딩</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>1 - 1</td>
                      <td>창의적소프트웨어설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>C프로그래밍과 실습1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>R프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>C프로그래밍과 실습2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>웹프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>자바프로그래밍과 실습1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>오라클중심의 데이터베이스와 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>자바프로그래밍과 실습2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>유닉스프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>AI활용을 위한 머신러닝 기초</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>자료구조</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>모바일프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>빅데이터 분석과 활용</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>사물인터넷과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>소프트웨어 설계 및 개발</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>고급데이터베이스구축과 실무</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>고급모바일프로그래밍과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>정보시스템 구축</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>운영체제</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>소프트웨어 캡스톤디자인1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>프로그래밍언어응용과 컴파일러</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>데이터구현기반 알고리즘</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>응용SW기반 인공지능이론과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>데이터통신과 SW보안</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>소프트웨어 캡스톤디자인2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>컴퓨터보안과 실습</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>증강현실과 가상현실</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>무선통신과 인터넷</td>
                      <td>전공선택</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;

var arch = `<h3>건축학부 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>건축설계기초1</td>
                      <td>전공필수</td>
                    </tr>
                    <td>1 - 1</td>
                    <td>건축개론</td>
                    <td>전공필수</td>
                  </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>건축설계기초2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>건축조형론</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축설계1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>서양건축사</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축CAD</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>건축일반구조</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>BIM및연습</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>한국건축사</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축설계2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>건축재료및구법</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축설계3</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축환경계획</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>구조디자인</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>건축계획론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축설계4</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축법규</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>건축시공학</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>환경친화건축</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>현대건축론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>건축설비</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>건축설계5</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>환경심리및행동론</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>도시설계론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>목조건축계획및설계</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>단지및도시계획</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건축설계6</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>특수공간디자인</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>주택과커뮤니티</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>건축작품분석</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>5 - 1</td>
                      <td>건축실무</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>5 - 1</td>
                      <td>건축종합설계1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>5 - 1</td>
                      <td>건축과조경</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>5 - 1</td>
                      <td>주거환경조사론</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>5 - 2</td>
                      <td>건축종합설계2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>5 - 2</td>
                      <td>목조건축계획및설계2</td>
                      <td>전공선택</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;

var elec = `<h3>전자공학과 교육과정</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">학년-학기</th>
                      <th style="width:250px">과목명</th>
                      <th style="width:110px">분류</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1 - 1</td>
                      <td>전자공학직업탐색</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 1</td>
                      <td>C프로그래밍</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>전자공학의설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>1 - 2</td>
                      <td>파이썬응용프로그래밍</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>기초전자실험1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>회로이론1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>전기자기학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 1</td>
                      <td>디지털논리설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>기초전자실험2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>마이크로프로세서설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td><회로이론2/td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>2 - 2</td>
                      <td>디지털신호처리이론및설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>전자공학실험1</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>전자회로이론및설계1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 1</td>
                      <td>임베디드시스템설계</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>전기전자공학실험2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>IOT시스템설계</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>전자회로이온및설계2</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>3 - 2</td>
                      <td>디지털통신</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>전자종합설계1</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>이동통신</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 1</td>
                      <td>제어공학</td>
                      <td>전공선택</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>전자종합설계2</td>
                      <td>전공필수</td>
                    </tr>
                    <tr>
                      <td>4 - 2</td>
                      <td>RF회로설계</td>
                      <td>전공필수</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학과의 교육과정이 궁금하신가요?
              </div>
              <div>
                <select name="kkList" id="kkList" onchange="kkSelect(this.value)">
                    <option>학과를 선택해주세요.</option>
                    <option value="1">건축공학과</option>
                    <option value="2">건축학부(5년제)</option>
                    <option value="3">소프트웨어학과</option>
                    <option value="4">전자공학과</option>
                    <option value="5">토목공학과</option>
                </select>
              </div>`;
//졸업요건

//이수학점
var ttyear = `<h3>2022학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>20</td>
                      <td>20</td>
                      <td>20</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>36</td>
                      <td>36</td>
                      <td>36</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>220</td>
                      <td>99</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>256</td>
                      <td>135</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var toyear = `<h3>2021학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학</th>
                      <th style="width:120px">건축공학</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>20</td>
                      <td>20</td>
                      <td>20</td>
                      <td>20</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>36</td>
                      <td>36</td>
                      <td>36</td>
                      <td>56</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>220</td>
                      <td>99</td>
                      <td>106</td>
                      <td>66</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>256</td>
                      <td>135</td>
                      <td>160</td>
                      <td>130</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

//tz 20 ~ e 08
var tzyear = `<h3>2020학번 최소 이수학점</h3>
<div class="table-box">
  <table class="table table--min" cellspacing="15" cellpadding="0">
    <thead>
      <tr>
        <th style="width:120px">구분</th>
        <th style="width:120px">일반학과</th>
        <th style="width:120px">의학</th>
        <th style="width:120px">간호</th>
        <th style="width:120px">건축학(5년과정)</th>
        <th style="width:120px">건축공학</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>교양필수</td>
        <td>16</td>
        <td>16</td>
        <td>16</td>
        <td>16</td>
        <td>26</td>
      </tr>
      <tr>
        <td>교양선택</td>
        <td>20</td>
        <td>18</td>
        <td>20</td>
        <td>20</td>
        <td>30</td>
      </tr>
      <tr>
        <td>교양합계</td>
        <td>36</td>
        <td>34</td>
        <td>36</td>
        <td>36</td>
        <td>56</td>
      </tr>
      <tr>
        <td>전공필수<br>전공선택</td>
        <td>69</td>
        <td>220</td>
        <td>99</td>
        <td>106</td>
        <td>66</td>
      </tr>
      <tr>
        <td>일반선택</td>
        <td>25</td>
        <td>0</td>
        <td>0</td>
        <td>18</td>
        <td>8</td>
      </tr>
      <tr>
        <td>합계</td>
        <td>130</td>
        <td>254</td>
        <td>135</td>
        <td>160</td>
        <td>130</td>
      </tr>
    </tbody>
  </table>
</div>
<p></p>
<div>
  다른 학번의 이수학점이 궁금하신가요?
</div>
<div>
  <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
      <option>입학연도를 선택해주세요.</option>
      <option value="2022">2022년</option>
      <option value="2021">2021년</option>
      <option value="2020">2020년</option>
      <option value="2019">2019년</option>
      <option value="2018">2018년</option>
      <option value="2017">2017년</option>
      <option value="2016">2016년</option>
      <option value="2015">2015년</option>
      <option value="2014">2014년</option>
      <option value="2013">2013년</option>
      <option value="2012">2012년</option>
      <option value="2011">2011년</option>
      <option value="2010">2010년</option>
      <option value="2009">2009년</option>
      <option value="2008">2008년</option>
  </select>
 </div>`;

var onyear = `<h3>2019학번 최소 이수학점</h3>
<div class="table-box">
  <table class="table table--min" cellspacing="15" cellpadding="0">
    <thead>
      <tr>
        <th style="width:120px">구분</th>
        <th style="width:120px">일반학과</th>
        <th style="width:120px">의학</th>
        <th style="width:120px">간호</th>
        <th style="width:120px">건축학(5년과정)</th>
        <th style="width:120px">건축공학</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>교양필수</td>
        <td>16</td>
        <td>16</td>
        <td>16</td>
        <td>16</td>
        <td>26</td>
      </tr>
      <tr>
        <td>교양선택</td>
        <td>20</td>
        <td>18</td>
        <td>20</td>
        <td>20</td>
        <td>30</td>
      </tr>
      <tr>
        <td>교양합계</td>
        <td>36</td>
        <td>34</td>
        <td>36</td>
        <td>36</td>
        <td>56</td>
      </tr>
      <tr>
        <td>전공필수<br>전공선택</td>
        <td>69</td>
        <td>220</td>
        <td>99</td>
        <td>106</td>
        <td>66</td>
      </tr>
      <tr>
        <td>일반선택</td>
        <td>25</td>
        <td>0</td>
        <td>0</td>
        <td>18</td>
        <td>8</td>
      </tr>
      <tr>
        <td>합계</td>
        <td>130</td>
        <td>254</td>
        <td>135</td>
        <td>160</td>
        <td>130</td>
      </tr>
    </tbody>
  </table>
</div>
<p></p>
<div>
  다른 학번의 이수학점이 궁금하신가요?
</div>
<div>
  <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
      <option>입학연도를 선택해주세요.</option>
      <option value="2022">2022년</option>
      <option value="2021">2021년</option>
      <option value="2020">2020년</option>
      <option value="2019">2019년</option>
      <option value="2018">2018년</option>
      <option value="2017">2017년</option>
      <option value="2016">2016년</option>
      <option value="2015">2015년</option>
      <option value="2014">2014년</option>
      <option value="2013">2013년</option>
      <option value="2012">2012년</option>
      <option value="2011">2011년</option>
      <option value="2010">2010년</option>
      <option value="2009">2009년</option>
      <option value="2008">2008년</option>
  </select>
 </div>`;

var oeyear = `<h3>2018학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학(5년과정)</th>
                      <th style="width:120px">건축공학</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>20</td>
                      <td>18</td>
                      <td>20</td>
                      <td>20</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>34</td>
                      <td>36</td>
                      <td>36</td>
                      <td>56</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>220</td>
                      <td>99</td>
                      <td>106</td>
                      <td>66</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>254</td>
                      <td>135</td>
                      <td>160</td>
                      <td>130</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var osyear = `<h3>2017학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>28</td>
                      <td>26</td>
                      <td>28</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>8</td>
                      <td>8</td>
                      <td>8</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>34</td>
                      <td>36</td>
                      <td>36</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>220</td>
                      <td>99</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>254</td>
                      <td>135</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var osixyear = `<h3>2016학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>28</td>
                      <td>26</td>
                      <td>28</td>
                      <td>28</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>8</td>
                      <td>6</td>
                      <td>6</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>36</td>
                      <td>32</td>
                      <td>34</td>
                      <td>36</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>69</td>
                      <td>219</td>
                      <td>99</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>25</td>
                      <td>0</td>
                      <td>0</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>251</td>
                      <td>133</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var ofyear = `<h3>2015학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>27</td>
                      <td>24</td>
                      <td>24</td>
                      <td>29</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>12</td>
                      <td>10</td>
                      <td>10</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>39</td>
                      <td>34</td>
                      <td>34</td>
                      <td>41</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>68</td>
                      <td>220</td>
                      <td>97</td>
                      <td>107</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>254</td>
                      <td>131</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var ofouryear = `<h3>2014학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>30</td>
                      <td>24</td>
                      <td>24</td>
                      <td>16</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>10</td>
                      <td>10</td>
                      <td>10</td>
                      <td>40</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>40</td>
                      <td>34</td>
                      <td>34</td>
                      <td>56</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>67</td>
                      <td>226</td>
                      <td>97</td>
                      <td>60</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>260</td>
                      <td>131</td>
                      <td>130</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var othreeyear = `<h3>2013학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>22</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>18</td>
                      <td>18</td>
                      <td>18</td>
                      <td>40</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>40</td>
                      <td>34</td>
                      <td>34</td>
                      <td>56</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>67</td>
                      <td>226</td>
                      <td>97</td>
                      <td>60</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>260</td>
                      <td>131</td>
                      <td>130</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var otyear = `<h3>2012학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>22</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>18</td>
                      <td>18</td>
                      <td>18</td>
                      <td>40</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>40</td>
                      <td>34</td>
                      <td>34</td>
                      <td>56</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>67</td>
                      <td>226</td>
                      <td>97</td>
                      <td>60</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>260</td>
                      <td>131</td>
                      <td>130</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var ooyear = `<h3>2011학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>22</td>
                      <td>16</td>
                      <td>16</td>
                      <td>16</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>18</td>
                      <td>18</td>
                      <td>18</td>
                      <td>40</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>40</td>
                      <td>34</td>
                      <td>34</td>
                      <td>56</td>
                      <td>40</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>67</td>
                      <td>217</td>
                      <td>97</td>
                      <td>60</td>
                      <td>106</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>23</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>14</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>251</td>
                      <td>131</td>
                      <td>130</td>
                      <td>160</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var ozyear = `<h3>2010학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>18</td>
                      <td>12</td>
                      <td>12</td>
                      <td>16</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>16</td>
                      <td>20</td>
                      <td>20</td>
                      <td>40</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>34</td>
                      <td>32</td>
                      <td>32</td>
                      <td>56</td>
                      <td>34</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>65</td>
                      <td>217</td>
                      <td>97</td>
                      <td>60</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>31</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>249</td>
                      <td>129</td>
                      <td>130</td>
                      <td>150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var nyear = `<h3>2009학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">건축공학(공학인증)</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>18</td>
                      <td>12</td>
                      <td>12</td>
                      <td>16</td>
                      <td>18</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>16</td>
                      <td>20</td>
                      <td>20</td>
                      <td>40</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>34</td>
                      <td>32</td>
                      <td>32</td>
                      <td>56</td>
                      <td>34</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>65</td>
                      <td>217</td>
                      <td>97</td>
                      <td>60</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>31</td>
                      <td>0</td>
                      <td>0</td>
                      <td>14</td>
                      <td>21</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>249</td>
                      <td>129</td>
                      <td>130</td>
                      <td>150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

var eyear = `<h3>2008학번 최소 이수학점</h3>
              <div class="table-box">
                <table class="table table--min" cellspacing="15" cellpadding="0">
                  <thead>
                    <tr>
                      <th style="width:120px">구분</th>
                      <th style="width:120px">일반학과</th>
                      <th style="width:120px">의학</th>
                      <th style="width:120px">간호</th>
                      <th style="width:120px">공학인증</th>
                      <th style="width:120px">건축학(5년과정)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>교양필수</td>
                      <td>11</td>
                      <td>9</td>
                      <td>9</td>
                      <td>8</td>
                      <td>11</td>
                    </tr>
                    <tr>
                      <td>교양선택</td>
                      <td>22</td>
                      <td>24</td>
                      <td>24</td>
                      <td>40</td>
                      <td>22</td>
                    </tr>
                    <tr>
                      <td>교양합계</td>
                      <td>33</td>
                      <td>33</td>
                      <td>33</td>
                      <td>48</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>전공필수<br>전공선택</td>
                      <td>65</td>
                      <td>219</td>
                      <td>97</td>
                      <td>65</td>
                      <td>95</td>
                    </tr>
                    <tr>
                      <td>일반선택</td>
                      <td>32</td>
                      <td>0</td>
                      <td>0</td>
                      <td>17</td>
                      <td>26</td>
                    </tr>
                    <tr>
                      <td>합계</td>
                      <td>130</td>
                      <td>252</td>
                      <td>130</td>
                      <td>130</td>
                      <td>154</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p></p>
              <div>
                다른 학번의 이수학점이 궁금하신가요?
              </div>
              <div>
                <select name="mpList" id="mpList" onchange="mpSelect(this.value)">
                    <option>입학연도를 선택해주세요.</option>
                    <option value="2022">2022년</option>
                    <option value="2021">2021년</option>
                    <option value="2020">2020년</option>
                    <option value="2019">2019년</option>
                    <option value="2018">2018년</option>
                    <option value="2017">2017년</option>
                    <option value="2016">2016년</option>
                    <option value="2015">2015년</option>
                    <option value="2014">2014년</option>
                    <option value="2013">2013년</option>
                    <option value="2012">2012년</option>
                    <option value="2011">2011년</option>
                    <option value="2010">2010년</option>
                    <option value="2009">2009년</option>
                    <option value="2008">2008년</option>
                </select>
               </div>`;

//학과연락처
//토목
var civilp = `<h3>📞토목공학과 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7525
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>김규한</td>
				<td>033-649-7511</td>
			</tr>
			<tr>
				<td>유승운</td>
				<td>033-649-7513</td>
			</tr>
			<tr>
				<td>박창근</td>
				<td>033-649-7514</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;
//건축학부
var archp = `<h3>📞건축학부 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7525
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>고상균</td>
				<td>033-649-7547</td>
			</tr>
			<tr>
				<td>심대영</td>
				<td>033-649-7518</td>
			</tr>
			<tr>
				<td>문정인</td>
				<td>033-649-7673</td>
			</tr>
			<tr>
				<td>이재영</td>
				<td>033-649-7527</td>
			</tr>
			<tr>
				<td>김주민</td>
				<td>033-649-7598</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;
//건축공학
var archep = `<h3>📞건축공학과 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7525
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>김병윤</td>
				<td>033-649-7528</td>
			</tr>
			<tr>
				<td>이웅균</td>
				<td>033-649-7548</td>
			</tr>
			<tr>
				<td>신진원</td>
				<td>033-649-7694</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;
//전자공학
var elecp = `<h3>📞전자공학과 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7506
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>이금원</td>
				<td>033-649-7556</td>
			</tr>
			<tr>
				<td>김종일</td>
				<td>033-649-7557</td>
			</tr>
			<tr>
				<td>유용경</td>
				<td>033-649-7379</td>
			</tr>
			<tr>
				<td>송호승</td>
				<td>033-649-7553</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;
//소프트웨어
var swp = `<h3>📞소프트웨어학과 연락처</h3>
<div  style="word-break: break-word;">
	교학팀 전화번호 : 033-649-7430
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:120px">교수명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>정이나</td>
				<td>033-649-7597</td>
			</tr>
			<tr>
				<td>심손권</td>
				<td>033-649-7208</td>
			</tr>
			<tr>
				<td>장원중</td>
				<td>033-649-7265</td>
			</tr>
			<tr>
				<td>조병호</td>
				<td>033-649-7567</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	❓ 다른 학과의 연락처가 궁금하신가요
</div>
<div>
	<select name="depphoneList" id="depphoneList" onchange="depphoneSelect(this.value)">
		<option>학과를 선택해주세요.</option>
		<option value="1">건축공학과</option>
		<option value="2">건축학부(5년제)</option>
		<option value="3">소프트웨어학과</option>
		<option value="4">전자공학과</option>
		<option value="5">토목공학과</option>
	</select>
</div>`;

//주요 연락처
var mainp = `<h3>📞주요 연락처</h3>
<div  style="word-break: break-word;">
	학교대표 전화번호 : 033-649-7114
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
			<th style="width:200px">부서명</th>
			<th style="width:250px">전화번호</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>교육혁신팀</td>
				<td>033-649-7223</td>
			</tr>
			<tr>
				<td>교수학습개발센터</td>
				<td>033-649-7088</td>
			</tr>
            <tr>
				<td>CKU 사회봉사·인성센터</td>
				<td>033-649-7878</td>
			</tr>
            <tr>
				<td>학사운영팀</td>
				<td>033-649-7962</td>
			</tr>
            <tr>
				<td>산학지원팀</td>
				<td>033-649-7189</td>
			</tr>
            <tr>
				<td>산학협력팀</td>
				<td>032-226-2608</td>
			</tr>
			<tr>
				<td>산학협력단</td>
				<td>033-649-7180</td>
			</tr>
            <tr>
				<td>입학관리팀</td>
				<td>033-649-7035</td>
			</tr>
            <tr>
				<td>입학사정센터</td>
				<td>033-649-7043</td>
			</tr>
            <tr>
				<td>학생장학복지팀</td>
				<td>033-649-7096</td>
			</tr>
            <tr>
				<td>취업지원팀</td>
				<td>033-649-7104</td>
			</tr>
			<tr>
				<td>진로개발지원센터</td>
				<td>033-649-7103</td>
			</tr>
            <tr>
				<td>학생상담센터</td>
				<td>033-649-7931</td>
			</tr>
            <tr>
				<td>현장실습지원센터</td>
				<td>033-649-7653</td>
			</tr>
            <tr>
				<td>장애학생지원센터</td>
				<td>033-649-7571</td>
			</tr>
            <tr>
				<td>국가시험지원센터</td>
				<td>033-649-7329</td>
			</tr>
			<tr>
				<td>대외협력팀</td>
				<td>033-649-7016</td>
			</tr>
            <tr>
				<td>국제교류교육팀</td>
				<td>033-649-7086</td>
			</tr>
            <tr>
				<td>대학원교학팀</td>
				<td>033-649-7172</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div class="btn_group">
  <a class="btn_link" onclick='phonepop()'>전체 연락처 보기</a>
</div>`;

newMainphone = function sendMainphone() {
  return mainp;
}

//기타 질문들
var answera =
`<h3>🎓 일반선택학점이란?</h3>
<div>
	졸업을 위한 이수구분별 최소 학점을 이수하고,<br>
  총 학점(130학점 이상)까지의 잔여 학점을 의미합니다.
</div>
<p></p>
<div>
  대상 교과목: 교양, 교직, 전공(복수, 연계, 복합, 부전공 포함)
</div>`;

var answerb =
`<h3>🎓 복학 신청 안내</h3>
<div>
	▶ 온라인 신청<br>
  • 매 학기 개강 한 달 전 (2월 초, 8월 초)<br>
  • 종합정보 > 신청관리 > 복학신청
</div>
<p></p>
<div>
  ▶ 오프라인 신청 : 온라인 신청 기간 이후<br>
  • 제출 서류 : 복학원<br>
  • 제출처 : 소속 단과대학 교학팀<br>
  • 복학원 양식 : 학교 홈페이지 > 교육정보 > 학사공지/문의 > 서식자료실<br>
  • 제출 방법 : 방문 또는 등기 우편 발송
</div>
<p></p>
<div>
  복학 신청 후 2~3일 뒤에<br>
  꼭 종합정보에서 처리 상태를 확인해주세요!
</div>
<div class="btn_group">
 <a class="btn_link" onclick='jonghapButton()'>온라인으로 신청하기</a>
</div>`;

var answerc =
`<h3>🎓 휴학 신청 안내</h3>
<div>
	▶ 온라인 신청<br>
  • 매 학기 개강 한 달 전 (2월 초, 8월 초)<br>
  • 종합정보 > 신청관리 > 휴학신청
</div>
<p></p>
<div>
  ▶ 오프라인 신청 : 온라인 신청 기간 이후<br>
  • 제출 서류 : 휴학원, 사유서<br>(자율양식 혹은 입영통지서)<br>
  • 제출처 : 소속 단과대학 교학팀<br>
  • 복학원 양식 : 학교 홈페이지 > 교육정보 > 학사공지/문의 > 서식자료실<br>
  • 제출 방법 : 방문 또는 등기 우편 발송
</div>
<p></p>
<div>
  휴학 신청 후 2~3일 뒤에 꼭 종합정보에서 처리 상태를 확인해주세요!
</div>
<div class="btn_group">
 <a class="btn_link" onclick='jonghapButton()'>온라인으로 신청하기</a>
</div>`;

var answerd =
`<h3>🎓 휴학 기간 안내</h3>
<div>
  • 휴학 횟수는 제한이 없습니다.<br>
  • 일반휴학은 1년(2학기) 단위로만 가능합니다.<br>
  • 1년 휴학신청 후 원하는 학기에 조기복학이 가능합니다.<br>
  • 1년 이상 휴학 시 휴학 연장을 신청해야합니다.<br>
  • 휴학 연장 시 소속 단과대학 교학팀으로 신청서와 사유서를 제출해야합니다.
</div>`;

var answere =
`<h3>🎓 등록금 납부 후 휴학</h3>
<div>
  • 등록금을 미리 납부 후 휴학 시 복학하는 학기에 이월됩니다.<br>
  • 복학하는 학기에 등록금이 인상되도 차액을 납부하지 않으셔도 됩니다.<br>
  • 휴학은 등록금을 납부하지 않아도 가능합니다.<br>
</div>`;

var answerf =
`<h3>🎓 입대휴학(군휴학) 안내</h3>
<div>
  • 입대휴학은 입대 7일 전에 학과 사무실로 휴학 신청서와 입영 통지서를 방문 또는 등기우편으로 제출해주시면 됩니다.<br>
  • 방학 중 입대하시는 경우 바로 입대 휴학 절차를 거치시면 됩니다.<br>
  • 학기 중에 입대를 하는 경우 방학 중에 일반휴학 신청 후 입대 7일 전에 입영 휴학을 진행해주세요.<br>
</div>`;

var answerg =
`<h3>🎓 입대휴학(군휴학) 성적평가 안내</h3>
<div>
  • 재학 중 중간고사 이후 입대휴학 시 기말시험을 결시하더라도 중간고사 성적을 참작하여 성적을 평가할 수 있습니다.<br>
  • 해당 학기 성적 부여를 원하지 않을 경우, 학기 시작 전 정해진 기간 내에 일반휴학을 신청해주세요.<br>
  • 재학 중 중간고사 이전에 입대휴학 시 성적부여가 되지 않고 학기인정이 되지 않으며, 복학하는 학기로 등록금이 이월됩니다.
</div>`;

var answerh =
`<h3>🎓 자퇴 신청 안내</h3>
<div>
	▶ 제출서류<br>
  • 등록금 반환 금액이 없는 경우 : 자퇴원, 보호자 자퇴 동의서, 상담확인서<br>
  • 등록금 반환 금액이 있는 경우 : 자퇴원, 보호자 자퇴 동의서, 상담확인서, 등록금 반환 신청서, 통장 사본<br>
  • 제출서류 양식: 홈페이지 - 교육정보 - 학사공지/문의 - 서식자료실<br>
  • 상담확인서 발급: 학생상담센터(창조관 109호) 방문 또는 비대면 상담<br>
</div>
<p></p>
<div>
  ▶ 제출방법<br>
  • 제출처 : 소속 단과대학 교학팀<br>
  • 제출 방법 : 본인 방문 제출<br>
  • 방문이 불가능한 경우 등기우편 가능 여부를 소속 단과대학 교학팀에 문의<br>
</div>`;

var answeri =
`<h3>🎓 등록금 반환 안내</h3>
<div>
  • 개강일자 기준 90일 경과 후 자퇴하는 경우 등록금이 반환되지 않습니다.<br>
  • 학기 개시일 전일까지 반환 사유가 발생하였을 경우 전액을 반환합니다.<br>
  • 학기 개시일 이후 반환 금액은 아래 표를 확인해주세요.<br>
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
        <th style="width:180px">반환사유 발생일</th>
        <th style="width:180px">반환금액</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>0~30일 까지</td>
				<td>등록금의 6분의 5</td>
			</tr>
      <tr>
				<td>31~60일 까지</td>
				<td>등록금의 3분의 2</td>
			</tr>
      <tr>
				<td>61~90일 까지</td>
				<td>등록금의 2분의 1</td>
			</tr>
      <tr>
				<td>90일 이후</td>
				<td>해당없음</td>
			</tr>
		</tbody>
	</table>
</div>`;

var answerj =
`<h3>🎓 복학생 수강신청 및 학점이수 안내</h3>
<div>
	▶ 교육과정<br>
  • 교양 교육과정: 입학 당시 이수하였던 구 교육과정을 따릅니다.<br>
  • 한 학기를 이수하지 못한 경우, 복학하는 학년의 교육과정을 따릅니다.<br>
  • 한 학기를 이수한 경우 선택에 따라 신 교육과정을 따를 수 있습니다.<br>
  • 전공 교육과정: 학번과 관계없이 현재 복학하는 학년의 교육과정을 따릅니다.
</div>
<p></p>
<div>
  ▶ 교과목 이수방법<br>
  • 교양 교과목: 교과목 이수 여부를 확인하고, 미이수한 교과목을 반드시 이수해야 하며, 개설되지 않은 경우 대체 교과목을 이수합니다.<br>
  • 전공 교과목: 복학하는 학년의 교육과정을 따르며, 명칭이 변경된 교과목을 중복 수강하지 않도록 유의하며, 전공필수 교과목은 반드시 이수해야 합니다.<br>
  • 복학하는 학년부터 개설되는 필수 교과목만 이수하며, 소급하여 이수할 필요는 없습니다.
</div>`;

var answerk =
`<h3>🎓 편입생 학점인정 및 이수지침 안내</h3>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
      <th style="width:120px">학과분류</th>
        <th style="width:180px">입학연도</th>
        <th style="width:120px">인정학점</th>
        <th style="width:120px">수학연한</th>
        <th style="width:120px">졸업학점</th>
        <th style="width:200px">비고</th>
			</tr>
		</thead>
		<tbody>
			<tr>
        <td>일반학과</td>
				<td>2021/22</td>
				<td>65</td>
        <td>2년</td>
        <td>69</td>
        <td>교양2+전공67</td>
			</tr>
      <tr>
        <td>사범/교직</td>
				<td>2021/22</td>
				<td>65</td>
        <td>2년</td>
        <td>91</td>
        <td>교양2+교직22+전공67</td>
			</tr>
		</tbody>
	</table>
</div>
<div>
	▶ 일반학과<br>
  • 전적 대학 2학년 수료 후, 65학점 보다 낮은 경우, 미달 된 학점만큼 졸업학점이 증가합니다.<br>
  • 편입생 한 학기당 최대 수강 가능학점: 21학점<br>
  • 교양필수: 22학년 교양필수[인간학] 교과목 택1<br>
  • 전공: 각 학부 교육과정에 따라 67학점을 이수하며 사제동행세미나는 5~8부터 이수합니다.
</div>
<p></p>
<div>
  ▶ 사범대학, 교직이수 설치학과<br>
  • 2013학년 이후 사범대학 편입생은 학점인정 여부에 따라 5차 학기 이수가능합니다.<br>
  • 교양필수: 21학년 교양필수[인간학] 교과목 택1<br>
  • 전공: 각 학부 교육과정에 따라 67학점을 이수하며 사제동행세미나는 5~8부터 이수합니다.<br>
  • 교직: 11개 교과목 22학점 이수
</div>
<p></p>
<div>
  ▶ 기타<br>
  • 의과대학 편입생은 의과대학 학사운영규정을 따릅니다.<br>
  • 기타 지침에 규정하지 않은 사항은 학칙을 따릅니다.<br>
</div>
<div class="btn_group">
 <a class="btn_link" onclick='TransferButton()'>자세히 알아보기</a>
</div>`;

var answerl =
`<h3>🎓 편입생 학점대체인정제도 안내</h3>
<div>
	▶ 정의<br>
  • 전적 대학에서 이미 이수한 동일 교과목 또는 유사 교과목을 대체인정 받은 후, 다른 교과목을 수강하거나, 학점 이수를 면제받는 제도입니다.<br>
  • 우리 대학의 학점보다 낮은 학점의 교과목은 대체인정 받을 수 없습니다.<br>
</div>
<div>
  ▶ 절차<br>
  • 소속 단과대 교학팀학점대체인정서 양식 작성<br>
  • 교과목 담당학부(과)장 확인<br>
  • 학사운영팀 제출
</div>
<div>
  ▶ 유의사항<br>
  • 전적 대학의 2개 교과목 6학점을 대체인정 받았더라도 6학점이 면제되는 것이 아닌 다른 교과목을 수강하여 6학점을 이수하여야 합니다.
</div>
<div class="btn_group">
 <a class="btn_link" onclick='TransferButton()'>자세히 알아보기</a>
</div>`;

var answerm =
`<h3>🎓 전과제도 안내</h3>
<div>
  • 전과는 전공을 변경할 수 있는 제도입니다.<br>
  • 재학생 신분으로 2학년 이상으로 승급하는 경우에 가능합니다.<br>
  • 기간 내 전출입 학부(과)장의 동의를 얻어 전과원을 학사운영팀에 제출합니다.<br>
  • 전입한 학과의 교육과정에 따라 최소전공 이수학점을 취득합니다.<br>
  • 전출한 학과에서 이수한 전공 과목은 일반선택으로 변경합니다.<br>
  • 전과는 계열구분 없이 실시합니다.<br>
  • 다만 일부학과와 학부 내에서 전과는 불가능합니다.
</div>
<p></p>
<div class="btn_group">
 <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/499/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGY2t1JTJGMzEzJTJGYXJ0Y2xMaXN0LmRvJTNGYmJzQ2xTZXElM0QlMjZiYnNPcGVuV3JkU2VxJTNEJTI2aXNWaWV3TWluZSUzRGZhbHNlJTI2c3JjaENvbHVtbiUzRHNqJTI2c3JjaFdyZCUzRCVFQyVBMCU4NCVFQSVCMyVCQyUyNg%3D%3D')">자세히 알아보기</a>
</div>`;

var answern =
`<h3>도서관 운영시간 및 노트북 사용 안내</h3>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
        <th style="width:120px">구분</th>
        <th style="width:80px">위치</th>
        <th style="width:120px">연중</th>
        <th style="width:120px">시험기간 중</th>
        <th style="width:120px">노트북 사용</th>
			</tr>
		</thead>
		<tbody>
			<tr>
        <td>북카페</td>
				<td>2F</td>
				<td>05:00 ~<br>익일 01:00</td>
        <td>24시간 개방</td>
        <td>가능</td>
			</tr>
      <tr>
        <td>세미나룸</td>
				<td>2F</td>
				<td>09:00 ~ 20:00</td>
        <td>09:00 ~ 12:00</td>
        <td>가능</td>
			</tr>
      <tr>
        <td>대학원 스터디룸</td>
				<td>2F</td>
				<td>09:00 ~ 23:00</td>
        <td>동일</td>
        <td>가능</td>
			</tr>
      <tr>
        <td>제1,2,3 스터디룸</td>
				<td>3F</td>
				<td>09:00 ~ 23:00</td>
        <td>동일</td>
        <td>가능</td>
			</tr>
      <tr>
        <td>제1열람실</td>
				<td>3F</td>
				<td>05:00 ~<br>익일 01:00</td>
        <td>24시간 개방</td>
        <td>57-222번<br>좌석만 가능</td>
			</tr>
      <tr>
        <td>제2,C열람실</td>
				<td>4F</td>
				<td>05:00 ~<br>익일 01:00</td>
        <td>24시간 개방</td>
        <td>불가능</td>
			</tr>
      <tr>
        <td>제3열람실</td>
				<td>2F</td>
				<td>05:00 ~<br>익일 01:00</td>
        <td>24시간 개방</td>
        <td>불가능</td>
			</tr>
		</tbody>
	</table>
</div>`;

//안쓰는 부분 시작//
var answero =
`<h3>도서신청 안내</h3>
<div>
	▶ 정의<br>
  신청한 자료의 확인은 자료검색→신청자료"에서 서명, 저자명, 출판사명, 신청자이름, 신청일자등 다양한 검색항목으로 검색할 수 있으며<br>
  , 또한 개인정보관리에서 로그인한 후 신청한 도서의 처리결과를 확인할 수 있습니다. 신청한 자료는 신청자료, 선정자료, 견적접수, 구입자료<br>
  , 등록자료, 정리중, 정리완료, 대출가능 등으로 표시됩니다. 도서관홈페이지의 신청도서구입목록에서도 구입된 도서를 확인할 수 있습니다.
</div>

<div class="btn_group">
 <a class="btn_link" onclick='TransferButton()'>자세히 알아보기</a>
</div>`;

var answerp =
`<h3>신청한 도서가 “등록자료”라고 검색되는 언제쯤 대출이 가능한가요?</h3>
<div>
▶ 정의<br>
  신청한 도서를 도서관홈페이지에서 검색할 때 도서구입절차에 따라 다음과 같이 표시됩니다.<br>
</div>
<div>
  ▶ 절차<br>
  • 신청자료 : 학생들이 신청한 도서를 표시<br>
  • 선정자료 : 신청된 도서를 소장여부 확인하여 구입 결정된 도서 표시<br>
  • 주 문 중 : 출판사 및 서점으로 주문한 자료를 표시<br>
  • 견적접수 : 주문한 도서가 서점으로부터 납품 가능한 자료 표시<br>
  • 구입자료 : 주문한 도서가 검수 완료되어 납품된 상태를 표시<br>
  • 등록자료 : 자산 등록번호가 부여되어 정리실로 인계되기 전 자료<br>
  • 정 리 중 : 학술정보지원팀에서 인수된 자료를 정리(DB구축)중인 자료 표시<br>
  • 정리완료 : DB구축완료 후 각종 장비(라벨.바코드 등)를 부착중인 도서<br>
  • 대출가능 : 정리 완료된 도서가 학술정보운영팀으로 인계되어 대출가능 한 도서<br>
  • 품절/절판 : 출판사의 사정으로 더 이상 책을 출판하지 않은 경우로 구입이 불가한 상태
</div>
<div>
  ▶ 유의사항<br>
  • 위와 같이 도서구입량에 따라 그 도서구입 및 정리기간이 달라집니다. 상세한 내용은 중앙도서관 학술정보지원팀(649-7679)으로 문의바랍니다.전적 대학의 2개 교과목 6학점을 대체인정 받았더라도 6학점이 면제되는 것이 아닌 다른 교과목을 수강하여 6학점을 이수하여야 합니다.
</div>

<div class="btn_group">
 <a class="btn_link" onclick='TransferButton()'>자세히 알아보기</a>
</div>`;

var answerq =
`<h3>도서관에 소장하지 않은 자료의 구입신청은 어떻게 하나요?</h3>
<div>
	▶ 정의<br>
  • 1. 도서관 홈페이지에서 "로그인"<br>
  • 2. 홈페이지 자주찾는서비스 (MyLibrary-희망도서신청)으로 들어가 신청하면 됩니다.<br>
  • ※ 희망도서가 우리도서관에 이미 소장되어 있으면 “소장”표시가 나타납니다.<br>
  • 3. 희망도서 신청후 “확인” 버튼을 누르면 신청이 완료됩니다.
</div>`;

var answerr =
`<h3>구입 신청한 자료(희망도서)를 대출할 수 있을 때까지 기간이 얼마나 걸리나요?</h3>
<div>
	▶ 정의<br>
  • 1. 도서신청접수 및 발주 : 주 단위 취합(학기중 : 1주 1~2회, 방학중 : 2주 1회)<br>
  • 2. 도서주문과 납품 : 1~2주<br>
  • 3. 도서정리 : 1~7일<br>
  • 4. 위의 기간은 정확하게 정해진 것이 아니며, 상황에 따라 변동될 수 있습니다.<br>
  • 대략, 신청에서 대출까지는 2주~3주 정도 기간이 소요됩니다.
</div>

<div class="btn_group">
 <a class="btn_link" onclick='TransferButton()'>자세히 알아보기</a>
</div>`;

var answers =
`<h3>신청도서(희망도서)의 구입 확인은 어디서 할 수 있나요?</h3>
<div>
	▶ 정의<br>
  • 1. My Library → “희망도서신청”에 들어가면 신청도서의 처리 상태를 알 수 있습니다.<br>
  • 2. 신청도서의 정리가 완료되면 신청자의 메일로 통보가 됩니다.<br>
  • (신청자 메일 수정은 도서관홈페이지 My Library → “개인정보”에서 관리 바랍니다.)
</div>

<div class="btn_group">
 <a class="btn_link" onclick='TransferButton()'>자세히 알아보기</a>
</div>`;

var answert =
`<h3>신분별 신청 가능 금액이 초과 되었습니다, 언제쯤 초기화 되나요?</h3>
<div>
	▶ 정의<br>
  • 도서 예산에 따라 우리대학 구성원은 신분별 도서신청 금액이 정해져 있습니다.<br>
  • 적용기간은 해당년도 3월 1일부터 익년 2월 말까지로 초기화는 다음해 3월 1일이 되겠습니다.<br>
  • 따라서 신중하게 고려한 다음 꼭 필요한 책을 선정하여 신청하시기 바랍니다.<br>
  • 신분별 도서신청 금액은 수서정책에 따라 변동될 수 있습니다.
</div>

<div class="btn_group">
 <a class="btn_link" onclick='TransferButton()'>자세히 알아보기</a>
</div>`;
//안쓰는 부분 끝

var answeru =
`<h3>도서대출 이용 안내</h3>
<div>
  • 학부생: 5권, 권당 10일<br>
  • 대학원생: 7권, 권당 20일<br>
  • 기간연장: 1회 10일(대학원생 20일)<br>
  • 도서관홈페이지 > 로그인 > MyLibrary > 대출조회 및 연장<br>
  • 대출기한이 지난 자료는 대출연장 불가
</div>
<p></p>
<div class="btn_group">
 <a class="btn_link" onclick="window.open('https://library.cku.ac.kr/#/mylibrary/charges')">자세히 알아보기</a>
</div>`;

var answerv =
`<h3>도서연체 패널티 안내</h3>
<div>
  • 연체된 경우 1권당 1일이 대출정지 됩니다.<br>
  • 3권을 4일간 연체하셨다면 반납일 다음날부터 12일간 도서대출을 할 수 없습니다.
</div>`;

var answerw =
`<h3>방학중 도서반납 안내</h3>
<div>
  • 직접 방문하시거나 택배로 반납이 가능합니다.<br>
  • 택배에 소요되는 비용은 반납하는 학생이 부담하여야 합니다.<br>
  • 주소: 25601 강원도 강릉시 범일로 579번길 24 가톨릭관동대학교 중앙도서관 학술정보운영팀<br>
  • 이때에도 반납기한이 경과하였으면 경과한 만큼 제제가 따릅니다.
</div>`;

var answerx =
`<h3>시청각자료실의 DVD 대출 안내</h3>
<div>
  • 시청각자료는 자료의 특성상 1종 1점만 소장하고 있어 관외대출이 어렵습니다.<br>
  • 자세한 내용은 중앙도서관 전자정보실(649-7840)로 문의바랍니다.
</div>`;

var answery =
`<h3>도서분실 안내</h3>
<div>
  • 대출한 도서와 동일한 도서(저자, 서명, 출판사가 동일)로 변상<br>
  • 분실한 도서의 정가에 2배에 해당하는 금액으로 변상<br>
  • 분실즉시 도서관에 신고하여야 합니다.<br>
  • 신고하지 않을시 반납기한의 연체로 인한 대출금지제제를 받을 수 있습니다.
</div>`;

var answerz =
`<h3>강의실 명칭 안내</h3>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
        <th style="width:100px">약칭</th>
        <th style="width:140px">건물명</th>
			</tr>
		</thead>
		<tbody>
			<tr>
        <td>마리아</td>
				<td>마리아관</td>
			</tr>
      <tr>
        <td>세바스티아노A/B</td>
				<td>세바스티아노 스포츠센타A/B</td>
			</tr>
      <tr>
        <td>보조경기장</td>
				<td>세바스티아노 보조경기장</td>
			</tr>
      <tr>
        <td>바오로</td>
				<td>바오로관(구 청송관)</td>
			</tr>
      <tr>
        <td>진실</td>
				<td>진실관</td>
			</tr>
      <tr>
        <td>미카엘</td>
				<td>미카엘관</td>
			</tr>
      <tr>
        <td>요셉</td>
				<td>요셉관</td>
			</tr>
      <tr>
        <td>가브리엘</td>
				<td>가브리엘관</td>
			</tr>
      <tr>
        <td>요한보스코</td>
				<td>요한보스코관</td>
			</tr>
      <tr>
        <td>라파엘</td>
				<td>라파엘관</td>
			</tr>
      <tr>
        <td>대건</td>
				<td>대건관</td>
			</tr>
      <tr>
        <td>하상</td>
				<td>하상관</td>
			</tr>
      <tr>
        <td>창조</td>
				<td>창조관</td>
			</tr>
		</tbody>
	</table>
</div>
<div>
  • 예시: 마리아219 / 마리아관 2층 219호
</div>`;

var answeraa =
`<h3>휴일 도서반납 안내?</h3>
<div>
  • 도서관 업무 종료 이후, 휴일에도 대출한 도서를 반납할 수 있습니다.<br>
  • 도서관 입구와 2층 메인 안내데스크 옆에 비치된 무인반납함에 대출한 도서를 넣으시면 됩니다.<br>
  • 그러나 분실등의 위험이 따르니 가능한 도서관 업무시간내에 반납하기를 권합니다.
</div>`;

var answerab =
`<h3>교내 무선인터넷 이용안내</h3>
<div>
	▶ WI-FI ID 안내 <br>
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
      <th style="width:120px">SSID</th>
        <th style="width:120px">용도</th>
        <th style="width:120px">비고</th>
			</tr>
		</thead>
		<tbody>
			<tr>
        <td>Mobile_CKU</td>
				<td>인터넷 접속</td>
				<td>ID와 패스워드 입력</td>
			</tr>
      <tr>
        <td>Welcome_CKU</td>
				<td>외부인 대상 임시 ID신청</td>
				<td>ID와 패스워드는 자동 발급, Mobile_CKU로 재접속</td>
			</tr>
		</tbody>
	</table>
</div>
<p></p>
<div>
	▶ 로그인 ID 및 패스워드 안내 <br>
</div>
<div class="table-box">
	<table class="table table--min" cellspacing="15" cellpadding="0">
		<thead>
			<tr>
      <th style="width:120px">구분</th>
        <th style="width:180px">ID</th>
        <th style="width:120px">패스워드</th>
			</tr>
		</thead>
		<tbody>
			<tr>
        <td>구성원</td>
				<td>사번/학번</td>
				<td>주민번호 뒤 7자리</td>
			</tr>
      <tr>
        <td>외부인</td>
				<td>신청ID</td>
				<td>ID신청 시 발급받은 패스워드</td>
			</tr>
		</tbody>
	</table>
</div>`;

var answerac =
`<h3>학교 이메일 사용 안내</h3>
<div>
  ▶ 이용 절차<br>
  • 홈페이지 > 웹메일 > 약관 동의 및 비밀번호 입력 > Google 이용 동의 > 이용 가능
</div>
<div>
  ▶ 문의 사항<br>
  • 전산정보팀 – 033) 649-7864 
</div>`;

var answerad =
`<h3>학자금 대출 안내</h3>
<div>
	▶ 일반 상환 학자금대출<br>
  • 원금과 이자를 매월 납부해야됩니다.<br>
  <br>
</div>
<div>
  ▶ 취업 후 상환 학자금대출<br>
  • 취업 후 상환은 연봉이 일정 수준 이상되면 거치기한, 유예기간이 끝나고 대출금을 상환해야 됩니다.<br>
  • 일정 소득 이하이면 거치기한,유예기간이 대출금을 납부할수있을 만큼 나누어 납부하여도 됩니다.<br>
  <br>
</div>
<div>
  ▶ 분할 납부<br>
  • 정해진 기간에 나뉘어 4번 납부합니다.<br>
  <br>
</div>

<div class="btn_group">
 <a class="btn_link" onclick="window.open('https://www.kosaf.go.kr')">자세히 알아보기</a>
</div>`;

var answerae =
`<h3>Office 365 이용 안내</h3>
<div>
  • 학교 이메일만 있으면 무료로 이용이 가능합니다.<br>
  • 아래의 버튼을 통해 신청 페이지로 이동 후 학교 이메일 주소를 입력합니다.<br>
  • 받은 인증 메시지를 통해 인증이 끝나면 무료로 사용할 수 있습니다.<br>
  <br>
</div>
<div class="btn_group">
<a class="btn_link" onclick="window.open('https://www.microsoft.com/ko-kr/education/products/office')">Office 365 신청하기</a>
</div>`;

var answeraf =
`<h3>수강신청 사이트 이용 안내</h3>
<div>
  • 홈페이지 혹은 아래의 버튼을 클릭하여 사이트에 접속합니다.<br>
  • 로그인 (ID:학번/Password:생년월일 혹은 비밀번호)<br>
  <br>
</div>

<div class="btn_group">
 <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/501/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGY2t1JTJGMzE1JTJGMTk0JTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDIlMjZzcmNoQ29sdW1uJTNEc2olMjZzcmNoV3JkJTNEJTI2YmJzQ2xTZXElM0Q4NDUlMjZiYnNPcGVuV3JkU2VxJTNEJTI2cmdzQmduZGVTdHIlM0QlMjZyZ3NFbmRkZVN0ciUzRCUyNmlzVmlld01pbmUlM0RmYWxzZSUyNnBhc3N3b3JkJTNEJTI2')">수강신청 하러가기</a>
</div>`;

var answerag =
`<h3>졸업 요건 안내</h3>
<div>
	▶ 학년별 수료학점<br>
  • 1학년 33학점<br>
  • 2학년 65학점<br>
  • 3학년 98학점<br>
  • 4학년 130학점<br>
  • 5학년 160학점 (건축학전공)<br>
  • 6학년 230학점 이상(의학과)<br>
  • 입학연도에 따라 변동이 있을 수 있습니다.<br>
  <br>
</div>

<div class="btn_group">
 <a class="btn_link" onclick='mpButton()'>자세히 알아보기</a>
</div>`;

var answerah =
`<h3>복수전공이란?</h3>
<div>
  • 일반 복수전공은 학생이 자신이 이수하는 주 전공 외에 다른 전공의 최소전공 인정학점(36이상)을 취득 하여 2개이상의 전공을 이수하는 것입니다.<br>
  • 교직 복수전공은 사범대학이나 교직과정을 이수중인 학생이 사범대학 학과 또는 교직과정 설치된 학과(전공)의 전공과목을 50학점 이상 이수할 경우 2개의 교원자격증을 취득할 수 있습니다.
<div>`;

var answerai =
`<h3>부전공이란?</h3>
<div>
  • 부전공은 학생이 자신이 선택한 학부(과) 외의 학과 또는 전공에서 제공 교과목을 규정학점(21학점)이상 이수하였을 때 졸업증서에 부전공 과목을 표시하는 것을 말합니다.
</div>`;

var answeraj =
`<h3>조기졸업 제도 안내</h3>
<div>
  • 성적이 우수한 학생에게 한 학기 또는 1년 전에 졸업할 수 있는 기회를 주는 제도입니다.<br>
  • 전 학년 성적 평점 평균이 4.0 이상이어야 합니다.<br>
  • 성적을 포기한 사실이 없어야 하며 조기졸업 시점까지 모든 졸업요건을 갖추면 됩니다.<br> 
  • 학과마다 이수하여야 할 과목에 따라 상이합니다.<br>
  • 조기졸업에 대한 일정과 세부적인 요건에 대한 사항은<br>
    아래 사이트로 이동 후에 [조기졸업 신청원 접수 계획 안내(매 학기 공지예정)] 참조하여 주세요
</div>

<div class="btn_group">
  <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/499/subview.do')">학사공지 보러가기</a>
</div>`;

var answerak =
`<h3>재수강 성적포기 안내</h3>
<div>
  • 취득한 성적이 낮을 경우 재수강 하여 낮은 성적의 과목을 포기 할 수 있습니다.<br>
  • 재수강 성적포기의 경우 수강신청이 재수강 성적포기 신청보다 앞서 실시되므로 미리 재수강과목을 수강 신청하여야 합니다.<br>
  • 대체과목이나 대체영역이 지정되지 않은 과목은 성적포기가 불가능합니다.<br>
  • 재수강 성적포기는 한 학기 2과목 이내에서 가능하며, 동일교과목에 대한 재수강 횟수는 2회로 제한합니다.<br>
  • 재수강할 수 있는 교과목의 성적은 “C+” 이하이어야 하며, 재수강을 통한 성적은 “B+”까지만 취득 가능합니다.<br>
  • 재수강 성적포기를 하였더라도 성적증명서에서 삭제되지는 않으며 평점 산정에서만 제외합니다.<br>
  • 재수강 성적포기 일정과 자세한 사항은 학사공지를 참고해주세요.<br>
  <br>
</div>
<div>
  ▶ 절차<br>
  • 소속 단과대 교학팀학점대체인정서 양식 작성<br>
  • 교과목 담당학부(과)장 확인<br>
  • 학사운영팀 제출<br>
  <br>
</div>
<div class="btn_group">
  <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/499/subview.do')">학사공지 보러가기</a>
</div>`;

var answeral =
`<h3>사제동행세미나 안내</h3>
<div>
  • 사제동행세미나는 학생들에게 대학 생활, 진로, 역량 배양, 취업과 관련한 지도 및 상담을 제공하는 것을 목적으로 합니다.<br>
  • 자세한 내용은 소속학과 교학팀에 문의해주시기 바랍니다.
</div>
<div class="btn_group">
 <a class="btn_link" onclick='depphoneButton()'>교내 연락처 안내</a>
</div>`;

var answeram =
`<h3>계절학기 안내</h3>
<div>
  • 계절학기는 동계 및 하계 방학 중 과목을 개설하고 과목을 수강하여 학점을 취득합니다.<br>
  • 최대 이수 가능학점은 9학점이며 1학점당 소정의 수강료가 부과됩니다.<br>
  • 강의는 주당 5일로 하고, 학점당 강의시간은 정규학기와 동일합니다.<br>
  • 계절학기 성적은 정규학기 성적과 별도로 표시됩니다.<br>
  • 자세한 사항은 학사공지를 참조하여 주시기 바랍니다.<br>

</div>
<div class="btn_group">
  <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/499/subview.do')">학사공지 보러가기</a>
</div>`;

var answeran =
`<h3>학점교류 안내</h3>
<div>
  • 타 대학에서 개설한 과목을 수강하여 학점을 취득할 수 있는 제도입니다.<br>
  <br>
  • <학점 교류 대학><br>
  • 가톨릭대,대구가톨릭대,부산가톨릭대,서강대<br>
  • 경남대,계명대,아주대,울산대,전주대,한남대<br>
  • 호남대,한양대,중앙대,인천대,강릉원주대,명지대<br>
  <br>
  • 신청대상은 우리대학 2,3학년 학생 중, 전체 성적평점이 3.0이상인 학생입니다.<br>
  • 대상학기는 정규학기(1,2학기),계절학기입니다.<br>
  • 교류학점, 인정 범위, 신청시기는 학교마다 상이합니다.<br>
  • 자세한 사항은 학사공지를 참고해주세요.
</div>

<div class="btn_group">
    <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/499/subview.do')">학사공지 보러가기</a>
</div>`;

var answerao =
`<h3>조기 취업자 출석 및 학점인정 안내</h3>
<div>
  • 조기 취업자는 최종 학기 등록을 마친 재학생 중 국내/외 산업체에 취업을 한 학생을 말합니다.<br>
  • 개강일 또는 사유 발생일 다음날 각 수업담당 교수님께 사실을 알린 후, 신청원 및 구비서류를 준비하여 신청합니다.<br>
  • 사범대학 및 비사범계 교직과정 이수자는 '교육봉사' 또는 '응급처치및심폐소생술' 교과목을 제외한 교직 교과목, 기본이수영역 교과목, 교과교육영역 교과목은 조기 취업원으로 인정 불가합니다.(교직과정 이수를 포기할 경우에만 가능)<br>
  • 해당 학생은 준수사항 및 과정을 이행하지 않아 불이익을 받지 않도록 사전에 준비하시기 바랍니다.<br>
  <br>
  ▶ 해외취업자의 경우<br>
  • 취업비자 사본<br>
  • 근로계약서 사본<br>
  • 재직증명서 (개강/종강 때 각각 1번 제출)<br>
  <br>
</div>

<div class="btn_group">
    <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/501/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGY2t1JTJGMzE1JTJGYXJ0Y2xMaXN0LmRvJTNGYmJzQ2xTZXElM0QlMjZiYnNPcGVuV3JkU2VxJTNEJTI2aXNWaWV3TWluZSUzRGZhbHNlJTI2c3JjaENvbHVtbiUzRHNqJTI2c3JjaFdyZCUzRCVFQyVBMSVCMCVFQSVCOCVCMCslRUMlQjclQTglRUMlOTclODUlMjY%3D')">자세히 알아보기</a>
</div>`;

var answerap =
`<h3>기숙사 외부인 방문 규정 안내</h3>
<div>
  • 가능시간 : 오전9시 ~ 오후5시<br>
  • 가능구역 : 각 호관 1층 로비만 가능 (단, 남자 사생의 남자 호관 운동시설 이용의 경우는 가능함)<br>
  • 사생은 사감이나 관리 사무실의 허락 없이 외부인을 사생 방이나 식당 등 생활관 내에 출입 시킬 수 없으며, 특히 외부인의 동행은 퇴사 조치됩니다.<br>
  • 외부인의 사내 무단출입으로 인하여 각종 도난 및 분실사고가 빈번히 발생할 우려가 있고, 사내 질서 문란에 대한 책임을 물어, 강력히 처벌되오니 숙지하시기 바랍니다.
</div>`;

var answeraq =
`<h3>졸업사정 안내</h3>
<div>
  • 직접조회: 종합정보 > 학적관리 > 전체성적조회 > 취득학점<br>
  • 혹은 본인 소속학과 교학팀에 졸업사정으로 확인하세요.<br>
</div>

<div class="btn_group">
  <a class="btn_link" onclick="window.open('https://info.cku.ac.kr/haksa/common/loginForm2.jsp')">종합정보 바로가기</a>
  <a class="btn_link" onclick='hakjumButton()'>부족한 학점 조회</a>
</div>`;

var answerar =
`<h3>졸업 연기 제도 안내</h3>
<div>
	▶ 졸업연기 제도 안내<br>
  • 대상: 8차 학기 이상 이수 후 졸업요건을 충족하고, 졸업을 연기하려는 자<br>
  • 기간: 매 학기(5월/ 11월)<br>
  • 방법: 졸업연기 신청원 작성 및 지도교수 상담 후, 단과대학 통합교학팀 방문 제출<br>

  ▶ 졸업연기 유형<br>
  • 가. 교과목 계속 이수자: 교양 및 일반선택 교과목을 추가 이수하는 과정<br>
  • 나. 취업 심화교육 이수자: 자기개발 및 취업역량 강화를 목적으로 전공 혹은 취업 관련 교과목, 평생교육원 등의 교외 교육과정을 이수하는 과정<br>
  •  1) 전공심화과정: 취업 심화를 목적으로 전공 교과목을 이수하는 과정<br>
  •  2) 현장실습과정(인턴쉽 포함): 전공 및 진로 관련 분야의 기업에서 실습을 참여하여 취업역량 강화를 목적으로 현장실습 관련 교과목을 이수하는 과정<br>
  •  3) 진로준비과정: 교내·외 교육기관에서 자격증 취득 또는 취업기초역량 준비에 필요한 강좌 수강하는 과정<br>
  <br>
</div>

<div>
  ▶ 졸업연기 신청 취소<br>
  • 졸업연기 신청 취소는 해당 학기의 학위수여일 7일 전까지 가능하며, 졸업확정일 후에는 취소 불가합니다.<br>
  • 방법: 졸업연기 신청 취소원 작성 및 지도교수 상담 후, 단과대학 통합교학팀 방문 제출<br>
  <br>
</div>

<div>
  ▶ 유의사항<br>
  • 졸업연기는 학기 단위로 신청합니다.<br>
  • 졸업연기 신청자는 휴학 신청이 불가합니다.<br>
  • 졸업연기 신청자는 마지막 학년의 재학생 신분이며, 졸업예정자로 구분합니다.<br>
  • 졸업연기 신청자는 신청유형과 신청 학점에 따라 차등 부과됩니다.<br>
  • 졸업연기 신청자는 등록금 분납이 불가합니다.<br>
  <br>
</div>

<div class="btn_group">
    <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/499/subview.do')">학사공지 보러가기</a>
</div>`;

var answeras =
`<h3>수강포기 안내</h3>
<div>
  • 수강포기는 2개 교과목까지 신청 가능합니다.<br>
  • 수강포기 후, 잔여학점은 1학년 1학기 ~ 4학년 1학기 학생은 10학점 이상<br>
  • 최종학기의 학생은 4학점 이상이어야 합니다.(권장)<br>
  • 장학대상자는 수강포기 후, 잔여학점이 장학금 수혜 기준을 충족하여야 합니다.<br>
  • 수강포기 신청 후, 다른 교과목으로 수강변경은 불가합니다.<br>
  • 수강포기를 신청한 학점 수만큼 다음 학기에 추가신청 불가합니다.<br>
  • 수강포기한 교과목은 성적평가와 평점평균 계산에서 제외됩니다.<br>
  • 수강포기한 교과목은 기존 납부한 등록금에 영향을 주지 않습니다.<br>
  • 수강포기 신청 후, 정상적으로 신청되었는지 신청내역을 확인하세요.<br>

</div>
<div>
  ▶ 추가문의<br>
  • 학사운영팀(033-649-7061)
</div>`;

var answerat =
`<h3>봉사와 실천 강의 안내</h3>
<div>
  • 봉사와 실천[Ⅰ,Ⅱ] 수강생은 세미나를 이수해야 봉사를 인정받을 수 있습니다.<br>
  • 봉사와 실천 세미나 종료 후 이수자는 이수증을 수령해야 합니다.<br>
  • 1학기에 Ⅰ을 이수하고, 2학기에 Ⅱ을 추가 이수하려는 학생은 세미나를 이수하세요.<br>
  • 봉사 교과목은 한 학기당 1과목만 신청할 수 있습니다.<br>
</div>`;

var answerau =
`<h3>비교과 활동 신청 안내</h3>
<div>
  • T-베루미 > 비교과 활동 > 추천/이달의 프로그램 신청 혹은 학생 직접 신청
</div>
<div class="btn_group">
    <a class="btn_link" onclick="window.open('https://tverumi.cku.ac.kr)">T-베루미 바로가기</a>
</div>`;

var answerav =
`<h3>교양 교과목 교육 과정 안내</h3>
<div>
  • 교육과정은 입학연도에 따라 달라집니다.<br>
  • 수강신청 전에 반드시 확인해주세요.<br>
  • 아래의 사이트로 이동하여 해당하는 연도의 파일을 참고해주세요.<br>
  <br>
</div>

<div class="btn_group">
  <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/501/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGY2t1JTJGMzE1JTJGMTk1JTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDElMjZzcmNoQ29sdW1uJTNEc2olMjZzcmNoV3JkJTNEJUVBJUI1JTkwJUVDJTlDJUExJUVBJUIzJUJDJUVDJUEwJTk1JTI2YmJzQ2xTZXElM0QlMjZiYnNPcGVuV3JkU2VxJTNEJTI2cmdzQmduZGVTdHIlM0QlMjZyZ3NFbmRkZVN0ciUzRCUyNmlzVmlld01pbmUlM0RmYWxzZSUyNnBhc3N3b3JkJTNEJTI2')">교육과정 확인하기</a>
</div>`;

var answeraw =
`<h3>기숙사 우편물 수령 안내</h3>
<div>
	▶ 일반 우편물 수령<br>
  •  각 생활관 사생사무실에서 직접 수령<br>
  <br>
  ▶ 특수 우편물 수령(등기, 소포)<br>
  • 09:00 ~ 17:00: 5생활관 1층 행정사무실에서 본인확인 후 수령(신분증 지참)<br>
  • 등기 수령 안내: 전화 및 문자 발송<br>
  • 등기수령일자로 10일이내 미수령 시, 반송 조치 실시<br>
  • 반송에 따른 개인적 피해는 책임지지 않습니다.<br>
  • 등기 발송 시 해당 생활관 기재 필요<br>
  <br>
  ▶ 택배<br>
  • 생활관 사무실에서 보관하지 않음. 택배기사와 직접 연락 후 수령하세요.<br>
  • 1생활관, 5생활관은 5생활관에서 수령<br>
  • 2생활관, 3생활관, 6생활관은 6생활관에서 수령<br>
  • 4생활관은 4생활관에서 수령<br>
  • 택배 수령 장소 : 각 생활관 로비<br>
  • 분실시 사무실과는 무관합니다.<br>
  <br>
  ▶ 생활관 주소<br>
  • 25601 강원도 강릉시 범일로 579번길 24 가톨릭관동대학교 생활관<br>
  • X생활관 XXXX호 XXX 앞<br>
</div>`;

var answerax =
`<h3>기숙사 생활규정 안내</h3>
<div>
  • [홈페이지 > 대학생활 > 시설안내 > 기숙사 > 학생생활안내]<br>
  • 혹은 하단의 버튼을 클릭하여 확인해주세요.<br>
  <br>
</div>
<div class="btn_group">
    <a class="btn_link" onclick="window.open('https://dorm.cku.ac.kr/cont/?code=020100')">생활안내/사생수칙</a>
</div>`;

var answeray =
`<h3>등록금 납부 내역 및 통지서 조회 안내</h3>
<div>
  • [종합정보 > 학적관리 > 등록금납부확인서]<br>
  • [종합정보 > 학적관리 > 등록금 통지서 출력]<br>
  <br>
</div>
<div class="btn_group">
    <a class="btn_link" onclick="window.open('https://info.cku.ac.kr/haksa/common/loginForm2.jsp)">종합정보 바로가기</a>
</div>`;

var answeraz =
`<h3>동아리 가입 안내</h3>
<div>
  • 축제기간/부원 모집기간에 가입하거나 해당 동아리에 문의해주세요.
</div>`;

var answerba =
`<h3>복수전공 변경 안내</h3>
<div>
  • 복수전공 변경은 복수전공 취소 후 다시 신청하시면 됩니다.<br>
  • 복수전공 취소는 마리아관 학사운영팀에 방문하여 가능합니다.<br>
  • 다시 신청은 본신청기간 때 종합정보시스템에서 신청해주시면 됩니다.
</div>
<div class="btn_group">
  <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/499/subview.do')">종합정보 바로가기</a>
</div>`;

var answerbb =
`<h3>수강신청 방법 안내</h3>
<div>
  • 홈페이지 혹은 아래의 버튼을 클릭하여 사이트에 접속합니다.<br>
  • 로그인 (ID:학번/Password:생년월일 혹은 비밀번호)<br>
  • 자세한 수강신청 사이트 이용법은 아래 메뉴를 이용해주세요.<br>
  <br>
</div>
<div class="btn_group">
  <a class="btn_link" onclick="window.open('https://www.cku.ac.kr/cku/501/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGY2t1JTJGMzE1JTJGMTk0JTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDIlMjZzcmNoQ29sdW1uJTNEc2olMjZzcmNoV3JkJTNEJTI2YmJzQ2xTZXElM0Q4NDUlMjZiYnNPcGVuV3JkU2VxJTNEJTI2cmdzQmduZGVTdHIlM0QlMjZyZ3NFbmRkZVN0ciUzRCUyNmlzVmlld01pbmUlM0RmYWxzZSUyNnBhc3N3b3JkJTNEJTI2')">자세히 알아보기</a>
  <a class="btn_link" onclick="window.open('https://http://sukang.cku.ac.kr')">수강신청 하러가기</a>
</div>`;

var answerbc =
`<h3>사제동행세미나란?</h3>
<div>
  • 사제동행세미나는 학생들에게 대학 생활, 진로, 역량 배양, 취업과 관련한 지도 및 상담을 제공하는 것을 목적으로 합니다.
</div>`;

var answerbd =
`<h3>연계전공 안내</h3>
<div>
	▶ 안녕하세요 학사운영팀입니다.<br>
  • 다전공 관련 질문이신것 같습니다. 
  • 연계전공을 여러 전공 이수가 가능합니다. 
  • 다만 전산으로 신청이 불가능하기 때문에 신청기간내(2019학년도는 신청종료)에 학사운영팀 방문하셔서 신청하시면 되겠습니다. 
  • 참고로 다전공을 추가 신청하여도 추가학점이 주어지지 않으며 8학기내에 졸업이 어려울수있으니 신중히 선택하여주시기 바랍니다. 감사합니다.
</div>`;


newQuestion = function sendQuestion() {
  return[
    answera, answerb, answerc, answerd, answere, answerf, answerg,
    answerh, answeri, answerj, answerk, answerl, answerm, answern,
    answero, answerp, answerq, answerr, answers, answert, answeru,
    answerv, answerw, answerx, answery, answerz, answeraa, answerab,
    answerac, answerad, answerae, answeraf, answerag, answerah, answerai,
    answeraj, answerak, answeral, answeram, answeran, answerao, answerap,
    answeraq, answerar, answeras, answerat, answerau, answerav, answeraw,
    answerax, answeray, answeraz, answerba ]
}