// ──── PAGE NAVIGATION ────
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
    
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const activeLink = document.querySelector(`a[onclick="showPage('${pageId}')"]`);
    if (activeLink) activeLink.classList.add('active');
    
    window.scrollTo(0, 0);
}

// ──── PROJECT DETAIL NAVIGATION ────
function showProjectDetail(weekNum) {
    showPage('page-projects');
    const detail = document.querySelector(`[data-week="${weekNum}"]`);
    if (detail) {
        detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ──── INIT ────
document.addEventListener('DOMContentLoaded', () => {
    showPage('page-home');
    
    // Click to view project
    document.querySelectorAll('.project-card').forEach((card, idx) => {
        card.addEventListener('click', () => showProjectDetail(idx + 1));
    });
});

// ──── SMOOTH SCROLL ────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
