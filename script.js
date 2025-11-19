document.addEventListener('DOMContentLoaded', () => {
    
    // --- Smooth Scrolling for Navigation Links ---
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- Example of what you could do with the buttons ---
    const primaryBtn = document.querySelector('.primary-btn');
    const secondaryBtn = document.querySelector('.secondary-btn');

    // "Hire Me" button action
    primaryBtn.addEventListener('click', () => {
        // You would typically link this to a contact form or email link
        alert("Thank you! Contact details (like email or LinkedIn) will go here.");
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });

    // "View Projects" button action
    secondaryBtn.addEventListener('click', () => {
        // You will add a #projects section and link to it
        // For now, it alerts and scrolls to the top of the skills section
        alert("This will soon take you to the Projects section!");
        document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' });
    });
});