const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const skills = ['Administration', 'Project Management', 'Customer Relations', 'Adaptability', 'Creativity'];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector('ul');


copyright.innerHTML = `<i>Diana Brnjic ${thisYear}</i>`;

footer.appendChild(copyright);

for (i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

const messageForm = document.querySelector('[name=leave_message]');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');


    newMessage.innerHTML = 
    `<a href="mailto:${usersEmail}">${usersName}</a>   ` +
    `<span>wrote: ${usersMessage}</span>   `;

    const editButton = document.createElement('button');
    editButton.setAttribute("id", "editButton");
    editButton.innerText = 'Edit';
    editButton.type = 'button';
    newMessage.appendChild(editButton);


    const removeButton = document.createElement('button');
    removeButton.setAttribute("id", "removeButton");
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    removeButton.addEventListener('click', (e) =>{
        const entry = removeButton.parentNode; 
        entry.remove();

    });


    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    

    messageForm.reset();
});



