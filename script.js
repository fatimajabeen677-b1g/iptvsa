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

// ===== SMOOTH SCROLL FOR ANCHOR LINKS (fixes /#pricing too) =====
document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip bare "#" and external/absolute URLs (except same-page # anchors)
        if (!href || href === '#') return;

        // Only handle links that end with #something
        const hashIndex = href.indexOf('#');
        if (hashIndex === -1) return;

        const hash = href.substring(hashIndex);
        if (hash === '#' || hash.length < 2) return;

        // If the link points to a different page, let it navigate normally
        const pathPart = href.substring(0, hashIndex);
        const isSamePage =
            pathPart === '' ||
            pathPart === '/' ||
            pathPart === window.location.pathname ||
            pathPart === './';

        if (!isSamePage) return;

        const targetElement = document.querySelector(hash);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== FAQ ACCORDION — only one open at a time =====
// Use the native 'toggle' event (fires AFTER details opens/closes),
// so we never fight the browser's built-in behaviour.
document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', function() {
        if (this.open) {
            document.querySelectorAll('.faq-item').forEach(other => {
                if (other !== this && other.open) {
                    other.open = false;
                }
            });
        }
    });
});
