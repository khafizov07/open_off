const lang = document.querySelectorAll('.lang-item')
const span = document.querySelector('span')
const bodyy = document.querySelector('body')

lang.forEach(function (el) {
    el.addEventListener('click', function (e) {
        if (el.innerHTML === '😎') {
            span.style.left = '0'
            bodyy.style.background = 'red'
        }else if (el.innerHTML === '🤓') {
            span.style.left = '50%'
            bodyy.style.background = 'black'
        }
    })
});