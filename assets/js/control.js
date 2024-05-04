// Arquivo: control.js

// Objeto para armazenar o estado de cada seção
var sectionState = {
    head: true,
    header: true,
    section: true,
    footer: true
};

// Função para ativar uma seção
function activateSection(section) {
    sectionState[section] = true;
}

// Função para desativar uma seção
function deactivateSection(section) {
    sectionState[section] = false;
}

// Função para verificar se uma seção está ativa
function isSectionActive(section) {
    return sectionState[section];
}

// Função para atualizar a página com base no estado atual
function updatePage() {
    if (isSectionActive('head')) {
        addHead();
    }
    if (isSectionActive('header')) {
        addHeader();
    }
    if (isSectionActive('section')) {
        addSection();
    }
    if (isSectionActive('footer')) {
        addFooter();
    }
}

// Chama a função updatePage quando a página for carregada
window.onload = updatePage;
