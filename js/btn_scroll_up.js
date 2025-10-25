var btn = $('#button_up');
    $(window).scroll(function(){
        if($(window).scrollTop() > 400){
            btn.addClass('show');
        }else{
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '400');
    })

const modeToggle = document.querySelector(".dark-light");
    const body = document.body;

    // Apply user's saved mode preference on initial load
    if(localStorage.getItem("mode") === "dark-mode"){
        modeToggle.classList.add("active");
        body.classList.add("dark");
    }

    // Dark/Light mode toggle event
    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        modeToggle.classList.toggle("active");

        // Store user preference
        if(body.classList.contains("dark")){
            localStorage.setItem("mode", "dark-mode");
        } else {
            localStorage.setItem("mode", "light-mode");
        }
    });

document.addEventListener("DOMContentLoaded", function () {
    let sliders = document.querySelectorAll(".image-slider");

    sliders.forEach((slider, sliderIndex) => {
        let slides = slider.querySelectorAll("img");
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.style.opacity = (i === index) ? "1" : "0";
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        }

        // Attach event listeners to the buttons inside this specific slider
        slider.querySelector(".next").addEventListener("click", nextSlide);
        slider.querySelector(".prev").addEventListener("click", prevSlide);

        // Initialize first slide
        showSlide(currentIndex);
    });
});