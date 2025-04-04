// Mock Database (projects.js)

// Array of project objects, each containing data about a project.
const projects = [
    {
        id: 1,
        title: 'Task Tracker App',
        description: 'A responsive web app that allows users to track their tasks effectively.',
        link: 'https://example.com/project1', // Replace with your actual deployed link
        image: 'assets/project1.jpg', // Add your image URL here
    },
    {
        id: 2,
        title: 'Personal Portfolio',
        description: 'A portfolio website built with HTML, CSS, and JavaScript to showcase my work.',
        link: 'https://example.com/project2', // Replace with your actual deployed link
        image: 'assets/project2.jpg', // Add your image URL here
    }
];

// Function to "fetch" project data
function fetchProjects() {
    return new Promise((resolve, reject) => {
        // Simulating a delay as if it was a real database fetch (e.g., fetching from Firebase or an API)
        setTimeout(() => {
            resolve(projects); // Return the project array
        }, 1000); // 1-second delay to simulate an async call
    });
}

// Call this function in index.html to load the data dynamically
