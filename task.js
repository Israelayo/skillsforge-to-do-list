document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const taskTitle = params.get("title");
  const taskStatus =
    params.get("completed") === "true" ? "Completed" : "Incomplete";
  const taskUser = params.get("userId") || "Unknown";

  document.getElementById("taskTitle").textContent = taskTitle;
  document.getElementById("taskStatus").textContent = taskStatus;
  document.getElementById("taskUser").textContent = `User ${taskUser}`;
});
