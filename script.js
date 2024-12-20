const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const customStore = document.querySelector('.customstorefront')
const advertisingTool = document.querySelector('.advertisingtools')
const dataAnalytics = document.querySelector('.dataandanalytics')
const customerSupport = document.querySelector('.customersupport')
const thecustom = document.querySelector('.custom');
const theAdvertising = document.querySelector('.advertising');
const thedata = document.querySelector('.data');
const thecustomers = document.querySelector('.customers');

let currentSlide = 0;
const totalSlides = slides.length;
let autoSlideInterval;
const autoSlideDelay = 2000;

function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, autoSlideDelay);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}


nextButton.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});
prevButton.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

document.addEventListener('keydown', (e) => {
    stopAutoSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
    startAutoSlide();
});

let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
    startAutoSlide();
});
startAutoSlide();

advertisingTool.addEventListener('click', ()=>{
    thedata.style.display = "none";
    thecustomers.style.display = "none";
    thecustom.style.display = "none";
    theAdvertising.style.display = "flex";
})
dataAnalytics.addEventListener('click', ()=>{
    theAdvertising.style.display = "none";
    thecustomers.style.display = "none";
    thecustom.style.display = "none";
    thedata.style.display = "flex";
})
customerSupport.addEventListener('click', ()=>{
    thedata.style.display = "none";
    theAdvertising.style.display = "none";
    thecustom.style.display = "none";
    thecustomers.style.display = "flex";
})
customStore.addEventListener('click', ()=>{
    theAdvertising.style.display = "none";
    thedata.style.display = "none";
    thecustomers.style.display = "none";
    thecustom.style.display = "flex";
})