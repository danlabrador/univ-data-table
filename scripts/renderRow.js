/**
 * Renders a row in a table with student data and an action button.
 * @param {Object} student - The student object containing the data to be rendered.
 * @param {HTMLTableRowElement} row - The table row element to append the cells to.
 */

const renderRow = (student, row) => {
  const cellClassNames = 'table__cell border p-3';
  let fullNameArr = [];

  for (let field in student) {
    const cell = document.createElement('td');

    // If the field is either firstName or lastName, add the value to the fullNameArr array
    if (field === 'firstName' || field === 'lastName') {
      fullNameArr.push(student[field]);
    }

    // Render name only after lastName is added to fullNameArr
    if (field === 'firstName') {
      continue;
    }

    // Add full name to the cell and append it to the row
    if (field === 'lastName') {
      cell.textContent = fullNameArr.join(' ');
      cell.className = cellClassNames;
      row.appendChild(cell);
      continue;
    }

    cell.textContent = student[field];
    cell.className = cellClassNames;
    row.appendChild(cell);
  }
}

export default renderRow;