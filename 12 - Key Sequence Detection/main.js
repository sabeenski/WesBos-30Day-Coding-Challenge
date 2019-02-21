const pressed = [];
const secretWord = 'secret';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  const x = pressed.splice(-secretWord - 1, pressed.length - secretWord.length)
  console.log(pressed) 
  console.log(x)
  if(pressed.join('').includes(secretWord)){
    cornify_add();
  }
})

