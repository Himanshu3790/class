canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

 background_image="mars.jpg";
 rover_w=100;
 rover_h=90;

 rover_image="rover.png"
 rover_x=10;
 rover_y=10;

 function add() {
     baby_background_image=new Image();
     baby_background_image.onload=uplod_b;
    baby_background_image.src=background_image;

    baby_rover_image=new Image();
    baby_rover_image.onload=uplod_r;
    baby_rover_image.src=rover_image;

 }
 function uplod_b(){
     ctx.drawImage(baby_background_image,0,0,canvas.width,canvas.height);
 }
 function uplod_r(){
    ctx.drawImage(baby_rover_image,0,0,rover_w,rover_h);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
key_code=e.keyCode;
console.log(key_code);
if (key_code=='37'){
    Left();
    console.log("Left");
}
if (key_code=='38'){
   Right();
    console.log("right");
}
if (key_code=='39'){
    Up();
    console.log("Up");
}
if (key_code=='40'){
    Down();
    console.log("down");
}
}
function Left(){
    if(rover_x>=10){
  rover_x=rover_x-10;
  uplod_r();uplod_b();
}
}
function Right(){
    if (rover_x<=790){
    rover_x=rover_x+10;
    uplod_r();
    uplod_b();
    }
}
function Up(){
    if (rover_y>=10){
    rover_y=rover_y+10;
    uplod_r();uplod_b();
    }
}
function Down(){
    if (rover_y<=590){
    rover_y=rover_y-10;
    uplod_r();uplod_b();
    }
}
