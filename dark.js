let inverted = 0
let colorList = [ [0,0,255],  [255,0,0],  [0,255,0] ];
let circles = ['circle1', 'circle2', 'circle3'];

function setBody(id) {
    // First hide all with the Id
    let divsToHide = document.getElementsByClassName('main-box');
    for(let i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = 'none'
    }

    document.getElementById(String(id)).style.display = 'initial'
}

function shuffle(a) { // shuffle an array
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

// Randomizes the colors of the circles
function colors() {
    let resultList = colorList
    resultList = shuffle(resultList)

    document.getElementById('circle1').style.background = 'radial-gradient(circle, rgba('+resultList[0][0]+','+resultList[0][1]+','+resultList[0][2]+',1) 10%, rgba('+resultList[0][0]+','+resultList[0][1]+','+resultList[0][2]+',0) 85%)'
    document.getElementById('circle2').style.background = 'radial-gradient(circle, rgba('+resultList[1][0]+','+resultList[1][1]+','+resultList[1][2]+',1) 10%, rgba('+resultList[1][0]+','+resultList[1][1]+','+resultList[1][2]+',0) 85%)'
    document.getElementById('circle3').style.background = 'radial-gradient(circle, rgba('+resultList[2][0]+','+resultList[2][1]+','+resultList[2][2]+',1) 10%, rgba('+resultList[2][0]+','+resultList[2][1]+','+resultList[2][2]+',0) 85%)'
}

function invert() {

    inverted = (inverted + 1) % 2

    colorFilter = inverted == 1 ? 'invert(1) blur(1.5vw)' : 'blur(1.5vw)';

    blendMode = inverted == 1 ? 'multiply' : 'normal'

    document.body.style.backgroundColor = inverted == 1 ? "white" : "black";

    document.getElementById('circle1').style.filter = colorFilter
    document.getElementById('circle2').style.filter = colorFilter
    document.getElementById('circle3').style.filter = colorFilter

    document.getElementById('circle1').style.mixBlendMode = blendMode;
    document.getElementById('circle2').style.mixBlendMode = blendMode;
    document.getElementById('circle3').style.mixBlendMode = blendMode;
}

function lastModified() {

    let last = new Date(document.lastModified);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let buffer = new String("Site last updated " + months[last.getMonth()] + " " + last.getDate() + ", " + last.getFullYear() + ".")

    document.getElementById('last-label').innerHTML = buffer
}