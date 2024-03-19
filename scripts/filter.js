import renderRow from './renderRow.js';

const addFilterFunction = (delegates, tableBody) => {
  const filterBtn = document.getElementById('filter-btn');
  filterBtn.addEventListener('click', (event) => {
    const { name, gender, position, ageMin, ageMax } = document.forms[1];
    console.log(name.value)
    event.preventDefault();
    tableBody.innerHTML = '';
    for (let delegate of delegates) {
      if (delegate.fullName.toUpperCase().includes(name.value.toUpperCase())) {
        const row = document.createElement("tr");
        renderRow(delegate, row);
        tableBody.appendChild(row);
      }
    }
  })
}

export default addFilterFunction;