
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: 'Project 1', description: 'This is project 1.' },
        { name: 'Project 2', description: 'This is project 2.' },
        { name: 'Project 3', description: 'This is project 3.' },
        // Add more projects as needed
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'card';
        projectDiv.innerHTML = `
            <h3 class="text-xl">${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectDiv);
    });
});
