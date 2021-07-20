let text = document.querySelector('.subscription-text')
const form = document.querySelector('.subscription')
const email = document.querySelector('.subscription-email')


form.onsubmit = function(evt) {
  evt.preventDefault()

  text.textContent = 'Адрес ' + email.value + ' добавлен в список получателей рассылки.'
}