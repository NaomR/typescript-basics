"use strict";
//interface (type x interface)
// tanto na interface quanto no type podem ter multi-tipos, e podem ter atributos readonly
;
const bot = {
    id: 1,
    name: "megaman"
};
const bot2 = {
    id: "1",
    name: "X",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot);
console.log(bot2);
// uso da interface , melhor uso com classes
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(4, "José");
console.log(p);
console.log(p.sayHello());
