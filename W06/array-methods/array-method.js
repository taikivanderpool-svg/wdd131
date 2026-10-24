
function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            console.log('not a valid grade');
    }
    return points;
}
          


const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
          
const numbers = [23, 56, 12, 57, 1, 4, 88, 0, 26, 68, 84];

const grades = ["A", "B", "C", "D"];

grades.forEach(e => {
    console.log(convert(e));
});

console.log(numbers.map(e => {
    return e * 2;
}))


console.log(words.filter(countCharacters))


function countCharacters(word){
    return word.length >= 6;
}

const benchmark = document.querySelector("#benchmark").innerHTML;
console.log(benchmark)
document.querySelector("#passing").innerHTML = numbers.filter(e => {
    return e >= benchmark;
});

          

const numbers1 = [125, 20, 0, 2, 3, 6, 6, 7, 8];

document.getElementById("output").innerHTML = numbers1.reduce(myFunc);

function myFunc(total, num, index) {
    if (num > index){
        return total + num;
    }
    else{
        return total
    }
    
}


let apple = words.indexOf("apple")
console.log(`apple is at index ${words.indexOf("apple")}`);



const students = [
    {last: 'Andrus', first: 'Aaron', other:"Tom"},
    {last: 'Masa', first:'Manny', other:"Jerry"},
    {last: 'Tanda', first: 'Tamanda', other:"scooby"}
];

function display(students){
const movieSummary = `
  <div class="movie-summary">
    <h2>${students.first}</h2>
    <p>${students.last} - ${students.other}</p>
  </div>
`;
document.getElementById("movie-list").innerHTML += movieSummary; 
}
         
function display2(students){
const movieSummary = `
<hr>
  <div class="movie-summary">
    <p>${students.first} - ${students.last}</p>
  </div>
  <hr>
`;
document.getElementById("movie-list").innerHTML += movieSummary; 
}


students.forEach(display);
students.forEach(display2);
