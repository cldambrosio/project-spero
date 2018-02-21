
function loopThroughChoices(list, score) {
  for (i=0; i<list.length; i++) {
    if (list[i].checked) {
      if (list[i].value == 'v2' && score<2) {
        score = 2
      }
      else if (list[i].value == 'v3' && score<3) {
        score = 3
      }
      else if (list[i].value == 'v4' && score<4) {
        score = 4
      }
    }
  }
  // console.log(score)
  return score
}

function tabulateAnswers() {
  // initialize variables for each score
  var depressionScore = 0;
  // let angerScore = 0;
  // let maniaScore = 0;
  // let anxietyScore = 0;
  // let somaticScore = 0;
  // let suicidalIdeationScore = 0;
  // let psychosisScore = 0;
  // let sleepProbScore = 0;
  // let memoryScore = 0;
  // let repetitiveTnBscore = 0;
  // let dissociationScore = 0;
  // let persoFunctioningScore = 0;
  // let substUseScore = 0;

  // get a list of the radio inputs per symptoms domain
  var domain1 = document.getElementById('depression').getElementsByTagName('input');
  loopThroughChoices(domain1, depressionScore);
}

  // // Display result
  // var answerbox = document.getElementById('answer');
  // if (depressionScore > 0) {
  //   // answerbox.innerHTML =
  // }
  // // If you add more choices, you must add another response below.
// }

document.getElementById("submit").addEventListener("click", tabulateAnswers)