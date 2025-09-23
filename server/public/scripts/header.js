
(function() {
  const header = document.querySelector('header');
  if (!header) return;
  // Prevent duplicate header creation
  if (header.querySelector('.header-container')) return;

  const headerContainer = document.createElement('div');
  headerContainer.className = 'header-container';

  const headerLeft = document.createElement('div');
  headerLeft.className = 'header-left';

  const headerTitle = document.createElement('h1');
  headerTitle.textContent = '🎌My Japan Guide🎌';
  headerLeft.appendChild(headerTitle);

  const headerButton = document.createElement('button');
  headerButton.textContent = 'Home';
  headerButton.className = 'home-btn';
  headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/';
  });

  const headerRight = document.createElement('div');
  headerRight.className = 'header-right';
  headerRight.appendChild(headerButton);

  headerContainer.appendChild(headerLeft);
  headerContainer.appendChild(headerRight);
  header.appendChild(headerContainer);
})();

