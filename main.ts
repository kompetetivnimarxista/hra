let score = 0;
let start = 0;
let end = 0;
let length = 0;
let calculate = false;

function newRound() {
    let gameTime = randint(500, 5000);
    calculate = true;
    music.playTone(Note.C, gameTime);
}

//if (calculate = true) {
//    basic.forever(function () {
        if (input.buttonIsPressed(Button.A)) {
            start = control.millis();
            console.log(start);
            while (!input.buttonIsPressed(Button.A)) {
                end = control.millis();
                console.log("kkt");
                let time = Math.abs(end - start);
                if (time < 200) {
                    score = 3;
                    console.log(score);
                    calculate = false;
                } else if (time > 200 && time < 300) {
                    score = 2;
                    console.log(score);
                    calculate = false;
                } else if (time > 300 && time < 500) {
                    score = 1;
                } else {
                    score = 0;
                    console.log(score);
                    calculate = false;
                }
            }
        }
//    });
//}

console.log("ne");
newRound();
