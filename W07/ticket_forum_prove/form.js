const form = document.querySelector("#ticketForm")
const ticketType = document.querySelector("#type")
const submitButton = document.querySelector("#submit");
const output = document.querySelector("#output");
const codeLabel = document.querySelector("#codeType")



function dateCheck(inputDate){
    const today = new Date();
    const chosen = new Date(inputDate);
    return chosen < today;
}


ticketType.addEventListener("change", function(e){
    const type = ticketType.value;
    const code = document.querySelector("#code");
    if (type == "Student"){
        code.style.display = "flex";
        codeLabel.textContent = "Student ID #";
    }
    if (type == "Guest"){
        code.style.display = "flex";
        codeLabel.textContent = "Access Code";
    }
})



form.addEventListener("submit", function(event){
    event.preventDefault();

    output.textContent = "";

    const date = form.eventDate.value;
    if (dateCheck(date)){
        output.textContent = "Please Chose a later date.";
        return;
    }

    const inputCode = document.querySelector("#verifiationCode")
    if (type == "Student" && inputCode = ){

    }
    






})