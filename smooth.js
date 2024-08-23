document.addEventListener("DOMContentLoaded", function() {
    window.onscroll = function() {
        const backToTopButton = document.getElementById("back-to-top");
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    }

    document.getElementById("back-to-top").onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

