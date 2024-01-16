//generics
function concatArray<T>(...itens:T[]):T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([45,151], [26]) ;
const stgArray = concatArray<String[]>(['junior','silva',"pereira", 'bolo','salgado']);
console.log(stgArray);
console.log(numArray);