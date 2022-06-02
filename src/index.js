const description = document.querySelector('.text');
const enter = document.querySelector('.enter');
const list = document.querySelector('.list');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const UI = ({ description, index }) => {
  list.innerHTML += `<li><input type="checkbox" name="name" >${description}<a id = "${index}" class ="remove" href="#">delete</a>
  <hr></li>`;
};

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

enter.addEventListener('click', (e) => {
  if (description.value === '') {
    alert('Kindly write your todos');
    return;
  }
  e.preventDefault();
  const number = tasks.length;
  const newtask = new Task(description.value, false, number);
  tasks.push(newtask);
  UI(newtask);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  description.value = '';
});

list.addEventListener('click', (e) => {
  e.preventDefault();
  e.target.parentElement.remove();
  const selectedindex = e.target.id;
  let items = JSON.parse(localStorage.getItem('tasks'));
  items = items.filter((e) => e.index !== Number(selectedindex));
  localStorage.setItem('tasks', JSON.stringify(items));
});

window.onbeforeunload = () => {
  localStorage.removeItem('tasks');
  return '';
};
