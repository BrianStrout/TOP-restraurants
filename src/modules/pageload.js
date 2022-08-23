function generateOnLoad(){
    const grab = document.getElementById("content");
    const titleArray = ["Home", "Menu", "About"];
                                            // GENERATE NAV BAR
   
    const generateNav = document.createElement("div");
            generateNav.setAttribute('id', 'navigation');
            generateNav.classList.add('nav');
            generateNav.classList.add('container');
        grab.appendChild(generateNav);
  

                                            // GENERATE RESTRAURANT NAME
    const generateTitle = document.createElement('h2');
            generateTitle.classList.add('restraurantName');
            generateTitle.textContent = "I Am Trying To Kill You";
    generateNav.appendChild(generateTitle);
            const buttonBox = document.createElement('div');
            buttonBox.classList.add('buttonBox');   
            generateNav.appendChild(buttonBox); 


                                            // GENERATE AND POPULATE BUTTONS
                                for (let i=0; i<3; i++){
                                                        let grave = document.createElement("div");
                                                        let gravenumber = `plot${i}`;
                                                        grave.classList.add('grave');
                                                        grave.innerHTML="<img src = '../src/Images/graveicon.png' id=`grave${i}`></img>";
                                                        buttonBox.appendChild(grave);
                                                        
                                                        grave.setAttribute('id', gravenumber)
                                                        // grave.setAttribute(transform, translateX(2em));
                                                        
                                                        }
                                for (let i=0; i<3; i++){
                                            let assignButtonName = titleArray[i]
                                            let buttonName = `nav${assignButtonName}`;
                                    
                                            let button=document.createElement("button")
                                            button.classList.add('navButton')
                                            button.setAttribute('id', buttonName);
                                            button.textContent=assignButtonName;
                                    console.log(button.attributes.id)
                                            buttonBox.appendChild(button);
                                            button.addEventListener('click', () =>console.log("testetz"));
                                          
                                }
                              

    const generateDisp = document.createElement("div");
            generateNav.setAttribute('id', 'display');
            generateNav.classList.add('display');
            generateNav.classList.add('container');

}


export default generateOnLoad;
