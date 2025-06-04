window.addEventListener('scroll', function () {
    const header = document.getElementById('main-header');
    if (window.scrollY > 10) {
        header.classList.remove('transparente');
        header.classList.add('abaixo');
    } else {
        header.classList.remove('abaixo');
        header.classList.add('transparente');
    }
});

function mostrarDetalhes(btn) {
    const divDetalhe = btn.nextElementSibling;
    divDetalhe.classList.toggle("hidden");
    btn.textContent = divDetalhe.classList.contains("hidden") ? "Ver mais" : "Ver menos";
}

function sair() {
    // Remove todos os dados armazenados na sessão
    sessionStorage.clear();

    // Redireciona o usuário para a página de login
    window.location.href = "../index.html";
}