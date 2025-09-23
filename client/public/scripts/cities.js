const renderCities = async () => {
    try {
        const response = await fetch('/cities');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '';

        if (Array.isArray(data) && data.length > 0) {
                    data.forEach(city => {
                        const card = document.createElement('article');
                        card.className = 'card';

                        card.innerHTML = `
                        <img src="${city.image}" alt="${city.name}">
                        <h2>${city.name}</h2>
                        <p>${city.description}</p>
                        `;

                        const readMoreLink = document.createElement('a');
                        readMoreLink.textContent = 'Read More >';
                        readMoreLink.href = `/cities/${city.name}`;
                        readMoreLink.setAttribute('role', 'button');
                        readMoreLink.className = 'contrast';
                        card.appendChild(readMoreLink);

                        mainContent.appendChild(card);
                    });
        } else {
            const message = document.createElement('h2');
            message.textContent = 'No Cities Available 😞';
            mainContent.appendChild(message);
        }
    } catch (error) {
        const mainContent = document.getElementById('main-content');
        mainContent.innerHTML = '';
        const message = document.createElement('h2');
        message.textContent = 'Error loading cities 😞';
        mainContent.appendChild(message);
        console.error(error);
    }
};

const validPaths = ['/', '/index.html'];
if (!validPaths.includes(window.location.pathname)) {
  window.location.href = '/404.html';
} else {
  renderCities();
}