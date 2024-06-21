document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', function (e) {
        // Remove any existing ripple effect
        const existingRipple = this.querySelector('.ripple-effect');
        if (existingRipple) {
            existingRipple.remove();
        }

        // Get the size of the button
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        // Create the ripple effect element
        const ripple = document.createElement('span');
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        ripple.classList.add('ripple-effect');

        // Append the ripple effect element to the button
        this.appendChild(ripple);

        // Remove the ripple element after the animation ends
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    });
});
