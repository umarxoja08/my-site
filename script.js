document.addEventListener("DOMContentLoaded", function () {
    const carElement = document.querySelector(".car");
    
    // Mashina animatsiyasi
    setTimeout(function () {
        carElement.style.left = "100%"; // Mashina chapga harakatlanadi
    }, 100);

    // Orqaga qaytish
    carElement.addEventListener("transitionend", function () {
        carElement.style.left = "-200px"; // Mashina boshlang'ich x-koordinataga qaytadi
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carElement = document.querySelector(".car");
    
    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY; // O'ngdan-chap scroll miqdori
        carElement.style.transform = `translateX(${scrollY}px)`; // X-koordinatani o'zgartirish
    });
});
