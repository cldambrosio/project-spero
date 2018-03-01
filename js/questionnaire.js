
function getHighestScore(list, score) {
  for (i=0; i<list.length; i++) {
    if (list[i].checked) {
      if (list[i].value == 'v1' && score<1) {
        score = 1
      }
      else if (list[i].value == 'v2' && score<2) {
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
  // console.log('highest score is')
  // console.log(score)
  return score
}

function tabulateAnswers() {
  // initialize variables for each score
  var depressionScore = 0;
  var angerScore = 0;
  var maniaScore = 0;
  var anxietyScore = 0;
  var somaticScore = 0;
  var suicidalIdeationScore = 0;
  var psychosisScore = 0;
  var sleepProbScore = 0;
  var memoryScore = 0;
  var repetitiveTnBscore = 0;
  var dissociationScore = 0;
  var persoFunctioningScore = 0;
  var substUseScore = 0;

  // get a list of the radio inputs per symptoms domain
  var domain1 = document.getElementById('depression').getElementsByTagName('input');
  // then find score
  var domain1score = getHighestScore(domain1, depressionScore);
  // console.log('domain1score is')
  // console.log(domain1score)

  var domain2 = document.getElementById('anger').getElementsByTagName('input');
  var domain2score = getHighestScore(domain2, angerScore);

  var domain3 = document.getElementById('mania').getElementsByTagName('input');
  var domain3score = getHighestScore(domain3, maniaScore);

  var domain4 = document.getElementById('anxiety').getElementsByTagName('input');
  var domain4score = getHighestScore(domain4, anxietyScore);

  var domain5 = document.getElementById('somatic').getElementsByTagName('input');
  var domain5score = getHighestScore(domain5, somaticScore);

  var domain8 = document.getElementById('sleep').getElementsByTagName('input');
  var domain8score = getHighestScore(domain8, sleepProbScore);

  var domain9 = document.getElementById('memory').getElementsByTagName('input');
  var domain9score = getHighestScore(domain9, memoryScore);

  var domain10 = document.getElementById('repetitiveTnB').getElementsByTagName('input');
  var domain10score = getHighestScore(domain10, repetitiveTnBscore);

  var domain11 = document.getElementById('dissociation').getElementsByTagName('input');
  var domain11score = getHighestScore(domain11, dissociationScore);

  var domain12 = document.getElementById('persoFunction').getElementsByTagName('input');
  var domain12score = getHighestScore(domain12, persoFunctioningScore);

  // listing 3 most serious conditions below; these will need to display 
  // follow-up assessment from score of 1 (2 and above for other conditions)
  var domain6 = document.getElementById('suicidalIdeation').getElementsByTagName('input');
  var domain6score = getHighestScore(domain6, suicidalIdeationScore);

  var domain7 = document.getElementById('psychosis').getElementsByTagName('input');
  var domain7score = getHighestScore(domain7, psychosisScore);

  var domain13 = document.getElementById('substanceUse').getElementsByTagName('input');
  var domain13score = getHighestScore(domain13, substUseScore);
}

// // Display result
// var answerbox = document.getElementById('answer');
//   if (domain1score >1) {
//     // answerbox.innerHTML =
//   }
//   if (domain6score >0) {
  
//   }
// }

document.getElementById("submit").addEventListener("click", tabulateAnswers)