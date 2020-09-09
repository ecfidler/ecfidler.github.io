function setBody(id) {
    // First hide all with the Id
    var divsToHide = document.getElementsByClassName('main-box');
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.display = 'none';
    }

    document.getElementById(String(id)).style.display = 'initial'
}

function shuffle(a) { // shuffle an array
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Randomizes the colors of the circles
function colors() {
    var colorlistList = [ [0,0,255],  [255,0,0],  [0,255,0] ];
    var resultList = shuffle(colorlistList)
    console.log(resultList)

    document.getElementById('circle1').style.background = 'radial-gradient(circle, rgba('+resultList[0][0]+','+resultList[0][1]+','+resultList[0][2]+',1) 15%, rgba('+resultList[0][0]+','+resultList[0][1]+','+resultList[0][2]+',0) 90%)'
    document.getElementById('circle2').style.background = 'radial-gradient(circle, rgba('+resultList[1][0]+','+resultList[1][1]+','+resultList[1][2]+',1) 15%, rgba('+resultList[1][0]+','+resultList[1][1]+','+resultList[1][2]+',0) 90%)'
    document.getElementById('circle3').style.background = 'radial-gradient(circle, rgba('+resultList[2][0]+','+resultList[2][1]+','+resultList[2][2]+',1) 15%, rgba('+resultList[2][0]+','+resultList[2][1]+','+resultList[2][2]+',0) 90%)'
}

