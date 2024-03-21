/**
 * This file is used to load mock data into the table.
 * 
 * @module scripts/mock
 * @requires scripts/renderRow
 * 
 * @param {Array} delegates - The array of delegate objects to be filtered.
 * @param {HTMLTableSectionElement} tableBody - The table body element to append the rows to.
 * 
 */

import renderRow from './renderRow.js';

const MOCK_DATA = [
  {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    age: 18,
    position: 'Student',
    fullName: 'John Doe'
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    gender: 'Female',
    age: 19,
    position: 'Student',
    fullName: 'Jane Smith'
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    gender: 'Male',
    age: 35,
    position: 'Teacher',
    fullName: 'Michael Johnson'
  },
  {
    firstName: 'Sarah',
    lastName: 'Williams',
    gender: 'Female',
    age: 28,
    position: 'Teacher',
    fullName: 'Sarah Williams'
  },
  {
    firstName: 'David',
    lastName: 'Brown',
    gender: 'Male',
    age: 42,
    position: 'Teacher',
    fullName: 'David Brown'
  }
];

const loadMock = (delegates, tableBody) => {
  delegates.push(...MOCK_DATA);
  for (let data of delegates) {
    const row = document.createElement('tr');
    renderRow(data, row);
    tableBody.appendChild(row);
  }
}

export default loadMock;