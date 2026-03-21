function time_now() {
    const now = new Date();

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
