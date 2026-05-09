// 1. Disable Right-Click
document.addEventListener('contextmenu', (e) => e.preventDefault());

// 2. Setup Variables
const squares = document.querySelectorAll('.art-square');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close-btn');

// 3. Drag vs Tap Logic
squares.forEach(square => {
    let isDragging = false;
    let hasDragged = false;
    let startX, startY;

    const startDrag = (e) => {
        isDragging = true;
        hasDragged = false; // Reset to check if they actually move it
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        
        startX = clientX - square.offsetLeft;
        startY = clientY - square.offsetTop;
        square.style.zIndex = 1000; 
    };

    const moveDrag = (e) => {
        if (!isDragging) return;
        hasDragged = true; // The user moved their finger/mouse
        e.preventDefault();

        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;

        square.style.left = `${clientX - startX}px`;
        square.style.top = `${clientY - startY}px`;
    };

    const stopDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        
        // If they tapped without dragging, open Focus Mode!
        if (!hasDragged) {
            const img = square.querySelector('img');
            if (img) {
                lightboxImg.src = img.src;
                lightbox.classList.remove('hidden');
            }
        }

        squares.forEach(s => { if(s !== square) s.style.zIndex = 1; });
        square.style.zIndex = 500;
    };

    // Listeners for Mouse
    square.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', moveDrag);
    document.addEventListener('mouseup', stopDrag);

    // Listeners for Touch (Mobile)
    square.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', moveDrag, { passive: false });
    document.addEventListener('touchend', stopDrag);
});

// 4. Close Focus Mode
closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
});
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
