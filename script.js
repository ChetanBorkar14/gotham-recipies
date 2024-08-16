function toggleTheme() {
  const themeToggleCheckbox = document.getElementById("theme-toggle-checkbox");
  if (themeToggleCheckbox.checked) {
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark"); // Save preference in localStorage
  } else {
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light"); // Save preference in localStorage
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("theme-toggle-checkbox").checked = true;
  } else {
    document.body.classList.remove("dark-theme");
    document.getElementById("theme-toggle-checkbox").checked = false;
  }
}

// Load the saved theme preference when the page loads
document.addEventListener("DOMContentLoaded", loadTheme);

// Add event listener to toggle switch
document
  .getElementById("theme-toggle-checkbox")
  .addEventListener("change", toggleTheme);

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.querySelector("#theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "light-theme";

  // Apply saved theme
  document.body.classList.add(savedTheme);

  // Set the switch position based on the saved theme
  if (savedTheme === "dark-theme") {
    themeToggle.checked = true;
  }

  // Listen for toggle changes
  themeToggle.addEventListener("change", () => {
    const newTheme = themeToggle.checked ? "dark-theme" : "light-theme";
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
