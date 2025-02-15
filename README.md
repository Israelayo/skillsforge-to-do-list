# To-Do List Web App

This is a simple To-Do List web application that allows users to add tasks, mark them as complete, delete them, and filter tasks based on their status. It also includes dark mode and a task details page.

---

## Features
✅ Add new tasks  
✅ Mark tasks as completed (✅ checkbox and strikethrough effect)  
✅ Delete tasks  
✅ Filter tasks (All, Completed, Incomplete)  
✅ Dark mode toggle (works across all pages)  
✅ Task details page  
✅ Data persistence using LocalStorage  
✅ API integration (preloading sample tasks)  

---

## Live Demo
[Click here to view the live demo](https://skillsforge-to-do-list.netlify.app/) 

---

## Installation & Setup
Follow these steps to run the project on your local machine:

### 1. Clone the Repository
If you haven’t already cloned the repository, open your terminal (or Git Bash) and run:

```sh
git clone <repository-url>

### 2. Navigate into the Project Folder

cd <your-project-folder>

### 3. Open the Project in a Code Editor

Open the folder in VS Code or any preferred editor.

### 4. Open in a Web Browser

Since this is a frontend-only project, simply open index.html in your browser:
	•	Locate index.html in the project folder.
	•	Right-click and select copy path and paste it into your browser.
	•	Alternatively, you can right-click the file and select “Open with” → Chrome/Firefox/Edge.

#### File Structure

📁 to-do-app/
│── 📄 index.html          # Home page (Task list)
│── 📄 task.html           # Task details page
│── 📄 style.css           # Main CSS file
│── 📄 script.js           # Main JavaScript file (handles task operations)
│── 📄 task.js             # JavaScript file for task details page
│── 📄 darkmode.js         # JavaScript file for dark mode (applies across all pages)
│── 📄 README.md           # Project documentation


#### How to Use the App
	1.	Adding a Task:
	•	Enter a task in the input field and click “Add Task”.
	2.	Marking a Task as Completed:
	•	Click on a task's checkbox ✅ to toggle completion (strikethrough effect).
	3.	Deleting a Task:
	•	Click the "X" button next to a task to remove it.
	4.	Filtering Tasks:
	•	Click All to show all tasks.
	•	Click Completed to show only completed tasks.
	•	Click Incomplete to show only pending tasks.
	5.	Dark Mode Toggle:
	•	Click the 🌙 Dark Mode button to switch themes (works across pages).
	6.	Viewing Task Details:
	•	Click on a task to see its details on a new page.

#### Troubleshooting
	•	If the app doesn’t load properly, try refreshing the page.
	•	If tasks do not persist, make sure LocalStorage is enabled in your browser settings.
	•	If the API is down, tasks may not preload (you can manually add tasks instead).
	•	If dark mode doesn’t persist across pages, make sure darkmode.js is properly linked in all HTML files.

#### Contributing

Feel free to fork this repository, create a feature branch, and submit a pull request.

#### License

This project is open-source and available for personal or educational use.



