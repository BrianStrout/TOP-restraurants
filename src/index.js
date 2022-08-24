import generateOnLoad from './modules/pageload';
import loadHome from './modules/home';
import loadMenu from './modules/menu';
import loadAbout from './modules/about';
generateOnLoad();
loadHome();

function hit(){
    console.log("Hit!");
}
function digGrave(plotNumber){
let gotoPlot = document.getElementsByClassName('grave');
            for(let p=0; p<gotoPlot.length;p++){
                gotoPlot[p].classList.add("hidden")
                    if(gotoPlot[p].id === plotNumber){
                    gotoPlot[p].classList.remove('hidden')
                    }
            }

        }


function addNav() {

    const homeButton = document.getElementById('navHome');
    const menuButton = document.getElementById('navMenu');
    const aboutButton = document.getElementById('navAbout');      

        homeButton.addEventListener('click', ()=>{ loadHome()});
        homeButton.addEventListener('click',  e=>{ iStyleButton(e.target)});
        homeButton.addEventListener('click', ()=>{ digGrave('plot0')});
        menuButton.addEventListener('click', ()=>{ loadMenu()});
        menuButton.addEventListener('click',  e=>{ iStyleButton(e.target)});
        menuButton.addEventListener('click', ()=>{ digGrave('plot1')});
        aboutButton.addEventListener('click',()=>{ loadAbout()});
        aboutButton.addEventListener('click',  e=>{ iStyleButton(e.target)});
        aboutButton.addEventListener('click',()=>{ digGrave('plot2')});
        
}

addNav();

function iStyleButton(ev){
    console.log(ev.id+"is hit");
    let deathLink = ev.dataset.link;
    let target= ev;
    // let parent = target.parentElement;
    let parentDiv = target.parentElement;
    let grabGraves = parentDiv.getElementsByClassName('grave');
    let pullUp= document.querySelectorAll("[data-link='"+deathLink+"']");
    let targetGrave= pullUp[0];
    console.log(targetGrave);
    let grabButtons = document.getElementsByClassName('navButton');
    for(let i=0; i<grabButtons.length; i++){
            grabButtons[i].classList.remove('focusedButton');   
    }
}
// iStyleButton();