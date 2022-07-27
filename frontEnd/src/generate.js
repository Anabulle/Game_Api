/**
 * * Gestion de la generation est mises en DOM
 * 
 */
import { Enemy } from "./class.js";

/**
 * TODO: Piochez aléatoirement un nombre dans un tableau et retourner l'élement
 * @param {Array} array 
 * @returns 
 */
function randomEnemy(array) {
    let rand = Math.floor(Math.random() * array.length);

    return array[rand];
}

/**
 * TODO: Generation instanciation
 * * 1 - destructuring sur un élément du tableau tirer au hasard
 * * 2 - Instanciation a partir de celui ci
 * * 3 - Appel de la fonction display en passant le nouvel objet
 * * 4 - Avec un propriété Hue rotate generer des ennemis au couleur différente
 */

function generateEnemy(enemiesList) {
    //1
    let name, life, att, def, url;
    ([name, life, att, def, url] = randomEnemy(enemiesList));

    console.log(name, life, att, def, url);
    //2
    let newEnemy = new Enemy(name, life, att, def, url);
    //3
    newEnemy.displayEnemy();
    return newEnemy;
}

/**
 * TODO: fonction qui genere un nombre aleatoire entre 0 et 100
 * @returns
 */
function randomNumber() {
    return Math.round(Math.random() * 100)
}

/**
 * TODO: Méthode qui change le message dans le panneau status
 * @param {STRING} message 
 */
function changeMessageStatus(message = "Bienvenue dans ce jeux de fou") {
    let statusBar = document.querySelector(".status-bar");
    statusBar.textContent = message;
}
/**
 * TODO: affichage des dégats
 */

function changeDmgAllies(damage) {
    let damageHero = document.querySelector(".damage-hero");
    damageHero.textContent = "-" + damage;
    damageHero.classList.add("damage");
    setTimeout(function() {
        damageHero.classList.remove("damage");
        damageHero.textContent = "";
    }, 2000);
}

function changeDmgEnemy(damage) {
    let damageEnemy = document.querySelector(".damage-enemy");
    damageEnemy.textContent = "-" + damage;
    damageEnemy.classList.add("damage");
    setTimeout(function() {
        damageEnemy.classList.remove("damage");
        damageEnemy.textContent = "";
    }, 2000);
}
/**
 * TODO: anim attaque
 */
function animAttackHero() {
    let atk = document.querySelector(".anim-atk-hero");
    atk.classList.add("att-ally");
    setTimeout(function() {
        atk.classList.remove("att-ally");
    }, 2000);
}

function animAttackEnemy() {
    let atk = document.querySelector(".anim-atk-enemy");
    atk.classList.add("att-enemy");
    setTimeout(function() {
        atk.classList.remove("att-enemy");
    }, 2000);
}

function dmgSpecial() {
    let atk = document.querySelector(".anim-atk-enemy");
    atk.classList.add("spe");
    setTimeout(function() {
        atk.classList.remove("spe");
    }, 2000);
}
/**
 * TODO: fonction qui verifie si une variable est null ou undefined
 */
function isItNullOrUndefined(toCheck) {
    if (toCheck === null) {
        return false;
    }
    if (toCheck === undefined) {
        return false;
    }
}

/**
 * TODO: Fonction qui ajoute un monstre dans la liste des morts
 */
function addMonsterInDeadZone(monster) {
    let deadZone = document.querySelector(".history");
    let newImg = document.createElement("img");
    newImg.src = monster.imgPath;
    newImg.classList.add("dead-enemy");
    deadZone.append(newImg);
}

function removeDeadZone() {
    let deadZoneImg = document.querySelectorAll(".dead_enemy");
    deadZoneImg.forEach(element => {
        element.remove();
    });

}
export { randomNumber, generateEnemy, changeMessageStatus, isItNullOrUndefined, addMonsterInDeadZone, changeDmgAllies, changeDmgEnemy, animAttackHero, animAttackEnemy, dmgSpecial, removeDeadZone };