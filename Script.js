document.addEventListener("DOMContentLoaded", function() {
    // Helper function to smoothly scroll to a section
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Event listeners for navigation links
    document.querySelector(".navbar ul li:nth-child(1)").addEventListener("click", function() {
        scrollToSection(".section-1");
    });

    document.querySelector(".navbar ul li:nth-child(2)").addEventListener("click", function() {
        scrollToSection(".brands");
    });

    document.querySelector(".navbar ul li:nth-child(3)").addEventListener("click", function() {
        scrollToSection(".collection");
    });

    // Event listeners for collection links
    document.querySelector(".collection ul li:nth-child(1)").addEventListener("click", function() {
        scrollToSection(".heading");
    });

    document.querySelector(".collection ul li:nth-child(2)").addEventListener("click", function() {
        scrollToSection(".heading-1");
    });

    document.querySelector(".collection ul li:nth-child(3)").addEventListener("click", function() {
        scrollToSection(".heading-2");
    });

   document.querySelector(".navbar ul li:nth-child(4)").addEventListener("click", function() {
        scrollToSection("#footer");
    });
});
