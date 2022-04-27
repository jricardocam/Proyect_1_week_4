class ExplorerService{
    static filterByMission(listaExplorers,mission){
        return listaExplorers.filter((explorer) => explorer.mission == mission);
    }
    static getAmountOfExplorersByMission(listaExplorers,mission){
        const explorersInNode = listaExplorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode.length
        
    }
    static getExplorersUsernamesByMission(listaExplorers, mission){
        const explorersInNodeToGetUsernames = listaExplorers.filter((explorer) => explorer.mission == mission);
        return explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername)

    }
}

module.exports=ExplorerService