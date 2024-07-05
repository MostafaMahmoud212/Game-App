// class {
//   خاص ب section Home
// }

export class Games {
  constructor () {
    this.allGames = document.querySelector('.allGames');
    this.lis = document.querySelectorAll("nav ul li a");
    this.li1 = document.querySelector("nav ul li.active");
    this.category = "mmorpg";
    this.gamesContainer = document.querySelector(".games");
    this.gameDetails = document.querySelector(".gameDetails");
    this.loadingScreen = document.querySelector('.loading-screen');
    this.response = [];
    this.response2 = null; // Initialize response2
    this.init();
  }

  init() {
    this.getGames().then(() => this.displayGames());
    this.attachCategoryListeners();
  }
}






// getBarames().then(() => display1()); 