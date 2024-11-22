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
  <h2><b>Editable Resume</b></h2>
  <h3>Personal Information</h3>
  <p><b>Name:</b><span contenteditable="true">${name}</span></p>
  <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
  <p><b>Email:</b><span contenteditable="true">${email}</span></p>
  <p><b>Linkedin:</b><span contenteditable="true">${linkedin}</span></p>

<h3>Education</h3>
  
  <p><b>Masters:</b><span contenteditable="true"${masters}</span></p>
  <p><b>Bachelors:</b><span contenteditable="true"${bachelors}</span></p>
  <p><b>Intermediate:</b><span contenteditable="true"${intermediate}</span></p>
  <p><b>Matric:</b><span contenteditable="true"${matric}</span></p>

  <h3>Experience</h3>
  <p contenteditable="true">${experience}</p>

  <h3>Skills</h3>
  <p contenteditable="true">${skills}</p>
  `;

  if (display) { 
    display.innerHTML= resume_html
}else{
console.error('The resume display element is missing');
}


});

