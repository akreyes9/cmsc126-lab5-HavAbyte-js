function time_now() {
    const now = new Date(); // built-in js object 

    // built-in JavaScript method used to format a date into a readable string
    const month = now.toLocaleDateString('en', { month: 'long' });
    const day = now.getDate();   
    const year = now.getFullYear(); 
    const weekday = now.toLocaleDateString('en', { weekday: 'long'});

    const dateFormatted = `${month} ${day}, ${year}, ${weekday}`;

    const timeFormatted = now.toLocaleTimeString('en',{
        hour: 'numeric',
        minute: '2-digit',
        hour12: true

    })

    document.getElementById('date_time_output').innerHTML =
        `<b>Today is ${dateFormatted}.</b><br><b>The current time is ${timeFormatted}.</b>`;
}