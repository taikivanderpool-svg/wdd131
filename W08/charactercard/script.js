const character = {
    class: "mid-level buraeucrat",
    Level: 5,
    Health: 100,
    attacked: (e) =>{
        this.health -= 10;
    },
    levelUp: (e) =>{
        this.level += 1;
    }
}

updateCharacter(character);

document.querySelector("#attacked").addEventListener("click", e => {
    character.attacked();
    updateCharacter(character);
})

document.querySelector("#levelUp").addEventListener("click", e => {
    character.levelUp();
    updateCharacter(character);
})


function updateCharacter(character) {
    const html = `
<p class="stat">Class: ${character.class}</p>
<p class="stat">Level: ${character.Level}</p>
<p class="stat">Health: ${character.Health}</p>
`
    document.querySelector("#stats").innerHTML = html;
}

character.attacked();
character.attacked();

updateCharacter(character);