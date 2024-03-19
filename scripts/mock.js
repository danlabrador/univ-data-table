import renderRow from './renderRow.js';

const MOCK_DATA = [
  {
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    age: 18,
    position: 'Student'
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    gender: 'Female',
    age: 19,
    position: 'Student'
  },
  {
    firstName: 'Michael',
    lastName: 'Johnson',
    gender: 'Male',
    age: 35,
    position: 'Teacher'
  },
];

const loadMock = () => {
  const tableBody = document.getElementById('table-body');
  for (let data of MOCK_DATA) {
    const row = document.createElement('tr');
    renderRow(data, row);
    tableBody.appendChild(row);
  }
}

export default loadMock;