const enter = document.getElementById("enter");

enter.addEventListener("click", calcResult);

function calcResult(){
    const ans = document.getElementById("ans");
    let score = 0;
    if(ans.elements["q1"].value === "1")
    {
        score += 1;
    }
    if(ans.elements["q2"].value === "1")
    {
        score += 1;
    }
    if(ans.elements["q3"].value === "1")
    {
        score += 1;
    }
    if(ans.elements["q4"].value === "2")
    {
        score += 1;
    }
    if(ans.elements["q5"].value === "70")
    {
        score += 1;
    }
    if(ans.elements["q6"].value === "1")
    {
        score += 1;
    }
    const result = document.getElementById("result");
    result.innerHTML = `Final Score: ${score}`;
}