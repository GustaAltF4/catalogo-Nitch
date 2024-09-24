const images= [
    "garg 1.webp",
    "garg 2.webp",
    "garg 3.webp",
    "garg 4.webp",
    "garg 5.webp",
    "garg 6.webp",
    "garg 7.webp",
    "garg 8.webp",
    "garg 9.webp",
    "garg 10.webp",
    "garg 11.webp",
]

const cardContainer = document.getElementById("cardContainer");

images.forEach((image, index)=>{
    const card = document.createElement("div");
    card.className= "card m-4";

    const link = document.createElement("a");
    link.href = `img/04gargantillas/${image}`;
    link.className = "card-a"
    link.setAttribute("data-fancybox", "gallery");

    const img = document.createElement("img");
    img.src = `img/04gargantillas/${image}`;
    img.className= 'card-img img-fluid';
    img.alt = `Cola ${index+197}`;

    const overlay = document.createElement("div");
    overlay.className = "card-img-overlay";

    const title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = `${index+197}`;

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
