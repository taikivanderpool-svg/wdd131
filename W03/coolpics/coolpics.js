//get the menu button for when the screen is on phone view 
let nav_btn = document.getElementById("nav-btn");
console.log(nav_btn);

//get the dialog box
let dialog = document.querySelector("dialog");


//add an event for when the nav-button is clicked so the navigation 
//links appear 
nav_btn.addEventListener("click", () => {
    // get the nav element to be displayed in phone view when the nav-btn is 
    //clicked
    let nav = document.querySelector("header nav");

    //set the nav to display flex if it's already none

    nav.style.display = nav.style.display === "" ? "flex" : "";
})


//get the pictures to open the dialog when the user clicks on one
    let content = document.querySelector("#content");
    console.log(content);

//open the large image of the clicked picture
    content.addEventListener("click", function(e){
        console.log(e);
        let address_sm = e.target.src;
        let address_full = e.target.src.replace("-sm", "-full");

        //get the dialog image to change to the full of the selected image
        let dialog_img = document.querySelector("dialog img");
        dialog_img.src = address_full

        //open the dialog
        dialog.showModal();

    });


    //close the modal when the x or the modal is clicked 
    let exit_btn = document.querySelector("#close-dialog");

    dialog.addEventListener("click", function(e){
        if (e.target == dialog){
            dialog.close();
        }
    });

    exit_btn.addEventListener("click", () => {dialog.close()});