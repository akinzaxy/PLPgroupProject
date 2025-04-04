// script.js: Handling dynamic data rendering and form validation

// Dynamic loading of project data
document.addEventListener('DOMContentLoaded', function () {
    fetchProjects().then(projects => {
        const projectContainer = document.querySelector('.project-grid');

        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.classList.add('project');
            
            projectElement.innerHTML = `
                <img src="${project.image}" alt="${project.title}">
                <div class="project-info">
                    <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
                    <p>${project.description}</p>
                </div>
            `;
            
            projectContainer.appendChild(projectElement);
        });
    }).catch(error => {
        console.error("Error fetching project data:", error);
    });

    // Form validation for contact form
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from submitting

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields');
        } else {
            alert('Message Sent!');
            form.reset();
        }
    });
});
