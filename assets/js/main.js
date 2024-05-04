// Função para adicionar o cabeçalho (head)
function addHead() {
    const headHTML = `
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet" />
      <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
    `;

    // Adiciona o cabeçalho na Tag <head>
    document.head.innerHTML = headHTML;
}

// chama o Header
function addHeader() {
    const headerHTML = `
    <div class="barra-superior">
        <ul style="background-color: white;" class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
            <li>
                <a href="mailto:contato@instituicao.edu.br">
                    <i class="fa">&#xf0e0;</i>
                    contato@instituicao.edu.br
                </a>
                <a href="wa.me/55000000000">
                    <i class="fa">&#xf004;</i>
                    Fale Conosco (00) 0000-0000
                </a>
            </li>
        </ul>
    </div>

    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Dropdown
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </header>
    `;

    document.body.insertAdjacentHTML("afterbegin", headerHTML);
}

// chama o Section
function addSection() {
    const sectionHTML = `
    <section>
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="10000">
                    <img src="..." class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="..." class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="..." class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div> 
    </section>


    <!-- CARDS -->

    <section>
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content.</p>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="..." class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    `;

    document.querySelector('header').insertAdjacentHTML("afterend", sectionHTML);
}

// Função para adicionar o footer
function addFooter() {
    const footerHTML = `
    <section style="background-color: #2d20df;" id="section-footer">
        <footer class="top">
            <!-- -------- -->
            <div class="links">
                <div>
                    <center>
                        <a href="#" class="logo-instituicao"><img src="..." /></a>
                        <h2 style="padding-top: 1rem; padding-bottom: 1rem;">Área do aluno</h2>
                        <a href="#" class="qr-code"><img width="200"
                                src="https://img.elo7.com.br/product/685x685/392F832/quadro-whatsapp-qr-code-papel-fotografico-ate-4-copias.jpg"
                                alt=""></a>
                    </center>
                </div>
                <!-- -------- -->
                <div>
                    <h2>A instituicao</h2>
                    <hr style="size: 1rem;">
                    <a href="#"><p>Sobre a instituicao</p></a>
                    <a href="#"><p>Política de Privacidade</p></a>
                    <a href="#"><p>Política de Cookies</p></a>
                    <h2>Inscreva-se</h2>
                    <a href="#"><p>Vestibular</p></a>
                    <a href="#"><p>Enem</p></a>
                </div>
  
                <!-- --------- -->
                <div>
                    <h2>Cursos</h2>
                    <hr>
                    <a href="#"><p>EJA</p></a>
                    <a href="#"><p>Graduação</p></a>
                    <a href="#"><p>Pós-Graduação</p></a>
                    <a href="#"><p>Técnico</p></a>
                </div>
                <!-- ---------- -->
                <div>
                <h2>Atendimento</p></h2>
                <hr>
                <a href="#"><p>NAP</p></a>
                <a href="#"><p>CPA</p></a>
                <a href="#"><p>Monitoria</p></a>
                <a href="#"><p>Ouvidoria</p></a>
                </div>
                <!-- ---------- -->
                <div>
                    <h2>Fale com a gente!</h2>
                    <hr>
                    <a href="#">Av. instituicao de exemplo, 1234 - Bairro Cidade - FA, 00000-000</a>
                    <a href="mailto:contato@instituicao.edu.br">contato@instituicao.edu.br</a>
                    <a href="#">CNPJ nº00.000.000/0000-00</a>
                </div>
  
            </div>
        </footer>
        <footer class="bottom">
            <div class="legal">
                <span> ©2024. <a href="#">Nome da Instituicao</a> - Todos os Direitos Reservados </span>
                <a> algo </a>
                <a href="https://instituicao.edu.br/politica-de-privacidade/"> Termos de Privacidade </a>
            </div>
            <div class="links">
                <a class="fa-brands fa-instagram text-light social-icon"
                    href="https://www.instagram.com/" target="_blank"></a>
                <a class="fa-brands fa-linkedin text-light social-icon"
                    href="https://www.linkedin.com/company/" target="_blank"></a>
                <a class="fa-brands fa-youtube text-light social-icon" href="https://www.youtube.com/@"
                    target="_blank"></a>
            </div>
        </footer>
    </section>
  
    `;

    // Adiciona o footer no final do body
    document.body.insertAdjacentHTML("beforeend", footerHTML);
}

// Chama as funções quando a página for carregada
window.onload = function () {
    addHead();
    addHeader();
    addSection();
    addFooter();
};
