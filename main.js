const homeBtn = document.getElementById('home')
const aboutBtn = document.getElementById('about-me')
const projectsBtn = document.getElementById('projects')
const contactsBtn = document.getElementById('contacts')
const instagramBtn = document.getElementById('insta')


function openHomePage() {
    window.location.href = 'index.html'
}

function openAboutPage() {
    window.location.href = 'About_me/index.html'
}

function openProjectsPage() {
    window.location.href = 'Projects/index.html'
}

function openContactsBtn() {
    window.location.href = 'Contacts/index.html'
}

homeBtn.addEventListener('click', openHomePage)

aboutBtn.addEventListener('click', openAboutPage)

projectsBtn.addEventListener('click', openProjectsPage)

contactsBtn.addEventListener('click', openContactsBtn)

function openInstaPage() {
    window.open('https://www.instagram.com/_pedsuu', '_blank')
}

instagramBtn.onclick = openInstaPage