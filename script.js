document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        setTimeout(() => {
            if(preloader) preloader.classList.add('hidden');
        }, 200);
    });

    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => { revealObserver.observe(el); });
    }

    const accordionItems = document.querySelectorAll('.accordion-item');
    if(accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            if (header && content) {
                header.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    accordionItems.forEach(i => {
                        i.classList.remove('active');
                        const cont = i.querySelector('.accordion-content');
                        if (cont) cont.style.maxHeight = null;
                    });
                    if (!isActive) {
                        item.classList.add('active');
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                });
            }
        });
    }
});