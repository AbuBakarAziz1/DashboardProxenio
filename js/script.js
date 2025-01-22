const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.getElementById('sidebar');
const content = document.getElementById('content');
const overlay = document.getElementById('overlay');

// Open/Close Sidebar
toggleSidebar.addEventListener('click', () => {
  const isCollapsed = sidebar.classList.contains('collapsed');
  sidebar.classList.toggle('collapsed', !isCollapsed);
  sidebar.classList.toggle('show', isCollapsed);
  overlay.classList.toggle('show', isCollapsed);
});

// Close Sidebar when Clicking Outside
overlay.addEventListener('click', () => {
  sidebar.classList.add('collapsed');
  sidebar.classList.remove('show');
  overlay.classList.remove('show');
});

// Ensure Sidebar is Open on Large Screens
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove('collapsed');
    sidebar.classList.add('show');
    overlay.classList.remove('show');
  } else {
    sidebar.classList.add('collapsed');
    sidebar.classList.remove('show');
  }
});