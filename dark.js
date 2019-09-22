function dark() {
    var elements = document.getElementsByClassName('mainText');
    for (var i = 0; i < elements.length; i++) {
        elements.item(i).classList.toggle('dark')
    }
    if (document.body.style.backgroundColor == 'black') {
        document.body.style.backgroundColor = 'whitesmoke'
    } else {
        document.body.style.backgroundColor = 'black'
    }
    return
}

function shuffle(a) { // shuffle an array
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function ping() { // test function
    alert("pong")
    return
}

function colors() {
    var colorlistList = [ [0,0,255],  [255,0,0],  [0,255,0] ];
    var resultList = shuffle(colorlistList)
    console.log(resultList)

    document.getElementById('circle1').style.background = 'radial-gradient(circle, rgba('+resultList[0][0]+','+resultList[0][1]+','+resultList[0][2]+',1) 15%, rgba('+resultList[0][0]+','+resultList[0][1]+','+resultList[0][2]+',0) 90%)'
    document.getElementById('circle2').style.background = 'radial-gradient(circle, rgba('+resultList[1][0]+','+resultList[1][1]+','+resultList[1][2]+',1) 15%, rgba('+resultList[1][0]+','+resultList[1][1]+','+resultList[1][2]+',0) 90%)'
    document.getElementById('circle3').style.background = 'radial-gradient(circle, rgba('+resultList[2][0]+','+resultList[2][1]+','+resultList[2][2]+',1) 15%, rgba('+resultList[2][0]+','+resultList[2][1]+','+resultList[2][2]+',0) 90%)'
}

