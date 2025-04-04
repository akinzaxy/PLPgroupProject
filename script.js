// Example of a simple dynamic project display
const projects = [
    {
        title: 'Project 1',
        description: 'A fun web application I built.',
        link: 'https://example.com/project1'
    },
    {
        title: 'Project 2',
        description: 'A responsive design project.',
        link: 'https://example.com/project2'
    }
];

const projectList = document.getElementById('project-list');

projects.forEach(project => {
    const projectItem = document.createElement('div');
    projectItem.classList.add('project');

    projectItem.innerHTML = `
        <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
        <p>${project.description}</p>
    `;

    projectList.appendChild(projectItem);
});

// Handle the contact form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Message sent:', { name, email, message });
});

// NEW JS CODE

// Handle the contact form submission with basic validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        console.log('Message sent:', { name, email, message });
        alert('Your message has been sent!');
    } else {
        alert('Please fill in all the fields!');
    }
});
