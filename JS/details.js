// class {
//   كل Methode الخاصة ب details section
// }





import { Ui } from "./ui.module";

export class Details {

  constructor() {
    this.ui = new Ui();
    let xIcone = document.querySelectorAll(".gameDetails i");
    xIcone.forEach(i => {
      i.addEventListener("click", function() {
        allGames.classList.remove('d-none');
        gameDetails.classList.add('d-none');
        console.log(response2);
        // responseDetales.pop(response2)
      });

      this.getD
  });
  }
}