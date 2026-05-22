// =========================
// Pindah ke Next
// =========================
function goToNext() {

  window.location.href =
    "next.html";
}

// =========================
// Emoji Jatuh
// =========================
function createHeart() {

  const heart =
    document.createElement('span');

  heart.classList.add('heart');

  const emojis = [
    '🤍',
    '🌸',
    '✨',
    '💗',
    '🥺'
  ];

  heart.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left =
    Math.random() * 100 + 'vw';

  heart.style.fontSize =
    (Math.random() * 20 + 15) + 'px';

  heart.style.animationDuration =
    (Math.random() * 3 + 2) + 's';

  document.body.appendChild(heart);

  setTimeout(() => {

    heart.remove();

  }, 5000);
}

setInterval(createHeart, 300);