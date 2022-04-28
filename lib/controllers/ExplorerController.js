const Reader=require("../utils/Reader");
const ExplorerService =require("../services/ExplorerService");

class ExplorerController{
    static getExplorersByMission(mission){
        const listaExplorers = Reader.readJsonFile("explorers.json");
        return ExplorerService.filterByMission(listaExplorers,mission);
    }
    static getExplorersAmonutByMission(mission){
        const listaExplorers = Reader.readJsonFile("explorers.json");
        const explorersInNode = listaExplorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length;
    }
    static getExplorersUsernamesByMission(mission){
        const listaExplorers = Reader.readJsonFile("explorers.json");
        const explorersInNodeToGetUsernames = listaExplorers.filter((explorer) => explorer.mission == mission);
        return explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
    }
}
module.exports = ExplorerController;