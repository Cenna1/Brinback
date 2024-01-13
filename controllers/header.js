const head = document.head;
const body = document.body;

const styles =
  "<link rel='stylesheet' type='text/css' href='./assets/css/styles.css'/>";
head.innerHTML += styles;

const header = document.createElement("header");
header.setAttribute("id", "topo");
header.setAttribute("class", "container_cabecalho");
body.prepend(header);

const navegacaoMenuHamburguer =
  "<nav class ='botao_menu'>" +
  "<label for = 'toggle_menu' class='imagem_menu'>" +
  "<img src='./assets/img/botao_menu.png' alt='botão de menu' />" +
  "</label>" +
  "<input type='checkbox' id='toggle_menu' class='container_botao' />" +
  "<ul class='menu_hamburguer'>" +
  "<li class='item_menu_hamburguer'>" +
  "<a href='./quemSomos.html' class='link_menu_hamburguer'>" +
  " Quem somos" +
  "</a>" +
  "</li>" +
  "<li class='item_menu_hamburguer'>" +
  "<a href='./brinquedos.html' class='link_menu_hamburguer'>" +
  "Brinquedos" +
  "</a>" +
  "</li>" +
  "<li class='item_menu_hamburguer'>" +
  "<a href='./telalogin.html' class='link_menu_hamburguer'>" +
  " Minha conta" +
  "</a>" +
  "</li>" +
  "</ul>" +
  "</nav>";

header.innerHTML += navegacaoMenuHamburguer;

const menuDesktop = `
  <menu class='container_menu'>
    <ul class='itens_menu'>
      <li class='item_menu'>
        <a href='./quemsomos.html' class='link_menu'>
          Quem somos
        </a>
      </li>
      <li class='item_menu'>
        <a href='./brinquedos.html' class='link_menu'>
          Brinquedos
        </a>
      </li>
      <li class='item_menu'>
        <a href='./telalogin.html' class='link_menu'>
          Minha conta
        </a>
      </li>
    </ul>
    <div class='icones_home'>
      <img src='./assets/img/logo_brinback.png' alt='logo de ursinho' class='imagem_logo'/>
      <a href="./index.html"><img src='./assets/img/icone_home.png' alt='icone home' class='imagem_home'/></a>
    </div>
  </menu>
`;
header.innerHTML += menuDesktop;
