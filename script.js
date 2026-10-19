document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const slideIndicator = document.getElementById('slide-indicator');
    
    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    function updatePresentationView() {
        // Clear active status across all slide objects
        slides.forEach(slide => slide.classList.remove('active-slide'));
        
        // Assert view status on selection targets
        slides[currentSlideIndex].classList.add('active-slide');
        
        // Refresh structural context indicator values
        slideIndicator.textContent = `Slide ${currentSlideIndex + 1} of ${totalSlides}`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
        } else {
            currentSlideIndex = totalSlides - 1; // Cycle loop logic back to tail end
        }
        updatePresentationView();
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlideIndex < totalSlides - 1) {
            currentSlideIndex++;
        } else {
            currentSlideIndex = 0; // Reset look back to structural index head
        }
        updatePresentationView();
    });
});
