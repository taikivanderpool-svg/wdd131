const form = document.querySelector("#ticketForm");
const ticketType = document.querySelector("#type");
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

    const first = form.firstName.value;
    const last = form.lastName.value;
    const role = ticketType.value;

    output.textContent = "";

    const date = form.eventDate.value;
    
    if (dateCheck(date)){
        output.textContent = "Please Chose a later date.";
        return;
    }

    const inputCode = form.verificationCode.value;
    console.log(parseInt(inputCode))
    console.log(inputCode)
    if ((ticketType.value == "Student" && (parseInt(inputCode) < 100000000))){
        output.textContent = "Please type your 9-digit student ID number"
        return;
    }

    if (inputCode == ""){
        output.textContent = "Please select a role and input an access code or I-number"
        return;
    }

    if (ticketType.value == "Guest" && !(inputCode == "EVENT131")){
        output.textContent = "Invalid access code"
        return;
    }

    if (form.type.value == "Choose One"){
        output.textContent = "Are you a Student or a Guest?"
        return;
    }


    output.innerHTML = `
    <div>
    <h1>Ticket created</h1>
    <p>${first} ${last}</p>
    <p>${role}</p>
    <p>${date}</p>
    </div>
    `

})