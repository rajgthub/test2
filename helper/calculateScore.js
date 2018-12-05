const { warnOrDeactivate, increaseScore, reduceScore } = require("./index");
module.exports = (professional) => {
    increaseScore(professional)
    reduceScore(professional)
    let msg = warnOrDeactivate(professional)
    if(msg){
        return msg
    }
    return msg // if no warning or alert undefined
}