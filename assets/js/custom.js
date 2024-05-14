document.getElementById("year").innerHTML = new Date().getFullYear();

// Add the active class to the current page link
(function () {
  const navLinks = document.querySelectorAll('nav a.nav-link');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const linkUrl = link.href.split('/').pop();

    if (linkUrl === currentPath.split('/').pop()) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
})();