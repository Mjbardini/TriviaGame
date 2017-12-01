

$(document).ready(function() {
  var index = 0;
  var countdownTimer = {
    time : 30,
    reset: function() {
      this.time = 30;
      $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
    },
    start: function() {
      counter = setInterval(countdownTimer.count, 1000);  
    },
    stop: function() {
      clearInterval(counter);
    },
    count: function() {
        countdownTimer.time--;
        console.log(countdownTimer.time);
//        $('.timer').html(countdownTimer.time);
      if (countdownTimer.time >= 0) {
        $('.timer').html('<h2>' + countdownTimer.time + ' seconds remaining</h2>');
      }
      else {
        index++;
        answerWrong();
        countdownTimer.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answerchoice").hide();
          showScore();
        }
      }
    }
  };

var correct = 0;
var wrong = 0;
var q1 = {
  question : 'The average cat has how many whiskers?',
  possibleAnswers : ['A. 10-14',
         'B. 16-20',
         'C. 22-26',
         'D. 28-32'],
  flags : [false, false, true, false],
  answer : 'C. 22-26'
};

var q2 = {
  question: 'How many hours a day do most cats sleep?',
  possibleAnswers: ['A. 10',
         'B. 12',
         'C. 14',
         'D. 16'],
  flags : [false, false, false, true],
  answer : 'D. 16'
};

var q3 = {
  question : 'How many toes do most cats have?',
  possibleAnswers : ['A. 16',
         'B. 18',
         'C. 20',
         'D. 22'],
  flags : [false, true, false, false],
  answer : 'B. 18'
};

var q4 = {
  question : 'Cats can not taste anything:',
  possibleAnswers : ['A. Sweet',
         'B. Sour',
         'C. Bitter',
         'D. Savory'],
  flags : [true, false, false, false],
  answer : 'A. Sweet'
};

var q5 = {
  question : 'A female cat can begin mating at how old?',
  possibleAnswers : ['A. 3-6 months',
         'B. 6-9 months',
         'C. 9-12 months',
         'D. Over a year'],
  flags : [false, true, false, false],
  answer : 'B. 6-9 months'
};



var questionArray = [q1, q2, q3, q4, q5];

function loadQuestion(questionSelection) {
  console.log(questionSelection);
  countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//  index = index++;
//  console.log(index);
//}

function setup() {
  index = 0;
  $('.question').append('<button id="startButton">Start</button>');
  $('#startButton').on('click', function() {
    $(this).hide();
    countdownTimer.start();
    loadQuestion(index);
  });
}   

function getAnswer() {

//  nextQuestion();
  $('.answerchoice').on('click', function() {
    console.log('alert', index);
    index++;
    console.log('click', index);
    $(".question").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
    loadQuestion();
  })
}

function answerCorrect() {
  correct++;
  alert("Correct!");
  console.log("correct");
}

function answerWrong() {
  wrong++;
  alert("Incorrect!");
  console.log("wrong");
}

function showScore() {
  $('.question').empty();
  $('.question').append("<h2><p>" + correct + " correct</p></h2>");
  $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
  countdownTimer.stop();
  $('.timer').empty();

}
//    for (var i=0; i<questionArray.length; i++) {
//      $('.question').append('<p>'+questionArray[i].question+'</p>');
//      for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {
//        $('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');
//      }
//      $('#possibleAnswers').on('click', function() {


//    console.log("click");
//    countdownTimer.start();
//    for (var i = 0; i < questionArray.length; i++) {
//      console.log(i);

//      $('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');
//      $('.question').html(questionArray[i].question);
//      while (countdownTimer != 0) {

//      }
    
//  });
//  $('#startButton').click(countdownTimer.start);

//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
  var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
  answerChosen = 'B';
 } else if (this.id == 'buttonC') {
  answerChosen = 'C';
 } else if (this.id == 'buttonD') {
  answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
  answerCorrect();
 } else if (answerChosen == 'A') {
  answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
  answerCorrect();
 } else if (answerChosen == 'B') {
  answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
  answerCorrect();
 } else if (answerChosen == 'C') {
  answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
  answerCorrect();
 } else if (answerChosen == 'D') {
  answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
  loadQuestion(index);
 } else {
  $(".answerchoice").hide();
  showScore();
 }
});


//  $('#start').click(countdownTimer.start);
});