function scrollToArticle(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}


const track = document.getElementById('carouselTrack'); //Hittar hela karusellen
const slides = Array.from(track.children); //Hittar alla objekt i carusellen
const nextButton = document.querySelector('.arrow.right');
const prevButton = document.querySelector('.arrow.left');

let currentIndex = 0;

function updateCarousel() {
    //EVIL
    const slideWidth = slides[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap);
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`; //EVEN MORE EVIL
}

//Klickar vi på höger knappen ska vi gå fram ett steg, funkar bara om det är möjligt att gå fram
nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 3) {
        currentIndex++;
        updateCarousel();
    }
});

//Klickar vi på vänster knappen går vi tillbaka, funkar bara om det är möjligt
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

window.addEventListener('resize', updateCarousel);