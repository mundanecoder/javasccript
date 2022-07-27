const cards = document.querySelectorAll(".card")

const observer  = new IntersectionObserver( entries => {
    entries.forEach(item => {
        item.target.classList.toggle("show",item.isIntersecting)
    })

},
{
    threshold:0.01,
}
)

cards.forEach(card => {

    observer.observe(card)
})