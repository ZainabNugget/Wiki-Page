let btn = document.getElementById("dropDownBtn");
btn.addEventListener("click", function(){
    document.getElementById("myDropdown").classList.toggle("showBosses");
})

// quiz page
let score = 0;
let submitBtn = document.querySelector("#submit");
if (submitBtn != null){

submitBtn.addEventListener("click", function(){
     var q1 = document.querySelector("#quiz").q1.value; 
     var q2 = document.querySelector("#quiz").q2.value;
     var q3 = document.getElementById("quiz").q3.value;
     var q4 = document.getElementById("quiz").q4.value;
     var q5 = document.getElementById("quiz").q5.value;
     var q6 = document.getElementById("quiz").q6.value;
     var q7 = document.getElementById("quiz").q7.value;
     var q8 = document.getElementById("quiz").q8.value;
     var q9 = document.getElementById("quiz").q9.value;
     var q10 = document.getElementById("quiz").q10.value;

     if(q1 == "anor londo"){
         score++;
     } 
     if(q2 == "soul of light"){
         score++;
     }
     if(q3 == "sif"){
        score++;
    }
    if(q4 == "ciaran"){
        score++;
    }
    if(q5 == "kalameet"){
        score++;
    }
    if(q6 == "gough"){
        score++;
    }
    if(q7 == "nito"){
        score++;
    }
    if(q8 == "oolacile"){
        score++;
    }
    if(q9 == "lightning"){
        score++;
    }
    if(q10 == "60000"){
        score++;
    }

    document.getElementById("quiz").classList.toggle("hide");
    document.getElementById("intro").classList.toggle("hide");

    if(score < 5){
        document.getElementById("result").innerHTML = "You Died! Your Score is: " + score + "! Try again!";
        document.getElementById("result").style.color = "#b40304";
    } else if (score >5 && score <8){
        document.getElementById("result").innerHTML ="You Defeated! Your Score is: " + score +"! Good Job!";
        document.getElementById("result").style.color = "#b7a849";
    } else if(score>8){
        document.getElementById("result").innerHTML = "Victory Achieved! Your Score is: "+score+"! PERFECT!";
        document.getElementById("result").style.color = "#93bcaf";
    }
})
}

let signIn = document.getElementById("signInBtn");

if (signIn != null){
    signIn.addEventListener("click", function(){
        var name = document.getElementById("login").username.value;
        document.getElementById("login").classList.toggle("hide");
        document.getElementById("msg").innerHTML = "Hello " + name + "!";
    })
}

let contact = document.getElementById("contactBtn");

if (contact != null){
    contact.addEventListener("click", function(){
        document.getElementById("contactMsg").innerHTML = "Thank you for your feedback!";
        document.getElementById("contactForm").classList.toggle("hide");
    })
}


