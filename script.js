function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

function loadTheme() {
    const isDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = '☀️';
    }
}

    document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
    window.addEventListener('load', loadTheme);