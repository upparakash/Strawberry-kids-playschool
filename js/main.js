// ULTIMATE MAGICAL ANIMATIONS
function createFloatingElements() {
    const container = document.getElementById('floatingElements');
    if (!container) return;
    
    const page = document.body.getAttribute('data-page') || 'home';
    const animations = {
        home: createParticleUniverse,
        about: createMorphingTimeline,
        programs: createDNAHelix,
        facilities: create3DCityBuilder,
        team: createGalaxyFormation,
        gallery: createKaleidoscope,
        events: createAuroraWave,
        admission: createGoldenPath,
        contact: createPortalEffect
    };
    
    (animations[page] || createParticleUniverse)(container);
    addMagicInteractivity();
    createContinuousEffects(container);
}

// Home: Particle Universe - 1000+ particles forming constellations
function createParticleUniverse(container) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1', '#FF1493', '#00CED1'];
    
    // Create particle explosion
    for(let i = 0; i < 100; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle-star';
            particle.textContent = letters[Math.floor(Math.random() * letters.length)];
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.color = colors[Math.floor(Math.random() * colors.length)];
            particle.style.setProperty('--tx', (Math.random() - 0.5) * 200 + 'vw');
            particle.style.setProperty('--ty', (Math.random() - 0.5) * 200 + 'vh');
            particle.style.setProperty('--duration', (2 + Math.random() * 3) + 's');
            container.appendChild(particle);
            
            // Create connecting lines
            if(i % 5 === 0) {
                const line = document.createElement('div');
                line.className = 'constellation-line';
                line.style.left = '50%';
                line.style.top = '50%';
                line.style.setProperty('--angle', Math.random() * 360 + 'deg');
                container.appendChild(line);
            }
        }, i * 30);
    }
    
    // Create orbiting planets
    ['🍓', '🌟', '⭐', '✨', '💫', '🌈', '🎨'].forEach((emoji, i) => {
        const planet = document.createElement('div');
        planet.className = 'orbiting-planet';
        planet.textContent = emoji;
        planet.style.setProperty('--orbit-radius', (150 + i * 50) + 'px');
        planet.style.setProperty('--orbit-duration', (10 + i * 2) + 's');
        planet.style.setProperty('--orbit-delay', (i * 0.5) + 's');
        container.appendChild(planet);
    });
}

// About: Morphing Timeline - Numbers transform into shapes
function createMorphingTimeline(container) {
    const milestones = [
        {year: 2005, shape: '🌱', text: 'Founded'},
        {year: 2008, shape: '🌿', text: 'Growing'},
        {year: 2012, shape: '🌳', text: 'Expanding'},
        {year: 2015, shape: '🏆', text: 'Excellence'},
        {year: 2020, shape: '💡', text: 'Innovation'},
        {year: 2025, shape: '🌟', text: 'Future'}
    ];
    
    milestones.forEach((milestone, i) => {
        setTimeout(() => {
            const morph = document.createElement('div');
            morph.className = 'morphing-element';
            morph.innerHTML = `
                <div class="morph-year">${milestone.year}</div>
                <div class="morph-shape">${milestone.shape}</div>
                <div class="morph-text">${milestone.text}</div>
                <div class="morph-particles"></div>
            `;
            morph.style.left = (15 + i * 14) + '%';
            morph.style.top = (30 + Math.sin(i) * 20) + '%';
            container.appendChild(morph);
            
            // Add particle burst
            for(let j = 0; j < 20; j++) {
                const p = document.createElement('div');
                p.className = 'morph-particle';
                p.style.setProperty('--angle', (j * 18) + 'deg');
                morph.querySelector('.morph-particles').appendChild(p);
            }
        }, i * 800);
    });
}

// Programs: DNA Helix - Letters spiral in double helix
function createDNAHelix(container) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const colors = ['#E31837', '#87CEEB', '#FFD700', '#90EE90'];
    
    letters.forEach((letter, i) => {
        setTimeout(() => {
            // Create two strands
            [0, 1].forEach(strand => {
                const helix = document.createElement('div');
                helix.className = 'dna-helix';
                helix.textContent = letter;
                helix.style.color = colors[(i + strand) % colors.length];
                helix.style.setProperty('--index', i);
                helix.style.setProperty('--strand', strand);
                helix.style.setProperty('--total', letters.length);
                container.appendChild(helix);
            });
            
            // Add connecting bonds
            if(i % 2 === 0) {
                const bond = document.createElement('div');
                bond.className = 'dna-bond';
                bond.style.setProperty('--index', i);
                container.appendChild(bond);
            }
        }, i * 100);
    });
}

// Facilities: 3D City Builder - Buildings rise from ground
function create3DCityBuilder(container) {
    const buildings = [
        {icon: '🏫', height: 200, label: 'Main Building'},
        {icon: '🎨', height: 150, label: 'Art Studio'},
        {icon: '📚', height: 180, label: 'Library'},
        {icon: '🎵', height: 160, label: 'Music Room'},
        {icon: '⚽', height: 140, label: 'Sports Area'},
        {icon: '🌳', height: 170, label: 'Garden'},
        {icon: '🍎', height: 130, label: 'Cafeteria'},
        {icon: '🎭', height: 190, label: 'Theater'}
    ];
    
    buildings.forEach((building, i) => {
        setTimeout(() => {
            const city = document.createElement('div');
            city.className = 'city-building';
            city.innerHTML = `
                <div class="building-structure" style="--height: ${building.height}px">
                    <div class="building-icon">${building.icon}</div>
                    <div class="building-windows"></div>
                    <div class="building-shadow"></div>
                </div>
                <div class="building-label">${building.label}</div>
            `;
            city.style.left = (8 + i * 11.5) + '%';
            city.style.bottom = '10%';
            container.appendChild(city);
            
            // Add windows
            const windows = city.querySelector('.building-windows');
            for(let w = 0; w < 12; w++) {
                const win = document.createElement('div');
                win.className = 'window';
                win.style.animationDelay = (Math.random() * 2) + 's';
                windows.appendChild(win);
            }
        }, i * 500);
    });
}

// Team: Galaxy Formation - Stars form team constellation
function createGalaxyFormation(container) {
    const teachers = ['👩‍🏫', '👨‍🏫', '👩‍🎨', '👨‍🎓', '👩‍🔬', '👨‍💼', '👩‍⚕️', '👨‍🍳'];
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1'];
    
    // Create galaxy center
    const center = document.createElement('div');
    center.className = 'galaxy-center';
    center.innerHTML = '🍓<div class="pulse-ring"></div>';
    container.appendChild(center);
    
    // Create spiral arms
    teachers.forEach((teacher, i) => {
        setTimeout(() => {
            const angle = (i / teachers.length) * Math.PI * 2;
            const radius = 150 + (i * 30);
            const star = document.createElement('div');
            star.className = 'galaxy-star';
            star.innerHTML = `
                <div class="star-glow"></div>
                <div class="star-icon">${teacher}</div>
                <div class="star-trail"></div>
            `;
            star.style.setProperty('--angle', angle + 'rad');
            star.style.setProperty('--radius', radius + 'px');
            star.style.setProperty('--duration', (15 + i * 2) + 's');
            star.style.color = colors[i % colors.length];
            container.appendChild(star);
        }, i * 400);
    });
    
    // Add nebula clouds
    for(let i = 0; i < 5; i++) {
        const nebula = document.createElement('div');
        nebula.className = 'nebula-cloud';
        nebula.style.left = (20 + i * 15) + '%';
        nebula.style.top = (20 + i * 10) + '%';
        nebula.style.background = colors[i % colors.length];
        container.appendChild(nebula);
    }
}

// Gallery: Kaleidoscope - Symmetrical pattern explosion
function createKaleidoscope(container) {
    const symbols = ['📷', '🎨', '🌈', '⭐', '💎', '🦋', '🌸', '🎪'];
    const segments = 8;
    
    for(let ring = 0; ring < 4; ring++) {
        for(let seg = 0; seg < segments; seg++) {
            setTimeout(() => {
                const piece = document.createElement('div');
                piece.className = 'kaleidoscope-piece';
                piece.textContent = symbols[(ring + seg) % symbols.length];
                piece.style.setProperty('--ring', ring);
                piece.style.setProperty('--segment', seg);
                piece.style.setProperty('--total-segments', segments);
                container.appendChild(piece);
            }, (ring * segments + seg) * 50);
        }
    }
}

// Events: Aurora Wave - Northern lights effect
function createAuroraWave(container) {
    // Create aurora layers
    for(let i = 0; i < 5; i++) {
        const aurora = document.createElement('div');
        aurora.className = 'aurora-wave';
        aurora.style.setProperty('--layer', i);
        aurora.style.setProperty('--hue', (i * 60) + 'deg');
        container.appendChild(aurora);
    }
    
    // Add floating dates
    for(let i = 1; i <= 31; i++) {
        setTimeout(() => {
            const date = document.createElement('div');
            date.className = 'aurora-date';
            date.textContent = i;
            date.style.left = (Math.random() * 90) + '%';
            date.style.setProperty('--float-duration', (5 + Math.random() * 5) + 's');
            container.appendChild(date);
        }, i * 100);
    }
}

// Admission: Golden Path - Treasure trail with rewards
function createGoldenPath(container) {
    const path = [
        {icon: '🚪', label: 'Enter', reward: 10},
        {icon: '📝', label: 'Apply', reward: 20},
        {icon: '🎯', label: 'Test', reward: 50},
        {icon: '🤝', label: 'Interview', reward: 100},
        {icon: '🎉', label: 'Accept', reward: 500},
        {icon: '🏆', label: 'Enroll', reward: 1000}
    ];
    
    // Create golden path
    const pathLine = document.createElement('div');
    pathLine.className = 'golden-path-line';
    container.appendChild(pathLine);
    
    path.forEach((step, i) => {
        setTimeout(() => {
            const node = document.createElement('div');
            node.className = 'path-node';
            node.innerHTML = `
                <div class="node-glow"></div>
                <div class="node-icon">${step.icon}</div>
                <div class="node-label">${step.label}</div>
                <div class="node-reward">+${step.reward}⭐</div>
                <div class="coin-burst"></div>
            `;
            node.style.left = (15 + i * 14) + '%';
            node.style.top = (40 + Math.sin(i * 0.8) * 15) + '%';
            container.appendChild(node);
            
            // Add coin burst
            for(let c = 0; c < 10; c++) {
                const coin = document.createElement('div');
                coin.className = 'gold-coin';
                coin.textContent = '💰';
                coin.style.setProperty('--angle', (c * 36) + 'deg');
                node.querySelector('.coin-burst').appendChild(coin);
            }
        }, i * 700);
    });
}

// Contact: Portal Effect - Swirling vortex
function createPortalEffect(container) {
    // Create portal rings
    for(let i = 0; i < 10; i++) {
        const ring = document.createElement('div');
        ring.className = 'portal-ring';
        ring.style.setProperty('--ring-index', i);
        container.appendChild(ring);
    }
    
    // Add contact symbols spiraling in
    const symbols = ['📞', '✉️', '💬', '📱', '🌐', '📍', '⏰', '👋'];
    symbols.forEach((symbol, i) => {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'portal-particle';
            particle.textContent = symbol;
            particle.style.setProperty('--spiral-index', i);
            container.appendChild(particle);
        }, i * 300);
    });
}

// Continuous Magic Effects
function createContinuousEffects(container) {
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'magic-sparkle';
        sparkle.textContent = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 3000);
    }, 500);
}

// Enhanced Interactivity with Multiple Cursor Effects
function addMagicInteractivity() {
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1', '#FF69B4'];
    let currentColor = 0;
    let lastTrailTime = 0;
    
    // Create custom cursor elements
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    const cursorRing = document.createElement('div');
    cursorRing.className = 'cursor-ring';
    document.body.appendChild(cursorRing);
    
    const cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    document.body.appendChild(cursorGlow);
    
    // Mouse move with throttled trail
    document.addEventListener('mousemove', (e) => {
        const now = Date.now();
        
        // Update cursor elements
        cursorDot.style.left = e.clientX + 'px';
        cursorDot.style.top = e.clientY + 'px';
        cursorDot.style.color = colors[currentColor];
        
        cursorRing.style.left = e.clientX + 'px';
        cursorRing.style.top = e.clientY + 'px';
        cursorRing.style.borderColor = colors[currentColor];
        
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.background = `radial-gradient(circle, ${colors[currentColor]}, transparent)`;
        
        // Throttle trail creation - strawberry trail
        if (now - lastTrailTime > 150) {
            const trail = document.createElement('div');
            trail.className = 'mouse-trail';
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            trail.textContent = ['🍓', '💕', '🌸'][Math.floor(Math.random() * 3)];
            trail.style.color = colors[currentColor];
            document.body.appendChild(trail);
            setTimeout(() => trail.remove(), 600);
            lastTrailTime = now;
        }
    });
    
    // Enhanced click effect
    document.addEventListener('click', (e) => {
        currentColor = (currentColor + 1) % colors.length;
        
        // Create ripple effect
        for(let r = 0; r < 3; r++) {
            setTimeout(() => {
                const ripple = document.createElement('div');
                ripple.className = 'ripple-effect';
                ripple.style.left = (e.clientX - 100) + 'px';
                ripple.style.top = (e.clientY - 100) + 'px';
                ripple.style.borderColor = colors[currentColor];
                document.body.appendChild(ripple);
                setTimeout(() => ripple.remove(), 1000);
            }, r * 100);
        }
        
        // Strawberry particle burst
        for(let i = 0; i < 15; i++) {
            const burst = document.createElement('div');
            burst.className = 'mega-burst';
            burst.textContent = ['🍓', '❤️', '💕', '💗', '🌸', '🌺'][Math.floor(Math.random() * 6)];
            burst.style.left = e.clientX + 'px';
            burst.style.top = e.clientY + 'px';
            burst.style.color = colors[(currentColor + i) % colors.length];
            burst.style.setProperty('--burst-angle', (i * 24) + 'deg');
            burst.style.setProperty('--burst-distance', (60 + Math.random() * 80) + 'px');
            document.body.appendChild(burst);
            setTimeout(() => burst.remove(), 1500);
        }
        
        // Add juice splash effect
        const juice = document.createElement('div');
        juice.className = 'juice-splash';
        juice.style.left = e.clientX + 'px';
        juice.style.top = e.clientY + 'px';
        document.body.appendChild(juice);
        setTimeout(() => juice.remove(), 800);
        
        // Create strawberry splash effect
        const strawberryEffects = ['🍓', '❤️', '🌿', '💕', '🍃', '💗'];
        for(let s = 0; s < 8; s++) {
            const strawberry = document.createElement('div');
            strawberry.className = 'strawberry-splash';
            strawberry.textContent = strawberryEffects[Math.floor(Math.random() * strawberryEffects.length)];
            strawberry.style.left = e.clientX + 'px';
            strawberry.style.top = e.clientY + 'px';
            strawberry.style.setProperty('--splash-angle', (s * 45) + 'deg');
            strawberry.style.setProperty('--splash-distance', (40 + Math.random() * 60) + 'px');
            document.body.appendChild(strawberry);
            setTimeout(() => strawberry.remove(), 1200);
        }
    });
    
    // Hover effects on interactive elements
    document.querySelectorAll('a, button, .program-card, .team-card, .gallery-item').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorRing.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        el.addEventListener('mouseleave', () => {
            cursorRing.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// Legacy function for compatibility
function createMagicRainbow(container) {
    const letters = '🍓ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789🌈'.split('');
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1', '#FF69B4'];
    
    letters.forEach((char, i) => {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'float-item magic-rainbow';
            el.innerHTML = `<span class="char-main">${char}</span><span class="sparkle">✨</span>`;
            el.style.left = (i * 2.5) + '%';
            el.style.color = colors[i % colors.length];
            el.style.setProperty('--delay', (i * 0.05) + 's');
            container.appendChild(el);
            
            // Add trail effect
            for(let j = 0; j < 3; j++) {
                setTimeout(() => {
                    const trail = document.createElement('div');
                    trail.className = 'trail-dot';
                    trail.style.left = el.style.left;
                    trail.style.top = (Math.random() * 100) + '%';
                    trail.style.background = colors[i % colors.length];
                    container.appendChild(trail);
                    setTimeout(() => trail.remove(), 2000);
                }, j * 200);
            }
        }, i * 80);
    });
}

// About: Growing Tree of Knowledge
function createGrowingTree(container) {
    const trunk = document.createElement('div');
    trunk.className = 'tree-trunk';
    trunk.innerHTML = '🌳';
    container.appendChild(trunk);
    
    const fruits = ['🍎', '📚', '✏️', '🎨', '🎵', '⚽', '🌟', '💡', '🏆', '❤️'];
    const years = ['2005', '2008', '2012', '2015', '2020', '2025'];
    
    years.forEach((year, i) => {
        setTimeout(() => {
            const branch = document.createElement('div');
            branch.className = 'tree-branch';
            branch.innerHTML = `<span class="year-badge">${year}</span>${fruits[i]}`;
            branch.style.left = (30 + (i % 2 ? 20 : -20)) + '%';
            branch.style.top = (20 + i * 12) + '%';
            container.appendChild(branch);
        }, i * 600);
    });
}

// Programs: Alphabet Rocket Launch
function createAlphabetRocket(container) {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1'];
    
    letters.forEach((letter, i) => {
        setTimeout(() => {
            const rocket = document.createElement('div');
            rocket.className = 'float-item alphabet-rocket';
            rocket.innerHTML = `<div class="rocket-body">🚀<span class="rocket-letter">${letter}</span></div><div class="rocket-trail"></div>`;
            rocket.style.left = (5 + (i % 10) * 9.5) + '%';
            rocket.style.color = colors[i % colors.length];
            container.appendChild(rocket);
        }, i * 100);
    });
}

// Facilities: Floating Balloons
function createFloatingBalloons(container) {
    const balloons = [
        {emoji: '🎈', label: 'Classroom'},
        {emoji: '🎨', label: 'Art'},
        {emoji: '📚', label: 'Library'},
        {emoji: '🎵', label: 'Music'},
        {emoji: '⚽', label: 'Sports'},
        {emoji: '🌳', label: 'Garden'},
        {emoji: '🍎', label: 'Dining'},
        {emoji: '🎭', label: 'Theater'}
    ];
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1'];
    
    balloons.forEach((balloon, i) => {
        setTimeout(() => {
            const el = document.createElement('div');
            el.className = 'float-item floating-balloon';
            el.innerHTML = `
                <div class="balloon-top" style="color: ${colors[i % colors.length]}">${balloon.emoji}</div>
                <div class="balloon-string"></div>
                <div class="balloon-label">${balloon.label}</div>
            `;
            el.style.left = (10 + i * 11) + '%';
            el.style.setProperty('--float-delay', (i * 0.3) + 's');
            container.appendChild(el);
        }, i * 400);
    });
}

// Team: Bubble Letters
function createBubbleLetters(container) {
    const letters = 'TEACHERS❤️STUDENTS'.split('');
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1'];
    
    letters.forEach((letter, i) => {
        setTimeout(() => {
            const bubble = document.createElement('div');
            bubble.className = 'float-item bubble-letter';
            bubble.innerHTML = `<div class="bubble-wrap"><span>${letter}</span></div>`;
            bubble.style.left = (5 + Math.random() * 85) + '%';
            bubble.style.color = colors[i % colors.length];
            bubble.style.setProperty('--bubble-delay', (i * 0.1) + 's');
            container.appendChild(bubble);
        }, i * 150);
    });
}

// Gallery: Polaroid Rain
function createPolaroidRain(container) {
    const photos = ['📷', '🖼️', '🎨', '🌈', '⭐', '🎪', '🎡', '🎢', '🎠', '🎭'];
    
    photos.forEach((photo, i) => {
        setTimeout(() => {
            const polaroid = document.createElement('div');
            polaroid.className = 'float-item polaroid-photo';
            polaroid.innerHTML = `
                <div class="polaroid-frame">
                    <div class="polaroid-img">${photo}</div>
                    <div class="polaroid-caption">Memory ${i + 1}</div>
                </div>
            `;
            polaroid.style.left = (5 + i * 9.5) + '%';
            polaroid.style.setProperty('--fall-delay', (i * 0.2) + 's');
            container.appendChild(polaroid);
        }, i * 300);
    });
}

// Events: Fireworks Display
function createFireworks(container) {
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1', '#FF69B4'];
    
    for(let i = 0; i < 15; i++) {
        setTimeout(() => {
            const x = 20 + Math.random() * 60;
            const y = 20 + Math.random() * 60;
            const color = colors[Math.floor(Math.random() * colors.length)];
            
            // Create firework burst
            for(let j = 0; j < 12; j++) {
                const particle = document.createElement('div');
                particle.className = 'firework-particle';
                particle.style.left = x + '%';
                particle.style.top = y + '%';
                particle.style.background = color;
                particle.style.setProperty('--angle', (j * 30) + 'deg');
                container.appendChild(particle);
                setTimeout(() => particle.remove(), 2000);
            }
            
            // Add date number
            const date = document.createElement('div');
            date.className = 'firework-date';
            date.textContent = (i % 31) + 1;
            date.style.left = x + '%';
            date.style.top = y + '%';
            date.style.color = color;
            container.appendChild(date);
        }, i * 400);
    }
}

// Admission: Treasure Hunt
function createTreasureHunt(container) {
    const treasures = ['⭐', '🏆', '🎓', '📚', '✨', '💎', '🌟', '🎯', '🎪', '🎨'];
    const numbers = [1, 2, 3, 4, 5, 10, 20, 50, 100];
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1'];
    
    treasures.forEach((treasure, i) => {
        setTimeout(() => {
            const chest = document.createElement('div');
            chest.className = 'float-item treasure-chest';
            chest.innerHTML = `
                <div class="chest-top">🎁</div>
                <div class="chest-content">${treasure}<span class="treasure-number">${numbers[i]}</span></div>
            `;
            chest.style.left = (8 + i * 10) + '%';
            chest.style.top = (20 + (i % 3) * 25) + '%';
            chest.style.color = colors[i % colors.length];
            container.appendChild(chest);
        }, i * 500);
    });
}

// Contact: Flying Envelopes
function createFlyingEnvelopes(container) {
    const messages = ['HELLO!', 'CALL US', 'VISIT', 'EMAIL', 'CHAT', 'CONNECT'];
    const colors = ['#E31837', '#FFD700', '#87CEEB', '#90EE90', '#FFB6C1'];
    
    messages.forEach((msg, i) => {
        setTimeout(() => {
            const envelope = document.createElement('div');
            envelope.className = 'float-item flying-envelope';
            envelope.innerHTML = `
                <div class="envelope-body">✉️</div>
                <div class="envelope-message">${msg}</div>
            `;
            envelope.style.left = '-10%';
            envelope.style.top = (15 + i * 12) + '%';
            envelope.style.color = colors[i % colors.length];
            envelope.style.setProperty('--fly-duration', (3 + Math.random() * 2) + 's');
            container.appendChild(envelope);
        }, i * 600);
    });
}



// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

function showTestimonial(n) {
    testimonials.forEach(testimonial => testimonial.classList.remove('active'));
    currentTestimonial = (n + totalTestimonials) % totalTestimonials;
    testimonials[currentTestimonial].classList.add('active');
    updateTestimonialDots();
}

function changeTestimonial(n) {
    showTestimonial(currentTestimonial + n);
    resetTestimonialInterval();
}

function createTestimonialDots() {
    const dotsContainer = document.getElementById('testimonialDots');
    if (!dotsContainer) return;
    
    for (let i = 0; i < totalTestimonials; i++) {
        const dot = document.createElement('span');
        dot.className = 'testimonial-dot';
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => {
            showTestimonial(i);
            resetTestimonialInterval();
        };
        dotsContainer.appendChild(dot);
    }
}

function updateTestimonialDots() {
    const dots = document.querySelectorAll('.testimonial-dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentTestimonial);
    });
}

// Auto-advance testimonials
let testimonialInterval = setInterval(() => changeTestimonial(1), 4000);

function resetTestimonialInterval() {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => changeTestimonial(1), 4000);
}

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(n) {
    slides.forEach(slide => slide.classList.remove('active'));
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
    updateDots();
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

function createSliderDots() {
    const dotsContainer = document.getElementById('sliderDots');
    if (!dotsContainer) return;
    
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => showSlide(i);
        dotsContainer.appendChild(dot);
    }
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Auto-advance slider
let sliderInterval = setInterval(() => changeSlide(1), 5000);

// Reset interval on manual change
function resetSliderInterval() {
    clearInterval(sliderInterval);
    sliderInterval = setInterval(() => changeSlide(1), 5000);
}

document.querySelectorAll('.slider-btn').forEach(btn => {
    btn.addEventListener('click', resetSliderInterval);
});

// Stats Counter Animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            if (entry.target.classList.contains('stats-section')) {
                animateStats();
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.program-card, .testimonial-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) observer.observe(statsSection);

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Sticky Navbar
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Alphabet Footer
function createAlphabetFooter() {
    const container = document.getElementById('alphabetFooter');
    if (!container) return;
    
    const lineDiv = document.createElement('div');
    lineDiv.className = 'alphabet-line';
    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const numbers = '0123456789'.split('');
    
    alphabet.forEach(letter => {
        const span = document.createElement('span');
        span.className = 'alphabet-letter';
        span.setAttribute('data-letter', letter);
        span.textContent = letter;
        lineDiv.appendChild(span);
    });
    
    numbers.forEach(number => {
        const span = document.createElement('span');
        span.className = 'alphabet-number';
        span.setAttribute('data-number', number);
        span.textContent = number;
        lineDiv.appendChild(span);
    });
    
    container.appendChild(lineDiv);
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}!`);
        newsletterForm.reset();
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        alert('Thank you for your inquiry! We will contact you soon.');
        contactForm.reset();
    });
}

// Gallery Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 10);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Lightbox for Gallery
const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${img.src}" alt="${img.alt}">
            </div>
        `;
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox || e.target.className === 'lightbox-close') {
                lightbox.remove();
            }
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createFloatingElements();
    createSliderDots();
    createTestimonialDots();
    createAlphabetFooter();
    
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Confetti effect for CTA buttons
function createConfetti(x, y) {
    const colors = ['#E31837', '#FFB6C1', '#87CEEB', '#FFD700', '#90EE90'];
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = x + 'px';
        confetti.style.top = y + 'px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        document.body.appendChild(confetti);
        
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 10;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let posX = x;
        let posY = y;
        let opacity = 1;
        
        const animate = () => {
            posX += vx;
            posY += vy + 2;
            opacity -= 0.02;
            
            confetti.style.left = posX + 'px';
            confetti.style.top = posY + 'px';
            confetti.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                confetti.remove();
            }
        };
        
        animate();
    }
}

document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        createConfetti(e.clientX, e.clientY);
    });
});
