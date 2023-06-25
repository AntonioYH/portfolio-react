const returnColor = (navigation, darkMode) => {
  if (navigation && darkMode === 'light') return 'white';
  else if (!navigation && darkMode === 'dark') return 'white';
  else if (navigation && darkMode === 'dark') return 'white';
};

export default returnColor;
