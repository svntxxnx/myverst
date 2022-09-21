document.addEventListener("DOMContentLoaded", function() {
     let btn = document.querySelector('.burger')
     let nav = document.querySelector('.header__nav')
     let selectors = document.querySelectorAll('.nav')
     btn.addEventListener('click', () => {
        btn.classList.toggle('burger__active')
        nav.classList.toggle('active')
        document.body.classList.toggle('stop__scroll')
     })
     selectors.forEach(el => {
        el.addEventListener('click', () => {
            btn.classList.remove('burger__active')
            nav.classList.remove('active')
            document.body.classList.remove('stop__scroll')
            console.log(this)
        })
     }) 
})