var coll = document.getElementsByClassName('collapsible');

// 챗봇 클릭하면 떠오르게.
for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
/*
// 챗봇 시작할 때 시간 받아서 출력.
function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours //7시의 경우 07시로 표시
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let time = hours + ":" + minutes;
    return time;
}
*/

// 시작 메시지
/*
function firstBotMessage(){
    let firstMessage = "안녕하세요! 지원하는 명령어는 '!명령어'를 입력하시면 됩니다"
    document.getElementById("botStarterMessage").innerHTML = "<p class='botText'><span>" + firstMessage + '</span></p>';

    let time = getTime();
    
    $('#chat-timestamp').append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();
*/
//대답
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHTML = `<div class="botText"><span>${botResponse}</span></div><p></p>`;
    $("#chatbox").append(botHTML);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//응답 얻기
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "질문을 다시해주세요.";
    }

    let userHTML = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
}

//메시지 전달
function sendButton() {
    getResponse();
}

//도움말
function heartButton() {
    buttonSendText("임시")
}

//enter 키 눌러 메시지 보내기
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
})

//menuButton = 메뉴
function menuButton() {
    getHardResponse(`menu`);
}
//kkmenuButton = 교육과정 전체메뉴
function kkinfoButton() {
    getHardResponse(`kkinfo`);
}
//phoneinfoButton = 연락처 전체메뉴
function phoneinfoButton() {
    getHardResponse(`phoneinfo`);
}
function facilinfoButton() {
    getHardResponse(`facilinfo`);
}

//kkButton = 교육과정
function kkButton() {
    getHardResponse(`교육과정`);
}
//mpButton = 최소이수학점
function mpButton() {
    getHardResponse(`최소이수학점`);
}
//hakjumButton = 졸업까지 남은학점
function hakjumButton() {
    getHardResponse(`남은학점`);
}
function haksafaqButton() {
    window.open("https://www.cku.ac.kr/cku/501/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGY2t1JTJGMzE1JTJGYXJ0Y2xMaXN0LmRvJTNGYmJzQ2xTZXElM0Q4NDUlMjZiYnNPcGVuV3JkU2VxJTNEJTI2aXNWaWV3TWluZSUzRGZhbHNlJTI2c3JjaENvbHVtbiUzRHNqJTI2c3JjaFdyZCUzRCUyNg%3D%3D", "학사제도 FAQ");
}
//scheduleButton = 일정
function scheduleButton() {
    getHardResponse(`달력선택`);
}
function maButton() {
    selectMonth(1);
    getHardResponse(`학사일정`);
}
function mbButton() {
    selectMonth(2);
    getHardResponse(`학사일정`);
}
function mcButton() {
    selectMonth(3);
    getHardResponse(`학사일정`);
}
function mdButton() {
    selectMonth(4);
    getHardResponse(`학사일정`);
}
function meButton() {
    selectMonth(5);
    getHardResponse(`학사일정`);
}
function mfButton() {
    selectMonth(6);
    getHardResponse(`학사일정`);
}
function mgButton() {
    selectMonth(7);
    getHardResponse(`학사일정`);
}
function mhButton() {
    selectMonth(8);
    getHardResponse(`학사일정`);
}
function miButton() {
    selectMonth(9);
    getHardResponse(`학사일정`);
}
function mjButton() {
    selectMonth(10);
    getHardResponse(`학사일정`);
}
function mkButton() {
    selectMonth(11);
    getHardResponse(`학사일정`);
}
function mlButton() {
    selectMonth(12);
    getHardResponse(`학사일정`);
}
function calenderButton() {
    window.open("https://www.cku.ac.kr/cku/428/subview.do", "학사일정");
}

function iljung(monthSelect) {
    if (monthSelect == 1) {
        maButton();
    }
    else if (monthSelect == 2) {
        mbButton();
    }
    else if (monthSelect == 3) {
        mcButton();
    }
    else if (monthSelect == 4) {
        mdButton();
    }
    else if (monthSelect == 5) {
        meButton();
    }
    else if (monthSelect == 6) {
        mfButton();
    }
    else if (monthSelect == 7) {
        mgButton();
    }
    else if (monthSelect == 8) {
        mhButton();
    }
    else if (monthSelect == 9) {
        miButton();
    }
    else if (monthSelect == 10) {
        mjButton();
    }
    else if (monthSelect == 11) {
        mkButton();
    }
    else if (monthSelect == 12) {
        mlButton();
    }
}

//교육과정
function kkButton() {
    getHardResponse(`교육과정`);
}
function swButton() {
    getHardResponse(`소프트웨어학과 교육과정`);
}
function archButton() {
    getHardResponse(`건축학부 교육과정`);
}
function archeButton() {
    getHardResponse(`건축공학과 교육과정`);
}
function elecButton() {
    getHardResponse(`전자공학과 교육과정`);
}
function civilButton() {
    getHardResponse(`토목공학과 교육과정`);
}
function kkSelect(kk) {
    if (kk == 1) {
        archeButton();
    }
    else if (kk == 2) {
        archButton();
    }
    else if (kk == 3) {
        swButton();
    }
    else if (kk == 4) {
        elecButton();
    }
    else if (kk == 5) {
        civilButton();
    }
}

//최소이수학점
function mpButton() {
    getHardResponse(`최소이수학점`);
}
function ttyearButton() {
    getHardResponse(`2022학번 이수학점`);
}
function toyearButton() {
    getHardResponse(`2021학번 이수학점`);
}
function tzyearButton() {
    getHardResponse(`2020학번 이수학점`);
}
function onyearButton() {
    getHardResponse(`2019학번 이수학점`);
}
function oeyearButton() {
    getHardResponse(`2018학번 이수학점`);
}
function osyearButton() {
    getHardResponse(`2017학번 이수학점`);
}
function osixyearButton() {
    getHardResponse(`2016학번 이수학점`);
}
function ofyearButton() {
    getHardResponse(`2015학번 이수학점`);
}
function ofouryearButton() {
    getHardResponse(`2014학번 이수학점`);
}
function othreeyearButton() {
    getHardResponse(`2013학번 이수학점`);
}
function otyearButton() {
    getHardResponse(`2012학번 이수학점`);
}
function ooyearButton() {
    getHardResponse(`2011학번 이수학점`);
}
function ozyearButton() {
    getHardResponse(`2010학번 이수학점`);
}
function nyearButton() {
    getHardResponse(`2009학번 이수학점`);
}
function eyearButton() {
    getHardResponse(`2008학번 이수학점`);
}
function mpSelect(year) {
    if (year == 2022) {
        ttyearButton();
    }
    else if (year == 2021) {
        toyearButton();
    }
    else if (year == 2020) {
        tzyearButton();
    }
    else if (year == 2019) {
        onyearButton();
    }
    else if (year == 2018) {
        oeyearButton();
    }
    else if (year == 2017) {
        osyearButton();
    }
    else if (year == 2016) {
        osixyearButton();
    }
    else if (year == 2015) {
        ofyearButton();
    }
    else if (year == 2014) {
        ofouryearButton();
    }
    else if (year == 2013) {
        othreeyearButton();
    }
    else if (year == 2012) {
        otyearButton();
    }
    else if (year == 2011) {
        ooyearButton();
    }
    else if (year == 2010) {
        ozyearButton();
    }
    else if (year == 2009) {
        nyearButton();
    }
    else if (year == 2008) {
        eyearButton();
    }
}

//교내 연락처
//주요연락처
function mainphoneButton() {
    getHardResponse(`주요 연락처`);
}
//전체연락처
function phonepop() {
    window.open("../images/phone.png", "phone", "history=no,resizable=no,status=no,scrollbars=yes,menubar=no,location=no");
}
//학과연락처
function depphoneButton() {
    getHardResponse(`학과연락처`);
}
function swpButton() {
    getHardResponse(`소프트웨어학과 연락처`);
}
function archpButton() {
    getHardResponse(`건축학부 연락처`);
}
function archepButton() {
    getHardResponse(`건축공학과 연락처`);
}
function elecpButton() {
    getHardResponse(`전자공학과 연락처`);
}
function civilpButton() {
    getHardResponse(`토목공학과 연락처`);
}
function depphoneSelect(dep) {
    if (dep == 1) {
        archepButton();
    }
    else if (dep == 2) {
        archpButton();
    }
    else if (dep == 3) {
        swpButton();
    }
    else if (dep == 4) {
        elecpButton();
    }
    else if (dep == 5) {
        civilpButton();
    }
}
//캠퍼스맵
function mappop() {
    window.open("../images/campusmap.jpg", "map", "history=no,resizable=no,status=no,scrollbars=yes,menubar=no,location=no");
}

//기타
function TransferButton() { //편입생 정보 페이지
    window.open("https://www.cku.ac.kr/cku/501/subview.do?enc=Zm5jdDF8QEB8JTJGYmJzJTJGY2t1JTJGMzE1JTJGMzQwJTJGYXJ0Y2xWaWV3LmRvJTNGcGFnZSUzRDElMjZzcmNoQ29sdW1uJTNEc2olMjZzcmNoV3JkJTNEJUVEJThFJUI4JUVDJTlFJTg1JTI2YmJzQ2xTZXElM0QlMjZiYnNPcGVuV3JkU2VxJTNEJTI2cmdzQmduZGVTdHIlM0QlMjZyZ3NFbmRkZVN0ciUzRCUyNmlzVmlld01pbmUlM0RmYWxzZSUyNnBhc3N3b3JkJTNEJTI2", "편입생 확인사항 안내");
}
function jonghapButton() { //종합정보
    window.open("https://info.cku.ac.kr/haksa/common/loginForm2.jsp", "종합정보");
}