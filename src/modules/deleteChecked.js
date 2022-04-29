const deleteChecked = () => {
  function updateId() {
    const task = JSON.parse(localStorage.getItem('plans'));
    task.forEach((a, i) => {
      a.index = i;
      localStorage.setItem('plans', JSON.stringify(task));
    });
  }

  const deleteButton = document.querySelector('.delete_btn');
  const checkbox = document.querySelectorAll('.checked');
  const task = JSON.parse(localStorage.getItem('plans'));
  checkbox.forEach((check, i) => {
    check.addEventListener('click', () => {
      if (task[i].completed === true) {
        task[i].completed = false;
        checkbox[i].checked = false;
        document.getElementById(`theTask${i}`).style.textDecoration = 'none';
        localStorage.setItem('plans', JSON.stringify(task));
        location.reload();
      } else {
        task[i].completed = true;
        checkbox[i].checked = true;
        document.getElementById(`theTask${i}`).style.textDecoration = 'line through rbg(68, 68, 68)';
        localStorage.setItem('plans', JSON.stringify(task));
        location.reload();
      }
    });

    deleteButton.addEventListener('click', () => {
      const filter = task.filter((tache) => tache.completed !== true);
      localStorage.setItem('plans', JSON.stringify(filter));
      location.reload();
      updateId();
    });
  });
};
export default deleteChecked;