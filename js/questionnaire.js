function getHighestScore(answersList, score=0) {
  for (var i=0; i<answersList.length; i++) {
    if(answersList[i].checked) {
      if(answersList[i].value === 'v1' && score<1) {
        score = 1
      } else if(answersList[i].value === 'v2' && score<2) {
        score = 2
      } else if(answersList[i].value === 'v3' && score<3) {
        score = 3
      } else if(answersList[i].value === 'v4' && score<4) {
        score = 4
      }
    } 
  }
  return score
}

function tabulateAnswers(conditionDomains) {
  var scores = []
  for (var i=0; i<conditionDomains.length; i++) {
    var condition = conditionDomains[i];
    // // get a list of the radio inputs per symptoms domain
    var conditionQs = document.getElementById(condition).getElementsByTagName('input');
    // // then find score for each symptoms domain
    var conditionScore = getHighestScore(conditionQs);
    scores[condition] = conditionScore;
  }
  return scores
}

function quizResult() {
  var conditionsList = [
    "depression",
    "anger",
    "mania",
    "anxiety",
    "somatic",
    "sleep",
    "memory",
    "repetitiveTnB",
    "dissociation",
    "persoFunction",
    "suicidalIdeation",
    "psychosis",
    "substanceUse"
  ]
  var result = tabulateAnswers(conditionsList);
  return result
}

function setBarLevel(result, barId) {
  var bar = document.getElementById(barId);
  if(result === 0) {
    bar.setAttribute("height", "0")
    bar.setAttribute("y", "280")
  } else if(result === 1) {
    bar.setAttribute("height", "75")
    bar.setAttribute("y", "205")
  } else if(result === 2) {
    bar.setAttribute("height", "135")
    bar.setAttribute("y", "145")
  } else if(result === 3) {
    bar.setAttribute("height", "195")
    bar.setAttribute("y", "85")
  } else if(result === 4) {
    bar.setAttribute("height", "255")
    bar.setAttribute("y", "25")
  }
}

function displayResults() {
  qzResult = quizResult()
  for(var index in qzResult) {
    setBarLevel(qzResult[index], (index+'Bar'))
  }
}

var submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click", displayResults)
