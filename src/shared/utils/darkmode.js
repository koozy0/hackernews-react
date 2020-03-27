const getPreferredColorScheme = () => {
  if (!window.matchMedia) {
    return;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const getInitialDarkMode = () => {
  const isReturningUser = 'hackernews-darkmode' in localStorage;
  const savedMode = JSON.parse(localStorage.getItem('hackernews-darkmode'));
  const userPrefersDarkMode = getPreferredColorScheme();
  return isReturningUser ? savedMode : userPrefersDarkMode ? true : false;
};
