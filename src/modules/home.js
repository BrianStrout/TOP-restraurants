function generateHomeSection(){
    console.log("generate home");
// do i need a clear here or else?
// let PROD = 
// pcreate Selection
// add class
// create title
// classList
// text content
// appendChild
// create p 
// class classList
// text content
// appendChild
// return PROD
}


function loadHome(){
console.log("home- nopasanada");
        const content= document.getElementById('content');
        const homeDisplay = document.createElement('div')
        homeDisplay.textContent="HI!";
        content.appendChild(homeDisplay);
  //   const content = document.getElementById('tab-content');
  //   content.classList.add('flex-lay');
  //   content.classList.remove('grid-lay');
  
  //   content.textContent = '';
  
  //   const aboutSection = createAboutSection();
  
  //   setBtnActive('home');
  
  //   content.appendChild(aboutSection);
  }
  
  export default loadHome;