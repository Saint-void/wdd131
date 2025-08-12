// --- Utility: set copyright year ---
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// --- Mobile nav toggle ---
const navToggle = document.querySelector('.nav-toggle');
const primaryNav = document.getElementById('primary-nav');
if (navToggle && primaryNav) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        primaryNav.classList.toggle('open');
    });
}

// --- Welcome message (only if #welcome-message exists) ---
function handleWelcomeMessage() {
    const welcomeElement = document.querySelector('#welcome-message');
    if (!welcomeElement) return;

    const lastVisit = localStorage.getItem('vortexLastVisit');
    if (lastVisit) {
        welcomeElement.textContent = `Welcome back to the Vortex. We're glad to see you again.`;
    } else {
        welcomeElement.textContent = `Welcome to the Vortex. Your journey into streetwear begins now.`;
    }
    localStorage.setItem('vortexLastVisit', new Date().toISOString());
}

// --- Product display (only on collections page) ---
function handleProductDisplay() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    const products = [
        {
            name: 'The Ascension Hoodie',
            image: 'images/collection-hoodie.jpg',
            description: 'Premium heavyweight fleece with an embroidered Vortex emblem. Built for comfort and style.',
            price: 95.00
        },
        {
            name: 'Nebula Graphic Tee',
            image: 'images/collection-tee.jpg',
            description: 'Soft-touch cotton with a high-definition screen print. A statement piece for any collection.',
            price: 45.00
        },
        {
            name: 'Singularity Snapback',
            image: 'images/collection-hat.jpg',
            description: 'Structured 6-panel cap with a 3D embroidered logo. The final touch to your fit.',
            price: 35.00
        },
        {
            name: 'Vortex Cargo Pants',
            image: 'images/collection-cargos.jpg',
            description: 'Durable ripstop fabric with adjustable cuffs and multiple pockets. Function meets fashion.',
            price: 110.00
        },
        {
            name: 'Event Horizon Longsleeve',
            image: 'images/collection-longsleeve.jpg',
            description: 'A comfortable, oversized fit with minimalist branding on the chest and sleeves.',
            price: 60.00
        },
        {
            name: 'Vortex Utility Vest',
            image: 'images/collection-vest.jpg',
            description: 'A lightweight tactical vest with multiple secure pockets. The ultimate layering piece.',
            price: 85.00
        }
    ];

    let html = '';
    products.forEach(product => {
        // --- Conditional Branching: show a sale badge if product is $50 or less ---
        let saleBadge = '';
        if (product.price <= 50) {
            saleBadge = `<span class="sale-badge">On Sale!</span>`;
        }

        html += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.description}" loading="lazy">
                <div class="product-info">
                    <h3>${product.name} ${saleBadge}</h3>
                    <p>${product.description}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                </div>
            </div>
        `;
    });

    productGrid.innerHTML = html;
}

// --- Newsletter form ---
function handleFormSubmission() {
    const notifyForm = document.querySelector('#notify-form');
    if (!notifyForm) return;

    notifyForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const emailInput = document.querySelector('#email');
        const formContainer = document.querySelector('#form-container');

        formContainer.innerHTML = `
            <h3>Thank You!</h3>
            <p>Your email, ${emailInput.value}, has been added to the list. Keep an eye on your inbox!</p>
        `;
    });
}

// --- Init everything after DOM is loaded ---
document.addEventListener('DOMContentLoaded', () => {
    handleWelcomeMessage();
    handleProductDisplay();
    handleFormSubmission();
});
