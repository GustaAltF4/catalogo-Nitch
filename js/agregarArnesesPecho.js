const images= [
   "1.webp",
   "2.webp",
   "3.webp",
   "4.webp",
   "5.webp",
   "6.webp",
   "7.webp",
   "8.webp",
   "9.webp",
   "10.webp",
   "11.webp",
   "12.webp",
   "13.webp",
   "14.webp",
   "15.webp",
   "16.webp",
   "17.webp",
   "18.webp",
   "19.webp",
   "20.webp",
   "21.webp",
   "22.webp",
   "23.webp",
   "24.webp",
   "25.webp",
   "26.webp",
   "27.webp",
   "28.webp",
   "29.webp",
   "30.webp",
   "31.webp",
   "32.webp",
   "33.webp",
   "34.webp",
   "35.webp",
   "36.webp",
   "37.webp",
   "38.webp",
   "39.webp",
   "40.webp",
   "41.webp",
   "42.webp",
   "43.webp",
   "44.webp",
   "45.webp",
   "46.webp",
   "47.webp",
   "48.webp",
   "49.webp",
   "50.webp",
   "51.webp",
   "52.webp",
   "53.webp",
   "54.webp",
   "55.webp",
   "56.webp",
   "57.webp",
   "58.webp",
   "59.webp",
   "60.webp",
   "61.webp",
   "62.webp",
   "63.webp",
   "64.webp",
   "65.webp",
   "66.webp",
   "67.webp",
   "68.webp",
   "69.webp",
   "70.webp",
   "71.webp",
   "72.webp",
   "73.webp",
   "74.webp",
   "75.webp",
   "76.webp",
   "77.webp",
   "78.webp",
   "79.webp",
   "80.webp"

]

const cardContainer = document.getElementById("cardContainer");

images.forEach((image, index)=>{
    const card = document.createElement("div");
    card.className= "card m-4";

    const link = document.createElement("a");
    link.href = `img/02pecho/${image}`;
    link.className = "card-a"
    link.setAttribute("data-fancybox", "gallery");

    const img = document.createElement("img");
    img.src = `img/02pecho/${image}`;
    img.className= 'card-img img-fluid';
    img.alt = `Cola ${index+1}`;

    const overlay = document.createElement("div");
    overlay.className = "card-img-overlay";

    const title = document.createElement("h5");
    title.className = "card-title";
    const formatIndex= (index+1).toString().padStart(2, '0');
    title.textContent = `${formatIndex}`;

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

