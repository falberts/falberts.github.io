function initScrollTo() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
    
          const targetId = this.getAttribute('href').substring(1);
          const target = document.getElementById(targetId);
    
          if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
    
            history.pushState("", document.title, window.location.pathname);
          }
        });
      });
}
