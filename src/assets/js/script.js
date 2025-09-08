document.addEventListener('DOMContentLoaded', function () {

  
  const slides = document.getElementById('slides');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = dots.length;

  window.onclick = function (event) {
    const imgModal = document.getElementById('imgModal');
    if (event.target === imgModal) {
      imgModal.style.display = "none";
    }
  };

  // Slider logic
  let currentIndex = 0;
  let slideInterval = setInterval(nextSlide, 4000);

  function updateSlider(index) {
    if (!slides) return;
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

  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
  }

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
  
  // Navbar toggle
  window.toggleNavbar = function () {
    const menu = document.getElementById("navbarMenu");
    menu?.classList.toggle("show");
  };
});
