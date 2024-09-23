var swiper = new Swiper('.swiper-container', {
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3, 
    centeredSlides: true, 
    spaceBetween: 500,
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false,
    },
});

document.addEventListener('DOMContentLoaded', () => {
    const weaponImg = document.getElementById('weapon-img');
    const newWeaponImg = document.getElementById('new-weapon-img');
    let currentSound = new Audio(); 
    const weaponTitle = document.getElementById('weapon-title');
    const buttons = document.querySelectorAll('#options-wrapper ul li button');

    currentSound.play();
    let firingInterval;
    let isFiring = false;  // Flag to control firing state
    
    const weapons = {
        'sidearms-btn': { src: 'img/classic.webp', title: 'CLASSIC', sound: 'audio/classic.mp3' },
        'smgs-btn': { src: 'img/spectre.webp', title: 'SPECTRE', sound: 'audio/spectre.mp3' },
        'shotguns-btn': { src: 'img/bucky.webp', title: 'BUCKY', sound: 'audio/bucky.mp3' },
        'rifles-btn': { src: 'img/vandal.webp', title: 'VANDAL', sound: 'audio/vandal.mp3' },
        'sniper-rifles-btn': { src: 'img/operator.webp', title: 'OPERATOR', sound: 'audio/operator.mp3' },
        'machine-guns-btn': { src: 'img/odin.webp', title: 'ODIN', sound: 'audio/odin.mp3' }
    };

    function startFiring() {
        isFiring = true;
        currentSound.play();
        weaponImg.classList.add('firing');
        firingInterval = setInterval(() => {
            if (isFiring) {  // Only play if still firing
                currentSound.currentTime = 0;
                currentSound.play();
            }
        }, 200); 
    }

    function stopFiring() {
        isFiring = false; // Prevent new sounds from being played
        clearInterval(firingInterval);
        weaponImg.classList.remove('firing');
    }

    weaponImg.addEventListener('mousedown', startFiring);
    
    // Listen globally for 'mouseup' to ensure firing stops even if mouse is released outside the image
    window.addEventListener('mouseup', stopFiring);
    weaponImg.addEventListener('mouseleave', stopFiring);

    weaponImg.addEventListener('click', function () {
        if (!weaponImg.classList.contains('rotate')) {
            weaponImg.classList.add('rotate');
            newWeaponImg.style.display = 'block';
            setTimeout(() => {
                weaponImg.classList.remove('rotate');
                newWeaponImg.style.display = 'none'; 
            }, 200);
        }
    });

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const weapon = weapons[button.id];
            weaponImg.src = weapon.src;
            weaponTitle.textContent = weapon.title;
            currentSound.src = weapon.sound; 
        });
    });

    // Simulate a click on one of the weapon buttons to initialize the first weapon
    document.getElementById('sidearms-btn').click();
});