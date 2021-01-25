alert("hello world help");

//Waits for the page to load abefore we start
document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.details').forEach(details => {
        details.onclick = () => {show_details(details)};
    });

    //document.querySelector('.test').addEventListener('click', () => show_details());
    //document.querySelectorAll('.collapsible').forEach.addEventListener('click', () => show_details());
   // doesn't work document.querySelectorAll('.test').forEach.addEventListener('click', () => show_details());
//    document.querySelectorAll('.collapsible').forEach(button => {
  //      button.addEventLIstener('click', event => {
    //        alert('button has been clicked');
      //  });
    //});

    //document.querySelector('.test').addEventListener('click', () => show_details());

    //The test for the collapsible button
    //document.querySelectorAll('.test').forEach(expand => {
      //  expand.onclick = () => {show_details()};
    //});


    // Listen for the button presses of the detail button
    //document.querySelectorAll('.collapsible').addEventListener('click', () => show_details());

    //document.querySelectorAll('button').forEach(button => {
        //button.onclick = function() {
            //showPage(this.dataset.page);
        //};
    //});
    //document.querySelectorAll('.collapsible').forEach(button => {
      //  button.addEventListener('click',() => show_details);
    //})
    

});

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