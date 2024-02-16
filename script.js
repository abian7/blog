document.addEventListener('click', function(event) {
    if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const indicatorsContainer = document.querySelector('.testimonial-indicators');
    let currentIndex = 0;
    const intervalTime = 5000;

    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.style.display = 'none');
        testimonials[index].style.display = 'block';
    }

    function updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, i) => indicator.classList.toggle('active', i === currentIndex));
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
        updateIndicators();
    }

    showTestimonial(currentIndex);

    testimonials.forEach((testimonial, i) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => {
            currentIndex = i;
            showTestimonial(currentIndex);
            updateIndicators();
        });
        indicatorsContainer.appendChild(indicator);
    });

    setInterval(nextTestimonial, intervalTime);
});

document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.question');
        const answer = item.querySelector('.answer');

        question.addEventListener('click', () => answer.classList.toggle('active'));
    });
});