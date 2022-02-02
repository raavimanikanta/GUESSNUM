
let displayNum=Math.trunc(Math.random()*20)+1;

let score=20;
let highscore=0;
document.querySelector('#butn1').addEventListener('click',function(){
       const inputval=document.querySelector("#num").value;
       if(!inputval){
              document.querySelector('.correctnum').textContent="😂 No-Number";
       }
       
       else if(inputval==displayNum){
              document.querySelector('.correctnum').textContent="✨You Won The Game";
              let a=document.querySelector(".container1");
              a.style.backgroundColor = "#60b347";
              if(score>highscore){
                     highscore=score;
                     document.querySelector(".hs").textContent=highscore;
              }
             
       }
       
       else if(inputval<displayNum){
       
              if(score>1){
                     document.querySelector('.correctnum').textContent="low number";
                     score--;
                     document.querySelector(".score1").textContent=score;
                  
              }
              else {
                     document.querySelector(".correctnum").textContent="You lost the game";
                     var a=document.querySelector(".container1");
                     a.style.backgroundColor="#e92747";
                     
              }
             
       }
       
       else if(inputval>displayNum){
              if(score>1){
                     document.querySelector('.correctnum').textContent="High number";
                     score--;
                     document.querySelector(".score1").textContent=score;
                    
              }
              else {
                     document.querySelector(".correctnum").textContent="You lost the game";
                     var a=document.querySelector(".container1");
                     a.style.backgroundColor="#e92747";
              }
           
       }
});
   document.querySelector("#btn1").addEventListener("click",function(){
       score=20;
       displayNum=Math.trunc(Math.random()*20)+1;
       document.querySelector('.correctnum').textContent="Guess the number";
       document.querySelector(".score1").textContent=score;
       document.querySelector(".number").textContent="?";
       document.querySelector("#num").value="";
       var a=document.querySelector(".container1");
       a.style.backgroundColor="black";
       document.querySelector(".hs").textContent=highscore;
     

   })