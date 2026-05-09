// 1. Disable Right-Click across the whole site
document.addEventListener('contextmenu', (e) => e.preventDefault());

// 2. Dragging Logic
const squares = document.querySelectorAll('.art-square');

squares.forEach(square => {
    let isDragging = false;
    let startX, startY;

    const startDrag = (e) => {
        isDragging = true;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        startX = clientX - square.offsetLeft;
        startY = clientY - square.offsetTop;
        square.style.zIndex = 1000; // Bring to front
    };

    const moveDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();

        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

        square.style.left = `${clientX - startX}px`;
        square.style.top = `${clientY - startY}px`;
    };

    const stopDrag = () => {
        isDragging = false;
        // Reset z-index slightly so others can be picked up, 
        // but keep the last moved one relatively high
        squares.forEach(s => { if(s !== square) s.style.zIndex = 1; });
        square.style.zIndex = 500;
    };

    // Mouse Events
    square.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', moveDrag);
    document.addEventListener('mouseup', stopDrag);

    // Touch Events (Mobile)
    square.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', moveDrag, { passive: false });
    document.addEventListener('touchend', stopDrag);
});
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
