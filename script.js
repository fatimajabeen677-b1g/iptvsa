// ===== NAVBAR TOGGLE =====
const toggleBtn = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });
}

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== FAQ ACCORDION (optional enhancement) =====
document.querySelectorAll('.faq-item summary').forEach(summary => {
    summary.addEventListener('click', function() {
        const parent = this.parentElement;
        const isOpen = parent.hasAttribute('open');
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== parent) {
                item.removeAttribute('open');
            }
        });
        // Toggle current
        if (isOpen) {
            parent.removeAttribute('open');
        } else {
            parent.setAttribute('open', '');
        }
    });
});
