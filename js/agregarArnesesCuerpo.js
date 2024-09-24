const images= [
   "compl 1.webp",
   "compl 2.webp",
   "compl 3.webp",
   "compl 4.webp",
   "compl 5.webp",
   "compl 6.webp",
   "compl 7.webp",
   "compl 8.webp",
   "compl 9.webp",
   "compl 10.webp",
   "compl 11.webp",
   "compl 12.webp",
   "compl 13.webp",
   "compl 14.webp",
   "compl 15.webp",
   "compl 16.webp",
   "compl 17.webp",
   "compl 18.webp",
   "compl 19.webp",
   "compl 20.webp",
   "compl 21.webp",
   "compl 22.webp",
   "compl 23.webp",
   "compl 24.webp",
   "compl 25.webp",
   "compl 26.webp",
   "compl 27.webp",
   "compl 28.webp",
   "compl 29.webp",
   "compl 30.webp",
   "compl 31.webp",
   "compl 32.webp",
   "compl 33.webp",
   "compl 34.webp",
   "compl 35.webp",
   "compl 36.webp",
   "compl 37.webp",
   "compl 38.webp",
   "compl 39.webp",
   "compl 40.webp",
   "compl 41.webp",
   "compl 42.webp",
   "compl 43.webp",
   "compl 44.webp",
   "compl 45.webp",
   "compl 46.webp",
   "compl 47.webp",
   "compl 48.webp",
   "compl 49.webp",
   "compl 50.webp",
   "compl 51.webp",
   "compl 52.webp",
   "compl 53.webp",
   "compl 54.webp",
   "compl 55.webp",
   "compl 56.webp",
   "compl 57.webp",
   "compl 58.webp"
]

const cardContainer = document.getElementById("cardContainer");

images.forEach((image, index)=>{
    const card = document.createElement("div");
    card.className= "card m-4";

    const link = document.createElement("a");
    link.href = `img/03cuerpo completo y conjuntos/${image}`;
    link.className = "card-a"
    link.setAttribute("data-fancybox", "gallery");

    const img = document.createElement("img");
    img.src = `img/03cuerpo completo y conjuntos/${image}`;
    img.className= 'card-img img-fluid';
    img.alt = `Cola ${index+139}`;

    const overlay = document.createElement("div");
    overlay.className = "card-img-overlay";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = `${index+139}`;

    //checkbox
    const label= document.createElement("label");
    label.className = "custom-checkbox position-absolute";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute('data-arnes-number', title.textContent)
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
