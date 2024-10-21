const minimist = require("minimist")
const argumentos = minimist(process.argv.slice(2))

const moduloSoma = require("../modulo_interno")
const funcSoma = moduloSoma.soma
const a = argumentos["a"]
const b = argumentos["b"]
funcSoma(a,b)