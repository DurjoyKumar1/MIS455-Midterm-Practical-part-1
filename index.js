document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const productName = product.querySelector("p").textContent;
            const productImage = product.querySelector("img").src;

            alert(`Product Added to Cart!\n\n${productName}`);
        });
    });
});
