const tableBody = document.getElementsByClassName("table__body")[0];
const students = [
  { name: "John", gender: "Male", course: "Computer Science" },
  { name: "Jane", gender: "Female", course: "Mathematics" },
  { name: "David", gender: "Male", course: "Physics" },
  { name: "Emily", gender: "Female", course: "Chemistry" },
  { name: "Michael", gender: "Male", course: "Biology" },
  { name: "Sarah", gender: "Female", course: "English" },
  { name: "Daniel", gender: "Male", course: "History" },
  { name: "Olivia", gender: "Female", course: "Geography" },
  { name: "Matthew", gender: "Male", course: "Economics" },
  { name: "Sophia", gender: "Female", course: "Psychology" }
];

/**
 * Renders a row in a table with student data and an action button.
 * @param {Object} student - The student object containing the data to be rendered.
 * @param {HTMLTableRowElement} row - The table row element to append the cells to.
 */
const renderRow = (student, row) => {
  const cellClassNames = 'table__cell border p-3';

  for (let field in student) {
    const cell = document.createElement('td');
    cell.textContent = student[field];
    cell.className = cellClassNames;
    row.appendChild(cell);
  }

  const actionCell = document.createElement('td');
  actionCell.className = cellClassNames;
  actionCell.style.textAlign = 'center';

  const actionBtn = document.createElement('button');
  actionBtn.className = 'bg-blue-500 rounded-md py-1 px-3 text-white';
  actionBtn.textContent = 'View';
  actionBtn.addEventListener('click', () => {
    const selected = document.getElementById('data-selected');
    selected.textContent = `${student.name} (${student.gender}) of the ${student.course} department`;
  })
  actionCell.appendChild(actionBtn);

  row.appendChild(actionCell);

}

/**
 * Handles the form submission event.
 */
const handleSubmit = () => {
  const form = document.getElementsByClassName("form")[0];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const row = document.createElement("tr");

    const student = {};
    student.name = form.name.value;

    switch (form.gender.value) {
      case 'male':
        student.gender = 'Male';
        break;
      case 'female':
        student.gender = 'Female';
        break;
    }

    switch (form.course.value) {
      case 'cs':
        student.course = 'Computer Science';
        break;
      case 'ds':
        student.course = 'Data Science';
        break;
      case 'is':
        student.course = 'Information Systems';
        break;
      case 'it':
        student.course = 'Information Technology';
        break;
    }

    students.push(student);
    renderRow(student, row);
    tableBody.appendChild(row);
    form.reset();
  });
}
const handleFilter = () => {
  const filterBox = document.getElementById('filter');

  filterBox.addEventListener('keyup', (event) => {
    const query = event.target.value;

    tableBody.innerHTML = '';
    for (let student of students) {
      if (
        student.name.toUpperCase().includes(query.toUpperCase()) ||
        (student.gender.toUpperCase().includes(query.toUpperCase()) && query.toUpperCase()[0] === student.gender.toUpperCase()[0]) ||
        student.course.toUpperCase().includes(query.toUpperCase())
      ) {
        const row = document.createElement("tr");
        renderRow(student, row);
        tableBody.appendChild(row);
      }
    }
  })
}


/**
 * Function that is called when the page is loaded.
 */
const onLoad = () => {
  for (let student of students) {
    const row = document.createElement("tr");
    renderRow(student, row)
    tableBody.appendChild(row);
  }

  handleSubmit();
  handleFilter();
}


onLoad();