/* 

REQUIRED CAT API KEY:
request https://thecatapi.com/signup

REQUIRED INSTALL
download: https://www.postman.com/downloads/


 App Start Up 
   1 Get data needed for initial display
      - save data as models on the client
      - try to minimize number of request wherever possible
      - caching requests
   2 Create the views required for initial display
      - nav
      - page header
      - main content body
   3 Add views to display

*/

import { getImagesRequest } from "./fetch/get-request.js";
import { getRandomCatImages } from "./controllers/cat-controller.js";
import { setCats } from "./models/cats.js";

window.addEventListener("load", (e) => {
  const request = getImagesRequest(
    "https://api.thecatapi.com/v1/images/search?limit=10"
  );

  request.then((data) => {
    setCats(data);
    const cats = getRandomCatImages();
    const catDisplay = document.querySelector(".cat-display");
    cats.forEach((item) => {
      catDisplay.append(item);
    });
  });
});
