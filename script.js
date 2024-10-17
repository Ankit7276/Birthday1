window.onload = function() {
    const song = document.getElementById('birthday-song');
    const showMoreBtn = document.querySelector('.show-more-btn');
    const moreWishes = document.querySelector('.more-wishes');
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slideshowBtn = document.getElementById('toggleSlideshow');
    
    let autoPlay = true;
    let slideIndex = 0;
    
    // Play the birthday song when the page loads
    song.play();
    
    // Show more wishes and the slideshow on button click
    showMoreBtn.addEventListener('click', () => {
        moreWishes.classList.remove('more-wishes-off'); // Show more wishes
        slideshowContainer.classList.remove('wish-container-off'); // Show slideshow
        slideshowBtn.style.display = 'block'; // Show Play/Pause button
        showMoreBtn.style.display = 'none'; // Hide the button
        song.play(); // Play music when slideshow starts
    });

    // Slideshow logic
    const slides = document.getElementsByClassName("slides");

    function showSlides(index) {
        if (index >= slides.length) { slideIndex = 0; }
        if (index < 0) { slideIndex = slides.length - 1; }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex].style.display = "block";
    }

    function nextSlide() {
        showSlides(++slideIndex);
    }

    // Auto slideshow every 3 seconds
    let slideInterval = setInterval(nextSlide, 3000);

    // Pause/Play functionality for the slideshow
    slideshowBtn.addEventListener('click', () => {
        if (autoPlay) {
            clearInterval(slideInterval); // Pause slideshow
            slideshowBtn.textContent = 'Play';
            autoPlay = false;
        } else {
            slideInterval = setInterval(nextSlide, 3000); // Resume slideshow
            slideshowBtn.textContent = 'Pause';
            autoPlay = true;
        }
    });

    // Manual controls for next/previous buttons
    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(slideInterval); // Pause autoplay
        showSlides(--slideIndex);
    });

    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(slideInterval); // Pause autoplay
        showSlides(++slideIndex);
    });

    // Initialize the first slide
    showSlides(slideIndex);
};
