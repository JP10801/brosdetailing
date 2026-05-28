/* STARS */

const stars =
  document.getElementById('stars');

const starCount =
  window.innerWidth < 768
    ? 50
    : 100;

for(let i = 0; i < starCount; i++){

  const star =
    document.createElement('div');

  star.classList.add('star');

  star.style.left =
    Math.random() * 100 + '%';

  star.style.top =
    Math.random() * 100 + '%';

  star.style.opacity =
    Math.random();

  star.style.animationDelay =
    Math.random() * 5 + 's';

  stars.appendChild(star);

}

/* MOBILE MENU */

const menuBtn =
  document.getElementById('menuBtn');

const mobileMenu =
  document.getElementById('mobileMenu');

if(menuBtn){

  menuBtn.addEventListener('click', () => {

    mobileMenu.classList.toggle('active');

  });

}
