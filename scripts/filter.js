/**
 * Handles the filter functionality of the table
 * @module scripts/filter
 * 
 * @param {Array} delegates - The array of delegate objects to be filtered.
 * @param {HTMLTableSectionElement} tableBody - The table body element to append the rows to.
 * @param {HTMLInputElement} input - The input element to add event listeners to.
 * @param {HTMLFormElement} form - The form element to add an event listener to.
 */

import renderRow from './renderRow.js';

// Updates the table based on the filter inputs
const handleUpdate = (delegates, tableBody) => {
  const { name, gender, position, ageMin, ageMax } = document.forms[1];
  tableBody.innerHTML = '';

  // Filters the delegates based on the filter inputs
  for (let delegate of delegates) {
    let includesName = !name.value || delegate.fullName.toUpperCase().includes(name.value.toUpperCase());
    let matchesGender = !gender.value || delegate.gender.toUpperCase() === gender.value.toUpperCase();
    let matchesPosition = !position.value || delegate.position.toUpperCase() === position.value.toUpperCase();
    let withinAgeRange = (!ageMin.value && !ageMax.value) || // if no age range is specified  
      (ageMin.value && !ageMax.value && ageMin.value <= delegate.age) || // if only min age is specified
      (!ageMin.value && ageMax.value && delegate.age <= ageMax.value) || // if only max age is specified
      (ageMin.value && ageMax.value && ageMin.value <= delegate.age && delegate.age <= ageMax.value); // if both min and max age are specified
  
    // If the delegate passes all the filters, render the row
    if (includesName && matchesGender && matchesPosition && withinAgeRange) {
      const row = document.createElement("tr");
      renderRow(delegate, row);
      tableBody.appendChild(row);
    }
  }
}

// Adds event listeners to the filter input and calls handleUpdate
const filterTable = (delegates, input, tableBody) => {
  input.addEventListener('change', () => {handleUpdate(delegates, tableBody)})
  input.addEventListener('keyup', () => {handleUpdate(delegates, tableBody)})
}

// Adds event listeners to all the filter inputs
const addFilterFunction = (delegates, tableBody) => {
  // Adds event listeners to all the filter inputs
  for (let input of document.forms[1]) {
    filterTable(delegates, input, tableBody)
  }

  // Adds event listener to the clear button
  document.getElementById('clear-btn').addEventListener('click', (event) => {
    event.preventDefault();
    document.forms[1].reset();
    handleUpdate(delegates, tableBody);
  })
}

export default addFilterFunction;