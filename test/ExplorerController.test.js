const ExplorerController=require("../lib/controllers/ExplorerController");

describe("Test para explorerController",()=>{
    test("Calcular los explorers en Node" ,()=>{
        const explorerInNode = ExplorerController.getExplorersByMission("node");
        expect(explorerInNode).nottoBeUndefined;
    });
});

describe("Test para explorerController",()=>{
    test("Calcular los explorers en java" ,()=>{
        const explorersInJava = ExplorerController.getExplorersAmonutByMission("java");
        expect(explorersInJava).toBe(5);
    });
});

describe("Test para filtro de explorers Telegram",()=>{
    test("explorers en Node" ,()=>{
        const explorerInNode = ExplorerController.getExplorersByMission("node");
        const responseBot = `${JSON.stringify(explorerInNode)}` ;
        expect(responseBot).toBeString;
    });
});