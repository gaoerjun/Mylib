/*! gaoerjunLib 2015-08-03 */
function canvasSupport(){return Modernizr.canvas}function canvasApp(){function a(){function a(){for(var a=0;10>=a;a++)for(var b=0;14>=b;b++)colCtr=32*b+16,rowCtr=32*a+16,h.save(),sourceX=32*Math.floor(z[a][b]%8),sourceY=32*Math.floor(z[a][b]/8),h.drawImage(i,sourceX,sourceY,32,32,colCtr,rowCtr,32,32),h.restore()}function b(){function a(){if(1==E[32]){if(q&&location.reload(),shell.shellflage)return;if(tankmove.nextx<0)return;G.play(),shell.shellflage=!0,shell.nextx=tankmove.nextx,shell.nexty=tankmove.nexty,shell.shellAngle=tankmove.tankAngle,A&&(clearInterval(A),A=null),A=setInterval(d,33)}}if(tankmove.x=tankmove.nextx,tankmove.y=tankmove.nexty,1==E[37]){if(q)return;return a(),tankmove.tankAngle=270,tankmove.nextx-=tankmove.tankspeed,tankmove.tankshape=tankmove.tanknextshape,0!=z[Math.floor((tankmove.nexty-12)/32)][Math.floor((tankmove.nextx-12)/32)]||0!=z[Math.ceil((tankmove.nexty-20)/32)][Math.floor((tankmove.nextx-12)/32)]?(tankmove.nextx=tankmove.x,void(tankmove.nexty=tankmove.y)):(tankmove.tanknextshape+=1,void(tankmove.tanknextshape>8&&(tankmove.tanknextshape=1)))}if(1==E[39]){if(q)return;return a(),tankmove.tankAngle=90,tankmove.nextx+=tankmove.tankspeed,tankmove.tankshape=tankmove.tanknextshape,0!=z[Math.ceil((tankmove.nexty-20)/32)][Math.ceil((tankmove.nextx-20)/32)]||0!=z[Math.floor((tankmove.nexty-12)/32)][Math.ceil((tankmove.nextx-20)/32)]?(tankmove.nextx=tankmove.x,void(tankmove.nexty=tankmove.y)):(tankmove.tanknextshape+=1,void(tankmove.tanknextshape>8&&(tankmove.tanknextshape=1)))}if(1==E[38]){if(q)return;return a(),tankmove.tankAngle=0,tankmove.nexty-=tankmove.tankspeed,tankmove.tankshape=tankmove.tanknextshape,0!=z[Math.floor((tankmove.nexty-12)/32)][Math.floor((tankmove.nextx-12)/32)]||0!=z[Math.floor((tankmove.nexty-12)/32)][Math.ceil((tankmove.nextx-20)/32)]?(tankmove.nextx=tankmove.x,void(tankmove.nexty=tankmove.y)):(tankmove.tanknextshape+=1,void(tankmove.tanknextshape>8&&(tankmove.tanknextshape=1)))}if(1==E[40]){if(q)return;return a(),tankmove.tankAngle=180,tankmove.nexty+=tankmove.tankspeed,tankmove.tankshape=tankmove.tanknextshape,0!=z[Math.ceil((tankmove.nexty-20)/32)][Math.ceil((tankmove.nextx-20)/32)]||0!=z[Math.ceil((tankmove.nexty-20)/32)][Math.floor((tankmove.nextx-12)/32)]?(tankmove.nextx=tankmove.x,void(tankmove.nexty=tankmove.y)):(tankmove.tanknextshape+=1,void(tankmove.tanknextshape>8&&(tankmove.tanknextshape=1)))}a()}function c(){h.save(),h.setTransform(1,0,0,1,0,0);var a=tankmove.tankAngle*Math.PI/180;h.translate(tankmove.x+16,tankmove.y+16),h.rotate(a);var b=32*Math.floor(tankmove.tankshape%8),c=32*Math.floor(tankmove.tankshape/8);h.drawImage(i,b,c,32,32,-16,-16,32,32),h.restore(),h.clearRect(496,16,138,352),h.fillStyle="#3cb371",h.fillRect(496,16,138,352),h.save(),h.fillStyle="#000000",h.font="italic bold 23px serif",h.fillText("关  卡:"+k,500,80),h.fillText("敌  人:"+l,500,110),h.fillText("生  命:"+m,500,140),h.fillText("得  分:"+j,500,170),h.fillText("最高分:"+p,500,200),h.restore(),h.save(),h.fillStyle="#000000",h.font="normal bold 15px normal",h.fillText("游戏说明: 玩家",500,270),h.fillText("操控坦克进行战",500,290),h.fillText("斗，击毁敌方得",500,310),h.fillText("分，被击毁或相",500,330),h.fillText("相撞减分。",500,350),h.restore()}function d(){function a(){function a(a){switch(a){case 26:return A&&(clearInterval(A),A=null),setTimeout(function(){shell.shellflage=!1},300),shell.nextx=-500,shell.nexty=-500,0;case 31:return A&&(clearInterval(A),A=null),setTimeout(function(){shell.shellflage=!1},300),shell.nextx=-500,shell.nexty=-500,a;case 30:return A&&(clearInterval(A),A=null),setTimeout(function(){shell.shellflage=!1},300),shell.nextx=-500,shell.nexty=-500,a;default:return 0}}if(0==shell.shellAngle){shell.nexty-=shell.shellspeed;var b=z[Math.floor((shell.nexty-12)/32)][Math.floor(shell.nextx/32)];z[Math.floor((shell.nexty-12)/32)][Math.floor(shell.nextx/32)]=a(b)}if(90==shell.shellAngle){shell.nextx+=shell.shellspeed;var b=z[Math.floor(shell.nexty/32)][Math.floor((shell.nextx+12)/32)];z[Math.floor(shell.nexty/32)][Math.floor((shell.nextx+12)/32)]=a(b)}if(180==shell.shellAngle){shell.nexty+=shell.shellspeed;var b=z[Math.floor((shell.nexty+12)/32)][Math.floor(shell.nextx/32)];z[Math.floor((shell.nexty+12)/32)][Math.floor(shell.nextx/32)]=a(b)}if(270==shell.shellAngle){shell.nextx-=shell.shellspeed;var b=z[Math.floor(shell.nexty/32)][Math.floor((shell.nextx-12)/32)];z[Math.floor(shell.nexty/32)][Math.floor((shell.nextx-12)/32)]=a(b)}}function b(){shell.x=shell.nextx,shell.y=shell.nexty,h.save(),h.setTransform(1,0,0,1,0,0);var a=shell.shellAngle*Math.PI/180;h.translate(shell.x+16,shell.y+16),h.rotate(a);var b=32*Math.floor(shell.shellshape%8),c=32*Math.floor(shell.shellshape/8);h.drawImage(i,b,c,32,32,-16,-16,32,32),h.restore()}q||(a(),b())}return q?(h.save(),h.fillStyle="#000000",h.font="normal bold 50px normal",h.fillText("游戏结束",150,150),h.restore(),h.save(),h.fillStyle="#000000",h.font="normal bold 25px normal",h.fillText("按空格键重新开始游戏",125,200),h.restore(),void b()):(b(),a(),void c())}function b(){function a(){function a(){var a=Math.floor(100*Math.random());0==a&&(o.enemytankAngle+=90),1==a&&(o.enemytankAngle-=90),o.enemytankAngle=(o.enemytankAngle+360)%360}function b(){o.nextx=o.x,o.nexty=o.y;var a=Math.floor(2*Math.random());0==a?o.enemytankAngle+=90:o.enemytankAngle-=90,o.enemytankAngle=(o.enemytankAngle+360)%360}o.shapenum=(.1+o.shapenum)%8+9,o.enemytankshape=Math.floor(o.shapenum),180==o.enemytankAngle&&(a(),o.nexty+=o.enemytankspeed,(0!=z[Math.ceil((o.nexty-20)/32)][Math.ceil((o.nextx-20)/32)]||0!=z[Math.ceil((o.nexty-20)/32)][Math.floor((o.nextx-12)/32)])&&b()),270==o.enemytankAngle&&(a(),o.nextx-=o.enemytankspeed,(0!=z[Math.floor((o.nexty-12)/32)][Math.floor((o.nextx-12)/32)]||0!=z[Math.ceil((o.nexty-20)/32)][Math.floor((o.nextx-12)/32)])&&b()),90==o.enemytankAngle&&(a(),o.nextx+=o.enemytankspeed,(0!=z[Math.ceil((o.nexty-20)/32)][Math.ceil((o.nextx-20)/32)]||0!=z[Math.floor((o.nexty-12)/32)][Math.ceil((o.nextx-20)/32)])&&b()),0==o.enemytankAngle&&(a(),o.nexty-=o.enemytankspeed,(0!=z[Math.floor((o.nexty-12)/32)][Math.floor((o.nextx-12)/32)]||0!=z[Math.floor((o.nexty-12)/32)][Math.ceil((o.nextx-20)/32)])&&b());var g=Math.floor(100*Math.random());if(0==g){if(x.shellflage)return;if(o.nextx<0)return;x.shellflage=!0,x.nextx=o.nextx,x.nexty=o.nexty,x.shellAngle=o.enemytankAngle,B&&(clearInterval(B),B=null),B=setInterval(f,33)}if(c(shell,o)){if(A&&(clearInterval(A),A=null),j++,j>=p&&(p=j,localStorage.record=p),j>=5*k){if(k++,k>=5)return void(q=!0);z=y[(k-1)%4];for(var h=0;2>=h;h++){var i=48+192*h;tempenemytank={appearx:i,appeary:48,x:i,y:48,nextx:i,nexty:48,enemytankspeed:t+.5*k,enemytankAngle:180,enemytankshape:0,shapenum:0},w[h]=tempenemytank}tankmove={appearx:240,appeary:304,x:240,y:304,nextx:240,nexty:304,tankAngle:u,tankspeed:t,tankshape:v,tanknextshape:v},x={x:0,y:0,nextx:0,nexty:0,shellspeed:t+.5*k+2,shellshape:21,shellAngle:u,shellflage:!1},l=6}l--,setTimeout(function(){shell.shellflage=!1},300),e(o),o.nextx=-500,shell.nextx=-500,shell.nexty=-500}if(d(x,tankmove)){if(n)return;if(B&&(clearInterval(B),B=null),m--,0>=m)return void(q=!0);n=!0,setTimeout(function(){n=!1},2e3),e(tankmove),setTimeout(function(){x.shellflage=!1},300),tankmove.nextx=-500,x.nextx=-500,x.nexty=-500}if(c(o,tankmove)){if(B&&(clearInterval(B),B=null),n)return;if(n=!0,setTimeout(function(){n=!1},2e3),m--,0>=m)return void(q=!0);e(tankmove),tankmove.nextx=-500}}function b(){o.x=o.nextx,o.y=o.nexty,h.save(),h.setTransform(1,0,0,1,0,0);var a=o.enemytankAngle*Math.PI/180;h.translate(o.x+16,o.y+16),h.rotate(a);var b=32*Math.floor(o.enemytankshape%8),c=32*Math.floor(o.enemytankshape/8);h.drawImage(i,b,c,32,32,-16,-16,32,32),h.restore()}function f(){function a(){function a(a){switch(a){case 26:return B&&(clearInterval(B),B=null),setTimeout(function(){x.shellflage=!1},300),x.nextx=-500,x.nexty=-500,0;case 31:return B&&(clearInterval(B),B=null),setTimeout(function(){x.shellflage=!1},300),x.nextx=-500,x.nexty=-500,a;case 30:return B&&(clearInterval(B),B=null),setTimeout(function(){x.shellflage=!1},300),x.nextx=-500,x.nexty=-500,a;default:return 0}}if(0==x.shellAngle){x.nexty-=x.shellspeed;var b=z[Math.floor((x.nexty-0)/32)][Math.floor(x.nextx/32)];z[Math.floor((x.nexty-0)/32)][Math.floor(x.nextx/32)]=a(b)}if(90==x.shellAngle){x.nextx+=x.shellspeed;var b=z[Math.floor(x.nexty/32)][Math.floor((x.nextx+0)/32)];z[Math.floor(x.nexty/32)][Math.floor((x.nextx+0)/32)]=a(b)}if(180==x.shellAngle){x.nexty+=x.shellspeed;var b=z[Math.floor((x.nexty+0)/32)][Math.floor(x.nextx/32)];z[Math.floor((x.nexty+0)/32)][Math.floor(x.nextx/32)]=a(b)}if(270==x.shellAngle){x.nextx-=x.shellspeed;var b=z[Math.floor(x.nexty/32)][Math.floor((x.nextx-0)/32)];z[Math.floor(x.nexty/32)][Math.floor((x.nextx-0)/32)]=a(b)}}function b(){x.x=x.nextx,x.y=x.nexty,h.save(),h.setTransform(1,0,0,1,0,0);var a=x.shellAngle*Math.PI/180;h.translate(x.x+16,x.y+16),h.rotate(a);var b=32*Math.floor(x.shellshape%8),c=32*Math.floor(x.shellshape/8);h.drawImage(i,b,c,32,32,-16,-16,32,32),h.restore()}q||(a(),b())}if(!q)for(var g=0;2>=g;g++){var o=w[g];a(),b()}}function c(a,b){var c=a.nextx-b.nextx,d=a.nexty-b.nexty,e=Math.sqrt(c*c+d*d);return 26>=e?!0:!1}function d(a,b){var c=a.nextx-b.nextx,d=a.nexty-b.nexty,e=Math.sqrt(c*c+d*d);return 26>=e?!0:!1}function e(a){function b(a){h.save(),h.setTransform(1,0,0,1,0,0),h.translate(c+16,d+16);var b=32*Math.floor(a%8),e=32*Math.floor(a/8);h.drawImage(i,b,e,32,32,-16,-16,32,32),h.restore()}F.play();var c=a.x,d=a.y,e=0,f=setInterval(function(){if(b(17+Math.floor(e/10)),e++,e>29){if(clearInterval(f),setTimeout(function(){a.shellflage=!1},300),48==a.appeary&&2>=l)return void(a.enemytankspeed=0);a.nextx=a.appearx,a.nexty=a.appeary}},15)}function f(){s=setInterval(a,33),r=setInterval(b,33)}if(canvasSupport()){var g=document.getElementById("canvasOne"),h=g.getContext("2d"),i=new Image;i.addEventListener("load",f,!1),i.src="tanks_sheet.png",h.fillStyle="#CCCCCC",h.fillRect(0,0,g.width,g.height),h.lineWidth=16,h.strokeStyle="#000000",h.strokeRect(8,8,g.width-16,g.height-16);var j=0,k=1,l=5,m=3,n=!1,o=window.localStorage;0==o.length&&(localStorage.record=0);var p=localStorage.record,q=!1,r=null,s=null,t=3,u=0,v=1;tankmove={appearx:240,appeary:304,x:240,y:304,nextx:240,nexty:304,tankAngle:u,tankspeed:t,tankshape:v,tanknextshape:v},shell={x:0,y:0,nextx:0,nexty:0,shellspeed:t+4,shellshape:20,shellAngle:u,shellflage:!1};for(var w=new Array,x={x:0,y:0,nextx:0,nexty:0,shellspeed:t+2,shellshape:21,shellAngle:u,shellflage:!1},y=[[[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[31,0,0,0,0,0,0,0,0,0,0,0,0,0,31],[31,0,0,0,26,26,0,0,0,26,26,0,0,0,31],[31,0,0,26,0,0,26,0,26,0,0,26,0,0,31],[31,0,0,26,0,0,0,26,0,0,0,26,0,0,31],[31,26,0,0,26,0,0,0,0,0,26,0,0,26,31],[31,26,0,0,0,26,0,0,0,26,0,0,0,26,31],[31,26,0,0,0,0,26,0,26,0,0,0,0,26,31],[31,26,26,26,26,0,0,26,0,0,26,26,26,26,31],[31,0,0,0,0,0,0,0,0,0,0,0,0,0,31],[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],[[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[31,0,0,0,0,0,0,0,0,0,0,0,0,0,31],[31,0,26,26,26,26,0,0,0,26,26,26,26,0,31],[31,0,0,0,0,26,0,0,0,26,0,0,0,0,31],[31,26,26,26,26,26,26,26,26,26,26,26,26,26,31],[31,0,26,0,0,0,0,26,0,0,0,0,26,0,31],[31,26,26,0,26,26,26,26,26,26,26,0,26,26,31],[31,0,0,0,0,26,0,0,0,26,0,0,0,0,31],[31,26,26,26,26,0,0,0,0,0,26,26,26,26,31],[31,0,0,26,26,0,0,0,0,0,26,26,0,0,31],[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],[[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[31,0,0,0,0,0,0,0,0,0,0,0,0,0,31],[31,0,26,26,26,26,26,0,26,26,26,26,26,0,31],[31,0,26,0,0,0,26,0,26,0,0,0,26,0,31],[31,0,26,0,0,0,26,0,26,0,0,0,26,0,31],[31,0,26,0,0,0,26,0,26,26,26,26,26,0,31],[31,0,26,0,0,0,26,0,0,0,0,0,26,0,31],[31,0,26,0,0,0,26,0,26,0,0,0,26,0,31],[31,0,26,26,26,26,26,0,26,26,26,26,26,0,31],[31,0,0,0,0,0,0,0,0,0,0,0,0,0,31],[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],[[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[31,0,0,0,0,0,0,0,0,0,0,0,0,0,31],[31,0,26,26,26,26,26,0,26,26,26,0,26,26,31],[31,0,0,0,0,26,0,0,0,0,26,0,0,0,31],[31,26,26,26,0,26,26,26,26,26,26,26,0,26,31],[31,0,0,0,0,0,0,26,0,0,0,0,0,26,31],[31,26,0,26,26,26,26,26,26,26,26,0,26,26,31],[31,0,0,0,0,0,26,0,0,26,0,0,0,0,31],[31,26,26,26,26,0,0,26,26,26,0,26,26,26,31],[31,0,0,26,0,0,0,0,0,0,0,26,0,0,31],[30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]]],z=y[k-1],A=null,B=null,C=0;2>=C;C++){var D=48+192*C;tempenemytank={appearx:D,appeary:48,x:D,y:48,nextx:D,nexty:48,enemytankspeed:t-1,enemytankAngle:180,enemytankshape:0,shapenum:0},w[C]=tempenemytank}var E=[];document.onkeydown=function(a){a=a?a:window.event,E[a.keyCode]=!0},document.onkeyup=function(a){a=a?a:window.event,E[a.keyCode]=!1};var F=document.createElement("audio");document.body.appendChild(F),F.setAttribute("src","explode1.mp3"),F.valume=.5;var G=document.createElement("audio");document.body.appendChild(G),G.setAttribute("src","shoot1.mp3"),G.volume=.5;var H=document.createElement("audio");document.body.appendChild(H),H.setAttribute("src","move1.mp3"),H.valume=.001;var I=document.createElement("audio");document.body.appendChild(I),I.setAttribute("src","move2.mp3"),I.valume=.001}}function supportedAudioFormat(a){var b="";return"probably"==a.canPlayType("audio/ogg")||"maybe"==a.canPlayType("audio/ogg")?b="ogg":"probably"==a.canPlayType("audio/wav")||"maybe"==a.canPlayType("audio/wav")?b="wav":("probably"==a.canPlayType("audio/mp3")||"maybe"==a.canPlayType("audio/mp3"))&&(b="mp3"),b}window.addEventListener("load",canvasApp,!1);