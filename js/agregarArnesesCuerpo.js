const images= [
   "compl 1.jpg",
   "compl 2.png",
   "compl 3.jpg",
   "compl 4.png",
   "compl 5.jpg",
   "compl 6.png",
   "compl 7.jpg",
   "compl 8.png",
   "compl 9.jpg",
   "compl 10.png",
   "compl 11.png",
   "compl 12.jpg",
   "compl 13.jpg",
   "compl 14.png",
   "compl 15.jpg",
   "compl 16.png",
   "compl 17.jpg",
   "compl 18.png",
   "compl 19.jpg",
   "compl 20.png",
   "compl 21.jpg",
   "compl 22.png",
   "compl 23.jpg",
   "compl 24.png",
   "compl 25.jpg",
   "compl 26.png",
   "compl 27.jpg",
   "compl 28.png",
   "compl 29.jpg",
   "compl 30.png",
   "compl 31.jpg",
   "compl 32.png",
   "compl 33.jpg",
   "compl 34.png",
   "compl 35.jpg",
   "compl 36.png",
   "compl 37.jpg",
   "compl 38.jpg",
   "compl 39.jpg",
   "compl 40.jpg",
   "compl 41.jpg",
   "compl 42.jpg",
   "compl 43.jpg",
   "compl 44.jpg",
   "compl 45.jpg",
   "compl 46.jpg",
   "compl 47.jpg",
   "compl 48.jpg",
   "compl 49.jpg",
   "compl 50.jpg",
   "compl 51.jpg",
   "compl 52.jpg",
   "compl 53.jpg",
   "compl 54.jpg",
   "compl 55.jpg",
   "compl 56.jpg",
   "compl 57.jpg",
   "compl 58.jpg"
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
