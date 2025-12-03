const images = [
    { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww', category: 'nature', caption: 'Mountain View' },
    { src: 'https://images.unsplash.com/photo-1725900544660-8d5901d12e4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TW91dGFpbiUyMGxha2V8ZW58MHx8MHx8fDA%3D', category: 'nature', caption: 'Mountain Lake' },
    { src: 'https://plus.unsplash.com/premium_photo-1699534957345-21ec96f6fad2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZGVzZXJ0JTIwbGFuZHNjYXBlfGVufDB8fDB8fHww', category: 'nature', caption: 'Desert Landscape' },
    { src: 'https://plus.unsplash.com/premium_photo-1669725687221-6fe12c2da6b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGlvbiUyMFBvcnRyYWl0fGVufDB8fDB8fHww', category: 'animals', caption: 'Lion Portrait' },
    { src: 'https://plus.unsplash.com/premium_photo-1661892520417-816a677655e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fERvbHBoaW5zJTIwaW4lMjBPY2VhbnxlbnwwfHwwfHx8MA%3D%3D', category: 'animals', caption: 'Dolphins in Ocean' },
    { src: 'https://plus.unsplash.com/premium_photo-1661818976842-0792e4e57765?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RWxlcGhhbnQlMjBpbiUyMFNhdmFubmFofGVufDB8fDB8fHww', category: 'animals', caption: 'Elephant in Savannah' },
    { src: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TmV3JTIwWW9yayUyMENpdHklMjBTa3lsaW5lfGVufDB8fDB8fHww', category: 'cities', caption: 'New York City Skyline' },
    { src: 'https://plus.unsplash.com/premium_photo-1717346482132-838fef0ebbd1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFyaXMlMjBTdHJlZXQlMjBWaWV3fGVufDB8fDB8fHww', category: 'cities', caption: 'Paris Street View' },
    { src: 'https://images.unsplash.com/photo-1528809677-ac3432892018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE5ldyUyMFlvcmslMjBDaXR5JTIwU2t5bGluZXxlbnwwfHwwfHx8MA%3D%3D', category: 'cities', caption: 'New York City Skyline' }, 
    { src: 'https://media.istockphoto.com/id/1397018356/photo/3d-render-colorful-background-with-abstract-shape-glowing-in-ultraviolet-spectrum-curvy-neon.webp?a=1&b=1&s=612x612&w=0&k=20&c=09FbMn-bjs0ao2VBYzKU1ZqFYQkSZG4V_BZOjUWwTCo=', category: 'abstract', caption: 'Colorful Abstract Art' },
    { src: 'https://images.unsplash.com/photo-1553532434-5ab5b6b84993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2VvbWV0cmljJTIwUGF0dGVybnN8ZW58MHx8MHx8fDA%3D', category: 'abstract', caption: 'Geometric Patterns' },
    { src: 'https://plus.unsplash.com/premium_photo-1753217344276-0d9abdfb7971?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QXJ0aXN0aWMlMjBTd2lybHN8ZW58MHx8MHx8fDA%3D', category: 'abstract', caption: 'Artistic Swirls' },
    { src: 'https://plus.unsplash.com/premium_photo-1668455494252-e4ca4a2609ca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rm9yZXN0JTIwUGF0aHxlbnwwfHwwfHx8MA%3D%3D', category: 'nature', caption: 'Forest Path' },
    { src: 'https://plus.unsplash.com/premium_photo-1661905195522-41da87e831d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fE1vdW50YWluJTIwbGFrZXxlbnwwfHwwfHx8MA%3D%3D', category: 'nature', caption: 'Mountain Lake' }, 
    { src: 'https://images.unsplash.com/20/dusty-sky.JPG?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRlc2VydHxlbnwwfHwwfHx8MA%3D%3D', category: 'nature', caption: 'Desert Landscape' },
    { src: 'https://media.istockphoto.com/id/494856046/photo/lion-in-high-grass.webp?a=1&b=1&s=612x612&w=0&k=20&c=QmltiKWhS0tZHAA6DsncrJsWNzLf7Hqdk_Y8c0ea9nc=', category: 'animals', caption: 'Lion Portrait' }, 
    { src: 'https://images.unsplash.com/photo-1591706405280-f03acb082051?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9scGhpbnxlbnwwfHwwfHx8MA%3D%3D', category: 'animals', caption: 'Dolphins in Ocean' }, 
    { src: 'https://images.unsplash.com/photo-1505148230895-d9a785a555fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGVsZXBoYW50fGVufDB8fDB8fHww', category: 'animals', caption: 'Elephant in Savannah' }, 
    { src: 'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmV3JTIweW9yayUyMHNreWxpbmV8ZW58MHx8MHx8fDA%3D', category: 'cities', caption: 'New York City Skyline' }, 
    { src: 'https://images.unsplash.com/photo-1503917988258-f87a78e3c995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBhcmlzJTIwc3RyZWV0fGVufDB8fDB8fHww', category: 'cities', caption: 'Paris Street View' }, 
];

function loadGallery(category = 'all') {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
    
    const filteredImages = category === 'all' ? images : images.filter(img => img.category === category);
    
    filteredImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <img src="${image.src}" alt="${image.caption}" data-index="${images.indexOf(image)}">
            <div class="overlay">${image.caption}</div>
        `;
        item.style.animationDelay = `${index * 0.1}s`;
        gallery.appendChild(item);
    });
    
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', openLightbox);
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        loadGallery(btn.dataset.category);
    });
});

let currentIndex = 0;

function openLightbox(event) {
    const img = event.target;
    currentIndex = parseInt(img.dataset.index);
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    
    lightboxImg.src = img.src;
    caption.textContent = img.alt;
    lightbox.style.display = 'block';
}


function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.getElementById('caption');
    
    lightboxImg.src = images[currentIndex].src;
    caption.textContent = images[currentIndex].caption;
}

document.querySelector('.close').addEventListener('click', closeLightbox);
document.getElementById('prev-btn').addEventListener('click', () => changeImage(-1));
document.getElementById('next-btn').addEventListener('click', () => changeImage(1));

document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (e) => {
    if (document.getElementById('lightbox').style.display === 'block') {
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'Escape') closeLightbox();
    }
});

loadGallery();