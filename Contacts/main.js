const homeBtn = document.getElementById('home')
const aboutBtn = document.getElementById('about-me')
const projectsBtn = document.getElementById('projects')
const contactsBtn = document.getElementById('contacts')
const instaBtn = document.getElementById('insta')
const githubBtn = document.getElementById('github')

function openHomePage() {
    window.location.href = '../index.html'
}

function openAboutPage() {
    window.location.href = '../About_me/index.html'
}

function openProjectsPage() {
    window.location.href = '../Projects/index.html'
}

function openContactsBtn() {
    window.location.href = 'index.html'
}

function openInstagram() {
    window.open('https://www.instagram.com/_pedsuu', '_blank')
}

function openGitHub() {
    window.open('https://www.github.com/pedyz/', '_blank')
}

homeBtn.addEventListener('click', openHomePage)

aboutBtn.addEventListener('click', openAboutPage)

projectsBtn.addEventListener('click', openProjectsPage)

contactsBtn.addEventListener('click', openContactsBtn)

instaBtn.addEventListener('click', openInstagram)

githubBtn.addEventListener('click', openGitHub)