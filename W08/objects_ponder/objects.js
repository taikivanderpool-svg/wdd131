//Javascript objects 

const aCourse = {
    name : "Dynamic Web Fundamentals",
    code : "WDD131",
    credits : 2,
    sections : [
        {
            sectionNum: 1,
            roomNum: "STC 353",
            enrolled: 26,
            days: "TTh",
            instructor: "Bro T"
        },
        {
            sectionNum: 2,
            roomNum: "STC 347",
            enrolled: 28,
            days: "MWF",
            instructor: "Sis A"
        },
        {
            sectionNum: 3,
            roomNum: "STC 257",
            enrolled: 25,
            days: "WF",
            instructor: "Bro V"
        }
    ],
    enrolled : function(sectionNumber){
        console.log(this.name);
    }
}

renderSections(aCourse.sections);

// event listener when the button is pressed
document.querySelector("#enrollStudent").addEventListener("click", (e) => {
//when pressed, find the entered section num 
const sectionNumber = document.querySelector("#sectionNumber").value;
//increment enrollment of just that section by 1
aCourse.sections.forEach(section => {
    //is this the section they want to update?
    if (section.sectionNum == sectionNumber){
        section.enrolled += 1;
    }
    console.log(section.sectionNum);
    console.log(section.enrolled);
})
//rerender the table with updated data
renderSections(aCourse.sections)

})

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}