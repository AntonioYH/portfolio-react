const toggleMode = (darkMode, setDarkMode) => {
  const currentTheme = localStorage.theme;

  if (currentTheme === 'light' && darkMode === 'light') {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    setDarkMode('dark');
  } else if (currentTheme === 'dark' && darkMode === 'dark') {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    setDarkMode('light');
  }
};

export default toggleMode;
