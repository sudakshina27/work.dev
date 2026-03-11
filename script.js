// Sample project data
const projects = [
  {
    title: "Water Reminder App",
    description: "A simple app that reminds users to drink water every hour using browser notifications.",
  },
  {
    title: "Portfolio Website",
    description: "This website showcasing my work, resume, and blog posts.",
  },
];


// Dynamically add projects
const projectList = document.getElementById("project-list");


projects.forEach(project => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
  projectList.appendChild(li);
});