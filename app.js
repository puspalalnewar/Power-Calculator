let num = document.querySelector("#num");
let powx = document.querySelector("#pow");
const calculate = document.querySelector("#calculate");
const reset = document.querySelector("#reset");
const ans = document.querySelector(".ans-box");

const calRes = () => {
    return Math.pow(num.value,powx.value);
} 

calculate.addEventListener("click", ()=>{
    if(num.value==0 && powx.value==0){
        ans.innerHTML = `0<sup>0</sup> is undefined`;  // this is added in if-else block to handle 0^0 case
    }
    else{
        ans.innerHTML = `Ans : ${num.value}<sup>${powx.value}</sup> = ${calRes()}`
    }
    
})

reset.addEventListener("click", ()=>{
    ans.innerHTML = "Ans : ";
    num.value = "";
    powx.value = "";
})