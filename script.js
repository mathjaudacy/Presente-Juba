function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "tvd"; 
    if (password === correctPassword) {
        document.getElementById("login").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        document.getElementById("error").classList.remove("hidden");
    }
}

document.getElementById("password").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});
