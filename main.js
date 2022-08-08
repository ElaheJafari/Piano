let playing = document.querySelector(".nowplaying");
let keys = document.querySelectorAll(".key");
//let audios = document.querySelectorAll(".p-audio");

window.addEventListener("keydown", (event) => {
    let elemnt = document.querySelector(`[data-key='${event.keyCode}']`)
    if (elemnt) {
        playing.innerHTML = elemnt.getAttribute("data-note");
        let audio = document.querySelector(`#${elemnt.getAttribute("data-audio")}`)
        elemnt.classList.add("playing")
        audio.currentTime = 0;
        audio.play()
    }
})


// window.addEventListener("keyup", (event) => {
//     let elemnt = document.querySelector(`[data-key='${event.keyCode}']`)
//     if (elemnt) {
//         elemnt.classList.remove("playing")
//         let audio = document.querySelector(`#${elemnt.getAttribute("data-audio")}`)
//         audio.pause()
//         audio.load()
//     }
// })


function removeTransition() {
    this.classList.remove('playing')
}
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
// audios.forEach((item) => {
//     item.play();
// })

// console.log();