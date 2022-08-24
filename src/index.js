import generateOnLoad from './modules/pageload';
import loadHome from './modules/home';


function loadMenu(){
    console.log("menu- nopasanada")
}
function loadAbout(){
    console.log("about- nopasanada")
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
    const menuButton = document.getElementById('navMenu');
    const aboutButton = document.getElementById('navAbout');
  
    homeButton.addEventListener('click', ()=>{ loadHome()});
    menuButton.addEventListener('click', ()=>{  loadMenu()});
    aboutButton.addEventListener('click',()=>{ loadAbout()});
}

addNav();
