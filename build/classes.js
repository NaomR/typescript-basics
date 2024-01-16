"use strict";
//classes em TS
/*
 --- Data Modifiers ---
    Public -> pode ser acessada externamente via instancia da classe
    Private -> não pode ser acessada externamente via instancia da classe
    Protected -> é semelhante ao modificador de acesso privado,
                exceto que os membros protegidos podem ser acessados ​​usando suas classes derivadas.
*/
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
;
//subClass
class Magician extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
let champ = new Character('Joseph', 10, 15);
let Mago = new Magician('Patolino', 6, 19, 60);
console.log(champ);
console.log(Mago);
