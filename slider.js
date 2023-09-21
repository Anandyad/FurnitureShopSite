
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const btnPrevious = document.querySelector('.btnPrevious');
    const btnNext = document.querySelector('.btnNext');
    const slideWidth = 800; // Width of each slide
    let currentSlide = 0;
    const totalSlides = 4;

    btnPrevious.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }
    });

    btnNext.addEventListener('click', () => {
        if (currentSlide < 2) {
            currentSlide = (currentSlide + 1) % totalSlides;

            updateSlider();
        }
    });

    function updateSlider() {
        const translateX = -currentSlide * slideWidth;
        slider.style.transform = `translateX(${translateX}px)`;
    }
})
