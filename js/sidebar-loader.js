// js/sidebar-loader.js
fetch('sidebar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('sidebar-container').innerHTML = data;

    // Highlight current page nav link
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';

    const links = document.querySelectorAll('#sidebar-container .nav-link');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });