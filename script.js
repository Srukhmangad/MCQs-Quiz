
var currentQuestion = 1;
var score = 0;
var attempt = 0;
var x=0;


function nextQuestion(){
    document.getElementById("question" + currentQuestion).style.display = "none";
    if (currentQuestion == 5) {
      document.getElementById("finalresults").style.display = "block";
      document.getElementById("alert").style.display = "none";
      document.getElementById("result").style.display = "none";
      console.log(x);
      output();

    } else {
      currentQuestion++;
      document.getElementById("question" + currentQuestion).style.display = "block";
      document.getElementById("result").innerHTML = `Your Current score is ${score}`;
      
      document.getElementById("result").style.display = "block";
      document.getElementById("alert").style.display = "none";
      console.log(x);
    }
  }

  function checkAnswer(){
    document.getElementById("question" + currentQuestion).style.display = "none";
    if (currentQuestion ==6) {
      
      document.getElementById("result").style.display = "block";
    } else {
      
      document.getElementById("question" + currentQuestion).style.display = "block";
      
      document.getElementById("result").innerHTML = `Your Current score is ${score}`;
      document.getElementById("result").style.display = "block";
  }
}
function output(){
  if(x>=60){
    document.getElementById("finalresults").innerHTML =`You passed. You've scored ${x}%`;
    document.getElementById("imageid1").style.display = "block";
    document.getElementById("tryAgain").style.display = "block";
  }
  else{
    document.getElementById("finalresults").innerHTML =`You failed. Minimum criteria for passing is 60%`;
    document.getElementById("imageid2").style.display = "block";
    document.getElementById("tryAgain").style.display = "block";
  }
}

for (let i = 1; i <= 5; i++) {
  
    document.getElementById(`check${i}`).addEventListener("click", ()=> {
        
        var radiosName = document.getElementsByName(`q${i}`);
        var pastradiosName = document.getElementsByName(`q${i-1}`);
        console.log(radiosName);

        for(var j = 0; j < radiosName.length; j++){ 
          var radiosValue = radiosName[j];
          radiosValue.disabled= true;
          document.getElementById(`next${i}`).addEventListener("click",()=>{
            pastvalue=pastradiosName[j];
            pastvalue.disabled=true;
            
            nextQuestion()});

          if(radiosValue.checked){
            attempt++;
            document.getElementById("intro").innerHTML = `You have attempted ${attempt} no. of questions`;
            
            if(radiosValue.value == "yes" && radiosValue.checked) {

                score++;
                x =(parseInt(score)/5)*100;
                radiosValue.nextSibling.style.color="green";
                document.getElementById("alert").style.display = "block";
                document.getElementById("alert").style.color = "green";
                document.getElementById("alert").innerHTML="Voila! Your answer is correct"
                
            }
            else if(radiosValue.value == "no" && radiosValue.checked){
              radiosValue.nextSibling.style.color="red";
              document.getElementById("alert").style.display = "block";
              document.getElementById("alert").innerHTML="Oops! Your answer is wrong"
              document.getElementById("alert").style.color = "red";
            }
            
           
        }
        else{document.getElementById("intro").innerHTML = `You have attempted ${attempt} no. of questions`;}
        
        document.getElementById(`check${i}`).disabled = true;
        document.getElementById(`check${i}`).style.display = "none";
        document.getElementById(`next${i}`).style.display = "block";
        
        
        }
      
      checkAnswer();
    });
    document.getElementById(`next${i}`).addEventListener("click",()=>{
    if(i==4){
      document.getElementById(`next${5}`).innerHTML="Finish";
      document.getElementById("content").style.border="none";


    }
    nextQuestion()});
    
  }
