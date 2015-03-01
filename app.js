$(document).ready(function() {
	$(".answer-status, .question-area, .answer-choices, .submit-btn, .alert-success, .alert-danger, .answer-status, .start-over-btn, .next-btn").hide();
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
					 '<li class="animated fadeIn"><input type="radio" id="radioTwo" name="answer1"/>'+question1.correctAnswer+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioThree" name="answer1"/>'+question1.answerChoice2+'</li>'+ 
					 '<li class="animated fadeIn"><input type="radio" id="radioFour" name="answer1"/>'+question1.answerChoice3+'</li>';

var questionChoice2 = '<h3>'+question2.question+'</h3>';
var answerChoices2 = '<li><input type="radio" id="radioOne" name="answer2"/>'+question2.answerChoice1+'</li>'+
					 '<li><input type="radio" id="radioTwo" name="answer2"/>'+question2.correctAnswer+'</li>'+ 
					 '<li><input type="radio" id="radioThree" name="answer2"/>'+question2.answerChoice2+'</li>'+ 
					 '<li><input type="radio" id="radioFour" name="answer2"/>'+question2.answerChoice3+'</li>';

var questionChoice3 = '<h3>'+question3.question+'</h3>';
var answerChoices3 = '<li><input type="radio" id="radioOne" name="answer3"/>'+question3.answerChoice1+'</li>'+
					 '<li><input type="radio" id="radioTwo" name="answer3"/>'+question3.correctAnswer+'</li>'+ 
					 '<li><input type="radio" id="radioThree" name="answer3"/>'+question3.answerChoice2+'</li>'+ 
					 '<li><input type="radio" id="radioFour" name="answer3"/>'+question3.answerChoice3+'</li>';


var questionChoice4 = '<h3>'+question4.question+'</h3>';
var answerChoices4 = '<li><input type="radio" id="radioOne" name="answer4"/>'+question3.answerChoice1+'</li>'+
					 '<li><input type="radio" id="radioTwo" name="answer4"/>'+question3.correctAnswer+'</li>'+ 
					 '<li><input type="radio" id="radioThree" name="answer4"/>'+question3.answerChoice2+'</li>'+ 
					 '<li><input type="radio" id="radioFour" name="answer4"/>'+question3.answerChoice3+'</li>';


$('.start-btn').on('click', function (){
	$(".question-area").show().append(questionChoice1, answerChoices1);
	//$(".answer-choices").show().append(answerChoices1);
	$(".submit-btn, .answer-status").show();
	$(".start-btn, .lead").hide();
});

$('.submit-btn').on('click', function() {
	$('.submit-btn').hide();
	if ($('#radioTwo').prop("checked")) {
		$('.alert-success').show();
		$('.answer-status').append('<li>'+'<span class="glyphicon glyphicon-thumbs-up">'+'</span>'+'</li>').css("color", "green");
	} else {
		$('.alert-danger').show();
		$('.answer-status').append('<li>'+'<span class="glyphicon glyphicon-thumbs-down">'+'</span>'+'</li>').css("color", "red");
	}
	$('.next-btn, .box-one').show();
})


// $(".question-area").append(questionChoice2);
// $(".answer-choices").append(answerChoices2);

// $(".question-area").append(questionChoice3);
// $(".answer-choices").append(answerChoices3);

// $(".question-area").append(questionChoice4);
// $(".answer-choices").append(answerChoices4);