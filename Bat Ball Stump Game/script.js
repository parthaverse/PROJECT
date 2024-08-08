let compChoice;
function gencompChoice(){
  let randomNo=Math.random()*3;
  if(randomNo>0 && randomNo<=1){
    compChoice='Bat';
  }
  else if(randomNo>1 && randomNo<=2){
    compChoice='Ball';
  }
  else{
    compChoice='Stump';
  }
}