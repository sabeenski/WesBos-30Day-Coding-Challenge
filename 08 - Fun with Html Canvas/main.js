
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d'); 

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = 'BADA55'
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 0;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e){
  if(!isDrawing) return; //Stop the function from running when they are moused down.
  console.log(e)   //here is where everything is going to 'show' the drawing
  ctx.strokeStyle = `hsl(${ hue }, 100%, 50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);//where the mouse was last 'mouseup' (0 by default)
  //go to
  ctx.lineTo(e.offsetX, e.offsetY); //where the mouse moved, takes it from the console
  ctx.stroke();

  // lastX = event.offsetX;
  // lastY = event.offsetY; can be also put in array like that, {destructuring}:
  [lastX, lastY ] = [e.offsetX, e.offsetY ];

  hue ++;
  if(hue >= 360) {
    hue = 0;
  }

  //making the line thicker and thinner, and not resetting it but reversing the direction of growth.
  if(ctx.lineWidth >= 30 || ctx.lineWidth <= 1) {
    direction = !direction
  }
  if(direction){
    ctx.lineWidth ++; 
  } else {
    ctx.lineWidth -- ;
  }
}
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY ] = [e.offsetX, e.offsetY ];

});

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);


