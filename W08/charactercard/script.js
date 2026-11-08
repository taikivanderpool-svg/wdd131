const character = {
    class: "mid-level buraeucrat",
    level: 5,
    health: 100,
    attacked: function(){
        this.health -= 10;
    },
    levelUp: function(){
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
<p class="stat">Level: ${character.level}</p>
<p class="stat">Health: ${character.health}</p>
`
    document.querySelector("#stats").innerHTML = html;
}
