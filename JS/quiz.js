// Creating array to store questions & answers
const QandA = [{
    Question: "Which country opened Badminton Tournament 2022?",
    a: "India",
    b: "Vietnam",
    c: "Malaysia",
    d: "Singapore",
    Answer: "c",
},
{
    Question: "The Google Research India AI lab will be set up in which city?",
    a: "Bengaluru",
    b: "Hyderabad",
    c: "Mumbai",
    d: "Chennai",
    Answer: "a",
},
{
    Question: "Who has been appointed as the president of the AIU?",
    a: "Nishith Verma",
    b: "Suranjan Das",
    c: "Mahendra Pal",
    d: "Amir Subhani",
    Answer: "b",
},
{
    Question: "	India has launched the Year of Environment with which friendly country?",
    a: "Nepal",
    b: "France",
    c: "Japan",
    d: "Brazil",
    Answer: "b",
},
{
    Question: "Operation Sankalp, is associated with which armed force?",
    a: "Indian Army",
    b: "Indian Coast Guard",
    c: "Indian Air Force",
    d: "Indian Navy",
    Answer: "d",
}
];

// Logic & Validation
// Variables Declaration
let start = 0;
let Answer = 0;
let incorrect = 0;
let total = QandA.length;
let questions = document.getElementById("question");
let userInputs = document.querySelectorAll("input[type='radio']")

// Functions to implement logic
function queHeap() {
    if (total === start)
    {
        return theEnd()
    }
    reset()
    const data = QandA[start]
    questions.innerHTML = `${start + 1}) ${data.Question}` // Using Template Literal
    userInputs[0].nextElementSibling.innerText = data.a
    userInputs[1].nextElementSibling.innerText = data.b
    userInputs[2].nextElementSibling.innerText = data.c
    userInputs[3].nextElementSibling.innerText = data.d
}

// Reset Function
function reset() {
    userInputs.forEach(
        (Uinput) => {
            Uinput.checked = false; //checked is a predefined property of js
        }
    )
}

// Used Anonymous function
document.querySelector("#submit").addEventListener("click",function() {
        const data = QandA[start]
        const ans = answer()
        if (ans === data.Answer) {
            Answer++;
        } else {
            incorrect++;
        }
        start++;
        queHeap()
    }
)
// Answer Function
function answer() {
    let ans;
    userInputs.forEach(
        (Uinput) => {
            if (Uinput.checked) {
                ans = Uinput.value;
            }
        }
    )
    return ans;
}

// theEnd Function
function theEnd() {
    document.getElementsByClassName("inner-container")[0].innerHTML = `
        <div class="row">
            <img  src="Images/quiz.svg" style="width:100px;height:100px;display: block;margin:auto";>
            <h3 > Heya!!! Dear User, your Quizoholic score is :- ${Answer} / ${total} </h3>
        </div>
    `
}
queHeap(start);