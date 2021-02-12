//Waits for the page to load abefore we start
document.addEventListener('DOMContentLoaded', () => {

    text_appear();
    window.addEventListener('scroll', education_appear);

    document.querySelectorAll('.details').forEach(details => {
        details.onclick = () => {show_details(details)};
    });

    document.querySelectorAll('.expand-button').forEach(button => {
        button.onclick = () => {expand_content(button)};
    });

    navSlide();
});

function expand_content(button){
    button.classList.toggle("expanded");   //toggles the active css 
    var content = button.nextElementSibling; //the next element to the current button (the text stuff);
    var arrow = button.querySelector(".arrow-down");

    arrow.classList.toggle("is-expanded");

    console.log(content.getBoundingClientRect().bottom);
    if (content.style.maxHeight){// if content.style.maxHeight exists then turn it to null
        content.style.maxHeight = null;
        content.style.display= null;
        content.style.borderBottom=null;
    } else {                    // if content.style.maxHeight is null hten change it to the scroll height of the content
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.borderBottom = "2px rgb(158,158,158) solid";
        content.style.display="block" ;
    }

}

//The script that toggles the more details button to expand
function show_details(button){
    button.classList.toggle("active");   //toggles the active css 
    var content = button.nextElementSibling; //the next element to the current button (the text stuff);


    if (content.style.maxHeight){// if content.style.maxHeight exists then turn it to null
        content.style.maxHeight = null;
    } else {                    // if content.style.maxHeight is null hten change it to the scroll height of the content
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

function show_text(element, show = 1.3){
    //element: should be a string that is either the class or id of an html element
    //show: is floating point value that will determifne where the text will appear.

    var screenPosition = window.innerHeight / show;
    var textElement = document.querySelector(element);
    var textPosition = textElement.getBoundingClientRect().top;

    if (textPosition < screenPosition){
        textElement.classList.add('text-appear');
    }

};

function text_appear(){
    var screenPosition = window.innerHeight;
    var introTitle = document.querySelector(".intro-title");
    var introPosition = introTitle.getBoundingClientRect().top;

    if (introPosition < screenPosition){
        introTitle.classList.add('text-appear');
    }
};

function education_appear(){
    var screenPosition = window.innerHeight / 2;
    var eduText = document.querySelector(".education-text");
    var eduPosition = eduText.getBoundingClientRect().top;

    if(eduPosition < screenPosition){
        console.log("show the thing");
        eduText.classList.add('text-appear');
    }
};