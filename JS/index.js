            // OOP


// particlesJS.load('particles-js', './JS/particles.json', function() {});

class GameAPI {
  constructor() {
    this.allGames = document.querySelector('.allGames');
    this.lis = document.querySelectorAll("nav ul li a");
    this.li1 = document.querySelector("nav ul li.active");
    this.category = "mmorpg";
    this.gamesContainer = document.querySelector(".games");
    this.gameDetails = document.querySelector(".gameDetails");
    this.loadingScreen = document.querySelector('.loading-screen');
    this.response = [];
    this.response2 = null; // Initialize response2

    this.getGames__display();
  }

  getGames__display() {
    this.getGames().then(() => this.displayGames());
    this.clickLI();
  }

  async getGames() {
    this.showLoading();

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4361cb09a2mshb5941b274ab0020p15838bjsn0827f0038673',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    const api = await fetch(url, options);
    this.response = await api.json();
    this.hideLoading();
  }


  displayGames() {
    this.gamesContainer.innerHTML = '';
    let newGame = '';

    if (this.response.length === 0) { //     ????
      newGame = `
        <div class="iner mx-3 text-white rounded-3 p-2">
          <p class="alert">This Games Disnot her.</p>
        </div>
      `;
    } else {
      for (let i = 0; i < this.response.length; i++) {
        newGame += `
          <div class="game col-12 col-md-6 col-lg-4 bg-transparent p-0  text-center  mb-4">
            <div class="iner mx-3 text-white rounded-3 p-2" data-game-id="${this.response[i].id}">
              <figure class="m-3 ">
                <img class="card-img-top object-fit-cover h-100 rounded-3" src="${this.response[i].thumbnail}" alt="${this.response[i].title}">
              </figure>
              <figcaption>
                <div class="title d-flex justify-content-between mx-3">
                  <h4>${this.response[i].title}</h4>
                  <button class="btn btn-primary" type="button">Free</button>
                </div>
                <p class="card-text small text-center opacity-50 my-2 overflow-hidden">${this.response[i].short_description}</p>
              </figcaption>
              <div class="end-div d-flex justify-content-between mx-3 mt-3">
                <h5>${this.response[i].genre}</h5>
                <h5>${this.response[i].platform}</h5>
              </div>
            </div>
          </div>
        `;
      }
    }
    
    this.gamesContainer.innerHTML = newGame;
    this.clickOfTheGame();
  }


  async getGameDetails(id) {
    this.showLoading();

    const url2 = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options2 = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '4361cb09a2mshb5941b274ab0020p15838bjsn0827f0038673',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };


    const api2 = await fetch(url2, options2);
    this.response2 = await api2.json();
    this.hideLoading();
  }


  displayGameDetails() {
    let DetailsGame = `
      <div class="d-flex justify-content-between mx-3 text-white mt-2">
        <h2 class="fs-1">Details Game</h2>
        <i class="fs-1 close-details">X</i>
      </div>
      <div class="row mt-5">
        <figure class="col-12 col-lg-4 my-3 my-lg-0">
          <img src="${this.response2.thumbnail}" class="w-100" alt="game emage">
        </figure>
        <figcaption class="col-12 col-lg-8 text-white">
          <h2 class="GameTitle fs-1 mb-5">Title: ${this.response2.title}</h2>
          <h3>category: <span>${this.category}</span></h3>
          <h3>platform: <span>${this.response2.platform}</span></h3>
          <h3 class="mb-5">Status: <span>${this.response2.status}</span></h3>
          <p class="mb-5">${this.response2.description}</p>
          <a href="${this.response2.game_url}" class="showGame btn btn-outline-warning fs-2 mb-3" target="_blank">Show Game</a>
        </figcaption>
      </div>
    `;
    this.gameDetails.innerHTML = DetailsGame;
    this.clickCloseBTN();
  }


  clickLI() {
    this.lis.forEach(li => {
      li.addEventListener("click", () => {
        this.li1.classList.remove("active");
        this.li1.style.color = "white";
        this.category = li.innerHTML.toLocaleLowerCase();
        this.getGames().then(() => this.displayGames());
      });
    });
  }

  clickOfTheGame() {
    const inerElements = document.querySelectorAll(".iner");
    inerElements.forEach(iner => {
      iner.addEventListener("click", async () => {
        this.allGames.classList.add('d-none');
        const gameId = iner.dataset.gameId; 
        await this.getGameDetails(gameId);
        this.displayGameDetails();
        this.gameDetails.classList.remove('d-none');
      });
    });
  }

  clickCloseBTN() {
    const closeButton = this.gameDetails.querySelector('.close-details');
    closeButton.addEventListener("click", () => {
      this.allGames.classList.remove('d-none');
      this.gameDetails.classList.add('d-none');
    });
  }

  showLoading() {
    this.loadingScreen.style.display = 'flex';
  }

  hideLoading() {
    this.loadingScreen.style.display = 'none';
  }
}



window.onload = () => {  //  New Object
  new GameAPI(); 
};













// //  // // // // // //    JS






// particlesJS.load('particles-js', './JS/particles.json', function() {});

// let allGames = document.querySelector('.allGames')
// let lis = document.querySelectorAll("nav ul li a");
// let li1 = document.querySelector("nav ul li.active");
// let category = "mmorpg"; 
// let games = document.querySelector(".games");
// let gameDetails = document.querySelector(".gameDetails");
// let loadingScreen = document.querySelector('.loading-screen');

// let response2;
// let response = [];


// // باستدعي GetBarames و display1 in where open page
// getBarames().then(() => display1()); 


// lis.forEach(li => {
//   li.addEventListener("click", function() {
//     li1.classList.remove("active");
//     // li.classList.add("active");
//     li1.style.color = "white"
//     category = li.innerHTML.toLocaleLowerCase();
//     if (getBarames() == null) {
//                             // مش شغالة ????
//       games.innerHTML = `
//         <div class="iner mx-3 text-white rounded-3 p-2">
//           <p class="alert">This Games Disnot her.</p>
//         </div>
//       `;}
//       else{
//         getBarames().then(() => display1());
//       }
//   });
// });




// console.log(category);




// async function getBarames() {
  
//   loadingScreen.style.display = 'flex'; 
  
//   const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;

//   const options = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '4361cb09a2mshb5941b274ab0020p15838bjsn0827f0038673',
//       'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//     }
//   };

//   const api = await fetch(url, options);
//   response = await api.json();
//   loadingScreen.style.display = 'none';

// }


// function display1() {
//   games.innerHTML = ''; 

//   let newGame = '';
//   if (response.length === 0) {
//                                 // ????
//     games.innerHTML = `
//       <div class="iner mx-3 text-white rounded-3 p-2">
//         <p class="alert">This Games Disnot her.</p>
//       </div>
//     `;
//   } else {
//     for (let i = 0; i < response.length; i++) {
//       newGame += `
//         <div class="game col-12 col-md-6 col-lg-4 bg-transparent p-0  text-center  mb-4">
//           <div class="iner mx-3 text-white rounded-3 p-2" >
//             <figure class="m-3 ">
//               <img class="card-img-top object-fit-cover h-100 rounded-3" src="${response[i].thumbnail}" alt="${response[i].title}">
//             </figure>
//             <figcaption>
//               <div class="title d-flex justify-content-between mx-3">
//                 <h4>${response[i].title}</h4>
//                 <button class="btn btn-primary" type="button">Free</button>
//               </div>
//               <p class="card-text small text-center opacity-50 my-2 overflow-hidden">${response[i].short_description}</p>
//             </figcaption>
//             <div class="end-div d-flex justify-content-between mx-3 mt-3">
//               <h5> 
//                 ${response[i].genre}
//               </h5>
//               <h5>
//                 ${response[i].platform}
//               </h5>
//             </div>
//           </div>
//         </div>
//       `;
//     }
//     games.innerHTML = newGame;


//     getDetalsGame()

//   }
// }


// function getDetalsGame() {

//   let inerElements = document.querySelectorAll(".iner");
//   inerElements.forEach((iner, index) => {
//     iner.addEventListener("click", function() {
//       allGames.classList.add('d-none');
//       loadingScreen.style.display = 'flex'; 

//       let gameId = response[index].id; // الحصول على id من response
//       getBarames2(gameId); 
//       console.log(gameId);
//       setTimeout(() => {
//         display2();
//         loadingScreen.style.display = 'none'; 
//         gameDetails.classList.remove('d-none');
//       }, 500);
//     });
//   });
// }




// async function getBarames2(id) {
//   const url2 = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  
//   const options2 = {
//     method: 'GET',
//     headers: {
//       'x-rapidapi-key': '4361cb09a2mshb5941b274ab0020p15838bjsn0827f0038673',
//       'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
//     }
//   };
  
//   const api2 = await fetch(url2, options2);
  
//   response2 = await api2.json();
//   console.log(response2);
// }


// function display2() {

//   let DetailsGame = `
//     <div class="d-flex justify-content-between mx-3 text-white mt-2">
//       <h2 class="fs-1">Details Game</h2>
//       <i class="fs-1">X</i>
//     </div>
//     <div class="row mt-5">

//       <figure class="col-12 col-lg-4 my-3 my-lg-0">
//         <img src="${response2.thumbnail}" class="w-100" alt="game emage">
//       </figure>
      
//       <figcaption class="col-12 col-lg-8 text-white">
//         <h2 class="GameTitle fs-1 mb-5">Title: ${response2.title}</h2>
//         <h3>category: <span>${category}</span></h3>
//         <h3>platform: <span>${response2.platform}</span></h3>
//         <h3 class="mb-5">Status: <span>${response2.status}</span></h3>
//         <p class="mb-5">${response2.description}</p>
//         <a href="${response2.game_url}" class="showGame btn btn-outline-warning fs-2 mb-3" target="_blank">Show Game</a>
//       </figcaption>
//     </div>
//   `;
//   gameDetails.innerHTML = DetailsGame;

//   let xIcone = document.querySelectorAll(".gameDetails i");
//   xIcone.forEach(i => {
//     i.addEventListener("click", function() {
//       allGames.classList.remove('d-none');
//       gameDetails.classList.add('d-none');
//       console.log(response2);
//     });
//   });
// }