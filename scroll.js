const cards = document.querySelectorAll('.under_container')
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const {target } = entry;
        target.classList.toggle('active',entry.isIntersecting)
    })
},{})

cards.forEach(card =>{
    observer.observe(card)
})



