console.log('Color Switch by Gustavo')

const button = document.getElementById('button-change-color');
const rgb = document.getElementById('rgb')
const colors = []

valueMin = 0;
valueMax = 255;

// Function for play the audio
function playSound(audioName) {
    let audio = new Audio(audioName);
    audio.play()
}

// Function for choice a number
function choiceOneColor(max, min) {
    return number = Math.floor(Math.random() * (max - min) + min);
}

button.addEventListener('click', ()=>{

    playSound('ponto.mp3')

    colors.push(choiceOneColor(valueMax,valueMin),choiceOneColor(valueMax,valueMin),choiceOneColor(valueMax,valueMin))

    console.log(colors)

    // Change backgrond-color of body
    colorChange = document.body.style.backgroundColor = `rgb(${colors[0]},${colors[1]},${colors[2]})`;

    // Reveal the rgb color
    rgb.style.color = `rgb(${colors[0]},${colors[1]},${colors[2]})`
    rgb.innerHTML = `${colors[0]},${colors[1]},${colors[2]}`

    // remove all
    for(i = 0; i < 3; i++){
        colors.pop(i)
    }
})