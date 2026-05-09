// Disable Right-Click
document.addEventListener('contextmenu', (e) => e.preventDefault());

const mainArt = document.getElementById('main-art');
const thumbs = document.querySelectorAll('.thumb-wrapper');

thumbs.forEach(thumb => {
    // Both 'click' and 'touchstart' ensure it works instantly on mobile
    thumb.addEventListener('click', function() {
        
        // 1. Find the image source inside the tapped thumbnail
        const imgSrc = this.querySelector('.thumb').src;
        
        // 2. Change the main screen to match
        mainArt.src = imgSrc;
        
        // 3. Remove the 'active' highlight from all thumbnails
        thumbs.forEach(t => t.classList.remove('active'));
        
        // 4. Add the 'active' highlight to the one just tapped
        this.classList.add('active');
    });
});
