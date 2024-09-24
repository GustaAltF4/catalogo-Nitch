const images= [
    "cola 1.png",
    "cola 2.jpg",
    "cola 3.jpg",
    "cola 4.jpg",
    "cola 5.jpg",
    "cola 6.jpg",
    "cola 7.png",
    "cola 8.jpg",
    "cola 9.jpg",
    "cola 10.jpg",
    "cola 11.jpg",
    "cola 12.png",
    "cola 13.png",
    "cola 14.jpg",
    "cola 15.jpg",
    "cola 16.png",
    "cola 17.jpg",
    "cola 18.png",
    "cola 19.jpg",
    "cola 20.jpg",
    "cola 21.jpg",
    "cola 22.jpg",
    "cola 23.jpg",
    "cola 24.jpg",
    "cola 25.jpg",
    "cola 26.jpg",
    "cola 27.jpg",
    "cola 28.jpg",
    "cola 29.jpg",
    "cola 30.jpg",
    "cola 31.jpg",
    "cola 32.jpg",
    "cola 33.jpg",
    "cola 34.jpg",
    "cola 35.jpg",
    "cola 36.jpg",
    "cola 37.jpg",
    "cola 38.jpg",
    "cola 39.jpg",
    "cola 40.png",
    "cola 41.webp",
    "cola 42.png",
    "cola 43.png",
    "cola 44.png",
    "cola 45.png",
    "cola 46.jpg",
    "cola 47.png",
    "cola 48.png",
    "cola 49.png",
    "cola 50.png",
    "cola 51.png",
    "cola 52.jpg",
    "cola 53.jpg",
    "cola 54.png",
    "cola 55.jpg",
    "cola 56.png",
    "cola 57.jpg",
    "cola 58.png"
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

