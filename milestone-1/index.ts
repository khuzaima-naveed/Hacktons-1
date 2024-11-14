let button = document.getElementById('toggle-skills')as HTMLButtonElement
let skills= document.getElementById('skills')as HTMLElement

button.addEventListener('click', ()=>{
    if (skills.style.display === 'none') {
        skills.style.display='block'
    }else{
        skills.style.display = 'none'
    }
});

