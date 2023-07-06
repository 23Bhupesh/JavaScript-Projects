 const questions = [{
    'que': 'Which of the following is the markup language?',
    'a': 'HTML',
    'b': 'CSS',
    'c': 'javaScript',
    'd': 'PHP',
    'correct': 'a'
 }, {
    'que': 'What year was javaScript launched?',
    'a': '1995',
    'b': '1996',
    'c': '1994',
    'd': 'none of these',
    'correct': 'b'
 }, {
    'que': 'What does CSS stands for?',
    'a': 'Hypertext Markup Language',
    'b': 'Cascading Style Sheet',
    'c': 'Jason Object Notation',
    'd': 'none of these',
    'correct': 'b'
 }
];

let index = 0;
let total = questions.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestion = () => {
   if(index === total) {
      return endQuiz()
   }
   reset();
   const data = questions[index]
   console.log(data)
   quesBox.innerText = ` ${index+1}) ${data.que}`;
   optionInputs[0].nextElementSibling.innerText = data.a;
   optionInputs[1].nextElementSibling.innerText = data.b;
   optionInputs[2].nextElementSibling.innerText = data.c;
   optionInputs[3].nextElementSibling.innerText = data.d;
   
}

const submitQuiz = () => {
   const data = questions[index];
   const ans = getAnswer()
   if (ans === data.correct) {
      right++;
   }else {
      wrong++;
   }
   index++;
   loadQuestion();
   return;
} 

const getAnswer = () => {
   let answer;
   optionInputs.forEach(
      (input) => {
         if(input.checked) {
            answer = input.value;
         }
      }
   )
   return answer;
}

const reset = () => {
   optionInputs.forEach(
      (input) => {
         input.checked = false;
      }
   )
}

const endQuiz = () => {
   document.getElementById("box").innerHTML = `
   <h2>Thank you for playing the Quiz</h2>
   <h3>${right} / ${total} are correct </h3>
   `
}
loadQuestion ();