function fisherYatesShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function generateUniqueRandomNumbersOptimized(count, min, max) {
    const numberPool = Array.from({ length: max - min + 1 }, (v, k) => k + min);
    const shuffledPool = fisherYatesShuffle(numberPool);
    return shuffledPool.slice(0, count);
}
const randomNumbersOptimized = generateUniqueRandomNumbersOptimized(1, 1, 6);
// console.log(randomNumbersOptimized);

// Fire detect
warning_msg = "YOU ARE DIE !!"
var i = 1;
function FireDetect() {
    if (i == randomNumbersOptimized) {
        var audio = document.getElementById("shooting");
        audio.play();
        alert(warning_msg)
        window.location.reload();
    } else {
        var audio = document.getElementById("noshooting");
        audio.play();
        i = i + 1;
    }
}

// Count amount of shooting
var num = 0;
function ShotingCountBtn() {
    if (num == 6) {
        num = 0;
        document.getElementById("amountofshot").innerHTML = 0;
    } else {
        document.getElementById("amountofshot").innerHTML = num = num + 1;
    }
}

// Background music
document.addEventListener('visibilitychange', function () {
    var audio = document.getElementById('BGM');
    if (document.hidden) {
        audio.pause();
    } else {
        audio.play();
    }
});

function StopMusic() {
    var audio = document.getElementById('BGM');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}