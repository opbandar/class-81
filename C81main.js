canvas=document.getElementById("mycanvas");
color="red";
ctx=canvas.getContext("2d"); 
ctx.beginpath;
ctx.strokestyle=color;
ctx.linewidh=2;
ctx.arc(200,200,40,0,2*Math.PI)
ctx.stroke();
mouse_x = e.clientx
mouse_y = e.cleinty
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color= document.getElementById("color").Value;
console.log(color) ;


mouse_x = e.clientx - canvas.offsetleft;
mouse_y = e.clienty - canvas.offsettop;

console.log("x =" + mouse_x + " ,y + " + mouse_y);
circle(mouse_x , mouse_y);
}
function circle(mouse_x, mouse_y)
{
    ctx.beginpath;
ctx.strokestyle=color;
ctx.linewidh=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI)
ctx.stroke();
}

