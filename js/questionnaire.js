function getHighestScore(answersList, score=0) {
  for (var i=0; i<answersList.length; i++) {
    if (answersList[i].checked) {
      if (answersList[i].value == 'v1' && score<1) {
        score = 1
      }
      else if (answersList[i].value == 'v2' && score<2) {
        score = 2
      }
      else if (answersList[i].value == 'v3' && score<3) {
        score = 3
      }
      else if (answersList[i].value == 'v4' && score<4) {
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
  // console.log(result);
  return result
}

// // Display result
// function resultbox(condition, score) {
//   if (domain1score >1) {
//     // answerbox.innerHTML =
//   }
//   if (domain6score >0) {
  
//   }
// }

document.getElementById("submit").addEventListener("click", quizResult)
// document.getElementById("result").innerHTML = resultbox