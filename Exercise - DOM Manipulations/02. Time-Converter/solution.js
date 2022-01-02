function attachEventsListeners() {
    // we create an associative array to hold the ratios for 1 day
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    // create a function to convert the ratios from the value we set
    function convert(value, unit) {
        const inDays = value / ratios[unit];
        return {
            days: inDays * ratios.days,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds,
        }
    }
    // getting the input fields in variables
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    // setting eventListeners to all buttons which run the function 'onConvert'
    document.getElementById('daysBtn').addEventListener('click', onConvert)
    document.getElementById('hoursBtn').addEventListener('click', onConvert)
    document.getElementById('minutesBtn').addEventListener('click', onConvert)
    document.getElementById('secondsBtn').addEventListener('click', onConvert)
    // declaring the function onConvert
    function onConvert(e) {
        const input = e.target.parentElement.querySelector('input[type = "text"]');
        const time = convert(Number(input.value), input.id);
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
    }

}