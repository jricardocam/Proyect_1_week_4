class ExplorerService{
    static filterByMission(listaExplorers){
        const explorersInNode = listaExplorers.filter((explorer) => explorer.mission == "node");
        return explorersInNode
    }
    static getAmountOfExplorersByMission(listaExplorers){
        const explorersInNode = listaExplorers.filter((explorer) => explorer.mission == "node");
        const amountExplorersInNode=explorersInNode.length
        return amountExplorersInNode
    }
    static getExplorersUsernamesByMission(listaExplorers){
        const explorersInNodeToGetUsernames = listaExplorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode

    }
}

module.exports=ExplorerService