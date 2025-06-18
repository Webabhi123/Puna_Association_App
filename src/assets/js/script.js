const slides = document.getElementById('slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 4000);

function updateSlider(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider(currentIndex);
}

document.getElementById('next').addEventListener('click', () => {
    nextSlide();
    resetInterval();
});

document.getElementById('prev').addEventListener('click', () => {
    prevSlide();
    resetInterval();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
        resetInterval();
    });
});

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
}

function toggleNavbar() {
    const menu = document.getElementById("navbarMenu");
    menu.classList.toggle("show");
}

function animateCounter(id, endValue, duration) {
    const element = document.getElementById(id);
    let startValue = 0;
    const increment = Math.ceil(endValue / (duration / 50));

    const counter = setInterval(() => {
        startValue += increment;
        if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(counter);
        }
        element.textContent = startValue;
    }, 50);
}
// Example values (can be changed)
animateCounter("yearCounter", 2025, 5000);   // Website established in 2004
animateCounter("memberCounter", 900, 5000); // 3250 members