const billAmnt = document.querySelector("#bill");
const cashGiven = document.querySelector("#cash");

const nxtBtn = document.querySelector("#next-btn");
const checkBtn = document.querySelector("#check-btn");

const billErrMsg = document.getElementById("bill-validator");
const cashErrMsg = document.getElementById("cash-validator");

const afterBill = document.getElementById("afterbill");
const afterCash = document.getElementById("aftercash");

var tableArr=document.querySelectorAll(".table-data");

const notesArr=[2000,500,100,20,10,5,1];


function toggle(elem, displayy) {
  elem.style.display = displayy;
}
toggle(billErrMsg, "none");
toggle(cashErrMsg, "none");
toggle(afterBill, "none");
toggle(afterCash, "none");


function calcNotes(amount) {
  for (var i = 0; i < notesArr.length; i++) {
    tableArr[i].innerText = Math.trunc(amount / notesArr[i]);
    amount = amount % notesArr[i];
  }
}


function nextBtnHandler() {
  if (billAmnt.value <= 0) {
    toggle(billErrMsg, "block");
    toggle(afterBill, "none");
  } else {
    toggle(afterBill, "block");
    toggle(billErrMsg, "none");
  }
}

function checkBtnHandler() {
  if (Number(billAmnt.value) <= Number(cashGiven.value)) {
    toggle(afterCash, "block");
    toggle(cashErrMsg, "none");
    calcNotes(cashGiven.value - billAmnt.value);
  } else {
    toggle(cashErrMsg, "block");
    toggle(afterCash, "none");
  }
}

nxtBtn.addEventListener("click", nextBtnHandler);
checkBtn.addEventListener("click", checkBtnHandler);

