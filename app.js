$(document).ready(function() {
	$(".answer-status, .question-area, .answer-choices, .submit-btn, .feedback, .alert-success, .alert-danger, .answer-status, .start-over-btn, .next-btn").hide();
	$(".start-btn").show();
});

var question1 = {
	question: "What does 'DOM' stand for?",
	correctAnswer: "Document Object Model",
	answerChoice1: "Demo Object Mode",
	answerChoice2: "Data Object Model",
	answerChoice3: "Data Object Middleware"
};

var question2 = {
	question: "In CSS, how would you select an element with a class of 'intro'?",
	correctAnswer: ".intro",
	answerChoice1: "#intro",
	answerChoice2: "intro",
	answerChoice3: "'intro'"
};

var question3 = {
	question: "How would we print the string 'text' to the console in JavaScript?",
	correctAnswer: "console.log('text');",
	answerChoice1: "print 'text';",
	answerChoice2: "console.assert('text');",
	answerChoice3: "return 'text';"
};

var question4 = {
	question: "How would we write 'My First Variable' in CamelCase?",
	correctAnswer: "myFirstVariable",
	answerChoice1: "myfirstvariable",
	answerChoice2: "MyFirstVariable",
	answerChoice3: "myfirstVariable"
};


var questionChoice1 = '<h3 class="animated bounceInLeft">'+question1.question+'</h3>';
var answerChoices1 = '<li class="animated fadeIn"><input type="radio" id="radioOne" name="answer1"/>'+question1.answerChoice1+'</li>'+
					 '<li class="correct animated fadeIn"><input type="radio" id="radioTwo" name="answer1"/>'+question1.correctAnswer+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioThree" name="answer1"/>'+question1.answerChoice2+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioFour" name="answer1"/>'+question1.answerChoice3+'</li>';

var questionChoice2 = '<h3 class="animated bounceInLeft">'+question2.question+'</h3>';
var answerChoices2 = '<li class="animated fadeIn"><input type="radio" id="radioOne" name="answer2"/>'+question2.answerChoice1+'</li>'+
					 '<li class="correct animated fadeIn"><input type="radio" id="radioTwo" name="answer2"/>'+question2.correctAnswer+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioThree" name="answer2"/>'+question2.answerChoice2+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioFour" name="answer2"/>'+question2.answerChoice3+'</li>';

var questionChoice3 = '<h3 class="animated bounceInLeft">'+question3.question+'</h3>';
var answerChoices3 = '<li class="animated fadeIn"><input type="radio" id="radioOne" name="answer3"/>'+question3.answerChoice1+'</li>'+
					 '<li class="animated fadeIn"><input type="radio" id="radioTwo" name="answer3"/>'+question3.correctAnswer+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioThree" name="answer3"/>'+question3.answerChoice2+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioFour" name="answer3"/>'+question3.answerChoice3+'</li>';


var questionChoice4 = '<h3 class="animated bounceInLeft">'+question4.question+'</h3>';
var answerChoices4 = '<li class="animated fadeIn"><input type="radio" id="radioOne" name="answer4"/>'+question4.answerChoice1+'</li>'+
					 '<li class="correct animated fadeIn"><input type="radio" id="radioTwo" name="answer4"/>'+question4.correctAnswer+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioThree" name="answer4"/>'+question4.answerChoice2+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioFour" name="answer4"/>'+question4.answerChoice3+'</li>';

var questionsToAppend = [questionChoice1, questionChoice2, questionChoice3, questionChoice4];

var answersToAppend = [answerChoices1, answerChoices2, answerChoices3, answerChoices4];

var i = 0;

$('.start-btn').on('click', function (){
	$(".question-area").show()
	$(".question-area").append(questionsToAppend[i], answersToAppend[i]);
	$(".submit-btn, .answer-status").show();
	$(".start-btn, .lead").hide();
});

$('.submit-btn').on('click', function() {
	$('.submit-btn').hide();
	$('.feedback').show();
	if ($('#radioTwo').prop("checked")) {
		$('.feedback').append('<div class="alert alert-success animated fadeIn" role="alert">'+"That's correct, great job!"+'</div>');
		$('.answer-status').append('<li>'+'<span class="glyphicon glyphicon-thumbs-up animated tada">'+'</span>'+'</li>').css("color", "green");
	} else {
		$('.feedback').append('<div class="alert alert-danger animated fadeIn" role="alert">'+"Sorry, try again on the next round."+'</div>');
		$('.answer-status').append('<li>'+'<span class="glyphicon glyphicon-thumbs-down animated shake">'+'</span>'+'</li>').css("color", "red");
	}
	$('.next-btn').show();
})

	$('.next-btn').on('click', function() {
	$(".question-area, .feedback, .answer-status").empty();
	i++;
	$('.glyphicon, .next-btn').hide();
	if(i <= 3) {
	$(".question-area").append(questionsToAppend[i], answersToAppend[i]);
	$(".submit-btn").show();
	} else {
	$('.start-over-btn').show();
	}
})

$('.start-over-btn').on('click', function() {
	location.reload();
})