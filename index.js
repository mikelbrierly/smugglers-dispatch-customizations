let starfield = document.getElementById("header-hero");

let planet = document.createElement("img");
planet.src = "https://i.imgur.com/7FN7kCE.png";
planet.className = "coruscant";

let heroLogoContainer = document.createElement("div");
heroLogoContainer.className = "hero-logo-container";
let heroLogo = document.createElement("img");
heroLogo.src = "https://i.imgur.com/3ZWDtWt.png";
heroLogo.className = "hero-logo";

heroLogoContainer.append(heroLogo);
starfield.append(planet);
starfield.prepend(heroLogoContainer);
