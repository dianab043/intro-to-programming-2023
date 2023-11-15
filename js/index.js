const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const skills = ['Administration', 'Project Management', 'Customer Relations', 'Adaptability', 'Creativity'];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector('ul');


copyright.innerHTML = `Diana Brnjic ${thisYear}`;

footer.appendChild(copyright);

for (i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};
