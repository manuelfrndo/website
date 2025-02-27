

function scrollToCompra() {
    document.getElementById('compra').scrollIntoView({ behavior: 'smooth' });
}

// Optionally, add event listeners or other logic for dynamic content


// Función para el carrusel de imágenes
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.remove('hidden');
    });

    nextBtn.addEventListener('click', () => {
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('hidden');
    });
}


// Espera 3 segundos antes de ocultar el preloader y mostrar el contenido
setTimeout(function() {
    document.getElementById("preloader").style.display = "none";
    document.getElementById("content").style.display = "block";
}, 3000);

document.getElementById("loginBtn").addEventListener("click", function() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");
});

document.getElementById("signupBtn").addEventListener("click", function() {
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("loginForm").classList.add("hidden");
});

