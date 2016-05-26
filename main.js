var calendar = {

    init: function(form) {
        this.table = form.getElementsByTagName('td');
        this.createCalendar(form, new Date());
        var preMon = document.getElementById('preMon');
        var nextMon = document.getElementById('nextMon');

        preMon.onclick = function() {
            calendar.createCalendar(form, new Date(calendar.year, calendar.month - 1, 1));
        };
        nextMon.onclick = function() {
            calendar.createCalendar(form, new Date(calendar.year, calendar.month + 1, 1));
        };
    },
    getFirstDay: function(year, month) {
        var firstDay = new Date(year, month, 1);
        return firstDay.getDay();
    },
    getMonthLen: function(year, month) {
        var nextMonth = new Date(year, month + 1, 1);
        nextMonth.setHours(nextMonth.getHours() - 1);
        return nextMonth.getDate();
    },
    createCalendar: function(form, date) {
        calendar.year = date.getFullYear();
        calendar.month = date.getMonth();
        document.getElementById('tittle').innerHTML = calendar.year + '年 ' + (calendar.month + 1) + '月';
        calendar.clearCalendar(form);
        var monthLen = calendar.getMonthLen(calendar.year, calendar.month);
        var firstDay = calendar.getFirstDay(calendar.year, calendar.month);
        for (var i = 1; i <= monthLen; i++) {
            calendar.table[i + firstDay - 1].innerHTML = i;
            // if () {}
        }
    },
    clearCalendar: function(form) {
        this.table = form.getElementsByTagName('td');
        for (var i = 0; i < this.table.length; i++) {
            this.table[i].innerHTML = ' ';
            this.table[i].id = '';
        }
    }

}
window.onload = function() {
    var calendars = document.getElementById('calendar');

    calendar.init(calendars);
}