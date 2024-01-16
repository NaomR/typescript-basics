//classes em TS

/*
 --- Data Modifiers ---
    Public -> pode ser acessada externamente via instancia da classe
    Private -> não pode ser acessada externamente via instancia da classe
    Protected -> é semelhante ao modificador de acesso privado, 
                exceto que os membros protegidos podem ser acessados ​​usando suas classes derivadas.
*/
class Character {
    name: String;
    strength: number;
    skill: number;

    constructor(name:String,strength:number,skill:number) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }

    attack():void {
        console.log(`Attack with ${this.strength} points`)
    }

};

//subClass
class Magician extends Character {
    magicPoints : number;
    constructor(name:String,strength:number,skill:number,magicPoints:number) {
        super(name,strength,skill)
        this.magicPoints = magicPoints;
    }
}

let champ = new Character('Joseph',10,15);
let Mago = new Magician('Patolino',6,19,60);
console.log(champ);
console.log(Mago);