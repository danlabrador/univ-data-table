/**
 * Main file for the application
 * 
 * This file is responsible for loading the mock data, adding event listeners and filter function
 * to the table.
 * 
 * @module scripts/index
 * 
 * @requires scripts/mock
 * @requires scripts/addEventListeners
 * @requires scripts/filter
 */

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