const toggleMenuElement = document.getElementById("nav-toggle");
const mainMenuElement = document.getElementById("container-nav");
const blackScreen = document.getElementById("black-screen")
const navItems = document.getElementById("nav-items")
const toggleClass = document.querySelector('.fa-bars')
let boolean = false;
console.log(toggleClass)
toggleMenuElement.addEventListener('click',()=>{
    if (boolean == false){
        mainMenuElement.style.height = "400px";
        blackScreen.style.display ="block";
        navItems.style.display="flex"
        toggleClass.classList.replace('fa-bars', 'fa-times');
        boolean = true;
    } else {
        mainMenuElement.style.height = "90px";
        blackScreen.style.display ="none";
        navItems.style.display="none"
        toggleClass.classList.replace('fa-times', 'fa-bars');
        boolean = false;
    }
});
blackScreen.addEventListener('click', ()=>{
    mainMenuElement.style.height = "90px";
    blackScreen.style.display ="none";
    navItems.style.display="none"
    toggleClass.classList.replace('fa-times', 'fa-bars');
    boolean = false;
})

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    const sectionHeight = document.getElementById('banner-area').offsetHeight;
    if (scrollY > sectionHeight/2) {
        mainMenuElement.classList.add("after");
    }else{
        mainMenuElement.classList.remove("after");
    };
});


