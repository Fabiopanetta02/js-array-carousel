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


//1- CREO ARRAY
const randomImg = ['img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg',]

//2- STAMPO IN PAGINA GLI ELEMENTI DELLA ARRAY
const gallery = document.getElementById('gallery');

let images = '';

for(let i = 0; i < randomImg.length; i++){
    images += `<img src="${randomImg[i]}" alt="" class="img">` 
}

gallery.innerHTML = images;


//3--Preparo un variabile per tenere d'occhio l'immagine attiva
let currentActiveIndex = 0;

//4--Decido che all'apertura della pagina sia sempre attiva la prima immagine
const img = document.getElementsByClassName('img')
img[currentActiveIndex].classList.add("active");


//5-Recupero i bottoni con l'id
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next')


//6-Aggiungo un addEvenListener sul button NEXT in modo da cambiare immagine
nextButton.addEventListener('click', function(){
    //rimuovo la class active
    img[currentActiveIndex].classList.remove('active')

    //incremento il currentActiveIndex in modo da cambiare immagine
    currentActiveIndex++

    //controllo in che posizione sono
    if(currentActiveIndex == randomImg.length){
        currentActiveIndex = 0
    }
    //Assegno la classe active alla nuova immagine corrispondente al currentActiveIndex 
    img[currentActiveIndex].classList.add('active')
})

//7-Aggiungo un addEvenListener sul button Prev in modo da cambiare immagine
prevButton.addEventListener('click', function(){
    //rimuovo la class active
    img[currentActiveIndex].classList.remove('active')

    //incremento il currentActiveIndex in modo da cambiare immagine
    currentActiveIndex--

    //controllo in che posizione sono
    if(currentActiveIndex == randomImg.length){
        currentActiveIndex = 4
    }
    //Assegno la classe active alla nuova immagine corrispondente al currentActiveIndex 
    img[currentActiveIndex].classList.add('active')
})

