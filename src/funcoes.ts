function sum(x:number,y:number):number {
    return x + y;
}

function addToHello(name:String) {
    return `Hello ${name}`;
}

function callToPhone(phone: number | String) {
    return phone;
}

async function getDatabase(id:number):Promise<String> {
    return "Sobrenome qualquer";
}

let soma:number = sum(4,9);
console.log(soma);
console.log(addToHello('Ricardo'));
console.log(callToPhone(7985626264));