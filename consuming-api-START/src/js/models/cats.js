let store = [];
let once;

// update only once
function setCats(data) {
  if (once === undefined) {
    store = [...data];
    once = true;
  }
}

// granting access to update data model
function updateCats(data) {
  once = undefined;
  setCats(data);
}

function getCats() {
  return store;
}

export { setCats, getCats, updateCats };

/* 
alternative style for writing models

objects

most data in JavaScript are objects
*/

// // ES Module Code
// const catModel = {
//   isDownloaded: true,
//   store: [],
//   setCats: (data) => {
//     // "this" refers to the scope of the two outer braces
//     this.store = [...data];
//   },
//   getCats: () => this.store,
// };

// export default catModel;

// // application code (not part of this file)
// const newThing = new catModel();
// newThing.setData(data);

// // arrow functions don't have access to the keyword "this"
