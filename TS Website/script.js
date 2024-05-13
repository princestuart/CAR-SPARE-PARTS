// Add to cart functionality
const addToCartButtons = document.querySelectorAll(".btn");

addToCartButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Add item to cart logic here
        alert("Item added to cart!");
    });
});