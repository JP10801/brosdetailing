const stars = document.getElementById('stars');

for(let i = 0; i < 120; i++){

  const star = document.createElement('div');

  star.classList.add('star');

  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';

  star.style.animationDelay =
    Math.random() * 5 + 's';

  star.style.opacity = Math.random();

  stars.appendChild(star);
}
