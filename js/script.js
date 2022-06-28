/*
CONSEGNA FINALE:
Creato un array contenente una lista di cinque immagini tra quelle fornite, creare un carosello ispirandoci alle foto in allegato.
(non è necessario che la grafica sia IDENTICA alla traccia, non bloccatevi su questo, date un aspetto decente e concentriamoci sulla logica.
Cerchiamo di lavorare seguendo i seguenti step in ordine:

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; 
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. 
Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. 
Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
*/

// !LOGICA IMMAGINI //
//1- CREO ARRAY
const sources = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg', 'img/06.jpg', 'img/07.jpg', 'img/08.jpg', 'img/09.jpg', 'img/10.jpg',]

//2- STAMPO IN PAGINA GLI ELEMENTI DELLA ARRAY CON IL METODO DELLA STRINGA
const gallery = document.getElementById('gallery');
const thumbs = document.getElementById('thumbnail');

//GALLERY
let images = '';

for(let i = 0; i < sources.length; i++){
    images += `<img src="${sources[i]}" alt="landscape-${i + 1}" class="img">` 
}

gallery.innerHTML = images;


//THUMBNAIL
let thumbImages = '';

for(let i = 0; i < sources.length; i++){
    thumbImages += `<img src="${sources[i]}" alt="landscape-${i + 1}" class="thumb">` 
}

thumbs.innerHTML = thumbImages;

//3--Preparo un variabile per tenere d'occhio l'immagine attiva
let currentActiveIndex = 0;

//4--Decido che all'apertura della pagina sia sempre attiva la prima immagine
const imgGallery = document.getElementsByClassName('img');
imgGallery[currentActiveIndex].classList.add("active");

const imgThumb = document.getElementsByClassName('thumb');
imgThumb[currentActiveIndex].classList.add("active");


// !LOGICA BOTTONI //
//5-Recupero i bottoni con l'id
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

//6-Aggiungo un addEvenListener sul button NEXT in modo da cambiare immagine
nextButton.addEventListener('click', function(){
    //rimuovo la class active
    imgGallery[currentActiveIndex].classList.remove('active');
    imgThumb[currentActiveIndex].classList.remove("active");

    //incremento il currentActiveIndex in modo da cambiare immagine
    currentActiveIndex++;

    //controllo in che posizione sono
    if(currentActiveIndex == sources.length){
        currentActiveIndex = 0;
    }

    //Assegno la classe active alla nuova immagine corrispondente al currentActiveIndex 
    imgGallery[currentActiveIndex].classList.add('active');
    imgThumb[currentActiveIndex].classList.add("active");
})

//7-Aggiungo un addEvenListener sul button Prev in modo da cambiare immagine
prevButton.addEventListener('click', function(){
    //rimuovo la class active
    imgGallery[currentActiveIndex].classList.remove('active');
    imgThumb[currentActiveIndex].classList.remove("active");

    //decremento il currentActiveIndex in modo da cambiare immagine
    currentActiveIndex--;

    //controllo in che posizione sono
    if(currentActiveIndex < 0){
        currentActiveIndex = sources.length - 1;
    }

    //Assegno la classe active alla nuova immagine corrispondente al currentActiveIndex 
    imgGallery[currentActiveIndex].classList.add('active');
    imgThumb[currentActiveIndex].classList.add("active");
})


