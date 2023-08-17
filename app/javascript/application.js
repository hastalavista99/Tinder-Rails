// Entry point for the build script in your package.json
document.addEventListener("DOMContentLoaded", function () {

    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(function(slide, i) {
            slide.classList.remove('showing');
            if (i === index) {
                slide.classList.add('showing');
            }
        });
    }

    document.getElementById('approve').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });

    document.getElementById('decline').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });




});
