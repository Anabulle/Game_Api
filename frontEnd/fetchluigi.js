//la solution de luigi 
let allMonstersUrl = "http://localhost/fighting_surface_api/backEndPhp/monsters";
let array = [];
let card, monsterName, img, life, att, def, role, score;

let container = document.querySelector('.container');

function fetchAllMonsters() {
    return fetch(allMonstersUrl);
}

// fetch data
fetchAllMonsters().then(function(response) {
    return response.json();
}).then(function(data) {

    // get json length
    let myObj = Object.keys(data).length
    console.log(myObj);
    console.log(data);

    // push data to array
    pushData(myObj, data)
        // create card
    createCardFromArray()
})

// push data to array
function pushData(myObj, data) {
    // first index is 3
    for (i = 3; i < myObj + 3; i++) {
        array.push(data[i]);
    }
}

// create card from array
function createCardFromArray() {
    array.forEach(element => {
        createCard();
        fillCard(element);
        displayCard();
        console.log(element);
    });
}

function createCard() {
    monsterName = document.createElement("h1");
    img = document.createElement("img");
    card = document.createElement('article');
    life = document.createElement('p');
    def = document.createElement('p');
    att = document.createElement('p');
    role = document.createElement('p');
    score = document.createElement('p');
}

function fillCard(data) {
    monsterName.textContent = data.name;
    img.setAttribute('src', data.img + '.png');
    life.textContent = "Life : " + data.life;
    def.textContent = "Def : " + data.def;
    att.textContent = "Att : " + data.att;
    role.textContent = "Role : " + data.role;
    score.textContent = "Score : " + data.score;
}

function displayCard() {
    card.append(monsterName);
    card.append(img);
    card.append(life);
    card.append(def);
    card.append(att);
    card.append(role);
    card.append(score);

    container.append(card);
}