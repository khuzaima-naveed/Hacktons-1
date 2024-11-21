const form = document.getElementById("resume-form") as HTMLFormElement;
const display = document.getElementById("display-resume") as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.getElementById("name") as HTMLInputElement).value;
  const phone = (document.getElementById("phoneNumber") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
  const masters = (document.getElementById("masters") as HTMLInputElement).value;
  const bachelors = (document.getElementById("bachelors") as HTMLInputElement).value;
  const intermediate = (document.getElementById("intermediate") as HTMLInputElement).value;
  const matric = (document.getElementById("matric") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement).value;
  const skills = (document.getElementById("skills") as HTMLInputElement).value;


 const resume_html =
  `
  <h2><b>Resume</b></h2>
  <h3>Personal Information</h3>
  <p><b>Name:</b>${name}</p>
  <p><b>Phone:</b>${phone}</p>
  <p><b>Email:</b>${email}</p>
  <p><b>Linkedin:</b>${linkedin}</p>

<h3>Education</h3>
  
  <p><b>Masters:</b>${masters}</p>
  <p><b>Bachelors:</b>${bachelors}</p>
  <p><b>Intermediate:</b>${intermediate}</p>
  <p><b>Matric:</b>${matric}</p>

  <h3>Experience</h3>
  <p>${experience}</p>

  <h3>Skills</h3>
  <p>${skills}</p>
  `;

  if (display) { 
    display.innerHTML= resume_html
}else{
console.error('The resume display element is missing');
}


});

