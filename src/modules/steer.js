export default lineThrough;

function lineThrough() {
  const steerLine = JSON.parse(localStorage.getItem('plans'));

  steerLine.forEach((a, i) => {
    const checkbox = document.querySelectorAll('.checked');
    if (a.completed === true) {
      checkbox[i].checked = true;
      document.getElementById(`theTask${i}`).style.textDecoration = 'line-through rgb(68, 68, 68)';
      document.getElementById(`theTask${i}`).style.fontStyle = 'italic';
    }
  });
}