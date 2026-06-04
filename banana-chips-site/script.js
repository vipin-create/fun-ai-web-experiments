document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.getElementById('cursor-follower');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'translate(-50%, -50%) scale(2)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'translate(-50%, -50%) scale(1)');
    });

    // Flavors Data
    const flavors = [
        { name: 'Classic Salted', img: 'assets/flavor_salted.png', color: '#FFD700' },
        { name: 'Spicy Peri Peri', img: 'assets/flavor_periperi.png', color: '#FF5722' },
        { name: 'Sweet Chili', img: 'assets/flavor_sweetchili.png', color: '#E91E63' },
        { name: 'Cream & Onion', img: 'assets/flavor_cream.png', color: '#4CAF50' },
        { name: 'Tangy Tomato', img: 'assets/flavor_tomato.png', color: '#F44336' },
        { name: 'Black Pepper', img: 'assets/flavor_pepper.png', color: '#607D8B' }
    ];

    const flavorGrid = document.querySelector('.flavor-grid');

    flavors.forEach((flavor, index) => {
        const card = document.createElement('div');
        card.classList.add('flavor-card', 'reveal');
        card.style.animationDelay = `${index * 0.1}s`; // Stagger effect

        card.innerHTML = `
            <img src="${flavor.img}" alt="${flavor.name}" class="flavor-img">
            <h3 class="flavor-title" style="color: ${flavor.color}">${flavor.name}</h3>
            <p>Crunchy goodness.</p>
            <button class="flavor-btn" style="border-color: ${flavor.color}; color: ${flavor.color}" 
                onmouseover="this.style.background='${flavor.color}'; this.style.color='black'" 
                onmouseout="this.style.background='transparent'; this.style.color='${flavor.color}'">
                Buy Now
            </button>
        `;
        flavorGrid.appendChild(card);
    });

    // Scroll Observer for Reveals
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Particle VFX
    const vfxContainer = document.getElementById('vfx-container');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random properties
        const size = Math.random() * 10 + 5;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

        vfxContainer.appendChild(particle);
    }
});
