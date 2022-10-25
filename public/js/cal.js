document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: { // 헤더에 표시할 툴 바
            start: '',
            center: 'title',
            end: ''
        },
        googleCalendarApiKey: 'AIzaSyBaZsXvzqjnTqvRMec6BjYPJ6VGUzKB4wE',
        eventSources: [
            {
                googleCalendarId: 'amq8pktc5ccofd65eao6u4lefs@group.calendar.google.com',
                className: '가톨릭관동대학교 학사일정',
                color: 'blueberry',
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
        titleFormat: function (date) {
            return date.date.year + '년 ' + (parseInt(date.date.month) + 1) + '월';
        },
        navLinks: false,
        locale: 'ko'
    });
    calendar.render();
});