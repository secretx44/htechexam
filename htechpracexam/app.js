let currentSlide = 0;
const carousel = document.querySelector('.carousel');
const indicatorContainer = document.querySelector('.carousel-indicators');
const slides = [
    "/assets/images/slider-1.jpg",
    "/assets/images/slider-2.jpg",
    "/assets/images/slider-3.jpg",
    "/assets/images/slider-4.jpg",
    "/assets/images/slider-5.jpg",
    "/assets/images/slider-6.jpg"
];

for (let image = 0; image < slides.length; image++) {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => {
        goToSlide(image);
    });
    indicatorContainer.appendChild(indicator);
}

slides.forEach(slide => {
    const img = document.createElement('img');
    img.src = slide;
    img.alt = "Image";
    carousel.appendChild(img);
});

function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}
function goToSlide(index) {
    currentSlide = index;
    const offset = -index * (100 / slides.length);
    carousel.style.transform = `translateX(${offset}%)`;
    updateIndicators();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(currentSlide);
}

updateIndicators();




function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    var socialLinks = document.getElementById("socialLinks");
    var hamburgerLines = document.querySelectorAll(".line");

    navLinks.classList.toggle("active");
    socialLinks.classList.toggle("active");

    hamburgerLines.forEach(function(line, index) {
        if (line.style.transform === "rotate(45deg)") {
            line.style.transform = "rotate(0)";
        } else if (line.style.transform === "rotate(-45deg)") {
            line.style.transform = "rotate(0)";
        } else {
            line.style.transform = "rotate(" + (index === 0 ? 45 : -45) + "deg)";
        }
    });
}
