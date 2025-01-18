document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.product-slider');

    sliders.forEach(slider => {
        const products = slider.querySelector('.products');
        const prevButton = slider.querySelector('.product-slider::before');
        const nextButton = slider.querySelector('.product-slider::after');

        // Scroll Left
        slider.querySelector('::before').addEventListener('click', () => {
            products.scrollBy({ left: -200, behavior: 'smooth' });
        });

        // Scroll Right
        slider.querySelector('::after').addEventListener('click', () => {
            products.scrollBy({ left: 200, behavior: 'smooth' });
        });
    });
});
