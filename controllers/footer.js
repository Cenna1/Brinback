const rodape = document.createElement("footer");

rodape.setAttribute("id","rodape");
rodape.setAttribute("class", "rodape");

body.appendChild(rodape);

const paragrafo = "<p class = 'rodape_texto'> Desenvolvido por: </p>" + 
"<div class= 'container_grid'> "+ 
"<div>"+
"<label> Açucena Oliveira</label>"+
"<a href='https://www.linkedin.com/in/acucena-oliveira/'><img src='./assets/img/icon _linkedin.png' alt='icone linkedin'></a>"+
"<a href='https://github.com/Cenna1'><img src='./assets/img/icon _github.png' alt='icone github'></a>"+
"</div>"+

"<div>"+
"<label>Josefina Pambula</label>"+
"<a href='https://www.linkedin.com/in/josefinapambula'><img src='./assets/img/icon _linkedin.png' alt='icone linkedin'></a>"+
"<a href='https://github.com/Jfinapambula'><img src='./assets/img/icon _github.png' alt='icone github'></a>"+
"</div>"+

"<div>"+
"<label>Karen Dias</label>"+
"<a href='https://www.linkedin.com/in/karenmdias'><img src='./assets/img/icon _linkedin.png' alt='icone linkedin'></a>"+
"<a href='https://github.com/diasmkaren'><img src='./assets/img/icon _github.png' alt='icone github'></a>"+
"</div>"+

"<div>"+
"<label>Malorie Ebang</label>"+
"<a href='https://www.linkedin.com/in/malorie-ndemengane-ebang-9946531a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'><img src='./assets/img/icon _linkedin.png' alt='icone linkedin'></a>"+
"<a href='#'><img src='./assets/img/icon _github.png' alt='icone github'></a>"+
"</div>"+

"<div>"+
"<label>Nubia Calderan</label>"+
"<a href='https://www.linkedin.com/in/nubia-calderan'><img src='./assets/img/icon _linkedin.png' alt='icone linkedin'></a>"+
"<a href='https://github.com/nucalderan'><img src='./assets/img/icon _github.png' alt='icone github'></a>"+
"</div>"+
"</div>"+

"<div>"+
"<p class = 'rodape_info'>11ª turma Mulheres in Tech da Fly Educação e Cultura</p>"
"</div>"

rodape.innerHTML+= paragrafo;

