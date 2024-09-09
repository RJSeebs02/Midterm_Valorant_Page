var swiper = new Swiper('.swiper-container', {
    loop: true, // Enables continuous loop mode
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3, // Show 3 slides at a time
    centeredSlides: true, // Center the active slide
    spaceBetween: 30,
    autoplay: {
        delay: 3000, // Auto-slide every 3 seconds
        disableOnInteraction: false,
    },
});

const weaponImg = document.getElementById('weapon-img');
const newWeaponImg = document.getElementById('new-weapon-img'); // The second image

// Add click event listener to rotate the image
weaponImg.addEventListener('click', function() {
    // Check if the 'rotate' class is already applied
    if (!weaponImg.classList.contains('rotate')) {
        // Add the 'rotate' class to initiate the rotation
        weaponImg.classList.add('rotate');

        // Show the new image
        newWeaponImg.style.display = 'block';
        
        // Remove the class after 1 second (to allow for rotation)
        setTimeout(() => {
            weaponImg.classList.remove('rotate');
            newWeaponImg.style.display = 'none'; // Hide the new image after rotation
        }, 200); // Match the CSS transition duration (1 second)
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('#options-wrapper ul li button');
    const weaponImg = document.getElementById('weapon-img');
    const weaponTitle = document.getElementById('weapon-title');
    
    // Define weapon images and titles
    const weapons = {
        'sidearms-btn': { src: 'img/classic.webp', title: 'CLASSIC' },
        'smgs-btn': { src: 'img/spectre.webp', title: 'SPECTRE' },
        'shotguns-btn': { src: 'img/bucky.webp', title: 'BUCKY' },
        'rifles-btn': { src: 'img/vandal.webp', title: 'VANDAL' },
        'sniper-rifles-btn': { src: 'img/operator.webp', title: 'OPERATOR' },
        'machine-guns-btn': { src: 'img/odin.webp', title: 'ODIN' }
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to the clicked button
            button.classList.add('active');
            
            // Update weapon image and title
            const weapon = weapons[button.id];
            weaponImg.src = weapon.src;
            weaponTitle.textContent = weapon.title;
        });
    });

    // Optionally, set a default active button
    document.getElementById('sidearms-btn').click();
});

