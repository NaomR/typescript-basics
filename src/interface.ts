//interface (type x interface)
// tanto na interface quanto no type podem ter multi-tipos, e podem ter atributos readonly

type robot = {
    id : number | String,
    name : String;
};

interface robot2 {
    readonly id: number | String,
    name: string,
    sayHello():string;
};

const bot : robot = {
    id:1,
    name : "megaman"
};

const bot2 : robot2 = {
    id: "1",
    name: "X",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};

console.log(bot);
console.log(bot2);

// uso da interface , melhor uso com classes
class Pessoa implements robot2 {
    id: number | string;
    name: string;

    constructor(id:number, name:string ){
        this.id = id
        this.name = name
    }
    sayHello(): string {
        return `Hello ${this.name}`
    }

}

const p = new Pessoa (4, "José");
console.log(p);
console.log(p.sayHello());