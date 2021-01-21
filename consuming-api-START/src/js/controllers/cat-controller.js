import ejs from "ejs";
import catView from "../views/cat-view.js";
import { getCats } from "../models/cats.js";

function getRandomCatImages() {
  // view
  //   const template = `
  //     <aside>
  //         <img src="" alt="" />
  //     </aside>
  // `;
  const data = getCats();

  // combining data & template
  const templates = data.map((item) => {
    const template = ejs.render(catView, { data: item });
    console.log(template);
    // const template = `
    // <aside>
    //     <img src="${item.url}" alt="cat random image" />
    // </aside>
    // `;
    // don't convert to a elem insert DOM adjacentHTML('beforeend', string)
    // interactivity convert the templates to element nodes
    // conversion to elements
    // module createElement(templ) returns array
    const elem = document.createRange().createContextualFragment(template)
      .children[0];
    // add the events to the elm
    return elem;
  });

  return templates;
  // combine the data and the view
}

export { getRandomCatImages };
