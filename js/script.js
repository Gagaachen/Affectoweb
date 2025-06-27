// This file is for future JavaScript functionalities. 

document.addEventListener("DOMContentLoaded", function() {
    
    // Back to top button functionality
    let backToTopBtn = document.getElementById("back-to-top");

    if (backToTopBtn) {
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                backToTopBtn.style.display = "block";
            } else {
                backToTopBtn.style.display = "none";
            }
        }

        backToTopBtn.addEventListener("click", function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

}); 