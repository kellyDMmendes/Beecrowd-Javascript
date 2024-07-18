/* 1002 - Área do Círculo */
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const raio = lines[0]
const pi = 3.14159

const area =  pi * raio ** 2
console.log(`A=${area.toFixed(4)}`) 
