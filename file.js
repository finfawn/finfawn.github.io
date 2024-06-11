const handleScroll = () => {
    const navbar = document.querySelector('header');
    const hero = document.querySelector('.hero');
    const logoImg = document.querySelector('.logo img');
    if (window.scrollY > 70) {
        navbar.classList.add('scrolled');
        hero.classList.add('scrolled');
        logoImg.src = 'assets/logo-s.png'; // replace with the new logo image
        logoImg.classList.add('transition'); // add a class to trigger the transition
    } else {
        navbar.classList.remove('scrolled');
        hero.classList.remove('scrolled');
        logoImg.src = 'assets/logo.png'; // replace with the original logo image
        logoImg.classList.add('transition'); // add a class to trigger the transition
    }
};
window.addEventListener('scroll', handleScroll);