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
    var resume_html = "\n  <h2><b>Editable Resume</b></h2>\n  <h3>Personal Information</h3>\n  <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n  <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n  <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n  <p><b>Linkedin:</b><span contenteditable=\"true\">").concat(linkedin, "</span></p>\n\n<h3>Education</h3>\n  \n  <p><b>Masters:</b><span contenteditable=\"true\"").concat(masters, "</span></p>\n  <p><b>Bachelors:</b><span contenteditable=\"true\"").concat(bachelors, "</span></p>\n  <p><b>Intermediate:</b><span contenteditable=\"true\"").concat(intermediate, "</span></p>\n  <p><b>Matric:</b><span contenteditable=\"true\"").concat(matric, "</span></p>\n\n  <h3>Experience</h3>\n  <p contenteditable=\"true\">").concat(experience, "</p>\n\n  <h3>Skills</h3>\n  <p contenteditable=\"true\">").concat(skills, "</p>\n  ");
    if (display) {
        display.innerHTML = resume_html;
    }
    else {
        console.error('The resume display element is missing');
    }
});
