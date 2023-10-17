const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
dateC = "11 Oct 2023 3:00"

function updateTimer() {

    var date = new Date()
    console.log(date)

    var date2 = new Date(dateC);
    console.log(date2);

    var resultMilliSecond = date2.getTime() - date.getTime()
    console.log(resultMilliSecond)

    var dayC = Math.round(resultMilliSecond / (1000*60*60*24))
    console.log(dayC)

    var hourC = Math.round(resultMilliSecond / (60 * 60 * 1000)%24)
    console.log(hourC);

    var minuteC = Math.round(resultMilliSecond / (60 * 1000)%60)
    console.log(minuteC);

    var secondC = Math.round(resultMilliSecond / (1000)%60)
    console.log(secondC);

    // day.textContent = dayC;
    // hour.textContent = hourC;
    // minute.textContent = minuteC;
    // second.textContent = secondC;

    function dynamicUpdate(){
        day.textContent = dayC,
        hour.textContent = hourC,
        minute.textContent = minuteC,
        second.textContent = secondC,
        console.log(day.textContent),
        console.log(hour.textContent),
        console.log(minute.textContent),
        console.log(second.textContent)
    }
    dynamicUpdate()

}
updateTimer()
setInterval(updateTimer,1000)
