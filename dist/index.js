const description = document.querySelector('.text');
const enter = document.querySelector('.enter');
const list = document.querySelector('.list');
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const UI = ({ description, index }) => {
  list.innerHTML += `<li><input type="checkbox" name="name" >${description}<a id = "${index}" class ="remove" href="#">delete</a>
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
  if (e.target.classList.contains('remove')) {
    e.target.parentElement.remove();
    const selectedindex = e.target.id;
    let items = JSON.parse(localStorage.getItem('tasks'));
    items = items.filter((e) => e.index !== Number(selectedindex));
    localStorage.setItem('tasks', JSON.stringify(items));
  } else if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    if (e.target.checked === true) {
      const li = e.target.parentElement;
      li.classList.add('line');
    } else {
      const li = e.target.parentElement;
      li.classList.remove('line');
    }
  }

  const liline1 = document.querySelectorAll('.line');

  for (let i = 0; i < liline1.length; i += 1) {
    if (e.target.classList.contains('clear-btn')) {
      console.log(list.children);
      const liline = document.querySelector('.line');
      liline.remove();
    }
  }
});

window.onbeforeunload = () => {
  localStorage.removeItem('tasks');
  return '';
};
