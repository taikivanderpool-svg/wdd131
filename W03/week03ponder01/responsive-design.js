//grab the HTML element 
let menuButton = document.querySelector(".menu-btn");

//add event listener 
//anonymous, or nameless, function
menuButton.addEventListener('click', function (e) {
    let nav = document.querySelector("nav")

    console.log("I'm in the console")
    if(nav.style.display === "") {
        nav.style.display = "flex";
    }
    else{
        nav.style.display = "";
    }
 
    //this one line below is a ternary that does what the above if else statement does
    //nav.style.display = nav.style.display === "" ? "flex" : "";
});
