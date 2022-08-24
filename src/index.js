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
 
    let parentDiv = target.parentElement;
    let grabGraveIcons = parentDiv.getElementsByClassName('graveIcon');
                for(let g =0; g<grabGraveIcons.length;g++){
                    grabGraveIcons[g].classList.remove('focusedGrave');
                    grabGraveIcons[g].classList.add('unfocusedGrave');

            if(grabGraveIcons[g].dataset.link===deathLink){
                grabGraveIcons[g].classList.add('focusedGrave');
                grabGraveIcons[g].classList.remove('unfocusedGrave');

            }
                  
                    // grabGraveIcons[g].classList.remove('unfocusedGrave');
                }
    // console.log(grabGraveIcons);
    let targettedGrave = grabGraveIcons[deathLink];
                // targettedGrave.classList.add('focusedGrave')


    let pullUp= document.querySelectorAll("[data-link='"+deathLink+"']");

// styling the button

    let grabButtons = document.getElementsByClassName('navButton');
    for(let i=0; i<grabButtons.length; i++){
            grabButtons[i].classList.remove('focusedButton'); 
                    if(grabButtons[i].id===ev.id){
                        grabButtons[i].classList.add('focusedButton'); 
                    }  
                    }
}


// iStyleButton();