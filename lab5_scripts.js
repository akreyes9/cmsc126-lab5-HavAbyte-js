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

    document.getElementById('dateTimeOutput').innerHTML =
        `<b>Today is ${dateFormatted}.</b><br><b>The current time is ${timeFormatted}.</b>`;
}

let students = [];

function add_student() {
    // INPUTS
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value);
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    // GENERATE STUDENT NUMBER
    const newStudentNum = generateStudentNum();
    
    // OBJECT
    const studentProfile = {
        studentNum: newStudentNum, 
        name: name,
        age: age,
        up_email: email,
        course: course
    };

    students.push(studentProfile);
    alert('Student profile is successfully submitted.');
}

// GENERATING 5 RANDOM NUMBERS FOR THE SN
function generateStudentNum() {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    return '2024${randomNum}';
}
