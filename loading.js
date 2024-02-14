const loadingContainer = document.getElementById('loadingContainer');

function addHiddenLoading() {
    loadingContainer.style.display = 'none';
}

setInterval(addHiddenLoading, 3000);