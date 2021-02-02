//Waits for the page to load abefore we start
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.details').forEach(details => {
        details.onclick = () => {show_details(details)};
    });

    navSlide();
});


//The script that toggles the more details button to expand
function show_details(button){
    button.classList.toggle("active");  
    var content = button.nextElementSibling;
    console.log(content);
    console.log(content.style.display === "none");

    if (content.style.maxHeight){
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
};

function toggle_burger(){
    console.log("hello");
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelector('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5 ease forwards ${index/7}s'
            }
        });
        burger.classList.toggle('toggle')
    })


};

function nav_scroll(){
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function(){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos){
            document.querySelector(".nav").style.top = "0";
        } else {
            console.log(document.getElementsByClassName('nav').style);
            document.querySelector(".nav").style.top = "-8vh";
        }
        prevScrollpos = currentScrollPos;
    }
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    
        navLinks.forEach((link, index) => {
            if (link.style.animation){
               link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
          });
        
        burger.classList.toggle('toggle');
    });


    
}