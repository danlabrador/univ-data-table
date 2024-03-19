import loadMock from "./mock.js";
import addEventListeners from "./addEventListeners.js";

const main = () => {
  const tableBody = document.getElementById('table-body');
  const delegates = [];
  loadMock(delegates, tableBody);
  addEventListeners(delegates, tableBody);
}

main();