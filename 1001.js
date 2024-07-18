/* 1001 - Extremamente Básico */
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = lines[0]
const B = lines[1]

const X =  Number(A) + Number(B)

console.log(`X = ${X}`)
