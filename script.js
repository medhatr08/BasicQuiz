let Questions = [{
    Ques: "Which is the longest river in the world?",
    options: [{
        key: "Yangtze",
    },{
        key: "Ganga",
    },{
        key: "Nile"
    },{
    key: "Amazon"}],
    answer: "Nile"
},
{
    Ques: "In which continent does Brazil lies in ?",
    options: [
        {key: "Europe"},
    {key: "South America"},
        {key: "North America"},
        {key: "Africa"}
    ],
    answer: "South America"
},
{
    Ques: "Which of the following companies is the world’s largest maker of computer chips?",
    options: [
        {key: "Microsoft"},
       { key: "AMD"},
        {key: "Intel"},
       { key: "Dell"}
    ],
    answer: "Intel"
}]

console.log(Questions[0].options[0].key)
console.log(Questions[0].options[1].key)

let button = document.getElementById("next")
let submit = document.getElementById("submit");
button.style.display="none";
let idx = 0;
let score = 0;
let opt1 = document.querySelector("#radio1")
let opt2 = document.querySelector("#radio2")
let opt3 = document.querySelector("#radio3")
let opt4 = document.querySelector("#radio4")
let label1 = document.getElementById("label1")
let label2 = document.getElementById("label2")
let label3 = document.getElementById("label3")
let label4 = document.getElementById("label4")
let mainDiv = document.getElementById("mainDiv");
let div = document.getElementById("divPop")
let innerDiv=document.getElementById("innerDiv")

function checkAns() {
    if(idx>Questions.length){
        innerDiv.innerHTML=score;
    }
    if (opt1.checked == true) {
        if (label1.innerText == Questions[idx].answer) {
            score++;
            return true;

        }
        else {
            return false;
        }
    }
    else if (opt2.checked == true) {

        if (label2.innerText == Questions[idx].answer) {
            score++;
            return true;
        }
        else {
            return false;
        }
    }
    else if (opt3.checked == true) {
        console.log(label3.innerText, Questions[idx].answer)
        if (label3.innerText == Questions[idx].answer) {
            score++;
            return true;
        }
        else {
            return false;
        }
    }
    else if (opt4.checked == true) {
        if (label4.innerText == Questions[idx].answer) {
            score++;
            return true;
        }
        else {
            return false;
        }
    }
    else {
        alert("Select an answer")
        return false
    }
}


function AddQuestions() {
    
    let question = document.querySelector("#quesDiv")
question.textContent = Questions[idx].Ques;

    label1.innerHTML = Questions[idx].options[0].key;
    label2.innerHTML = Questions[idx].options[1].key;
    label3.innerHTML = Questions[idx].options[2].key;
    label4.innerHTML = Questions[idx].options[3].key;
    if(idx==Questions.length-1) {
        button.style.display = "none"
    }

    
}


AddQuestions();
submit.addEventListener("click", function () {
    let ans = checkAns();
    if(!opt1.checked && !opt2.checked && !opt3.checked && !opt4.checked) {
        return;
    }
   
    if (ans) {
        div.innerHTML = "Correct"
        div.style.backgroundColor="lightgreen"
        div.style.color="green"
        div.style.width="55px"
    }
    else {
        div.innerHTML = "Incorrect"
        div.style.backgroundColor="pastelred"
        div.style.color="red"
        div.style.width="70px"
    }
    submit.style.display="none";
    button.style.display="block";
    console.log(idx)
    if (idx == Questions.length-1) {
        document.getElementById("quiz").innerHTML = "Score: " +score;

    }
    
})

button.addEventListener("click", function () {
    
    if (idx < Questions.length){
        idx++;
        AddQuestions();
    }
       
   submit.style.display="block";
   button.style.display="none";
    
    submit.disabled = false;
    opt1.checked=false;
    opt2.checked=false;
    opt3.checked=false;
    opt4.checked=false;
div.innerHTML=""
   

})
