document.addEventListener('DOMContentLoaded', function() {
    const lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
        debug: true
    });

    function lazyLoadBackground() {
        // Set background images for .header elements
        const headers = document.querySelectorAll('.header[data-bg]');
        headers.forEach(header => {
            const bgImage = header.getAttribute('data-bg');
            if (bgImage) {
                header.style.backgroundImage = `url(${bgImage})`;
            }
        });
        const tops = document.querySelectorAll('.efficiency__top[data-bg]');
        tops.forEach(top => {
            const bgImage = top.getAttribute('data-bg');
            if (bgImage) {
               top.style.backgroundImage = `url(${bgImage})`;
            }
        });
    }

    lazyLoadBackground();

    console.log(lazyLoadInstance);
});
