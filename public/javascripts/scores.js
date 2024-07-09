import kaboom from "kaboom"

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

//check medal
function checkMedal(score){
    if(score >= 300){
        saveMedal(5);
        return "diamond";
    } else if (score >= 200){
        saveMedal(4);
        return "plat";
    } else if (score >= 100){
        saveMedal(3);
        return "gold";
    } else if (score >= 50){
        saveMedal(2);
        return "silver";
    } else if (score >= 15){
        saveMedal(1);
        return "bronze";
    } else {
        saveMedal(0);
        return "none";
    }
}

//save medal
function saveMedal(medal){
    let totalMedals = JSON.parse(localStorage.getItem('medals'));
    if(totalMedals === null){ totalMedals = 0};
    if(medal > totalMedals){
        localStorage.setItem('medals', JSON.stringify(medal));
    } else {
        localStorage.setItem('medals', JSON.stringify(totalMedals));
    }
}

//get medal
function getMedal(){
    let totalMedals = JSON.parse(localStorage.getItem('medals'));
    return totalMedals;
}

function medalList(totalMedals){
    let list = ["bronze", "silver", "gold", "plat", "diamond"];
    let playerMedals = [];

    if(totalMedals === 0 || totalMedals === null){
        playerMedals.push("none")
        return playerMedals;
    }

    for (let i = 0; i < totalMedals; i++) {
        playerMedals.push(list[i]);
    }
    return playerMedals;
}

//post leaderboard
async function postLeaderboardData(name, score){
    const response = await fetch("/", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          score: score
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
    });
}


export { compareScore, saveBestScore, getBestScore, checkMedal, getMedal, medalList, postLeaderboardData };