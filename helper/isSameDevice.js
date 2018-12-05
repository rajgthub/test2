module.exports = (reviews) => {
    const len = reviews.length
    if(len > 1){
        for (let i = len - 2; i >= 0; i -- ){
            if (reviews[len - 1].device === reviews[i].device){
                return  true
            }
        }
    }
    return false
}