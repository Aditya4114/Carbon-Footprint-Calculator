
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.hero-slider .slide');
    const prevButton = document.querySelector('.slider-button.prev');
    const nextButton = document.querySelector('.slider-button.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].classList.remove('active');
        slides[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    function prevSlide() {
        let prev = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prev);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Auto-advance slides
    setInterval(nextSlide, 5000);

    // Carbon counter animation
    const carbonCounter = document.getElementById('carbon-counter');
    const carbonValue = document.getElementById('carbon-value');
    let carbonSaved = 0;

    function updateCarbonCounter() {
        carbonSaved += Math.floor(Math.random() * 5) + 1;
        carbonValue.textContent = carbonSaved;
    }

    setInterval(updateCarbonCounter, 3000);

    carbonCounter.addEventListener('click', function() {
        alert(`Great job! You've helped save ${carbonSaved}kg of carbon emissions!`);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...

    // Animated icons
    const icons = document.querySelectorAll('.feature-icon');
    icons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.5}s`;
    });
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    










    
