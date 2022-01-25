/*abre e fecha o menu quando clicar no icone: hamburger e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/* quanod clicar em um iteno do menu, esconder o menu*/
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/* mudar o header da pádina quando der scrrol*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight


function changHeaderWhenScroll () {
    
    if(window.scrollY >= navHeight){
        //scrool é maior que a altura do header
        header.classList.add('scroll')
    }else {
        //menor que a altura do header
        header.classList.remove('scroll')
}}


/*   scrollreveal   mostrar elementos quando der ecroll na página*/
 const scrollReveal = ScrollReveal({
     origin:'top', 
     distance: '30px',
     duration: 700, 
     reset: true
 })

 scrollReveal.reveal(`#home .image, #home .text, 
 #about .image, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials,
 #contact .text, #contact .links,
 footer .brand, footer .social`, { interval: 100})

 /*    botão VOLTAR para o topo     */
const backToTopButton = document.querySelector('.back-to-top') 

function backToTop() {

    if (window.scrollY >= 560){
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

/*   Menu ativo conforme a seção visível da página   */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    
    const ckeckpoint = window.pageYOffset + (window.innerHeight / 8) *4

    for( const section of sections ) {
        const sectionTop = section.OffsetTop
        const sectionHeight  = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            classList.add('active')
            
        } else {
            document.querySelector('nav ul li a[href*=' + sectionId + ']')
            classList.remove('active')
        }
    }

}


/*  when scroll*/
window.addEventListener('scroll', function () {
    changHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})