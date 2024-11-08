// app.js
document.addEventListener('DOMContentLoaded', () => {
    const infoContainer = document.getElementById('info-container');

    // Create name and description elements
    const nameElement = document.createElement('h1');
    nameElement.textContent = 'Victor Cercado';
    
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = 'Economista \n Apasionado por la tecnología';
    descriptionElement.style.whiteSpace = 'pre-line'; // To support \n as line break

    // Append elements to the info container
    infoContainer.appendChild(nameElement);
    infoContainer.appendChild(descriptionElement);
});