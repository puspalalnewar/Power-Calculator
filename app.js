let num = document.querySelector("#num");
let powx = document.querySelector("#pow");
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");
const ans = document.querySelector(".ans-box");

const calRes = () => {
    return Math.pow(num.value,powx.value);
} 

calculate.addEventListener("click", ()=>{
    ans.innerHTML = `Ans : ${num.value}<sup>${powx.value}</sup> = ${calRes()}`
    
})

reset.addEventListener("click", ()=>{
    ans.innerHTML = "Ans : ";
    num.value = "";
    powx.value = "";
})