document.addEventListener('DOMContentLoaded', () => {
    // 1. Mouse Tracking Glow (Performance Throttled)
    const glow = document.querySelector('.cursor-glow');
    let mouseX = 0, mouseY = 0;
    let isMoving = false;

    if (glow && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!isMoving) {
                requestAnimationFrame(() => {
                    glow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
                    isMoving = false;
                });
                isMoving = true;
            }
        });
    } else if (glow) {
        // Hide glow element on touch devices
        glow.style.display = 'none';
    }

    // 2. Intersection Observer for Smooth Scroll Reveal
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length > 0) {
        const revealOptions = { 
            threshold: 0.12, 
            rootMargin: "0px 0px -40px 0px" 
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    obs.unobserve(entry.target);
                }
            });
        }, revealOptions);

        revealElements.forEach(el => observer.observe(el));
    }
});
