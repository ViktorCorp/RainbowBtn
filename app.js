const rainbowBtnRed = document.querySelector('#rainbow__btn--red')
const rainbowBtnOrange = document.querySelector('#rainbow__btn--orange')
const rainbowBtnYellow = document.querySelector('#rainbow__btn--yellow')
const rainbowBtnGreen = document.querySelector('#rainbow__btn--green')
const rainbowBtnLightBlue = document.querySelector('#rainbow__btn--light-blue')
const rainbowBtnBlue = document.querySelector('#rainbow__btn--blue')
const rainbowBtnViolet = document.querySelector('#rainbow__btn--violet')
const wrapperContainerRainbow = document.querySelector('#wrapper__container--rainbow')
const grass = document.querySelector('#grass')
const lightBlue = document.querySelector('#light-blue')
const displayViev = document.querySelector('.display__viev')
const givBtnRed = document.querySelector('#givBtnRed')


rainbowBtnRed.onclick = function () {
  document.body.style.background = "red"
}

rainbowBtnOrange.addEventListener('click', function() {
  const prevRainbowBtn = rainbowBtnOrange.previousElementSibling
  const nextRainbowBtn = rainbowBtnOrange.nextElementSibling
  prevRainbowBtn.style.color = "orange"
  prevRainbowBtn.style.boxShadow = "0 0 100px orange, 0 0 50px orange"
  nextRainbowBtn.style.color = "orange"
  nextRainbowBtn.style.boxShadow = "0 0 100px orange, 0 0 50px orange"
}) 

rainbowBtnYellow.addEventListener('click', function() {
  const lastRainbowBtn = wrapperContainerRainbow.lastElementChild
  lastRainbowBtn.innerText = 'purple'
}) 

rainbowBtnGreen.addEventListener('click', function () {
  grass.classList.toggle('display__viev')
})

rainbowBtnLightBlue.addEventListener('click', function () {
  lightBlue.outerHTML = '<button type="button" class="rainbow__btn rainbow__light-blue" id="rainbow__btn--light-blue">light-blue</button>   <button type="button" class="rainbow__btn rainbow__light-blue" id="rainbow__btn--light-blue">light-blue</button>'
})

rainbowBtnBlue.addEventListener('click', function () {
  const firstRainbowBtn = wrapperContainerRainbow.firstElementChild
  firstRainbowBtn.classList.add('display__viev')
})

rainbowBtnViolet.addEventListener('click', function () {
  if (rainbowBtnRed.classList.contains('display__viev')) {
    rainbowBtnRed.classList.toggle('display__viev')
  }
  else if (!rainbowBtnRed.classList.contains('display__viev')) {
    givBtnRed.innerHTML = '<div class="givBtnRed">Эта кнопка уже есть</div>'
  }
  else {
    err
  }
})