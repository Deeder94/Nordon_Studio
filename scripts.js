document.addEventListener("DOMContentLoaded", function() {
    var preloader = document.getElementById('preloader');
    preloader.classList.add('hidden');

    // Show appropriate section based on URL hash
    showSectionFromHash();
});

// Function to show a specific section based on URL hash
function showSectionFromHash() {
    const hash = window.location.hash;
    if (hash) {
        showSection(hash);
    } else {
        // If no hash, show the default section (home)
        showSection('#home');
    }
}

// Function to show a specific section
function showSection(hash) {
    hideAllSections();
    const targetSection = document.querySelector(hash);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
}

// Function to navigate to homepage
function goToHomePage() {
    window.location.href = "index.html"; // Replace 'index.html' with your homepage URL
}

function scrollToTop() {
    window.scrollTo(0, 0); // Scrolls to the top-left corner of the page
}
