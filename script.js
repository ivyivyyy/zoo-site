document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector("a");
    btn.addEventListener("mouseover", function() {
        btn.style.color = "red";
    });

    btn.addEventListener("mouseout", function() {
        btn.style.color = "blue";
    });
});
