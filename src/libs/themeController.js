const themeController = () => {
  // Always ensure dark mode is enabled
  const html = document.querySelector("html");
  if (html) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};

export default themeController;
