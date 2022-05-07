import keyboardBody from './modules/keyboardBody';

keyboardBody();


const textarea = document.querySelector('.textarea');
const symbols = document.querySelectorAll('.symbol span');
const letters = document.querySelectorAll('.letter span');
// let shift = false;
// let caps = false;
const leftShift = document.querySelector('.left-shift');
const rightShift = document.querySelector('.right-shift');
const backspace = document.querySelector('.backspace');
const keys = document.querySelectorAll("[data-code]");

document.addEventListener('click',(e)=>{
    if(e.target == rightShift || e.target == leftShift){
        shiftKeys();
    }  

    console.log(e.target);
    
});



function shiftKeys(){
    symbols.forEach(symbol=>{
        symbol.classList.toggle('hidden');
     });
     letters.forEach(letter=>{
         letter.classList.toggle('uppercase');
     });

    //  shift = (shift === true) ? false : true;
    //  capsLock = false;
    //  return false;
}

function capsLock(){

    letters.forEach(letter=>{
        letter.classList.toggle('uppercase');
    });

   
}


document.addEventListener("keydown", function(e) {
    // e.preventDefault();
    if(e.key == 'Backspace'){
        textarea.innerHTML = textarea.innerHTML.substring(0,textarea.innerHTML.length-1);
    }
    if(e.key == 'Tab'){
        e.preventDefault();
        textarea.innerHTML += "\t";
    }
  
  
    //hover
    keys.forEach(key =>{
        if(key.getAttribute(("data-code")) === e.code){
            key.classList.add('hover');
        }
    });

    //Shift
    if(e.key == 'Shift'){
        shiftKeys();
    }

    if(e.key == 'CapsLock'){
      capsLock();
  
    }

    // console.log(e.code);
    // console.log(e.key);

    
  });

document.addEventListener("keyup", function(e) {
    //hover
    keys.forEach(key =>{
        if(key.getAttribute(("data-code")) === e.code){
            key.classList.remove('hover');
        }
    });

    if(e.key == 'Shift'){
        shiftKeys();
    }

    if(e.key == 'CapsLock'){
        capsLock();
        // console.log('capsLock');
    }

  });

document.addEventListener("keypress", function(e) {
    console.log(e.key);
    if (e.key == 'Enter'){
        textarea.innerHTML += "\n";

    }
    else {
        textarea.innerHTML += e.key;
    }
    
  });


