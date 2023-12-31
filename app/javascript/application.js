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

        let slide = document.querySelector(".slide");
        let user_id = slide.getAttribute("data-id");
        console.log(user_id)

        // fetch(`/approve/${user_id}`, {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/x-www-form-urlencoded"
        //     }
        // })
        // .then(response => {
        //     if (response.ok) {
        //         alert('success');
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

    document.querySelectorAll(".match-tile").forEach(matchTile => {
        matchTile.addEventListener("click", () => {
            const account_id = matchTile.dataset.id;
            // Your code to use account_id goes here
        });
    });


});


