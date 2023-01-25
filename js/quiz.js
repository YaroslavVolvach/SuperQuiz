let question_number = localStorage.getItem('question_number')

const result = JSON.parse(localStorage.getItem('result')) || {}

let timer = 75;

let index = 0;

document.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    localStorage.setItem('current_timer', timer)
  });

timer = localStorage.getItem('current_timer') || timer

if (!question_number){
    question_number = 0
    localStorage.setItem('question_number', question_number)
}

let runtimer = setInterval(() => {
    document.querySelector('p').innerText = `Timer: ${--timer}`
    if(timer === 0){
        clearInterval(runtimer);
        set_result(false);
    }
}, 1000)

const QUESTIONS = [
    {
        title : "A very useful tool used during development and debugging for printing content to the debagger is.",
        answers : ['JacaScript', 'terminal/bash', 'for loops', 'console.log'],
        correct_answer :  'console.log',
        answered : false
    },

    {
        title : "Commonly used data types DO Not Include:",
        answers : ['string', 'booleans', 'alerts', 'numbers'],
        correct_answer :  'alerts',
        answered : false
    },


    {
        title : "The candition in an if / else statement is enclosed with _________.",
        answers : ['quotes', 'curly brackets', 'parenthelss', 'square brackets'],
        correct_answer :  'parenthelss',
        answered : false
    },


    {
        title : "Arrays in JavaScript can be used to store __________.",
        answers : ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        correct_answer :  'all of the above',
        answered : false
    },


    {
        title : "String value must be enclosed within __________ when being assigned to veriables.",
        answers : ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        correct_answer :  'quotes', 
        answered : false
    }
]
let question = QUESTIONS[question_number]

function main(question){
    document.querySelector('h1').innerText = question.title
    var div = document.querySelector('div')
    if(div){
       div.remove()
    }
    let main_ = document.querySelector('main');
    var div = document.createElement('div')
    main_.appendChild(div)
    for(let answer of question.answers){
        let button = document.createElement('button')
         button.innerText = answer
         div.appendChild(button);
    }
    
    let btn = document.getElementsByTagName("button");
    for(var index = 0; index < btn.length; index++){
        btn[index].onclick = function() {  
            set_result(this.innerText)
           }
        }
     
}

function count_question(){
    let res = JSON.parse(localStorage.getItem('result'));
    console.log(res);
    if (question_number < (QUESTIONS.length - 1) && timer > 0){
        localStorage.setItem('question_number', ++question_number)
        main(QUESTIONS[question_number])
    }else{
        localStorage.setItem('score', timer);
        localStorage.removeItem('question_number')
        localStorage.removeItem('current_timer')
        window.location.href = './result.html';
    }
}

function set_result(answer){
    let question = QUESTIONS[localStorage.getItem('question_number')]
         
    if(timer > 0 && !question.answered){
        if(answer !== question.correct_answer){
            timer = timer - 10;
        }
         question.answered = true;
         index++;
    }else{
        for(item of QUESTIONS.slice(index)){
            result[item.title] = {
                result: answer = "Wrong", 
                answered: item.answered,
                correct_answer: item.correct_answer,
                your_answer: null
            }
        }
        localStorage.setItem('result', JSON.stringify(result))
        count_question()
    }

    result[question.title] = {
        result: answer === question.correct_answer ? "Correct" : "Wrong", 
        answered: question.answered,
        correct_answer: question.correct_answer
    }


    result[question.title]['your_answer'] = answer

    localStorage.setItem('result', JSON.stringify(result))
      
    count_question()
}

main(question)
