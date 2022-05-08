import keyboardBody from './modules/keyboardBody';

keyboardBody();


// const keyboard = document.querySelector('.keyboard');
const textarea = document.querySelector('.textarea');
const symbols = document.querySelectorAll('.symbol span');
const letters = document.querySelectorAll('.letter');
// let shift = false;
let caps = false;
let lang = false;

const keys = document.querySelectorAll("[data-code]");

//выбираем язык при перезагрузке

 if(localStorage.getItem('lang') == 'true'){
        changeLang();
 }


keys.forEach(key=>{
    key.addEventListener('mousedown',(e)=>{
        // console.log(e.target.dataset.code)
        if(e.target.dataset.code == 'Backspace'){
          textarea.innerHTML = textarea.innerHTML.substring(0,textarea.innerHTML.length-1);
        }
        else if(e.target.dataset.code == 'Tab'){
          textarea.innerHTML += '    ';
        }
        else if(e.target.dataset.code == 'Space'){
          textarea.innerHTML += ' ';
        }
        else if(e.target.dataset.code == 'CapsLock'){
          e.target.classList.toggle('hover') ; 
          capsLock();
        }
        else if (e.target.dataset.code == 'Enter'){
          textarea.innerHTML += "\n";
        }
        else if (e.target.dataset.code == 'ShiftRight' || e.target.dataset.code == 'ShiftLeft'){
            shiftKeys();
        }
        else if (e.target.dataset.code == 'Delete'){
          textarea.innerHTML = textarea.innerHTML.substring(1,textarea.innerHTML.length);
      
        }
        else if(e.target.dataset.code == 'ShiftRight' ||
                e.target.dataset.code == 'ShiftLeft' || 
                e.target.dataset.code == 'ControlLeft' ||
                e.target.dataset.code == 'ControlRight' || 
                e.target.dataset.code == 'AltLeft' || 
                e.target.dataset.code == 'AltRight' ||
                e.target.dataset.code == 'MetaRight' ||
                e.target.dataset.code == 'MetaLeft' ||
                e.target.dataset.code == 'ArrowUp' || 
                e.target.dataset.code == 'ArrowLeft' ||
                e.target.dataset.code == 'ArrowRight' ||
                e.target.dataset.code == 'ArrowDown' 
                ){
            textarea.innerHTML += '';
        }
        else {
          textarea.innerHTML += e.target.innerText; 
        }
      
      });
    key.addEventListener('mouseup',(e)=>{
        if (e.target.dataset.code == 'ShiftRight' || e.target.dataset.code == 'ShiftLeft'){
            shiftKeys();
        }
    }) ;
});





function shiftKeys(){
    symbols.forEach(symbol=>{
        symbol.classList.toggle('hidden');
     });
     if(caps == false){
        letters.forEach(letter=>{
            letter.classList.toggle('uppercase');
        });
     }

}

function capsLock(){

    letters.forEach(letter=>{
        letter.classList.toggle('uppercase');
    });
    caps = !caps;

}

function changeLang(){
    let ruKey = document.querySelectorAll('.ru');
    let engKey = document.querySelectorAll('.eng');

    ruKey.forEach(key=>{
        key.classList.toggle('hidden');
    });
    engKey.forEach(key=>{
        key.classList.toggle('hidden');
    });

    lang = !lang;

    localStorage.setItem('lang', lang);

   
    
}


document.addEventListener("keydown", function(e) {
    // e.preventDefault();
    if(e.key == 'Backspace'){
        textarea.innerHTML = textarea.innerHTML.substring(0,textarea.innerHTML.length-1);
    }
    if(e.key == 'Tab'){
        e.preventDefault();
        textarea.innerHTML += "    ";
    }

    if (e.shiftKey && e.ctrlKey) {
        changeLang();
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
    let key = document.querySelector(`[data-code=${e.code}]`).innerText;

    if (e.code == 'Enter'){
        textarea.innerHTML += "\n";
    }
    else if(e.code == 'Space'){
        // e.preventDefault();
        textarea.innerHTML += " ";
    }
    else {
        textarea.innerHTML += key;
    }
    
  });


