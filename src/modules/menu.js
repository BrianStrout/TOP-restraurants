function loadMenu(){

const menuBacon = {
                    item: 'Bacon',
                    itemI: 'Bacon',
                    image: "",
                    cat: 'Appetisers',
                    description: "We cook our bacon half way, pull it out and THEN soak our bacon in garlic butter, and THEN finish it off; making the world's tasty way to piss off your heart.",
                    price: 4.34,    
                }
const menuDeviled = {
                    item: 'Deviled Eggs',
                    itemI: 'DeviledEggs',
                    image: "",
                    cat: 'Appetisers',
                    description: "We cook our bacon half way, pull it out and THEN soak our bacon in garlic butter, and THEN finish it off; making the world's tasty way to piss off your heart.",
                    price: 4.34,    
                }
const menuChicwings = {

                    item: 'Chicken Wings',
                    itemI: 'ChickenWings',
                    image: "",
                    cat: 'Meals',
                    description: "Wings soaked in my father's disappoin... I mean secret sauce. My family's secret sauce.",
                    price: 4.34,    
                }
const menuBurger= {

                    item: 'Burger',
                    itemI: 'Burger',
                    image: "",
                    cat: 'Meals',
                    description: "Cow a bunga",
                    price: 4.34,    
                }
const menuRibs = {

                    item: 'Ribs',
                    itemI: 'Ribs',
                    image: "",
                    cat: 'Meals',
                    description: "Rib a dib a dib dib",
                    price: 4.34,    
                }

const menuSCCroissant = {

                    item: 'Strawberry Cream Cheese Croissant',
                    itemI: 'SCCroissant',
                    image: "",
                    cat: 'Desserts',
                    description: "uhh. My favorite wet",
                    price: 4.34,    
                }
const menuCheeseCake = {

                    item: 'Deep Fried Cheesecake Chimichanga',
                    itemI: 'CheeseCake',
                    image: "",
                    cat: 'Desserts',
                    description: "uhh. My favorite dry",
                    price: 4.34,    
                }
const menuWhiteLie = {

                    item: 'White Lie',
                    itemI: 'WhiteLie',
                    image: "",
                    cat: 'Drinks',
                    description: "Favorite twist on a margarita",
                    price: 4.34,    
                }

    let menuList =[menuBacon, menuDeviled, menuChicwings, menuBurger, menuRibs, menuSCCroissant, menuCheeseCake, menuWhiteLie];
    let menuCategories =['Appetisers', 'Meals', 'Desserts', 'Drinks',]
                                                // const content= document.getElementById('content');
            const homeDisplay = document.getElementById('display');
            homeDisplay.textContent= "Please inform staff of any food allergies or people you brought that are generally just annoying"


                                                // generate items
                                                // HEADER
            for (let m=0; m<menuCategories.length; m++){
                let category = menuCategories[m];
                let menuHeader = document.createElement('div');
                    menuHeader.setAttribute(`id`, `${category}Header`);
                    menuHeader.classList.add('menuHeader');
                    menuHeader.textContent=`${category}`
                    homeDisplay.appendChild(menuHeader);

            
            for(let i=0; i<menuList.length; i++){

                    let ckbk = menuList[i];
                    let menuItem = document.createElement('div');
                        menuItem.setAttribute('id', `${ckbk.cat}#${i}`);
                        // menuItem.textContent=menuItem.id;
                    let itemImage = "../src/Images/menu/"+menuList[i].itemI+".jpeg";
                    
                        menuItem.innerHTML= "<img class='menuImage' src="+itemImage+"></img><h4 class='menuFood'>"+menuList[i].item+ "</h4> <p>"+menuList[i].description+"</p> <br><p>$ " +menuList[i].price+"</p>"
                        ckbk.image = itemImage;
                  if(ckbk.cat === category){
                        homeDisplay.appendChild(menuItem);}
            }}
      }
      
      export default loadMenu;