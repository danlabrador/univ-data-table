import renderRow from './renderRow.js';

const filterTable = (delegates, input, tableBody) => {
  const { name, gender, position, ageMin, ageMax } = document.forms[1];
  input.addEventListener('change', ()=>{
    tableBody.innerHTML = '';
    for (let delegate of delegates) {
      let includesName = !delegate.fullName || delegate.fullName.toUpperCase().includes(name.value.toUpperCase());
      let matchesGender = !delegate.gender || delegate.gender.toUpperCase() === gender.value.toUpperCase();
      let matchesPosition = !delegate.position || delegate.position.toUpperCase() === position.value.toUpperCase();
      let withinAgeRange =  (!ageMin.value && !ageMax.value) ||
                            (ageMin.value <= delegate.age && !ageMax.value) ||
                            (!ageMin.value && delegate.age <= ageMax.value) ||
                            (ageMin.value <= delegate.age <= ageMax.value);

      console.log(withinAgeRange)
      if (includesName && matchesGender && matchesPosition && withinAgeRange) {
        const row = document.createElement("tr");
        renderRow(delegate, row);
        tableBody.appendChild(row);
      }
    }
  })
}

const addFilterFunction = (delegates, tableBody) => {
  const { name, gender, position, ageMin, ageMax } = document.forms[1];
  for (let input of document.forms[1]){
    filterTable(delegates, input, tableBody)
  }

}

export default addFilterFunction;