// import $ from 'jquery'
import resumeMd from './md/resume.md'
import './css/main.css'

document.getElementById('markdownContainer').innerHTML = resumeMd
const victor = new Victor("bgContainer", "output");
const theme = [
    ["#002c4a", "#005584"],
    ["#35ac03", "#3f4303"]
]

victor(theme[Math.ceil(Math.random() * 2) - 1]).set();
