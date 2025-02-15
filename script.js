document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const showAll = document.getElementById("showAll");
  const showCompleted = document.getElementById("showCompleted");
  const showIncomplete = document.getElementById("showIncomplete");
  const darkModeToggle = document.getElementById("darkModeToggle");

  const API_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";

  // Fetch tasks from API
  async function fetchTasks() {
    try {
      const response = await fetch(API_URL);
      const tasks = await response.json();
      tasks.forEach((task) => createTaskElement(task));
    } catch (error) {
      console.error("Error fetching tasks:", error);
      alert("Failed to load tasks from API.");
    }
  }

  // Save tasks to local storage
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll("li").forEach((task) => {
      tasks.push({
        text: task.dataset.title,
        completed: task.classList.contains("completed"),
        id: task.dataset.id,
        userId: task.dataset.userId,
      });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Create task element with a clickable link
  function createTaskElement(task) {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.dataset.title = task.title;
    li.dataset.userId = task.userId;
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
            <a href="task.html?title=${encodeURIComponent(
              task.title
            )}&completed=${task.completed}&userId=${task.userId}">
                ${task.title} (User ${task.userId})
            </a>
            <button class="delete-task">X</button>
        `;

    li.querySelector(".delete-task").addEventListener(
      "click",
      function (event) {
        event.stopPropagation();
        li.remove();
        saveTasks();
      }
    );

    taskList.appendChild(li);
  }

  // Add new task
  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task!");
      return;
    }
    createTaskElement({
      title: taskText,
      completed: false,
      id: Date.now(),
      userId: "User",
    });
    saveTasks();
    taskInput.value = "";
  });

  // Filtering tasks
  function filterTasks(filter) {
    document.querySelectorAll("li").forEach((task) => {
      if (filter === "all") {
        task.style.display = "flex";
      } else if (filter === "completed") {
        task.style.display = task.classList.contains("completed")
          ? "flex"
          : "none";
      } else if (filter === "incomplete") {
        task.style.display = task.classList.contains("completed")
          ? "none"
          : "flex";
      }
    });
  }

  showAll.addEventListener("click", () => filterTasks("all"));
  showCompleted.addEventListener("click", () => filterTasks("completed"));
  showIncomplete.addEventListener("click", () => filterTasks("incomplete"));

  fetchTasks();
});
