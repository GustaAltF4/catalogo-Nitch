const images= [
   "1.jpg",
   "2.jpg",
   "3.webp",
   "4.jpg",
   "5.jpg",
   "6.jpg",
   "7.jpg",
   "8.jpg",
   "9.jpg",
   "10.jpg",
   "11.jpg",
   "12.jpg",
   "13.jpg",
   "14.jpg",
   "15.jpg",
   "16.jpg",
   "17.jpg",
   "18.jpg",
   "19.jpg",
   "20.jpg",
   "21.webp",
   "22.webp",
   "23.webp",
   "24.webp",
   "25.jpg",
   "26.jpg",
   "27.jpg",
   "28.jpg",
   "29.jpg",
   "30.jpg",
   "31.jpg",
   "32.jpg",
   "33.jpg",
   "34.jpg",
   "35.jpg",
   "36.jpg",
   "37.jpg",
   "38.jpg",
   "39.jpg",
   "40.jpg",
   "41.jpg",
   "42.jpg",
   "43.jpg",
   "44.jpg",
   "45.webp",
   "46.jpg",
   "47.jpg",
   "48.jpg",
   "49.jpg",
   "50.jpg",
   "51.jpg",
   "52.jpg",
   "53.jpg",
   "54.jpg",
   "55.jpg",
   "56.jpg",
   "57.jpg",
   "58.jpg",
   "59.jpg",
   "60.png",
   "61.png",
   "62.png",
   "63.png",
   "64.png",
   "65.png",
   "66.png",
   "67.png",
   "68.png",
   "69.png",
   "70.png",
   "71.png",
   "72.png",
   "73.png",
   "74.png",
   "75.png",
   "76.png",
   "77.png",
   "78.jpg",
   "79.jpg",
   "80.jpg"

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

