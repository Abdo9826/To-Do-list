const tasks = [
    {
      description: 'wash the dishes',
      completed: true,
      index: 1,
    },
    {
      description: 'complete to do list',
      completed: true,
      index: 2,
    },
  ];

  const Mainpage = tasks.map((section) => `
  <li><input type="checkbox" name="name" >${section.description}<a class ="svg" href="#"><img src="svg.PNG" alt=""></a>
  <hr></li>`).join('');

const list = document.querySelector('.list');
list.innerHTML += Mainpage;