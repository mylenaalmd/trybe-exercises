// escreva sum abaixo
const sum = (...rest) => rest.reduce(((acc, val) => acc + val), 0);
console.log(sum());