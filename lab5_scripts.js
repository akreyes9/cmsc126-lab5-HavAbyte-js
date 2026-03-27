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
    const email = document.getElementById('mail').value;
    const course = document.getElementById('course');
    const courseSelected = course.options[course.selectedIndex].text;

    // VERIFICATIONS
    if (!validateForm(name, age, email, courseSelected)){
        return;
    }

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
        course: courseSelected
    };

    // ADD TO ARRAY
    students.push(studentProfile);
    alert('Student profile has been submitted successfully.');

    // RESET
    document.getElementById('studentProfileForm').reset();
}

// GENERATING 5 RANDOM NUMBERS FOR THE SN
function generateStudentNum() {
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    return `2024${randomNum}`;
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
        alert("Please write your full name.");
    }

    if(age == ""){
        isValid = false;
        alert("Age must be entered");
    }else if(age <= 18){
        isValid = false;
        alert("Must be older than 18");
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

    target.innerHTML = finishedHTML || "<p>No students found.</p>";
}
