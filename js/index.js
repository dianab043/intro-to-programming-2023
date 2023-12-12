const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
const skills = ['Administration', 'Project Management', 'Customer Relations', 'Adaptability', 'Creativity'];
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector('ul');
const messageForm = document.querySelector('[name=leave_message]');
const messageSection = document.getElementById('messages');
const messagesList = document.getElementById('messages_list');


copyright.innerHTML = `<i>Diana Brnjic ${thisYear}</i>`;

footer.appendChild(copyright);

function hideMessageSection () {
    if (messagesList.childElementCount == 0) {
        messageSection.hidden = true;
    } else {
        messageSection.hidden = false;
    }
}

for (i = 0; i < skills.length; i++) {
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
};

hideMessageSection();

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const usersName = e.target.usersName.value;
    const usersEmail = e.target.usersEmail.value;
    const usersMessage = e.target.usersMessage.value;

    console.log(usersName, usersEmail, usersMessage);

    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    let newMessage = document.createElement('li');


    newMessage.innerHTML = 
    `<a href="mailto:${usersEmail}">${usersName}</a> wrote:  ` +
    `<span>${usersMessage}</span>   `;


    const editButton = document.createElement('button');
    editButton.setAttribute("id", "editButton");
    editButton.innerText = 'Edit';
    editButton.type = 'button';
    newMessage.appendChild(editButton);


    const removeButton = document.createElement('button');
    removeButton.setAttribute("id", "removeButton");
    removeButton.innerText = 'Remove';
    removeButton.type = 'button';

    editButton.addEventListener('click', (e) => {
        const saveButton = document.createElement ('button');
        saveButton.setAttribute("id", "saveButton");
        saveButton.innerText = 'Save';
        saveButton.type = 'button';
        newMessage.appendChild(saveButton);

        editButton.hidden = true;
        removeButton.hidden = true;

        const editBox = document.createElement('textarea');
        newMessage.appendChild(editBox);
        
        // let newMessage = e.target.editBox.value;

        // console.log (newMessage);

        saveButton.addEventListener ('click', (e) => {
            editButton.hidden = false;
            removeButton.hidden = false;
            saveButton.hidden = true;
        });

    });

    removeButton.addEventListener('click', (e) =>{
        const entry = removeButton.parentNode; 
        entry.remove();
    
    hideMessageSection ();

    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    hideMessageSection ();

    messageForm.reset();
    
});


hideMessageSection ();
