var todoItems = [];

function addItem() {
  var titleInput = document.getElementById('titleInput');
  var dateInput = document.getElementById('dateInput');
  var descriptionInput = document.getElementById('descriptionInput');
  var authorInput = document.getElementById('authorInput');

  var title = titleInput.value;
  var date = dateInput.value;
  var description = descriptionInput.value;
  var author = authorInput.value;

  if (title && date && description && author) {
    var newItem = {
      title: title,
      date: date,
      description: description,
      author: author,
      isNew: true
    };

    todoItems.push(newItem);

    titleInput.value = '';
    dateInput.value = '';
    descriptionInput.value = '';
    authorInput.value = '';

    updateList();
  }
}

function deleteItem(index) {
  todoItems.splice(index, 1);
  updateList();
}

function editItem(index) {
  var item = todoItems[index];
  item.isNew = false;

  var titleInput = document.getElementById('titleInput');
  var dateInput = document.getElementById('dateInput');
  var descriptionInput = document.getElementById('descriptionInput');
  var authorInput = document.getElementById('authorInput');

  titleInput.value = item.title;
  dateInput.value = item.date;
  descriptionInput.value = item.description;
  authorInput.value = item.author;

  deleteItem(index);
}

function updateList() {
  var todoList = document.getElementById('todoList');
  todoList.innerHTML = '';

  for (var i = 0; i < todoItems.length; i++) {
    var item = todoItems[i];

    var listItem = document.createElement('div');
    listItem.classList.add('item');
    if (item.isNew) {
      listItem.classList.add('new');
    }

    var newTag = document.createElement('span');
    newTag.textContent = 'New';
    newTag.classList.add('new-tag');
    listItem.appendChild(newTag);

    var titleElement = document.createElement('h3');
    titleElement.textContent = item.title;

    var dateElement = document.createElement('p');
    dateElement.innerHTML = '<strong>Date:</strong> ' + formatDate(item.date);

    var descriptionElement = document.createElement('p');
    descriptionElement.innerHTML = '<strong>Description:</strong> ' + item.description;

    var authorElement = document.createElement('p');
    authorElement.innerHTML = '<strong>Author:</strong> ' + item.author;

    var editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', editItem.bind(null, i));

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteItem.bind(null, i));

    listItem.appendChild(titleElement);
    listItem.appendChild(dateElement);
    listItem.appendChild(descriptionElement);
    listItem.appendChild(authorElement);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    todoList.appendChild(listItem);
  }
}

function formatDate(dateString) {
  var date = new Date(dateString);
  var options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function validateDate() {
  var dateInput = document.getElementById('dateInput');
  var dateValue = dateInput.value;

  var currentDate = new Date();
  var selectedDate = new Date(dateValue);

  if (selectedDate < currentDate) {
    alert('The selected date must be later than the current date.');
    dateInput.value = '';
  }
}

