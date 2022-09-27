let btns = document.querySelectorAll('.btn-container button')
let Card2 = document.querySelector('.card-2')
let Card = document.querySelector('.card')
let Span = document.querySelector('span')

Array.from(btns).forEach(btn => {
    btn.addEventListener('click', e => {
        const rating = e.target.textContent
        Span.textContent = rating
        Card2.classList.remove('hide')
        Card.classList.add('hide')

    })
     
})