let currentIndex = 0;
const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const totalSlides = slideItems.length;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 20}%)`;
  currentIndex = index;
}

function nextSlide() {
  if (currentIndex < totalSlides - 5) {
    showSlide(currentIndex + 1);
  } else {
    showSlide(0);
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    showSlide(currentIndex - 1);
  } else {
    showSlide(totalSlides - 5);
  }
}

document.getElementById('nextButton').addEventListener('click', nextSlide);
document.getElementById('prevButton').addEventListener('click', prevSlide);

function changeCity(city) {
  document.querySelector(".city").textContent = city;
}