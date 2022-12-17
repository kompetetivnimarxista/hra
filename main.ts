
let length = 0
let start = 0
let end = 0
let time = 0
let deltaTime = 0
let score = 0

function newRound(){
    length = randint(500, 5000)
    music.playTone(Note.C, length)
}


function pressed() {
    start = control.millis()
}

function released(){
    end = control.millis()
    time = Math.abs(end - start)
    deltaTime = Math.abs(length - time)
    console.log(length)
    console.log(time)
    if (deltaTime < 200) {
        score += 3
        basic.showNumber(score)
    } else if(deltaTime > 200 && deltaTime < 300){
        score += 2
        basic.showNumber(score)
    } else if (deltaTime > 300 && deltaTime < 400){
        score += 1
        basic.showNumber(score)
    } else{
        basic.showNumber(score)
    }

     newRound()
 }

let wasPressed = false

newRound()

basic.forever(function() {
    if(score >= 10){
        basic.showString("Konec Hry!")
    }
    if (input.buttonIsPressed(Button.A)) {
        if (!wasPressed) {
            pressed()
        }
        wasPressed = true
    } else {
        if (wasPressed) {
            released()
        }
        wasPressed = false
    }
})