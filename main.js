const tablinks = document.getElementsByClassName('tab-link');
const tabs = document.getElementsByClassName('tab-text');

document.getElementById('edu').addEventListener('click', function () {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    };
    for (let tab of tabs) {
        tab.classList.remove('active-tab');
    };
    this.classList.add('active-link');
    document.getElementById('education').classList.add('active-tab');
});

document.getElementById('exp').addEventListener('click', function () {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    };
    for (let tab of tabs) {
        tab.classList.remove('active-tab');
    };
    this.classList.add('active-link');
    document.getElementById('experience').classList.add('active-tab');
});

document.getElementById('sk').addEventListener('click', function () {
    for (let tablink of tablinks) {
        tablink.classList.remove('active-link');
    };
    for (let tab of tabs) {
        tab.classList.remove('active-tab');
    };
    this.classList.add('active-link');
    document.getElementById('skills').classList.add('active-tab');
});

const menu = document.getElementById('menu');
document.querySelector('.fa-circle-xmark').addEventListener('click', closeMenu);
document.querySelector('.fa-bars').addEventListener('click', openMenu);


function openMenu() {
    menu.style.right = '0';
}

function closeMenu() {
    menu.style.right = '-200px';
}
