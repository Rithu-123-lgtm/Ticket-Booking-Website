// Active nav link on scroll
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section');
      const navLinks = document.querySelectorAll('.nav-links a');
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 95;
        if (pageYOffset >= sectionTop) current = section.getAttribute('id');
      });
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) link.classList.add('active');
      });
    });
    // Close menu on link click (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        document.getElementById('menu-toggle').checked = false;
      });
    });

    // Smooth fade-in on scroll for sections
    function animateOnScroll() {
      document.querySelectorAll('.animate-fade-up').forEach(function(el){
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight-80) {
          el.classList.add('in-view');
        }
      });
    }
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('DOMContentLoaded', animateOnScroll);

    // Scroll to top arrow
    const scrollArrow = document.getElementById('scrollTopArrow');
    scrollArrow.addEventListener('click', function() {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
    scrollArrow.addEventListener('keydown', function(e) {
      if(e.key === 'Enter' || e.key === ' ') {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    });
    // Show/hide scroll arrow
    function toggleArrow() {
      if(window.scrollY > 200) {
        scrollArrow.style.display = 'flex';
      } else {
        scrollArrow.style.display = 'none';
      }
    }
    window.addEventListener('scroll', toggleArrow);
    window.addEventListener('DOMContentLoaded', toggleArrow);