let message = document.querySelector('.subscription-message')
let form = document.querySelector('.subscription')

form.onsubmit = function(evt) {
  evt.preventDefault()

  message.textContent = 'Форма отправлена!'
  console.log('hfd')
}