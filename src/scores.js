//compare score
function compareScore(score){
    let currBest = getBestScore();
    if(currBest === null){ 
        saveBestScore(score);
        return "new"
    }
    if(score > currBest){
        saveBestScore(score);
        return "new"
    } else {
        return "old"
    }
};


//save score 
function saveBestScore(score){
    localStorage.setItem('bestScore', JSON.stringify(score));
};

//get best
function getBestScore(){
    let score = JSON.parse(localStorage.getItem('bestScore'));
    return score;
};

//save medal
//get medal
//post leaderboard
//get leaderboard


export { compareScore, saveBestScore, getBestScore };