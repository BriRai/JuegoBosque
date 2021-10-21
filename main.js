const coche1 = document.getElementById("coche1");

document.addEventListener("click", function() {
    coche1.classList.add("cocheSalta");
})

coche1.addEventListener("animationend", () => {
    coche1.classList.remove("cocheSalta");
});