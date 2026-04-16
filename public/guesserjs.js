//AUDIOS
const banditability = document.getElementById("banditability")
const breachcharge = document.getElementById("breachcharge")
const breakdoor = document.getElementById("breakdoor")
const c4 = document.getElementById("c4")
const claymoredeploy = document.getElementById("claymoredeploy")
const defusing = document.getElementById("defusing")
const dokicall = document.getElementById("dokicall")
const doortakedown = document.getElementById("doortakedown")
const dronethrow = document.getElementById("dronethrow")
const electricwall = document.getElementById("electricwall")
const flash = document.getElementById("flash")
const fuzecharge = document.getElementById("fuzecharge")
const hitdoor = document.getElementById("hitdoor")
const impactgrenade = document.getElementById("impactgrenade")
const lastopstanding = document.getElementById("lastopstanding")
const lionscan = document.getElementById("lionscan")
const offrepel = document.getElementById("offrepel")
const planting = document.getElementById("planting")
const attackersloss = document.getElementById("attackersloss")
const defencewin = document.getElementById("defencewin")
const skoposdokicall = document.getElementById("skoposdokicall")
const sledgehammerbreach = document.getElementById("sledgehammerbreach")
const smoke = document.getElementById("smoke")
const thermitebreach = document.getElementById("thermitebreach")
const vigleability = document.getElementById("vigleability")
const wrong = document.getElementById("wrong")
const right = document.getElementById("right")

//Guesses
const banditabilityguess = document.getElementById("banditabilityguess")
const breachchargeguess = document.getElementById("breachchargeguess")
const breakdoorguess = document.getElementById("breakdoorguess")
const c4guess = document.getElementById("c4guess")
const claymoredeployguess = document.getElementById("claymoredeployguess")
const defusingguess = document.getElementById("defusingguess")
const dokicallguess = document.getElementById("dokicallguess")
const doortakedownguess = document.getElementById("doortakedownguess")
const dronethrowguess = document.getElementById("dronethrowguess")
const electricwallguess = document.getElementById("electricwallguess")
const flashguess = document.getElementById("flashguess")
const fuzechargeguess = document.getElementById("fuzechargeguess")
const hitdoorguess = document.getElementById("hitdoorguess")
const impactgrenadeguess = document.getElementById("impactgrenadeguess")
const lastopstandingguess = document.getElementById("lastopstandingguess")
const lionscanguess = document.getElementById("lionscanguess")
const offrepelguess = document.getElementById("offrepelguess")
const plantingguess = document.getElementById("plantingguess")
const attackerslossguess = document.getElementById("attackerslossguess")
const defencewinguess = document.getElementById("defencewinguess")
const skoposdokicallguess = document.getElementById("skoposdokicallguess")
const sledgehammerbreachguess = document.getElementById("sledgehammerbreachguess")
const smokeguess = document.getElementById("smokeguess")
const thermitebreachguess = document.getElementById("thermitebreachguess")
const vigleabilityguess = document.getElementById("vigleabilityguess")
//different sfx
const beep = document.getElementById("beep")
//list for sounds
const guesses = [
    "banditability",
    "breachcharge",
    "breakdoor",
    "c4",
    "claymoredeploy",
    "defusing",
    "dokicall",
    "doortakedown",
    "dronethrow",
    "electricwall",
    "flash",
    "fuzecharge",
    "hitdoor",
    "impactgrenade",
    "lastopstanding",
    "lionscan",
    "offrepel",
    "planting",
    "attackersloss",
    "defencewin",
    "skoposdokicall",
    "sledgehammerbreach",
    "smoke",
    "thermitebreach",
    "vigleability"
];
//definitions
const correctshower = document.getElementById("correctcircleinnertext")
const incorrectshower = document.getElementById("incorrectcircleinnertext")
var correctamount = 0
var incorrectamount = 0
var guess = "NA"
var answer = "NA"
var rnum = 0
var sound = "NA"
var reset = document.getElementById("resetbutton")
var playbutton = document.getElementById("playbutton");

//buttons
playbutton.addEventListener("click", function () {
    playsound(sound)
});
reset.addEventListener("click", function () {
    correctamount = 0
    incorrectamount = 0
    beep.currentTime = 0.1;
    beep.play();
    console.log(correctamount + " " + incorrectamount)
    correctshower.innerHTML = correctamount
    incorrectshower.innerHTML = incorrectamount
})

//random sound genorator
function randomizesound() {
    rnum = Math.floor(Math.random() * guesses.length);
    sound = guesses[rnum]
    console.log("im trying to randomzie the sound, the random number is " + rnum);

}
randomizesound()
//play button code
function playsound(sound) {
    randomizesound()
    console.log("i am attempting to make a noise, the sound im trying to make is " + sound);
    if (sound == "banditability") {
        banditability.currentTime = 0;
        banditability.play();
    }

    if (sound == "breachcharge") {
        breachcharge.currentTime = 0;
        breachcharge.play();
    }

    if (sound == "breakdoor") {
        breakdoor.currentTime = 0;
        breakdoor.play();
    }

    if (sound == "c4") {
        c4.currentTime = 0;
        c4.play();
    }

    if (sound == "claymoredeploy") {
        claymoredeploy.currentTime = 0;
        claymoredeploy.play();
    }

    if (sound == "defusing") {
        defusing.currentTime = 0;
        defusing.play();
    }

    if (sound == "dokicall") {
        dokicall.currentTime = 0;
        dokicall.play();
    }

    if (sound == "doortakedown") {
        doortakedown.currentTime = 0;
        doortakedown.play();
    }

    if (sound == "dronethrow") {
        dronethrow.currentTime = 0;
        dronethrow.play();
    }

    if (sound == "electricwall") {
        electricwall.currentTime = 0;
        electricwall.play();
    }

    if (sound == "flash") {
        flash.currentTime = 0;
        flash.play();
    }

    if (sound == "fuzecharge") {
        fuzecharge.currentTime = 0;
        fuzecharge.play();
    }

    if (sound == "hitdoor") {
        hitdoor.currentTime = 0;
        hitdoor.play();
    }

    if (sound == "impactgrenade") {
        impactgrenade.currentTime = 0;
        impactgrenade.play();
    }

    if (sound == "lastopstanding") {
        lastopstanding.currentTime = 0;
        lastopstanding.play();
    }

    if (sound == "lionscan") {
        lionscan.currentTime = 0;
        lionscan.play();
    }

    if (sound == "offrepel") {
        offrepel.currentTime = 0;
        offrepel.play();
    }

    if (sound == "planting") {
        planting.currentTime = 0;
        planting.play();
    }

    if (sound == "attackersloss") {
        attackersloss.currentTime = 0;
        attackersloss.play();
    }

    if (sound == "defencewin") {
        defencewin.currentTime = 0;
        defencewin.play();
    }

    if (sound == "skoposdokicall") {
        skoposdokicall.currentTime = 0;
        skoposdokicall.play();
    }

    if (sound == "sledgehammerbreach") {
        sledgehammerbreach.currentTime = 0;
        sledgehammerbreach.play();
    }

    if (sound == "smoke") {
        smoke.currentTime = 0;
        smoke.play();
    }

    if (sound == "thermitebreach") {
        thermitebreach.currentTime = 0;
        thermitebreach.play();
    }

    if (sound == "vigleability") {
        vigleability.currentTime = 0;
        vigleability.play();
    }
    answer = sound
    console.log("the answer is: " + answer)
}

//guessing button code
banditabilityguess.addEventListener("click", guessingbanditability)
function guessingbanditability() {
    guess = "banditability"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

breachchargeguess.addEventListener("click", guessingbreachcharge)
function guessingbreachcharge() {
    guess = "breachcharge"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

breakdoorguess.addEventListener("click", guessingbreakdoor)
function guessingbreakdoor() {
    guess = "breakdoor"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

c4guess.addEventListener("click", guessingc4)
function guessingc4() {
    guess = "c4"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

claymoredeployguess.addEventListener("click", guessingclaymoredeploy)
function guessingclaymoredeploy() {
    guess = "claymoredeploy"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

defusingguess.addEventListener("click", guessingdefusing)
function guessingdefusing() {
    guess = "defusing"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

dokicallguess.addEventListener("click", guessingdokicall)
function guessingdokicall() {
    guess = "dokicall"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

doortakedownguess.addEventListener("click", guessingdoortakedown)
function guessingdoortakedown() {
    guess = "doortakedown"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

dronethrowguess.addEventListener("click", guessingdronethrow)
function guessingdronethrow() {
    guess = "dronethrow"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

electricwallguess.addEventListener("click", guessingelectricwall)
function guessingelectricwall() {
    guess = "electricwall"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

flashguess.addEventListener("click", guessingflash)
function guessingflash() {
    guess = "flash"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

fuzechargeguess.addEventListener("click", guessingfuzecharge)
function guessingfuzecharge() {
    guess = "fuzecharge"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

hitdoorguess.addEventListener("click", guessinghitdoor)
function guessinghitdoor() {
    guess = "hitdoor"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

impactgrenadeguess.addEventListener("click", guessingimpactgrenade)
function guessingimpactgrenade() {
    guess = "impactgrenade"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

lastopstandingguess.addEventListener("click", guessinglastopstanding)
function guessinglastopstanding() {
    guess = "lastopstanding"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

lionscanguess.addEventListener("click", guessinglionscan)
function guessinglionscan() {
    guess = "lionscan"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

offrepelguess.addEventListener("click", guessingoffrepel)
function guessingoffrepel() {
    guess = "offrepel"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

plantingguess.addEventListener("click", guessingplanting)
function guessingplanting() {
    guess = "planting"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

attackerslossguess.addEventListener("click", guessingattackersloss)
function guessingattackersloss() {
    guess = "attackersloss"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

defencewinguess.addEventListener("click", guessingdefencewin)
function guessingdefencewin() {
    guess = "defencewin"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

skoposdokicallguess.addEventListener("click", guessingskoposdokicall)
function guessingskoposdokicall() {
    guess = "skoposdokicall"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

sledgehammerbreachguess.addEventListener("click", guessingsledgehammerbreach)
function guessingsledgehammerbreach() {
    guess = "sledgehammerbreach"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

smokeguess.addEventListener("click", guessingsmoke)
function guessingsmoke() {
    guess = "smoke"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

thermitebreachguess.addEventListener("click", guessingthermitebreach)
function guessingthermitebreach() {
    guess = "thermitebreach"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}

vigleabilityguess.addEventListener("click", guessingvigleability)
function guessingvigleability() {
    guess = "vigleability"
    if (guess == answer) {
        correct()
    } else {
        incorrect()
    }
}
function correct() {
    console.log("correct guess: " + guess + " answer: " + answer)
    correctamount += 1
    correctshower.innerHTML = correctamount
    console.log("cor amount: " + correctamount)
    randomizesound()
    answer = "NA"
    right.currentTime = 0;
    right.play();
}
function incorrect() {
    console.log("incorrect guess: " + guess + " answer: " + answer)
    incorrectamount += 1
    incorrectshower.innerHTML = incorrectamount
    console.log("inc amount: " + incorrectamount)
    randomizesound()
    answer = "NA"
    wrong.currentTime = 0;
    wrong.play();
}
correctshower.innerHTML = correctamount
incorrectshower.innerHTML = incorrectamount