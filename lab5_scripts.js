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
    let hasDupe = true;
    let newStudentNum;
    while(hasDupe == true){
        newStudentNum = generateStudentNum();
        hasDupe = validateStudentNum(newStudentNum);
    }
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

function validateForm(name, age, email, course){
    let isValid = true;

    if(name == ""){
        isValid = false;
        alert("Name must be entered");
    }else if(name.length <= 5){
        isValid = false;
        alert("Name must have greater than 5 characters");
    }else if(name.includes(" ") == false){
        isValid = false;
        alert("Name must contain a whitespace");
    }

    if(age == ""){
        isValid = false;
        alert("Age must be entered");
    }else if(age <= 18){
        isValid = false;
        alert("Must be  older than 18");
    }else if(age >= 99){
        isValid = false;
        alert("Must be younger than 99");
    }

    if(email == ""){
        isValid = false;
        alert("Email must be entered");
    }else if(email.endsWith("@up.edu.ph") == false){
        isValid = false;
        alert("Email must end with @up.edu.ph");
    }

    if(course == ""){
        isValid = false;
        alert("Course must be selected");
    }
     
    return isValid;
}

function validateStudentNum(num){
    for(const student of students){
        if(student.studentNum == num){
            return true;
        }
    }
    return false;
}
