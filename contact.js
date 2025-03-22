// Name: Durjoy Kumar
//ID:    2221126
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); 


    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }


    alert(`Thank you for reaching out, ${name}!\nWe will respond to your message at ${email}.`);


    document.querySelector("form").reset();
});
