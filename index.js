const Reader = require("./lib/utils/Reader")

const listaExplorers = Reader.readJsonFile("explorers.json")
console.log(listaExplorers)