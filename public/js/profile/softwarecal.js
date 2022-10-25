document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: { // 헤더에 표시할 툴 바
            left: ' dayGridMonth,dayGridWeek,listDay',
            center: 'title ',
            right: 'prev,next '
        },
        googleCalendarApiKey: 'AIzaSyBaZsXvzqjnTqvRMec6BjYPJ6VGUzKB4wE',
        eventSources: [
            {
                googleCalendarId: 'amq8pktc5ccofd65eao6u4lefs@group.calendar.google.com',
                className: '가톨릭관동대학교 학사일정',
                color: 'blueberry',
            },
            {
                googleCalendarId: 'nht1vsdqh4k7ss990qa827h1bg@group.calendar.google.com',
                className: '소프트웨어학과 관련일정',
                color: '#0f7720',
            },
            {
                googleCalendarId: 'ko.south_korea#holiday@group.v.calendar.google.com',
                className: '공휴일',
                color: '#be5683',
            }
        ],
        eventClick: function (info) {
            let start_year = info.event.start.getUTCFullYear();
            let start_month = info.event.start.getMonth() + 1;
            let start_date = info.event.start.getUTCDate();
            let start_hour = info.event.start.getHours();
            let end_hour = info.event.end.getHours();

            let start = start_year + "-" + start_month + "-" + start_date + " " + start_hour + "시 ~ " + end_hour + "시";

            let attends = "";
            info.event.extendedProps.attachments.forEach(function (item) {
                attends += "<div><a href='" + item.fileUrl + "' target='_blank'>[첨부파일]</a></div>"
            });

            if (!info.event.extendedProps.description) {
                info.event.extendedProps.description = "";
            }
            let contents = `
                <div style='font-weight:bold; font-size:20px; margin-bottom:30px; text-align:center'>
                    ${start}
                </div>
                <div style='font-size:18px; margin-bottom:20px'>
                    ${info.event.title}
                </div>
                <div class="caldescrip">
                    ${info.event.extendedProps.description}
                    ${attends}
                </div>
              `;

            $("#popup").html(contents);
            $("#popup").bPopup({
                speed: 650,
                transition: 'slideIn',
                transitionClose: 'slideBack',
                position: [($(document).width() - 500) / 2, 30], //x, y
            });
            info.jsEvent.stopPropagation();
            info.jsEvent.preventDefault();
        },
        /*
        eventDidMount: function (info) {
            tippy(info.el, {
                content: info.event.extendedProps.description,//이벤트 디스크립션을 툴팁으로 가져옵니다. 
                placement: 'bottom' //툴팁 방향
                , theme: 'yellow' //css테마 설정된 데이터 값
                , arrow: false
                , allowHTML: true
                , trigger: 'click'
            });
        },
        */
        dayMaxEventRows: true, 
        views: {
            dayGridMonth: {
                dayMaxEventRows: 2,
                titleFormat: {
                    year: 'numeric',month: 'long'
                },   
            },
            dayGridWeek: {

            },
            listDay: {
                dayMaxEventRows: 4,
            }
        },
        contentHeight: "auto",
        fixedWeekCount: false,
        navLinks: false,
        locale: 'ko',
        //themeSystem: 'bootstrap5',
        /*titleFormat: function (date) {
            return date.date.year + '년 ' + (parseInt(date.date.month) + 1) + '월';
        },
        eventLimit: true,*/
    });
    calendar.render();
});