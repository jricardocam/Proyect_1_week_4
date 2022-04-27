const Reader = require("./lib/utils/Reader")
const ExplorerService=require("./lib/services/ExplorerService")

const listaExplorers = Reader.readJsonFile("explorers.json")
console.log(ExplorerService.filterByMission(listaExplorers))
console.log(ExplorerService.getAmountOfExplorersByMission(listaExplorers))
console.log(ExplorerService.getExplorersUsernamesByMission(listaExplorers))
