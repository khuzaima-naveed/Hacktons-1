var form = document.getElementById("resume-form");
var display = document.getElementById("display-resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var linkedin = document.getElementById("linkedin").value;
    var masters = document.getElementById("masters").value;
    var bachelors = document.getElementById("bachelors").value;
    var intermediate = document.getElementById("intermediate").value;
    var matric = document.getElementById("matric").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resume_html = "\n  <h2><b>Resume</b></h2>\n  <h3>Personal Information</h3>\n  <p><b>Name:</b>".concat(name, "</p>\n  <p><b>Phone:</b>").concat(phone, "</p>\n  <p><b>Email:</b>").concat(email, "</p>\n  <p><b>Linkedin:</b>").concat(linkedin, "</p>\n\n<h3>Education</h3>\n  \n  <p><b>Masters:</b>").concat(masters, "</p>\n  <p><b>Bachelors:</b>").concat(bachelors, "</p>\n  <p><b>Intermediate:</b>").concat(intermediate, "</p>\n  <p><b>Matric:</b>").concat(matric, "</p>\n\n  <h3>Experience</h3>\n  <p>").concat(experience, "</p>\n\n  <h3>Skills</h3>\n  <p>").concat(skills, "</p>\n  ");
    if (display) {
        display.innerHTML = resume_html;
    }
    else {
        console.error('The resume display element is missing');
    }
});
