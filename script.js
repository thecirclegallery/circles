// Disable Right-Click
document.addEventListener('contextmenu', (e) => e.preventDefault());

const icons = document.querySelectorAll('.file-icon');
const imageWindow = document.getElementById('image-window');
const windowImg = document.getElementById('window-img');
const closeBtn = document.getElementById('close-btn');

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        const src = icon.getAttribute('data-src');
        windowImg.src = src;
        imageWindow.classList.remove('hidden');
    });
});

closeBtn.addEventListener('click', () => {
    imageWindow.classList.add('hidden');
});
