const images= [
    "homb 1.jpg",
    "homb 2.jpg",
    "homb 3.jpg",
    "homb 4.jpg",
    "homb 5.jpg",
    "homb 6.webp",
    "homb 7.webp",
    "homb 8.webp",
    "homb 9.webp"
]

const cardContainer = document.getElementById("cardContainer");

images.forEach((image, index)=>{
    const card = document.createElement("div");
    card.className= "card m-4";

    const link = document.createElement("a");
    link.href = `img/05hombre/${image}`;
    link.className = "card-a"
    link.setAttribute("data-fancybox", "gallery");

    const img = document.createElement("img");
    img.src = `img/05hombre/${image}`;
    img.className= 'card-img img-fluid';
    img.alt = `Cola ${index+208}`;

    const overlay = document.createElement("div");
    overlay.className = "card-img-overlay";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = `${index+208}`;

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

