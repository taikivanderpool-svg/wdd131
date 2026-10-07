//1. pull elements from the DOM
let dialog = document.querySelector("dialog");
let gallery = document.querySelector(".gallery");
let dialogimage = dialog.querySelector("img");
let exitbtn = dialog.querySelector(".close-viewer")

//2. add event listner 
gallery.addEventListener("click", function(event) {
    console.log(event.target.src);
    
    //swap out dialog image source
    dialogimage.src = event.target.src.replace("-sm", "-full");
    //show dialog box
    dialog.showModal();
});



//3. close the dialog
exitbtn.addEventListener("click", function() {
    dialog.close();
});

dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
        dialog.close();
    }
});