var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var banneratual = 0;

function trocabanner() {
    banneratual = (banneratual + 1) % 2;
    document.querySelector(".banner-destaques img").src = banners[banneratual];
}
setInterval(trocabanner, 4000);
