const rodape = document.createElement("footer");

rodape.setAttribute("id","rodape");
rodape.setAttribute("class", "rodape");

body.appendChild(rodape);

const paragrafo = "<p> Desenvolvido por: </p>" + 
"<div class= 'container_grid'> "+ 
"<div>"+
"<label> Açucena Oliveira</label>"+
" <img src='./assets/img/icon _instagram.png' alt='icone intagram'>"+
"<img src='./assets/img/icon _linkedin.png' alt='icone linkedin'>"+
"<img src='./assets/img/icon _github.png' alt='icone github'>"+
"</div>"+
"</div>"

rodape.innerHTML+= paragrafo;