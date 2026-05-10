// Disable Right-Click to protect art
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Setup Lightbox Variables
const thumbnails = document.querySelectorAll('.art-thumbnail');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// Make the thumbnails clickable
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        // Find the image inside the thumbnail that was clicked
        const img = thumb.querySelector('img');
        
        // Put that image's source into the big lightbox image
        lightboxImg.src = img.src;
        
        // Open the lightbox
        lightbox.classList.remove('hidden');
    });
});

// Close Lightbox Button
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});

// Close Lightbox by clicking the background
lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) {
        lightbox.classList.add('hidden');
    }
});
