const homeBtn = document.getElementById('home')
const aboutBtn = document.getElementById('about-me')
const projectsBtn = document.getElementById('projects')
const contactsBtn = document.getElementById('contacts')
const msgGenBtn = document.getElementById('msg-gen')


function openHomePage() {
    window.location.href = '../index.html'
}

function openAboutPage() {
    window.location.href = '../About_me/index.html'
}

function openProjectsPage() {
    window.location.href = 'index.html'
}

function openContactsBtn() {
    window.location.href = '../Contacts/index.html'
}

function openMsgGen() {
    window.open('https://github.com/Pedyz/message_generator', '_blank')
}

msgGenBtn.addEventListener('click', openMsgGen)

homeBtn.addEventListener('click', openHomePage)

aboutBtn.addEventListener('click', openAboutPage)

projectsBtn.addEventListener('click', openProjectsPage)

contactsBtn.addEventListener('click', openContactsBtn)