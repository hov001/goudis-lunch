import './style.css'
import backgroundImg from './src/assets/background.jpg'

const page = `<img src="${backgroundImg}">`

document.querySelector('#app').insertAdjacentHTML('beforeend', page)
