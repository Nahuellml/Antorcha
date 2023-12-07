// document.addEventListener('DOMContentLoaded', function() {
//     const container = document.getElementById('fireContainer');
//     const dotCount = 40;

//     for (let i = 0; i < dotCount; i++) {
//         const dot = document.createElement('div');
//         dot.className = 'g-dot';
//         dot.style.bottom = `-${randomNum(120, 240)}px`; 
//         dot.style.left = `${randomNum(300, -160)}px`; 
//         dot.style.animation = `move ${randomNum(2 * 13, 7) / 10}s infinite ${randomNum(3 * 20) / 20}s linear`;
         

//         container.appendChild(dot);

//     }
// })

// function randomNum(max, min = 0) {
//     return Math.floor(Math.random() * (max - min + 1) + min)
// }