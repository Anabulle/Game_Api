let allMonstersUrl = "http://localhost/fighting_surface_api/backEndPhp/monsters";
let section1 = document.querySelector(".monsters");
let sectionMonster, artclMonster1, artclMonster2, name, life, att, def, score, role, img;

function fetchAllMonsters() {
    return fetch(allMonstersUrl);
}

fetchAllMonsters().then(function(response) {
    return response.json();
}).then(function(monsters) {
    console.log(monsters);

    for (const id in monsters) {
        let newMonster = new Card(monsters[id].name, monsters[id].life, monsters[id].att, monsters[id].def, monsters[id].img, monsters[id].score, monsters[id].role);
        createCard2();
        fillCard(newMonster.name, newMonster.life, newMonster.att, newMonster.def, newMonster.img, newMonster.score, newMonster.role);
        displayCard();
    }



})

class Card {
    constructor(name, life, att, def, img, score, role) {
        this.name = name,
            this.life = life,
            this.att = att,
            this.def = def,
            this.img = img,
            this.score = score,
            this.role = role
    }
}

function createCard2() {
    // Tout les createElements
    sectionMonster = document.createElement("section");
    artclMonster1 = document.createElement("article");
    artclMonster2 = document.createElement("article");
    name = document.createElement("p");
    life = document.createElement("p");
    att = document.createElement("p");
    def = document.createElement("p");
    score = document.createElement("p");
    role = document.createElement("p");
    img = document.createElement("img");
}

function fillCard(nameMonster, lifeMonster, attMonster, defMonster, imgMonster, scoreMonster, roleMonster) {
    name.textContent = `Nom : ${nameMonster}`
    life.textContent = `Vie : ${lifeMonster}`
    att.textContent = `Att : ${attMonster}`
    def.textContent = `Def: ${defMonster}`
    score.textContent = `Score : ${scoreMonster}`;
    role.textContent = `Role: ${roleMonster}`;
    img.src = imgMonster;
}

function displayCard() {
    //Append
    section1.append(sectionMonster);
    sectionMonster.append(artclMonster1);
    sectionMonster.append(artclMonster2);

    artclMonster1.append(name);
    artclMonster1.append(life);
    artclMonster1.append(att);
    artclMonster1.append(def);
    artclMonster1.append(score);
    artclMonster1.append(role);

    artclMonster2.append(img);

}


createCard2();
displayCard();

let inputname = document.querySelector("#name")

function randomScore() {
    return Math.floor(Math.random() * 10000);
}
let envoyer = document.querySelector(".envoyer");

envoyer.addEventListener("click", function() {
    var myInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
            name: inputname.value,
            score: randomScore()
        })
    };
    let scoreUrl = "http://localhost/fighting_surface_api/backEndPhp/add";
    console.log(myInit);
    fetch("http://localhost/fighting_surface_api/backEndPhp/add", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'no-cors',
        body: JSON.stringify({
            name: inputname.value,
            score: randomScore()
        })
    })


});