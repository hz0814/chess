var chess=document.getElementById('chess');
var context=chess.getContext('2d');
var me=true;
var chessBoard=[];
for(var i=0;i<15;i++){
	chessBoard[i]=[]
	for(var j=0;j<15;j++){
		chessBoard[i][j]=0;
	}
}

context.strokeStyle='#bfbfbf';

var logo=new Image();
logo.src="img/lazy.png";
logo.onload=function(){
	context.drawImage(logo,0,0,450,450);
	drawChessBorder();
}


function drawChessBorder(){
	for(var i=0;i<=15;i++){
		context.moveTo(15+i*30,15);
		context.lineTo(15+i*30,435);
		context.stroke();
		context.moveTo(15,15+i*30);
		context.lineTo(435,15+i*30);
		context.stroke();
	}
}

var oneStep=function(i,j,me){
	context.beginPath();
	context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
	context.closePath();
	var gra=context.createRadialGradient(15+i*30+2,15+j*30-2,13,15+i*30+2,15+j*30-2,0);
	if(me){
		gra.addColorStop(0,'#0a0a0a');
		gra.addColorStop(1,'#636766');
	}else{
		gra.addColorStop(0,'#d1d1d1');
		gra.addColorStop(1,'#f9f9f9');
	}
	context.fillStyle=gra;
	context.fill();
}

chess.onclick=function(e){
	var x=e.offsetX;
	var y=e.offsetY;
	var i=Math.floor(x/30);
	var j=Math.floor(y/30);
	if(chessBoard[i][j]==0){
		oneStep(i,j,me);
		if(me){
			chessBoard[i][j]=1;
		}else{
			chessBoard[i][j]=2;
		}
		me=!me;
	}
}




