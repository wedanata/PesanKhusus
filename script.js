// =========================
// Ambil Element
// =========================
const questionPopup = document.getElementById('questionPopup');
const loveBtn = document.getElementById('loveBtn');

let noCount = 0;

// =========================
// Tombol buka popup
// =========================
loveBtn.onclick = function () {
  questionPopup.classList.add('active');
};

// =========================
// Ke halaman surat
// =========================
function goToLetter() {
  window.location.href = "surat.html";
}

// =========================
// Tombol "Tidak"
// =========================
function closeQuestion() {
  noCount++;

  if (noCount == 1) {
    questionPopup.innerHTML = `
      <h2>😢</h2>
      <p>Beneran tidak mau buka?</p>
      <div class="question-buttons">
        <button onclick="goToLetter()">Iya Deh 🤍</button>
        <button onclick="closeQuestion()">Tidak 😳</button>
      </div>
    `;
  }

  else if (noCount == 2) {
    questionPopup.innerHTML = `
      <h2>🥺</h2>
      <p>Serius nih tidak mau?</p>
      <div class="question-buttons">
        <button onclick="goToLetter()">Baiklah 🤍</button>
        <button onclick="closeQuestion()">Tetap Tidak 😶</button>
      </div>
    `;
  }

  else if (noCount == 3) {
    questionPopup.innerHTML = `
      <h2>😭</h2>
      <p>Masih yakin?</p>
      <div class="question-buttons">
        <button onclick="goToLetter()">Oke Aku Buka 🤍</button>
        <button onclick="closeQuestion()">Yakin Tidak 😤</button>
      </div>
    `;
  }

  else {
    document.body.innerHTML = `
      <div style="
        width:100%;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        text-align:center;
        padding:30px;
        font-family:Poppins,sans-serif;
        background:white;
      ">
        <h1 style="color:#ff5c8a;">😔</h1>
        <p style="color:#777; font-size:18px; line-height:1.8;">
          Aku tahu aku belum menjadi yang terbaik untukmu.
          <br><br>
          Tapi aku selalu berusaha membuatmu tersenyum 🤍
        </p>
      </div>
    `;
  }
}

// =========================
// HEART ANIMATION (FIX LAG HP)
// =========================
function createHeart() {
  const heart = document.createElement('span');
  heart.classList.add('heart');

  const emojis = ['🤍','🌸','✨','💗','🥺'];
  heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 18 + 14) + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 2) + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// lebih ringan untuk HP
setInterval(createHeart, 700);