"use strict";
//generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([45, 151], [26]);
const stgArray = concatArray(['junior', 'silva', "pereira", 'bolo', 'salgado']);
console.log(stgArray);
console.log(numArray);
