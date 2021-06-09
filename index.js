var readlineSync = require("readline-sync");
var score = 0;

// data of high scores
var highscores = [
  {
    name: "Karna",
    score: 6
  },
  {
    name: "Arjuna",
    score: 5
  },
  {
    name: "Abhimanyu",
    score: 4
  }
]


function welcome() {
  var userName = readlineSync.question("What is your Name ?  ")
  console.log("Welcome " + userName + " to F.R.I.E.N.D.S Quiz ")
  console.log("ALL THE BEST!!!")
  console.log("---------------")
}

function play(question, answer){
  var userAns = readlineSync.question(question)
  console.log("you entered ",userAns )
  if (userAns.toUpperCase() === answer.toUpperCase()){
    console.log("You are right")
    score = score + 1
  } else {
    console.log("You are Wrong")
    console.log("Correct answer is " + answer)
    score = score - 1
  }
  console.log("current score: ", score)
  console.log("------------")
}


var questions = [
  { 
  question : "In which city is Friends set? - ", 
  answer: "New York" },
  {
    question : "What's the title of the Friends theme song? - ", 
    answer: "I'll be there for you" },

  {
    question : "What instrument does Phoebe Buffay play? - ",
    answer: "Guitar"
  },
  
  {
    question: "What hangs on Monica's purple door? - ",
    answer: "A yellow picture frame"
  },
  
  {
    question: "Who is Chandler and Joey's TV magazine addressed to? - ",
    answer:"Miss Chanandler Bong"
  },
  
  {
    question: "What kind of uniform does Joey wear to Monica and Chandler's wedding? - ",
    answer:"Soldier"
  } 
  ]

function game() {
  for (var i=0; i< questions.length; i++){
    var currentQue = questions[i]
    play(currentQue.question, currentQue.answer)
}
}

function showScores() {
  console.log("YAY!!!! You scored: ", score)
  console.log("These are the high scores: ")
  highscores.map(score => console.log(score.name, " : ", score.score))

}

welcome();
game();
showScores();