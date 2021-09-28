var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var a3 = document.getElementById("a3");
var enter = document.getElementById("enter");
var result = document.getElementById("result");

enter.addEventListener("click", handleEnter);

function handleEnter() {
  let a_sum =
    parseInt(a1.value, 10) + parseInt(a2.value, 10) + parseInt(a3.value, 10);
  if (a_sum === 180) {
    result.innerHTML = "Yes! Traingle is possible";
  } else result.innerHTML = "No, traingle with these angles is not possible";
}
