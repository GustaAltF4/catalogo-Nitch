const backToTopButton = document.getElementById("backToTop");

// Mostrar/ocultar el botón al hacer scroll
window.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    const footerReaccion = footer.getBoundingClientRect();

    if (footerReaccion.top > window.innerHeight){
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTopButton.style.display = "flex";
        } else {
            backToTopButton.style.display = "none";
        }
    }else{
        backToTopButton.style.display = "none";
    }

    
});

// Hacer scroll hacia arriba al hacer clic
backToTopButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('scroll', function() {

    const cards= document.querySelectorAll('.card');
    const viewportHeight = window.innerHeight;

    cards.forEach(card =>{
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const viewportCenter = viewportHeight / 2;

        if (Math.abs(cardCenter - viewportCenter) < rect.height / 2) {
            card.classList.add('center')
        }else{
            card.classList.remove('center')
        }
    })
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))