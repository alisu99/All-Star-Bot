// chama o Section
function addSection() {
    const sectionHTML = `


    <!-- CARROSSEL -->


    <section>
    
    </section>


    <!-- CARDS E INFORMATIVOS -->

    <section>
        
    </section>
    `;

    document.querySelector('header').insertAdjacentHTML("afterend", sectionHTML);
}

// Chama as funções quando a página for carregada
window.onload = function () {
    addSection();
};
