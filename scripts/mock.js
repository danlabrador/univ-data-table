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