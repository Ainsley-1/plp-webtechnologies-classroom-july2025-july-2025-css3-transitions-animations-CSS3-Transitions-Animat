 // Part 1: CSS Transitions with JavaScript control
        const transitionBox = document.getElementById('transitionBox');
        const enlargeBtn = document.getElementById('enlargeBtn');
        const moveBtn = document.getElementById('moveBtn');
        const resetBtn = document.getElementById('resetBtn');
        const transitionStatus = document.getElementById('transitionStatus');

        // Function to handle transition changes
        function applyTransitionEffect(effect) {
            // Reset all classes first
            transitionBox.classList.remove('enlarged', 'moved');
            
            // Apply the selected effect
            if (effect === 'enlarge') {
                transitionBox.classList.add('enlarged');
                transitionStatus.textContent = 'Current state: Enlarged';
            } else if (effect === 'move') {
                transitionBox.classList.add('moved');
                transitionStatus.textContent = 'Current state: Moved & Rotated';
            } else {
                transitionStatus.textContent = 'Current state: Default';
            }
        }

        // Event listeners for transition buttons
        enlargeBtn.addEventListener('click', () => applyTransitionEffect('enlarge'));
        moveBtn.addEventListener('click', () => applyTransitionEffect('move'));
        resetBtn.addEventListener('click', () => applyTransitionEffect('reset'));

        // Part 2: Keyframe Animations with JavaScript control
        const animatedCircle = document.getElementById('animatedCircle');
        const bounceBtn = document.getElementById('bounceBtn');
        const pulseBtn = document.getElementById('pulseBtn');
        const spinBtn = document.getElementById('spinBtn');
        const shakeBtn = document.getElementById('shakeBtn');
        const stopBtn = document.getElementById('stopBtn');
        const animationStatus = document.getElementById('animationStatus');

        // Function to handle animation changes
        function applyAnimation(animationType) {
            // Remove all animation classes first
            animatedCircle.classList.remove('bounce', 'pulse', 'spin', 'shake');
            
            // Apply the selected animation
            if (animationType !== 'stop') {
                animatedCircle.classList.add(animationType);
                animationStatus.textContent = `Current animation: ${animationType.charAt(0).toUpperCase() + animationType.slice(1)}`;
            } else {
                animationStatus.textContent = 'Current animation: None';
            }
        }

        // Event listeners for animation buttons
        bounceBtn.addEventListener('click', () => applyAnimation('bounce'));
        pulseBtn.addEventListener('click', () => applyAnimation('pulse'));
        spinBtn.addEventListener('click', () => applyAnimation('spin'));
        shakeBtn.addEventListener('click', () => applyAnimation('shake'));
        stopBtn.addEventListener('click', () => applyAnimation('stop'));

        // Part 3: Combined CSS and JavaScript effects
        const flipCard = document.getElementById('flipCard');
        const flipBtn = document.getElementById('flipBtn');
        const modalBtn = document.getElementById('modalBtn');
        const modal = document.getElementById('modal');
        const closeModal = document.getElementById('closeModal');
        const effectStatus = document.getElementById('effectStatus');

        // Function to flip the card
        function toggleCardFlip() {
            flipCard.classList.toggle('flipped');
            effectStatus.textContent = flipCard.classList.contains('flipped') ? 
                'Card is flipped' : 'Card is not flipped';
        }

        // Function to show modal
        function showModal() {
            modal.classList.add('visible');
        }

        // Function to hide modal
        function hideModal() {
            modal.classList.remove('visible');
        }

        // Event listeners for combined effects
        flipBtn.addEventListener('click', toggleCardFlip);
        modalBtn.addEventListener('click', showModal);
        closeModal.addEventListener('click', hideModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) hideModal();
        });

        // Utility function to demonstrate scope and parameters
        function calculateAnimationDuration(baseDuration, multiplier = 1) {
            // Local scope variable
            const calculatedDuration = baseDuration * multiplier;
            return `${calculatedDuration}s`;
        }

        // Demonstrate function usage
        console.log("Bounce animation duration:", calculateAnimationDuration(1, 1));
        console.log("Pulse animation duration:", calculateAnimationDuration(1.5));
        
        // Global scope variable
        const globalAnimationBase = 2;
        console.log("Spin animation duration:", calculateAnimationDuration(globalAnimationBase, 0.5));