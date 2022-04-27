class FizzbuzzService{
    static applyValidationInExplorer(explorer){
        
        if(explorer.score %3 === 0){
            return ({name:explorer.name, score:explorer.score, trick:"FIZZ"})
        }
        else if(explorer.score %5 === 0){
            return ({name:explorer.name, score:explorer.score, trick:"BUZZ"})
        }
        else if(explorer.score%5 === 0 && explorer.score%3 === 0){
                return ({name:explorer.name, score:explorer.score, trick:"FIZZBUZZ"})
        }
        else{
            return ({name:explorer.name, score:explorer.score, trick:explorer.score})
        }
    }
}

module.exports = FizzbuzzService