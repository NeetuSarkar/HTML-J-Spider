document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addTaskButton = document.getElementById("add-task-btn");
  const todoList = document.getElementById("todo-list");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTasks(task));

  addTaskButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };
    tasks.push(newTask);
    renderTasks(newTask);
    saveTasks();
    todoInput.value = "";
  });

  function renderTasks(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    if (task.completed) li.classList.add("completed");
    li.innerHTML = `<input readonly value="${task.text}"></input>
    <div>
    <button id="edit-btn">Edit</button><button id="delete-btn">delete</button>
    </div>`;
    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector("#delete-btn").addEventListener("click", (e) => {
      e.stopPropagation(); //prevent toggle from firing
      console.log(e.target);
      tasks = tasks.filter((t) => t.id !== task.id);
      li.remove();
      saveTasks();
    });

    let flag = false;

    li.querySelector("#edit-btn").addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent toggle from firing
      const inputField = e.target.parentElement.parentElement.children[0]; 
      if (!flag) {
        flag = true;
        e.target.textContent = "Ok"; 
        inputField.style.backgroundColor = "white";
        inputField.style.color = "black";
        inputField.style.padding = "5px";
        inputField.removeAttribute("readonly"); 
        inputField.focus();
      } else {
        
        flag = false;
        e.target.textContent = "Edit";
        inputField.style.backgroundColor = "inherit";
        inputField.style.color = "white";
        inputField.style.padding = "0px";
        inputField.setAttribute("readonly", true); 
        // Update the task's text in the tasks array
        const taskId = parseInt(
          e.target.parentElement.parentElement.getAttribute("data-id")
        );
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        if (taskIndex > -1) {
          tasks[taskIndex].text = inputField.value.trim();
        }

        saveTasks(); // Save updated tasks to localStorage
      }
    });

    todoList.appendChild(li);
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
