// JSL02 Task Entry and Status Validation System

// Function to prompt for task status and ensure it's valid
function getValidStatus(taskNumber) {
  let status;
  const validStatuses = ["todo", "doing", "done"];

  do {
    status = prompt(`Enter status for Task ${taskNumber} (todo / doing / done):`).toLowerCase();
    if (!validStatuses.includes(status)) {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    }
  } while (!validStatuses.includes(status));

  return status;
}

// Prompt user for Task 1 information
const task1Title = prompt("Enter title for Task 1:");
const task1Description = prompt("Enter description for Task 1:");
const task1Status = getValidStatus(1);

// Prompt user for Task 2 information
const task2Title = prompt("Enter title for Task 2:");
const task2Description = prompt("Enter description for Task 2:");
const task2Status = getValidStatus(2);

// Store tasks in an array for easy management
const tasks = [
  { title: task1Title, description: task1Description, status: task1Status },
  { title: task2Title, description: task2Description, status: task2Status },
];

// Filter tasks with status "done"
const completedTasks = tasks.filter(task => task.status === "done");

// Output results to the console
if (completedTasks.length > 0) {
  console.log("Completed Tasks:");
  completedTasks.forEach(task => {
    console.log(`Title: "${task.title}" Status: "${task.status}"`);
  });
} else {
  console.log("No tasks completed, let's get to work!");
}
