import loadMock from "./mock.js";
import addEventListeners from "./addEventListeners.js";
import addFilterFunction from "./filter.js";

const main = () => {
  const tableBody = document.getElementById('table-body');
  const delegates = [];
  loadMock(delegates, tableBody);
  addEventListeners(delegates, tableBody);
  addFilterFunction(delegates, tableBody);
}

main();