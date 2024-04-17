const Menu = document.querySelector("ul");
const button = document.querySelector(".menu");
const lignes = document.querySelectorAll(".ligne1, .ligne2, .ligne3");
const mainFooter = document.querySelectorAll(".main-view, footer");
Menu.style.display = "none";

function menu() {
  if (Menu.style.display === "none") {
    Menu.style.display = "flex";
    Menu.classList.toggle("menu-animation1");
    Menu.classList.remove("menu-animation2");
    Menu.style.width = "50vw";
    lignes.forEach((ligne) => {
      ligne.style.position = "absolute";
    });
    lignes[0].classList.toggle("lig1");
    lignes[1].classList.toggle("lig2");
    lignes[2].classList.toggle("lig3");
    button.style.height = "20px";
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.addEventListener(("click"), () => {
        Menu.classList.remove("menu-animation1");
        Menu.classList.toggle("menu-animation2");
        Menu.style.display = "0vw";
        lignes.forEach((ligne) => {
          ligne.style.position = "relative";
        });
        lignes[0].classList.remove("lig1");
        lignes[1].classList.remove("lig2");
        lignes[2].classList.remove("lig3");
        button.style.height = "auto";
        setTimeout("Menu.style.display = 'none'", 120);
      });
    });
    mainFooter.forEach((mf)=>{
	    mf.addEventListener(("click"), () => {
	      Menu.classList.remove("menu-animation1");
			  Menu.classList.toggle("menu-animation2");
			  Menu.style.display = "0vw";
			  lignes.forEach((ligne) => {
				  ligne.style.position = "relative";
			  });
			  lignes[0].classList.remove("lig1");
			  lignes[1].classList.remove("lig2");
			  lignes[2].classList.remove("lig3");
			  button.style.height = "auto";
			  setTimeout("Menu.style.display = 'none'",120);
	    });
	  } );
	  mainFooter.forEach(mf => {
		  mf.addEventListener(('touchstart'), () =>  {
			  Menu.classList.remove("menu-animation1");
			  Menu.classList.toggle("menu-animation2");
			  Menu.style.width = "0vw";
			  lignes.forEach((ligne) => {
			  ligne.style.position = "relative";
			  });
			  lignes[0].classList.remove("lig1");
			  lignes[1].classList.remove("lig2");
			  lignes[2].classList.remove("lig3");
			  button.style.height = "auto";
			  setTimeout("Menu.style.display = 'none'", 120);
		  });
	  });
  }else {
    Menu.classList.remove("menu-animation1");
    Menu.classList.toggle("menu-animation2");
    Menu.style.width = "0vw";
    lignes.forEach((ligne) => {
      ligne.style.position = "relative";
    });
    lignes[0].classList.remove("lig1");
    lignes[1].classList.remove("lig2");
    lignes[2].classList.remove("lig3");
    button.style.height = "auto";
    setTimeout("Menu.style.display = 'none'", 120);
  }
}