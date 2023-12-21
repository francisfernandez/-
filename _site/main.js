const domReady = () => {
  const navlinks = document.querySelectorAll('nav a');
  const io = new IntersectionObserver(
    (entries) => {
      const intersecting = entries.find((entry) => entry.isIntersecting);
      if (intersecting) {
        const handle = intersecting.target.firstElementChild.id;
        const currentNav = document.querySelector(`nav a[href="#${handle}"]`);
        if (!currentNav) return;
        navlinks.forEach(link => link.classList.remove('active'));
        currentNav.classList.add('active');
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    }
  );

  const targets = document.querySelectorAll('.scroll-targets');
  for (const target of targets) {
    io.observe(target)
  }
}

document.addEventListener('DOMContentLoaded', domReady);