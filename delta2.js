
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let canvasW=canvas.width;
let canvasH=canvas.height;
    

let pfW=canvas.width;
let pfH=5;
let leftPressed=(rightPressed=false);
let downPressed =false;
let score = 0;
let interval = null;
let scoreInterval = null;


 function holeX(){
    return Math.floor(Math.random()*canvasW);
 }

 let platforms=[{x:0,y:canvasH-50,holeX:holeX()},
    {x:0,y:canvasH-20, holeX:holeX()}];



let ball={x:90,y:80,r:10,dy:1};

let dy=1;
drawPlatforms();
drawBall();

movePlatforms();
addNewPlatforms();
navigateBall();

function HoldAndDrop(closest){
 // ball.y+=5;

  
  if (ball.y> closest.y-ball.r){
    if(ball.x>closest.holeX &&
      ball.x < closest.holeX + 80 )
  {
    ball.y+=3;
  }else{
    ball.y=closest.y-ball.r;
  }
}

}


function drawBall(){



  if (rightPressed && ball.x+ball.r<canvasW){
    ball.x+= 3;
  }
  if(leftPressed && ball.x-ball.r>0){
    ball.x-=3;
  }
  if(downPressed){
    ball.y+=5;
  
  }
  ctx.beginPath();
  ctx.arc(ball.x,ball.y,ball.r,0,2* Math.PI);
  ctx.fillstyle="black";
  ctx.fill();
  ctx.closePath();
}



function movePlatforms(){
  

  ctx.clearRect(0,0,canvasW,canvasH);

 platforms.forEach((pf) =>{
 pf.y-=1;
   });
  
   addNewPlatforms();
   drawPlatforms();
   drawBall();
   requestAnimationFrame(movePlatforms);
  }
      
drawPlatforms();
addNewPlatforms();
drawScore();

      

function checkGameOver() {
  if (ball.y< 60) {
    alert("Game Over !!");
    reset();
  }
}
checkGameOver();




function reset() {
  ball = { x:100, y:60, r: 10 };
  platforms = [{ x: 0, y: canvasH,holeX:holeX() }];
  clearInterval(interval);
  clearInterval(scoreInterval);
  movePlatforms();
}


function addNewPlatforms(){
   const lastPf =platforms[platforms.length-1];
   const height=Math.floor(Math.random()*(100-50)+50);


  let score = parseInt(document.getElementById("score").innerHTML)
   const closest =platforms.find((pf)=>ball.y<pf.y+10 && ball.y> pf.y-10);
   if (closest){
    HoldAndDrop(closest);
    
  
  }else{
    ball.y+=2;
    score+=1
    document.getElementById("score").innerHTML=score
  }
    
    
    
  platforms.push({x:0,y:lastPf.y + height, holeX:holeX()}); 
}



function drawPlatforms() {
    platforms.forEach((pf) => {
      ctx.beginPath();
      ctx.rect(pf.x,pf.y ,pfW,pfH);
      ctx.fillstyle="black";
      ctx.fill();
      ctx.closePath();
      ctx.clearRect(pf.holeX,pf.y,80,pfH);



 ctx.beginPath();
 ctx.moveTo(0,0);
 ctx.lineTo(60,0);
 ctx.lineTo(30, 60);
 ctx.lineTo(0,0);
 ctx.closePath();
 ctx.fillStyle = 'black';
 ctx.fill();
 
 ctx.beginPath();
 ctx.moveTo(60,0);
 ctx.lineTo(120,0);
 ctx.lineTo(90, 60);
 ctx.closePath();
 ctx.fillstyle= 'black';
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(120,0);
 ctx.lineTo(180,0);
 ctx.lineTo(150, 60);
 ctx.closePath();
 ctx.fillstyle= 'black';
 ctx.fill();
 
 ctx.beginPath();
 ctx.moveTo(180,0);
 ctx.lineTo(240,0);
 ctx.lineTo(210, 60);
 ctx.closePath();
 ctx.fillstyle= 'black';
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(240,0);
 ctx.lineTo(300,0);
 ctx.lineTo(270, 60);
 ctx.closePath();
 ctx.fillstyle= 'black';
 ctx.fill();


 ctx.beginPath();
 ctx.moveTo(300,0);
 ctx.lineTo(360,0);
 ctx.lineTo(330, 60);
 ctx.closePath();
 ctx.fillstyle= 'black';
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(360,0);
 ctx.lineTo(420,0);
 ctx.lineTo(390, 60);
 ctx.closePath();
 ctx.fillstyle= 'black';
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(420,0);
 ctx.lineTo(480,0);
 ctx.lineTo(450, 60);
 ctx.closePath();
 ctx.fillstyle= 'black';
 ctx.fill();
 
 ctx.beginPath();
 ctx.moveTo(480,0);
 ctx.lineTo(540,0);
 ctx.lineTo(510, 60);
 ctx.closePath();
 ctx.fillstyle= 'black';
 ctx.fill();
 
 ctx.beginPath();
 ctx.moveTo(540,0);
 ctx.lineTo(600,0);
 ctx.lineTo(570, 60);
 ctx.closePath();
 ctx.fillstyle= 'black';
 ctx.fill();
});
}

function drawScore() {
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.fill();
  ctx.fillText("score: " + score, 10, 10);
  ctx.closePath();
}
drawScore();

function navigateBall(){
  document.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowRight'){
      rightPressed=true;
    }
    if(e.key==='ArrowLeft'){
      leftPressed=true;
    }
   
    if(e.key==='ArrowRight'){
      rightPressed=true;
     
    }

  });

  document.addEventListener('keyup',(e)=>{
    if(e.key==='ArrowRight'){
      rightPressed=false;
    }
    if(e.key==='ArrowLeft'){
      leftPressed=false;
    }
  });

  document.addEventListener('keydown',(e)=>{
    if(e.key==='ArrowDown'){
      downPressed=true;
      
    }
    
  });

  document.addEventListener('keyup',(e)=>{
    if(e.key==='ArrowDown'){
      downPressed=false;
    }
    
  });







}

  






    







 
 
 
 
 
 











 




