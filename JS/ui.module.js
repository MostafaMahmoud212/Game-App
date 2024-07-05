// class جواها display Data function

// class {
//   display_Data() {}
//   display_Details() {} // كل game لوحدها 
// }

export class Ui {

  display1() {
    games.innerHTML = ''; 
  
    let newGame = '';
    if (response.length === 0) {
                                  // 
      games.innerHTML = `
        <div class="iner mx-3 text-white rounded-3 p-2">
          <p class="alert">This Games Disnot her.</p>
        </div>
      `;
    } else {
      for (let i = 0; i < response.length; i++) {
        newGame += `
          <div class="game col-12 col-md-6 col-lg-4 bg-transparent p-0  text-center  mb-4">
            <div class="iner mx-3 text-white rounded-3 p-2" >
              <figure class="m-3 ">
                <img class="card-img-top object-fit-cover h-100 rounded-3" src="${response[i].thumbnail}" alt="${response[i].title}">
              </figure>
              <figcaption>
                <div class="title d-flex justify-content-between mx-3">
                  <h4>${response[i].title}</h4>
                  <button class="btn btn-primary" type="button">Free</button>
                </div>
                <p class="card-text small text-center opacity-50 my-2 overflow-hidden">${response[i].short_description}</p>
              </figcaption>
              <div class="end-div d-flex justify-content-between mx-3 mt-3">
                <h5> 
                  ${response[i].genre}
                </h5>
                <h5>
                  ${response[i].platform}
                </h5>
              </div>
            </div>
          </div>
        `;
      }
      games.innerHTML = newGame;
  
  
      getDetalsGame()
  
    }
  }


  display2() {

    let DetailsGame = `
      <div class="d-flex justify-content-between mx-3 text-white mt-2">
        <h2 class="fs-1">Details Game</h2>
        <i class="fs-1">X</i>
      </div>
      <div class="row mt-5">
  
        <figure class="col-12 col-lg-4 my-3 my-lg-0">
          <img src="${response2.thumbnail}" class="w-100" alt="game emage">
        </figure>
        
        <figcaption class="col-12 col-lg-8 text-white">
          <h2 class="GameTitle fs-1 mb-5">Title: ${response2.title}</h2>
          <h3>category: <span>${category}</span></h3>
          <h3>platform: <span>${response2.platform}</span></h3>
          <h3 class="mb-5">Status: <span>${response2.status}</span></h3>
          <p class="mb-5">${response2.description}</p>
          <a href="${response2.game_url}" class="showGame btn btn-outline-warning fs-2 mb-3" target="_blank">Show Game</a>
        </figcaption>
      </div>
    `;
    gameDetails.innerHTML = DetailsGame;
  
    // console.log(responseDetales);
    let xIcone = document.querySelectorAll(".gameDetails i");
    xIcone.forEach(i => {
      i.addEventListener("click", function() {
        allGames.classList.remove('d-none');
        gameDetails.classList.add('d-none');
        console.log(response2);
        // responseDetales.pop(response2)
      });
    });
  }
}


