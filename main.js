var cards = document.querySelectorAll(".card")

var observer  = new IntersectionObserver( entries => {
    entries.forEach(item => {
        item.target.classList.toggle("show",item.isIntersecting)
        // if(item.isIntersecting) observer.unobserve(item.target)
    })

},
{
    threshold:0.01,
   
}
)

cards.forEach(card => {

    observer.observe(card)
})


//////////////// sticky navbar////////////////////

var navbar = document.querySelector('.nav_container')

var toppos = navbar.offsetTop

// console.log(toppos);

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY

    if(scrolled > 50){
        navbar.classList.add('sticky')
    }
    else{
        navbar.classList.remove('sticky')
    }
} )


////////////////////highlighting navbar//////////////////

var division = document.querySelectorAll('section');
var items_hi = document.querySelectorAll('nav .nav_container span ');


window.addEventListener('scroll', () => {


    let current = '';
    // console.log(window.scrollY);
    division.forEach(div => {
        const toppos1 = div.offsetTop -35;
        console.log(toppos1)
        const div_height = div.clientHeight;
        // console.log(div_height)
        const scrolled = window.scrollY ;
        // console.log(scrolled)

        if(scrolled> toppos1){
            current = div.getAttribute('id');
        }
    })
    console.log(current)

    items_hi.forEach(na =>{
        na.classList.remove('item_mark');
        if(na.classList.contains(current)){
            na.classList.add('item_mark')
        }
    })
}


)






// const divisons = document.querySelectorAll("nav .nav_container .item")
// const nav = document.querySelector("nav")

// const option = {
    
//         threshold:0.2,
//         // rootMargin:'50px 0 0 0 ', 
    
// };

// var observer1  = new IntersectionObserver( entries => {
//     entries.forEach(stuff => {
//         if(stuff.isIntersecting){

//             console.log(stuff.target.id);
//         }
//     });
// },option
    

// );

// divisons.forEach(section=> {
//     observer1.observe(section)
// }

// )

