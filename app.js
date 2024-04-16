const billAmount=document.querySelector("#bill");
const cashGiven=document.querySelector("#cash");
const nextBtn=document.querySelector("#next-btn");
const checkBtn=document.querySelector("#check-btn");
const billErrMsg=document.getElementById("bill-validator");
var tableArr=document.querySelectorAll(".table-data");

const notesArr=[2000,500,100,20,10,5,1];

document.getElementById("afterbill").style.display="none";
document.getElementById("aftercash").style.display="none";

function nextBtnHandler(){
    if(billAmount.value>0){
        billErrMsg.style.display="none";
        document.getElementById("afterbill").style.display="block";
        
    }else{
        billErrMsg.style.display="block";
    }
}

function checkBtnHandler(){
    if(billAmount.value<=cashGiven.value){
        document.getElementById("aftercash").style.display="block";
        calcNotes(cashGiven.value-billAmount.value);
    }else{
        document.getElementById("cash-validator").style.display="block";
    }
}

function calcNotes(amount){
    for(var i=0;i<notesArr.length;i++){
        tableArr[i].innerText=Math.trunc(amount/notesArr[i]);
        amount=amount%notesArr[i];
    }
}

nextBtn.addEventListener("click", nextBtnHandler);
checkBtn.addEventListener("click",checkBtnHandler);
