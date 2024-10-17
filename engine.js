const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext('2d');


ctx.fillStyle = 'darkgoldenrod';
let x = 100;
let y = 100;



function drawBall(x,y,r){

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fillStyle='golden';
    ctx.fill();
    ctx.stroke();
    
}

window.addEventListener('keydown',(e) =>{

    if(e.key == 'ArrowUp'){
        y--;
    }
    else if( e.key == 'ArrowDown'){
        y++;
    } 
    else if( e.key == 'ArrowLeft'){
        x--;
    }
    else if(e.key == 'ArrowRight'){
        x++;
    }

    
})


setInterval(()=>{
    
    drawBall(x,y,50);
},1000/60)