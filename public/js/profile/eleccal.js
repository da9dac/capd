document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendarelec');
    var calendarelec = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: { // 헤더에 표시할 툴 바
            start: 'prev,next',
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
        titleFormat: function (date) {
            return date.date.year + '년 ' + (parseInt(date.date.month) + 1) + '월';
        },
        navLinks: false,
        locale: 'ko'
    });
    calendarelec.render();
});