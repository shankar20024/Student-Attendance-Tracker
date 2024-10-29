function markAttendance() {
  const name = document.getElementById('student-name').value;
  if (name) {
    const list = document.getElementById('attendance-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${name} - Present`;
    list.appendChild(listItem);
    document.getElementById('student-name').value = '';
  } else {
    alert('Please enter a student name.');
  }
}
