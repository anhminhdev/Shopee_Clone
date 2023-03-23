// Click display sign up form 
const x = document.querySelector('.signin')
const model_signup = document.querySelector('.modal-signup')
x.addEventListener('click', () => {
  model_signup.classList.add('display')
})

// Click display log in form 
const y = document.querySelector('.signup')
const model_login = document.querySelector('.modal-login')
y.addEventListener('click', () => {
  model_login.classList.add('display')
})