



const timer = () => {
    const day = document.getElementById('day');
    const hour = document.getElementById('hour');
    const minute = document.getElementById('minutes');
    const second = document.getElementById('seconds');
    const congrat = document.getElementById('wrap');

    // Get the current date
    const currentTime = new Date ();

    // Get the time you want the timer to EXPIRED 
    let futureTime = new Date('October 27 2022 00:00:00');

    // Get the difference between the futureTime and currentTime to get the Milliseconds
    const timBtw = futureTime - currentTime;
    // console.log(timBtw)

    // Using the Milliseconds and converting it to Days, Hours, Minutes and Seconds

    let days = Math.floor(timBtw/ (1000*60*60*24));
    let hours = Math.floor(timBtw/(1000 * 60 * 60 ));
    let mins = Math.floor(timBtw/(1000 * 60 ));
    let secs = Math.floor(timBtw/(1000));
    
    let displayDay = days;
    let displayHour = hours - days * 24;
    let displayMinute= mins - hours * 60;
    let displaySeconds = secs - mins * 60;


    // Checking if the output is less than 10 to always output 2 integers
    if(displayDay < 10) {
         day.innerHTML = '0'+displayDay
    }else day.innerHTML = days;
    if(displayHour < 10) {
         hour.innerHTML = '0'+displayHour
    }else hour.innerHTML = displayHour;
    if(displayMinute < 10) {
         minute.innerHTML = '0'+displayMinute
    }else minute.innerHTML = displayMinute;
    if(displaySeconds < 10) {
         second.innerHTML = '0'+displaySeconds
    }else second.innerHTML = displaySeconds;


    if(displayDay == 0 && displayHour == 0 && displayMinute == 0 && displaySeconds == 0){
        congrat.innerHTML = `<div class="wrap"><h1>CONGRATULATIONS!</h1></div>`
    }
    
}

setInterval('timer()', 1000);


