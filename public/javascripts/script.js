window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 10) {
        header.classList.remove('transparent');
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
    }
});

function mostrarDetalhes(btn) {
    const detalhe = btn.nextElementSibling;
    detalhe.classList.toggle("hidden");
    btn.textContent = detalhe.classList.contains("hidden") ? "Ver mais" : "Ver menos";
}