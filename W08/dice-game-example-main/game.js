// 1. add event listener to the roll button (#rollButton)
document.querySelector("#rollButton").addEventListener("click", event => {
    // animate the die
        //switch the src to the die rolling animation
         const images = document.querySelectorAll("img");
    //     images.forEach(image => {
    //         image.src = "assets/die_rolling.gif";



    // //change the value that each die lands on randomly
    //     //hanging the src image 
    //     });


    setTimeout(()=>{
            //run what is in here after x milliseconds
            images.forEach(image => {
                if(isDieUnlocked(image)){
            image.src = "assets/die_rolling.gif";
            //set the image to a random die
            // Math.random() returns a random number between 0 - 1
                }
        });
    }, 500);


    setTimeout(()=>{
            //run what is in here after x milliseconds

            //set the image to a random die
            // Math.random() returns a random number between 0 - 1
            images.forEach(image => {
                if(isDieUnlocked(image)){
                let randomNumber = (Math.floor(Math.random() * 6) + 1);
                
            image.src = `assets/white_dice_${randomNumber}.gif`;
            }
        });
    }, 1000);


    function isDieUnlocked(diesImage) {
        //is the corresponding check box cheked? Return False
        const checkboxes = document.querySelectorAll("#gameboard input");
        //return a new array of just the checked ones 
        const unchecked = Array.from(checkboxes).filter(checkbox => !checkbox.checked);
        return unchecked.find(unchecked => unchecked.className === diesImage.className);
    }

});