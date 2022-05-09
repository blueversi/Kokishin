var blogButton, addedButton, actionsButton, savedButton;

var blogContainer, addedContainer, actionsContainer, savedContainer;

var containers;

var buttons;

window.onload = () => {
  blogButton = document.getElementById('blog-button');
  addedButton = document.getElementById('added-button');
  actionsButton = document.getElementById('actions-button');
  savedButton = document.getElementById('saved-button');

  blogContainer = document.getElementById('blog-container');
  addedContainer = document.getElementById('added-container');
  actionsContainer = document.getElementById('actions-container');
  savedContainer = document.getElementById('saved-container');

  blogButton.addEventListener('click', setBlog);
  addedButton.addEventListener('click', setAdded);
  actionsButton.addEventListener('click', setActions);
  savedButton.addEventListener('click', setSaved);

  containers = [
    blogContainer,
    addedContainer,
    actionsContainer,
    savedContainer,
  ];
  buttons = [blogButton, addedButton, actionsButton, savedButton];
};

const setBlog = () => {
  resetContainers();
  resetButtons();
  blogButton.className = 'active';
  blogContainer.style.display = 'flex';
};
const setAdded = () => {
  resetContainers();
  resetButtons();
  addedButton.className = 'active';
  addedContainer.style.display = 'flex';
};
const setActions = () => {
  resetContainers();
  resetButtons();
  actionsButton.className = 'active';
  actionsContainer.style.display = 'flex';
};
const setSaved = () => {
  resetContainers();
  resetButtons();
  savedButton.className = 'active';
  savedContainer.style.display = 'flex';
};

const resetContainers = () => {
  for (let i = 0; i < containers.length; i++) {
    containers[i].style.display = 'none';
  }
};

const resetButtons = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove('active');
  }
};
