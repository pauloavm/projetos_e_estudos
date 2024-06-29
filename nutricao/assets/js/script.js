// Seleciona os elementos do DOM
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const mainContent = document.getElementById("content");

// Ação de eventos sobre o botão menu da tag nav (mobile)
openMenu.addEventListener("click", () => {
  menu.style.display = "flex";
  menu.style.right = menu.offsetWidth * -1 + "px";

  setTimeout(() => {
    menu.style.opacity = "1";
    menu.style.right = "0";
    openMenu.style.display = "none";
  }, 10);
});

// Ação de eventos sobre o botão X da tag nav (mobile)
closeMenu.addEventListener("click", () => {
  menu.style.opacity = "0";
  menu.style.right = menu.offsetWidth * -1 + "px";

  setTimeout(() => {
    menu.removeAttribute("style");
    openMenu.removeAttribute("style");
  }, 200);
});

// Ação de eventos sobre os links do menu de navegação
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link

    // Verifica se o link clicado tem a classe "load-in-main"
    if (link.classList.contains("load-in-main")) {
      // Carrega a página via Axios
      axios
        .get(link.getAttribute("href"))
        .then((response) => {
          // Insere o conteúdo da página no elemento <main>
          mainContent.innerHTML = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // Redireciona para a página do link se ele não tiver a classe "load-in-main"
      window.location.href = link.getAttribute("href");
    }
  });
});
