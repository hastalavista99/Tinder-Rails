// Entry point for the build script in your package.json
document.addEventListener("DOMContentLoaded", function () {

    let slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(function(slide, i) {
             user_id = slide.getAttribute("data-id");
            slide.classList.remove('showing');
            if (i === index) {
                slide.classList.add('showing');
            }
        });
    }

    document.getElementById('approve').addEventListener('click', function() {
        // slides.forEach(function(slide) {
        //     let user_id = slide.getAttribute("data-id");
        //     console.log(user_id);
        // })
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        // fetch(`/approve/${userId}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     }
        // })
        // .then(response => {
        //     if (response.ok) {
        //         // Handle successful response here
        //     } else {
        //         throw new Error("Request failed");
        //     }
        // })
        // .catch(error => {
        //     console.error("Error:", error);
        // });
    });

    document.getElementById('decline').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    });




});
