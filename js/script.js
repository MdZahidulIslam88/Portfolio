
let typed = new Typed('.home-text44',{
  strings: ['web designer!','web developer!'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 2000,
  loop: true,
});







  // Get the current URL path (e.g., 'About.html')
  const currentPage = window.location.pathname.split("/").pop();

  // Get all nav links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    // Compare href with current page
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active'); // remove active from others
    }
  });
