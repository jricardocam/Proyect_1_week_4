const Reader = require("./lib/utils/Reader")
const ExplorerService=require("./lib/services/ExplorerService")
const FizzbuzzService=require("./lib/services/FizzbuzzService")

const listaExplorers = Reader.readJsonFile("explorers.json")
console.log(ExplorerService.filterByMission(listaExplorers,"node"))
console.log(ExplorerService.getAmountOfExplorersByMission(listaExplorers,"java"))
console.log(ExplorerService.getExplorersUsernamesByMission(listaExplorers,"java"))
