const setDefaultSystemTheme = (setDarkMode) => {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) &&  window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
    setDarkMode("dark")
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
    setDarkMode("light")
  }
};

export default setDefaultSystemTheme;
