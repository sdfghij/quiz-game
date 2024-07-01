// const numInp = document.getElementById("numInp");
// const nameInp = document.getElementById("nameInp");
// const addBtn = document.getElementById("addbtn");
// const contactBox = document.getElementById("contactBox");
// const contactArr = [];
// // Car => ferrari -> engine -> V8 ,wheels -> 4 wheels ,doors -> 2 door , color -> red

// // object -> key value pair

// // const car = {
// //   engine: "V8",
// //   wheels: 4,
// //   color: "red",
// //   doors: 2,
// // };

// // console.log(car.doors)

// // numInp.addEventListener("input",(e)=>{
// //     console.log(numInp.value)
// //     if(numInp.value.length > 10){
// //         alert("You have reached the number limit!")
// //         numInp.ariaDisabled = true
// //     }
// // })

// addBtn.addEventListener("click", function () {
//   const newData = {
//     personName: nameInp.value,
//     personNum: numInp.value,
//   };
//   contactArr.push(newData);
//   displayArr(contactArr);
// });

// const displayArr = (arr) => {
//   contactBox.innerHTML = "";
//   for (let i = 0; i < arr.length; i++) {
//     contactBox.innerHTML += `
//         <div>
// ${arr[i].personName}
// ${arr[i].personNum}
// <button onclick="deleteFn(${i})">Delete</button>
//         </div>
//         `;
//   }
// };

// const deleteFn = (index) => {
//   contactArr.splice(index, 1);
//   displayArr(contactArr)
// };

// Advance js
// promises , async await , array methods , rest / spread operator

// Task 1
// Task 2
// Time Taking Task 3
// Task 4

// Promises , Async await

// const num = 10;

// const p1 = new Promise(function (res, rej) {
//   if (num % 2 == 0) {
//     res("Promise Resolved");
//   } else {
//     rej("Promise Rejected");
//   }
// });

// Quiz game

const questions = document.getElementById("questions");
const answers = document.getElementById("answers");
const changeQues = document.getElementById("changeQues");
const changeQues2 = document.getElementById("changeQues2");
const score = document.getElementById("score");

let index = 0; //
let scoreVal = 0;

changeQues.addEventListener("click", () => {
  //This function is changing question increasing by 1
  if (index !== data.length - 1) {
    index++;
    displayQuiz(index);
  } else {
    return;
  }
});

changeQues2.addEventListener("click", () => {
  //This function is changing question decreasing by 1
  if (index !== 0) {
    if (scoreVal !== 0) {
      scoreVal--;
      score.innerHTML = scoreVal;
    }
    index--;
    displayQuiz(index);
  } else {
    return;
  }
});

const data = [
  {
    Question: "What is HTML ?",
    answers: [
      {
        answer: "Hypertext Markup Language",
        isTrue: true,
      },
      {
        answer: "Hypertext Market Language",
        isTrue: false,
      },
      {
        answer: "Hypertext Mockup Language",
        isTrue: false,
      },
    ],
  },
  {
    Question: "What is CSS ?",
    answers: [
      {
        answer: "Cascading Style Sheet",
        isTrue: true,
      },
      {
        answer: "Chutiya style sheet",
        isTrue: false,
      },
      {
        answer: "Cat style sheet",
        isTrue: false,
      },
    ],
  },
  {
    Question: "What is JS ?",
    answers: [
      {
        answer: "java script",
        isTrue: true,
      },
      {
        answer: "java s",
        isTrue: false,
      },
      {
        answer: "java system",
        isTrue: false,
      },
    ],
  },
  {
    Question: "What is ns ?",
    answers: [
      {
        answer: "nikhil sharma",
        isTrue: true,
      },
      {
        answer: "natu sharma",
        isTrue: false,
      },
      {
        answer: "nabalik sharma",
        isTrue: false,
      },
    ],
  },
];

function displayQuiz(item) {
  //Displaying the quiz answers and questions
  questions.innerHTML = `<h1>${data[item].Question}</h1>`;
  answers.innerHTML = "";
  for (let i = 0; i < data[item].answers.length; i++) {
    //loop running till answers question
    answers.innerHTML += `<div class="form-check">
  <input type="checkbox" class="form-check-input" onclick="isChecked(${i})" value="${data[item].answers[i].isTrue}">
  <label class="form-check-label">
    <h2>${data[item].answers[i].answer}</h2>
  </label>
</div>`;
  }
}

const isChecked = (i) => {
  if (data[index].answers[i].isTrue == true) {
    scoreVal++;
    score.innerHTML = scoreVal;
    if (index !== data.length - 1) {
      index++;
      displayQuiz(index);
    } else {
      alert("Quiz Over, ", scoreVal);
    }
  } else {
    index++;
    displayQuiz(index);
  }
};

window.addEventListener("load", function () {
  displayQuiz(index);
});
