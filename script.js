function playSound(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
    const key = document.querySelector(`.key[data-key='${e.keyCode}']`);
    
    if(!audio) return; //stop function from running if audio is nullif 
    audio.currentTime = 0; //rewind time for repeated keystroke
    audio.play();

    key.classList.add('playing')
}

function removeTransition(e) { 
    if (e.propertyName !== 'transform') return; //skip function if not transform event
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));


window.addEventListener('keydown', playSound);