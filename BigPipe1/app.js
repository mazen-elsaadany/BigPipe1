function addTask() {
    var taskInput = document.getElementById('taskInput').value;
    var taskList = document.getElementById('taskList');
    
    if (taskInput.trim() !== '') {
      var newTask = document.createElement('li');
      newTask.textContent = taskInput;
      taskList.appendChild(newTask);
      document.getElementById('taskInput').value = '';
    }
  }
  