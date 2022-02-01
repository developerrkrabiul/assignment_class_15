 
//  all Selector

const skills = document.querySelectorAll('.skill');
const skill_out = document.querySelector('.out_skill');

skills.forEach( skill =>{

    skill.addEventListener('change', function(){
       
    let all_skill = document.querySelectorAll('.skill:checked');
    
    let skill_value = [];

    all_skill.forEach(data =>{
        skill_value.push(data.value)
    });

    let output = " ";
    skill_value.map(data =>{
        output += `<li class="list-group-item">${data}</li>`

    });

    skill_out.innerHTML = output;

    
    
    })


});