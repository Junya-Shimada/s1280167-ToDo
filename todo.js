const add_Button = document.getElementsByClassName('addButton')[0];
const task_List = document.getElementsByClassName('taskList')[0];
const task_Name = document.getElementsByClassName('taskName')[0];


const event = () => {
  const task = task_Name.value;
  addTask(task + " ");
};

const removeTask = removeButton => {
  const targetTask = removeButton.closest('li');
	task_List.removeChild(targetTask);
};

const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Delete';
  removeButton.addEventListener('click', () => removeTask(removeButton));
  listItem.innerText = task;
  listItem.append(removeButton);
  task_List.appendChild(listItem);
};

add_Button.addEventListener('click', event);