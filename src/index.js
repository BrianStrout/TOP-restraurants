import generateOnLoad from './modules/pageload';

function loadMenu(){
    console.log("nopasanada")
}
function loadAbout(){
    console.log("nopasanada")
}


function test(){
console.log("javascript running");
}

test();

generateOnLoad();

function hit(){
    console.log("Hit!");
}


function addNav() {
    console.log("addnav up??")
    const homeButton = document.getElementById('navHome');
    homeButton.style.opacity = "50%";
    // const menuButton = document.getElementById('navMenu');
    // const aboutButton = document.getElementById('navAbout');
  
    // homeButton.addEventListener('click', hit());
    // menuButton.addEventListener('click', loadMenu);
    // aboutButton.addEventListener('click', loadAbout);
}

addNav();
