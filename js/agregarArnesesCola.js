const images= [
    "cola 1.webp",
    "cola 2.webp",
    "cola 3.webp",
    "cola 4.webp",
    "cola 5.webp",
    "cola 6.webp",
    "cola 7.webp",
    "cola 8.webp",
    "cola 9.webp",
    "cola 10.webp",
    "cola 11.webp",
    "cola 12.webp",
    "cola 13.webp",
    "cola 14.webp",
    "cola 15.webp",
    "cola 16.webp",
    "cola 17.webp",
    "cola 18.webp",
    "cola 19.webp",
    "cola 20.webp",
    "cola 21.webp",
    "cola 22.webp",
    "cola 23.webp",
    "cola 24.webp",
    "cola 25.webp",
    "cola 26.webp",
    "cola 27.webp",
    "cola 28.webp",
    "cola 29.webp",
    "cola 30.webp",
    "cola 31.webp",
    "cola 32.webp",
    "cola 33.webp",
    "cola 34.webp",
    "cola 35.webp",
    "cola 36.webp",
    "cola 37.webp",
    "cola 38.webp",
    "cola 39.webp",
    "cola 40.webp",
    "cola 41.webp",
    "cola 42.webp",
    "cola 43.webp",
    "cola 44.webp",
    "cola 45.webp",
    "cola 46.webp",
    "cola 47.webp",
    "cola 48.webp",
    "cola 49.webp",
    "cola 50.webp",
    "cola 51.webp",
    "cola 52.webp",
    "cola 53.webp",
    "cola 54.webp",
    "cola 55.webp",
    "cola 56.webp",
    "cola 57.webp",
    "cola 58.webp"
]
//81-138
const cardContainer = document.getElementById("cardContainer");

images.forEach((image, index)=>{

    
    const card = document.createElement("div");
    card.className= "card m-4";

    const link = document.createElement("a");
    link.href = `img/01cola y ligas/${image}`;
    link.className = "card-a"
    link.setAttribute("data-fancybox", "gallery");

    const img = document.createElement("img");
    img.src = `img/01cola y ligas/${image}`;
    img.className= 'card-img img-fluid';
    img.alt = `Cola ${index+81}`;

    const overlay = document.createElement("div");
    overlay.className = "card-img-overlay";

    const title = document.createElement("h5");
    title.className = "card-title";
    const formatIndex= (index+81).toString().padStart(2, '0');
    title.textContent = `${formatIndex}`;

    //checkbox
    const label= document.createElement("label");
    label.className = "custom-checkbox position-absolute";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute('data-arnes-number', formatIndex)
    const span = document.createElement("span");
    span.className = "checkmark";
    label.appendChild(input);
    label.appendChild(span);

    overlay.appendChild(title);
    link.appendChild(img);
    link.appendChild(overlay);
    card.appendChild(link);
    card.appendChild(label);
    cardContainer.appendChild(card);
})

function comprar(){
    const checkboxes = document.querySelectorAll('.custom-checkbox input');
    const selectedNumbers =[];

    checkboxes.forEach((checkbox)=>{
        if (checkbox.checked) {
            const arnesNumber = checkbox.getAttribute('data-arnes-number');
            selectedNumbers.push(arnesNumber); 
        }
    })
     // Si no hay números seleccionados, puedes mostrar un aviso
    if (selectedNumbers.length === 0) {
        alert("Por favor, selecciona al menos un arnés.");
        return;
    }

    // Construir el mensaje
    const message = `Hola, quería comprar el/los producto(s) número(s): ${selectedNumbers.join('- ')}`;
    
    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(message);

    // Redirigir a WhatsApp
    const phoneNumber = '+5492613861336';
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    // Abrir la URL en una nueva pestaña
    window.open(url, '_blank'); 
    
    setTimeout(() => {
        location.reload();
    }, 1000);

    
}

