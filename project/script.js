function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let toggleButton = document.getElementById("toggle-btn");

    // Toggle the 'active' class on the sidebar
    sidebar.classList.toggle("active");

    // Change the button text depending on the sidebar's state
    if (sidebar.classList.contains("active")) {
        toggleButton.innerHTML = "✖"; // Close icon when sidebar is open
    } else {
        toggleButton.innerHTML = "☰"; // Hamburger icon when sidebar is closed
    }
}
