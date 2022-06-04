const description = document.querySelector('.text');
const enter = document.querySelector('.enter');
const list = document.querySelector('.list');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const UI = ({ description, index }) => {
  list.innerHTML += `<li><input id= "${index}" type="checkbox" name="name" >${description}<a id = "${index}" class ="remove" href="#">delete</a>
 <hr> </li>`;
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

document.body.addEventListener('click', (e) => {
  tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  if (e.target.classList.contains('remove')) {
    e.target.parentElement.remove();
    const selectedindex = e.target.id;
    let items = JSON.parse(localStorage.getItem('tasks'));
    items = items.filter((e) => e.index !== Number(selectedindex));
    localStorage.setItem('tasks', JSON.stringify(items));
  } else if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    if (e.target.checked === true) {
      const li = e.target.parentElement;
      const selectedindex = e.target.id;
      tasks[Number(selectedindex)].completed = true;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      li.classList.add('line');
    } else {
      const li = e.target.parentElement;
      const selectedindex = e.target.id;
      tasks[Number(selectedindex)].completed = false;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      li.classList.remove('line');
    }
  }

  const liline1 = document.querySelectorAll('.line');

  for (let i = 0; i < liline1.length; i += 1) {
    if (e.target.classList.contains('clear-btn')) {
      const liline = document.querySelector('.line');
      liline.remove();
      const clearArrray = tasks.filter((Objects) => Objects.completed !== true);

      localStorage.setItem('tasks', JSON.stringify(clearArrray));
    }
  }
});

window.onbeforeunload = () => {
  localStorage.removeItem('tasks');
  return '';
};
