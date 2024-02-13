const loadingContainer = document.getElementById('loadingContainer');

function addHiddenLoading() {
    loadingContainer.style.display = 'none';

    // Remova a classe 'overflow-hidden' do corpo quando o loadingContainer estiver oculto
    document.body.classList.remove('overflow-hidden');
}

setInterval(addHiddenLoading, 3000);

// Adicione a classe 'overflow-hidden' ao corpo quando o loadingContainer estiver visível
document.body.classList.add('overflow-hidden');