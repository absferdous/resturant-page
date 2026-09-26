console.log("index js loaded");
import { container } from "./modules/home";
import "./styles.css";
import { renderHome } from "./modules/home";
import { renderAbout } from "./modules/about";
import { renderMenu } from "./modules/menu";
// renderMenu;
// renderAbout;
// import { addEventListenerToTabs } from "./utilities/tabs";

// import { handleTabs } from "./utilities/tabs";
// export let menu = false;

// handleTabs(home);

const homeTab = document.querySelector("#home-tab");
const menuTab = document.querySelector("#menu-tab");
const aboutTab = document.querySelector("#about-tab");
let currentPage = "home";

const renderUI = () => {
  container.replaceChildren();
  switch (currentPage) {
    case "home":
      container.appendChild(renderHome());
      renderHome();

      break;
    case "menu":
      container.appendChild(renderMenu());
      // alert("menu");

      break;
    case "about":
      container.appendChild(renderAbout());

      break;
    default:
      container.appendChild(renderHome());
      break;
  }

  document.body.append(container);
};

export function addEventListenerToTabs() {
  homeTab.addEventListener("click", (e) => {
    // e.target.disabled = true;
    // renderHome();
    currentPage = "home";
    renderUI();
    console.log("currentPage", currentPage);
  });

  menuTab.addEventListener("click", (e) => {
    // alert("menu clicked");
    currentPage = "menu";
    renderUI();
    // renderMenu();
    // renderUI();
    console.log("currentPage", currentPage);
  });
  aboutTab.addEventListener("click", (e) => {
    // alert("about clicked");
    // renderUI();
    currentPage = "about";
    renderUI();
    console.log("currentPage", currentPage);
  });
}

addEventListenerToTabs();
renderUI();
