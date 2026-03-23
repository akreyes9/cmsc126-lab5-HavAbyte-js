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
//DISPLAY THE PROPERTIES OF THE INPUT( STUDENT ID)
function find_student(){ 
    const searchID = document.getElementById('studentID').value;
    const output = document.getElementById('studentOutput');
    const student = students.find(s => s.studentNum == searchID);

    document.getElementById('studentID').value = "";


    if (student) {
        output.innerHTML = `
            <strong>Found:</strong><br>
            Name: ${student.name}<br>
            Course: ${student.course}<br>
            Email: ${student.up_email}<br> 
        `;
    } else {
        output.innerHTML = "<span style='color: red;'>Student not found!</span>";
    }

}
//DISPLAY THE LIST OF STUDENTS 
function display_list() {
    
    const target = document.getElementById('allStudentsOutput');
    
    
    const finishedHTML = students.map(student => {
        const courseSelect = document.getElementById('course');
        const option = [...courseSelect.options].find(opt => opt.value === student.course);
        const courseText = option ? option.text : student.course;

        return `
            <div class="student-card">
                <p><strong>Name:</strong> ${student.name}</p>
                <p><strong>ID:</strong> ${student.studentNum}</p>
                <p><strong>Age:</strong> ${student.age}</p>
                <p><strong>Email:</strong> ${student.up_email}</p>
                <p><strong>Course:</strong> ${courseText}</p>
                <hr>
            </div>
        `;
    }).join(' ');

    target.innerHTML = finishedHTML;
}
