/**
 * Creates a new delegate object, adds it to the delegates array,
 * and renders a new row in the table.
 * 
 * @module scripts/addEventListeners
 * 
 * @param {Array} delegates - The array of delegate objects to be filtered.
 * @param {HTMLTableSectionElement} tableBody - The table body element to append the rows to.
 */

import renderRow from './renderRow.js';

const addEventListeners = (delegates, tableBody) => {
  const form = document.getElementsByClassName("form")[0];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const row = document.createElement("tr");

    const delegate = {};
    delegate.firstName = form.firstName.value;
    delegate.lastName = form.lastName.value;

    switch (form.gender.value) {
      case 'male':
        delegate.gender = 'Male';
        break;
      case 'female':
        delegate.gender = 'Female';
        break;
    }

    delegate.age = form.age.value;

    switch (form.position.value) {
      case 'teacher':
        delegate.position = 'Teacher';
        break;
      case 'student':
        delegate.position = 'Student';
        break;
    }

    delegate.fullName = `${delegate.firstName} ${delegate.lastName}`;

    delegates.push(delegate);

    renderRow(delegate, row);
    tableBody.appendChild(row);
    form.reset();
  });
}

export default addEventListeners;