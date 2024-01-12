const head = document.head;
const body = document.body;

const styles =
  "<link rel='stylesheet' type='text/css' href='./assets/css/styles.css'/>";
head.innerHTML += styles;

const header = document.createElement("header");
header.setAttribute("id", "topo");
header.setAttribute("class", "container_cabecalho");
body.prepend(header);

const navegacao = "<nav class ='botao_menu'>"+
"<label for='toggle_menu' class='imagem_menu'>"+
"<img src='./assets/img/botao_menu.png' alt='botão de menu'/>"+
"</label>"+
"<input type='checkbox' id='toggle_menu' class='container_botao'/>"+

"<ul class='menu_hamburguer'>"+
"<li class='item_menu_hamburguer'>"+
"<a href='#' class='link_menu_hamburguer'>"+
"Quem somos"+
"</a>"+
"</li>"+
  "<li class='item_menu_hamburguer'>"+
    "<a href='#' class='link_menu_hamburguer'>Minha conta</a>"+
  "</li>"+
"</ul>"+
"</nav>";


header.innerHTML += navegacaoMenuHamburguer =





  

