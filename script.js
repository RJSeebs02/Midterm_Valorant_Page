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

window.addEventListener('scroll', () => {
    //OVERVIEW
    let h1_Overview = document.querySelector('#overview h1');
    let h1_OverviewPosition = h1_Overview.getBoundingClientRect().top;

    let textWrapper_Overview = document.querySelector('#overview .wrapper #text-wrapper');
    let textWrapper_OverviewPosition = textWrapper_Overview.getBoundingClientRect().top;

    let imgWrapper_Overview = document.querySelector('#overview .wrapper #img-wrapper');
    let imgWrapper_OverviewPosition = imgWrapper_Overview.getBoundingClientRect().top;

    //GAMEPLAY
    let h1_Gameplay = document.querySelector('#gameplay h1');
    let h1_GameplayPosition = h1_Gameplay.getBoundingClientRect().top;

    let swiperContainer_Gameplay = document.querySelector('#gameplay .wrapper #swiper-container');
    let swiperContainer_GameplayPosition = swiperContainer_Gameplay.getBoundingClientRect().top;

    let h2_Gameplay = document.querySelector('#gameplay .wrapper #text-wrapper h2');
    let h2_GameplayPosition = h2_Gameplay.getBoundingClientRect().top;

    let p_Gameplay = document.querySelector('#gameplay .wrapper #text-wrapper p');
    let p_GameplayPosition = p_Gameplay.getBoundingClientRect().top;

    //AGENTS
    let h1_Agents = document.querySelector('#agents h1');
    let h1_AgentsPosition = h1_Agents.getBoundingClientRect().top;

    let card_Agents = document.querySelector('#agents .wrapper #cards-wrapper');
    let card_AgentsPosition = card_Agents.getBoundingClientRect().top;

    let p_Agents = document.querySelector('#agents .wrapper #text-wrapper');
    let p_AgentsPosition = p_Agents.getBoundingClientRect().top;

    //WEAPONS
    let h1_Weapons = document.querySelector('#weapons h1');
    let h1_WeaponsPosition = h1_Weapons.getBoundingClientRect().top;

    let h2_Weapons = document.querySelector('#weapons .wrapper #text-wrapper h2');
    let h2_WeaponsPosition = h2_Weapons.getBoundingClientRect().top;

    let p_Weapons = document.querySelector('#weapons .wrapper #text-wrapper p');
    let p_WeaponsPosition = p_Weapons.getBoundingClientRect().top;

    //EXTRA
    let h1_Extra = document.querySelector('#extra-banner .wrapper #text-wrapper h1');
    let h1_ExtraPosition = h1_Extra.getBoundingClientRect().top;

    let h2_Extra = document.querySelector('#extra-banner .wrapper #text-wrapper h2');
    let h2_ExtraPosition = h2_Extra.getBoundingClientRect().top;

    let h3_Extra = document.querySelector('#extra-banner .wrapper #text-wrapper h3');
    let h3_ExtraPosition = h3_Extra.getBoundingClientRect().top;

    let s1_Extra = document.querySelector('#extra-banner .wrapper #text-wrapper #skill-1');
    let s1_ExtraPosition = s1_Extra.getBoundingClientRect().top;

    let s2_Extra = document.querySelector('#extra-banner .wrapper #text-wrapper #skill-2');
    let s2_ExtraPosition = s2_Extra.getBoundingClientRect().top;

    let s3_Extra = document.querySelector('#extra-banner .wrapper #text-wrapper #skill-3');
    let s3_ExtraPosition = s3_Extra.getBoundingClientRect().top;

    let s4_Extra = document.querySelector('#extra-banner .wrapper #text-wrapper #skill-4');
    let s4_ExtraPosition = s4_Extra.getBoundingClientRect().top;

    //SCREEN PORTION
    let screenPosition = window.innerHeight / 1.5;
    let screenPositionGameplay = window.innerHeight / 1.2;

    //OVERVIEW CLASS
    if (h1_OverviewPosition < screenPosition) {
        h1_Overview.classList.add('active');
    } else {
        h1_Overview.classList.remove('active');
    }

    if (textWrapper_OverviewPosition < screenPosition) {
        textWrapper_Overview.classList.add('active');
    } else {
        textWrapper_Overview.classList.remove('active');
    }

    if (imgWrapper_OverviewPosition < screenPosition) {
        imgWrapper_Overview.classList.add('active');
    } else {
        imgWrapper_Overview.classList.remove('active');
    }

    //GAMEPLAY CLASS
    if (h1_GameplayPosition < screenPosition) {
        h1_Gameplay.classList.add('active');
    } else {
        h1_Gameplay.classList.remove('active');
    }

    if (swiperContainer_GameplayPosition < screenPosition) {
        swiperContainer_Gameplay.classList.add('active');
    } else {
        swiperContainer_Gameplay.classList.remove('active');
    }

    if (h2_GameplayPosition < screenPositionGameplay) {
        h2_Gameplay.classList.add('active');
    } else {
        h2_Gameplay.classList.remove('active');
    }

    if (h2_GameplayPosition < screenPositionGameplay) {
        p_Gameplay.classList.add('active');
    } else {
        p_Gameplay.classList.remove('active');
    }

    //AGENTS CLASS
    if (h1_AgentsPosition < screenPosition) {
        h1_Agents.classList.add('active');
    } else {
        h1_Agents.classList.remove('active');
    }

    if (card_AgentsPosition < screenPosition) {
        card_Agents.classList.add('active');
    } else {
        card_Agents.classList.remove('active');
    }

    if (p_AgentsPosition < screenPosition) {
        p_Agents.classList.add('active');
    } else {
        p_Agents.classList.remove('active');
    }

    //WEAPONS CLASS
    if (h1_WeaponsPosition < screenPosition) {
        h1_Weapons.classList.add('active');
    } else {
        h1_Weapons.classList.remove('active');
    }

    if (h2_WeaponsPosition < screenPosition) {
        h2_Weapons.classList.add('active');
    } else {
        h2_Weapons.classList.remove('active');
    }
    if (p_WeaponsPosition < screenPosition) {
        p_Weapons.classList.add('active');
    } else {
        p_Weapons.classList.remove('active');
    }

    //EXTRA CLASS
    if (h1_ExtraPosition < screenPosition) {
        h1_Extra.classList.add('active');
    } else {
        h1_Extra.classList.remove('active');
    }

    if (h2_ExtraPosition < screenPosition) {
        h2_Extra.classList.add('active');
    } else {
        h2_Extra.classList.remove('active');
    }

    if (h3_ExtraPosition < screenPosition) {
        h3_Extra.classList.add('active');
    } else {
        h3_Extra.classList.remove('active');
    }

    if (h3_ExtraPosition < screenPosition) {
        s1_Extra.classList.add('active');
    } else {
        s1_Extra.classList.remove('active');
    }

    if (h3_ExtraPosition < screenPosition) {
        s2_Extra.classList.add('active');
    } else {
        s2_Extra.classList.remove('active');
    }

    if (s1_ExtraPosition < screenPosition) {
        s3_Extra.classList.add('active');
    } else {
        s3_Extra.classList.remove('active');
    }

    if (s2_ExtraPosition < screenPosition) {
        s4_Extra.classList.add('active');
    } else {
        s4_Extra.classList.remove('active');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const weaponImg = document.getElementById('weapon-img');
    const newWeaponImg = document.getElementById('new-weapon-img');
    let currentSound = new Audio(); 
    const weaponTitle = document.getElementById('weapon-title');
    const buttons = document.querySelectorAll('#options-wrapper ul li button');
    const range = document.querySelector('#weapons #damage-wrapper');

    document.querySelector('#sidearms-btn').addEventListener('click', () => updateWeapon('sidearms-btn'));
    document.querySelector('#smgs-btn').addEventListener('click', () => updateWeapon('smgs-btn'));
    document.querySelector('#shotguns-btn').addEventListener('click', () => updateWeapon('shotguns-btn'));
    document.querySelector('#rifles-btn').addEventListener('click', () => updateWeapon('rifles-btn'));
    document.querySelector('#sniper-rifles-btn').addEventListener('click', () => updateWeapon('sniper-rifles-btn'));
    document.querySelector('#machine-guns-btn').addEventListener('click', () => updateWeapon('machine-guns-btn'));

    currentSound.play();
    let firingInterval;
    let isFiring = false;  // Flag to control firing state
    
    const weapons = {
        'sidearms-btn': { 
            src: 'img/Sheriff_Kingdom2.png', 
            title: 'SHERIFF', 
            sound: 'audio/sheriff.mp3',
            damage: {
                range1: { head: 159, body: 55, legs: 46 },
                range2: { head: 145, body: 50, legs: 42 }
            } 
        },
        'smgs-btn': { 
            src: 'img/Spectre_URF_v2.png', 
            title: 'SPECTRE', 
            sound: 'audio/spectre.mp3',
            damage: {
                range1: { head: 66, body: 22, legs: 18 },
                range2: { head: 60, body: 20, legs: 17 }
            } 
         },
        'shotguns-btn': { 
            src: 'img/Bucky_Oni.png', 
            title: 'BUCKY', 
            sound: 'audio/bucky.mp3',
            damage: {
                range1: { head: 26, body: 13, legs: 11 },
                range2: { head: 18, body: 9, legs: 7 }
            }  },
        'rifles-btn': { 
            src: 'img/Vandal_Dragon.png', 
            title: 'VANDAL', 
            sound: 'audio/vandal.mp3',
            damage: {
                range1: { head: 160, body: 40, legs: 34 },
                range2: { head: 160, body: 40, legs: 34 }
            }  },
        'sniper-rifles-btn': { 
            src: 'img/Operator_Cyberpunk2.png', 
            title: 'OPERATOR', 
            sound: 'audio/operator.mp3',
            damage: {
                range1: { head: 255, body: 255, legs: 120 },
                range2: { head: 255, body: 255, legs: 120 }
            }  },
        'machine-guns-btn': { 
            src: 'img/Odin_HypeBeast2.png', 
            title: 'ODIN', 
            sound: 'audio/odin.mp3',
            damage: {
                range1: { head: 95, body: 38, legs: 32 },
                range2: { head: 77, body: 31, legs: 26 }
            }  }
    };

    function updateWeapon(weaponKey) {
        const weapon = weapons[weaponKey];
        
        if (weapon) {
            // Update weapon image
            const weaponImg = document.querySelector('#weapon-img');
            weaponImg.src = weapon.src;
    
            // Update weapon title
            const weaponTitle = document.querySelector('#weapon-title');
            weaponTitle.textContent = weapon.title;
    
            // Update damage details
            const damageWrapper = document.querySelector('#damage-wrapper');
            damageWrapper.querySelector('#first-range-wrapper h4:nth-child(2)').textContent = weapon.damage.range1.head;
            damageWrapper.querySelector('#first-range-wrapper h4:nth-child(3)').textContent = weapon.damage.range1.body;
            damageWrapper.querySelector('#first-range-wrapper h4:nth-child(4)').textContent = weapon.damage.range1.legs;
    
            damageWrapper.querySelector('#second-range-wrapper h4:nth-child(2)').textContent = weapon.damage.range2.head;
            damageWrapper.querySelector('#second-range-wrapper h4:nth-child(3)').textContent = weapon.damage.range2.body;
            damageWrapper.querySelector('#second-range-wrapper h4:nth-child(4)').textContent = weapon.damage.range2.legs;
    
            // Dynamic margin and padding based on the weapon
            const swiperContainer = document.querySelector('#new-weapon-img');
            switch (weaponKey) {
                case 'sidearms-btn':
                    swiperContainer.style.marginTop = '-20px';
                    swiperContainer.style.marginLeft = '20px';
                    break;
                case 'smgs-btn':
                    swiperContainer.style.marginTop = '-35px';
                    break;
                case 'shotguns-btn':
                    swiperContainer.style.marginTop = '-5px';
                    break;
                case 'rifles-btn':
                    swiperContainer.style.marginTop = '-35px';
                    break;
                case 'sniper-rifles-btn':
                    swiperContainer.style.marginTop = '10px';
                    swiperContainer.style.marginLeft = '20px';
                    break;
                case 'machine-guns-btn':
                    swiperContainer.style.marginTop = '-23px';
                    swiperContainer.style.marginLeft = '20px';
                    break;
                default:
                    swiperContainer.style.marginTop = '-20px';
                    swiperContainer.style.marginLeft = '20px';
                    break;
            }
        }
    }
    

    function startFiring() {
        isFiring = true;
        weaponImg.classList.add('firing'); 
        newWeaponImg.style.display = 'block';
        currentSound.play();
        weaponImg.classList.add('firing');
        firingInterval = setInterval(() => {
            if (isFiring) {  // Only play if still firing
                currentSound.currentTime = 0;
                currentSound.play();
                newWeaponImg.style.display = 'block';
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