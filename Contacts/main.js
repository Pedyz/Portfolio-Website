const homeBtn = document.getElementById('home')
const aboutBtn = document.getElementById('about-me')
const projectsBtn = document.getElementById('projects')
const contactsBtn = document.getElementById('contacts')

function openHomePage() {
    window.location.href = '../index.html'
}

function openAboutPage() {
    window.location.href = '../About_me/index.html'
}

function openProjectsPage() {
    window.location.href = '../index.html'
}

function openContactsBtn() {
    window.location.href = 'index.html'
}

homeBtn.addEventListener('click', openHomePage)

aboutBtn.addEventListener('click', openAboutPage)

projectsBtn.addEventListener('click', openProjectsPage)

contactsBtn.addEventListener('click', openContactsBtn)