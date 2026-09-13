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
// Handles both "#pricing" and "/#pricing" style anchors on the same page.
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip empty or bare "#" links
        if (!href || href === '#') return;

        // Find the "#" in the href
        const hashIndex = href.indexOf('#');
        if (hashIndex === -1) return;

        const hash = href.substring(hashIndex);
        if (hash === '#' || hash.length < 2) return;

        // Check if the link points to the current page (allows "/" and "/#...")
        const pathPart = href.substring(0, hashIndex);
        const isSamePage =
            pathPart === '' ||
            pathPart === '/' ||
            pathPart === './' ||
            pathPart === window.location.pathname;

        if (!isSamePage) return;

        const targetElement = document.querySelector(hash);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== FAQ ACCORDION (only one open at a time) =====
// Uses the native "toggle" event so it never fights the browser's <details> behaviour.
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', function () {
        if (this.open) {
            document.querySelectorAll('.faq-item').forEach(other => {
                if (other !== this && other.open) {
                    other.open = false;
                }
            });
        }
    });
});
