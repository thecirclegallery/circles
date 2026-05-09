// Disable Right-Click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// Setup the System Variables
const icons = document.querySelectorAll('.file-icon');
const imageWindow = document.getElementById('image-window');
const windowImg = document.getElementById('window-img');
const closeBtn = document.getElementById('close-btn');

// Make the icons clickable
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        // Find which image this specific icon is holding
        const src = icon.getAttribute('data-src');
        
        // Put that image into the main window
        windowImg.src = src;
        
        // Open the window
        imageWindow.classList.remove('hidden');
    });
});

// Make the Close Button work
closeBtn.addEventListener('click', () => {
    imageWindow.classList.add('hidden');
});
