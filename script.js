window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.deadpool-nav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
}, observerOptions);

document.querySelectorAll('.character-card, .quote-box').forEach(el => {
    observer.observe(el);
});

document.addEventListener('DOMContentLoaded', function() {
    const mathScene = document.querySelector('.math-scene');
    if (mathScene) {
        mathScene.addEventListener('mouseenter', function() {
            const equations = document.querySelectorAll('.math-equation');
            equations.forEach((eq, index) => {
                setTimeout(() => {
                    eq.style.transform = 'scale(1.05)';
                    eq.style.color = '#FFD700';
                    setTimeout(() => {
                        eq.style.transform = 'scale(1)';
                        eq.style.color = '#00ff00';
                    }, 300);
                }, index * 300);
            });
        });
    }
});

const originalTitle = document.title;
let isChanged = false;

window.addEventListener('blur', function() {
    if (!isChanged) {
        document.title = "Volte aqui! Deadpool está esperando!";
        isChanged = true;
    }
});

window.addEventListener('focus', function() {
    if (isChanged) {
        document.title = originalTitle;
        isChanged = false;
    }
});