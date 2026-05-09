// 1. Disable Right-Click across the whole site
document.addEventListener('contextmenu', (e) => e.preventDefault());

// 2. Dragging Logic
const circles = document.querySelectorAll('.art-circle');

circles.forEach(circle => {
    let isDragging = false;
    let startX, startY;

    const startDrag = (e) => {
        isDragging = true;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        startX = clientX - circle.offsetLeft;
        startY = clientY - circle.offsetTop;
        circle.style.zIndex = 1000; // Bring to front
    };

    const moveDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

        circle.style.left = `${clientX - startX}px`;
        circle.style.top = `${clientY - startY}px`;
    };

    const stopDrag = () => {
        isDragging = false;
        // Reset z-index slightly so others can be picked up, 
        // but keep the last moved one relatively high
        circles.forEach(c => { if(c !== circle) c.style.zIndex = 1; });
        circle.style.zIndex = 500;
    };

    // Mouse Events
    circle.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', moveDrag);
    document.addEventListener('mouseup', stopDrag);

    // Touch Events (Mobile)
    circle.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', moveDrag, { passive: false });
    document.addEventListener('touchend', stopDrag);
});
