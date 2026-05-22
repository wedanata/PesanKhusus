// Popup pertanyaan
const questionPopup =
  document.getElementById('questionPopup');

// Tombol buka surat
const loveBtn =
  document.getElementById('loveBtn');

// Hitungan pindah tombol
let moveCount = 0;

// Hitungan tombol tidak
let noCount = 0;

// =========================
// Tombol Menghindar
// =========================
loveBtn.addEventListener('mouseover', () => {

  // Jika sudah 5x
  if (moveCount >= 5) {

    // Tampilkan popup
    questionPopup.classList.add('active');

    return;
  }

  // Posisi random
  const randomX =
    Math.random() * 200 - 100;

  const randomY =
    Math.random() * 200 - 100;

  // Pindahkan tombol
  loveBtn.style.transform =
    `translate(${randomX}px, ${randomY}px)`;

  // Tambah hitungan
  moveCount++;
});

// =========================
// Pindah ke Surat
// =========================
function goToLetter() {

  window.location.href =
    "surat.html";
}

// =========================
// Tombol Tidak
// =========================
function closeQuestion() {

  noCount++;

  // Pertama
  if (noCount == 1) {

    questionPopup.innerHTML = `
      <h2>😢</h2>

      <p>
        Beneran tidak mau buka?
      </p>

      <div class="question-buttons">

        <button onclick="goToLetter()">
          Iya deh 🤍
        </button>

        <button onclick="closeQuestion()">
          Tidak 😳
        </button>

      </div>
    `;
  }

  // Kedua
  else if (noCount == 2) {

    questionPopup.innerHTML = `
      <h2>🥺</h2>

      <p>
        Serius nih tidak mau?
      </p>

      <div class="question-buttons">

        <button onclick="goToLetter()">
          Baiklah 🤍
        </button>

        <button onclick="closeQuestion()">
          Tetap Tidak 😶
        </button>

      </div>
    `;
  }

  // Ketiga
  else if (noCount == 3) {

    questionPopup.innerHTML = `
      <h2>😭</h2>

      <p>
        Masih yakin memilih tidak?
      </p>

      <div class="question-buttons">

        <button onclick="goToLetter()">
          Oke Aku Buka 🤍
        </button>

        <button onclick="closeQuestion()">
          Yakin Tidak 😤
        </button>

      </div>
    `;
  }

  // Keempat
  else {

    document.body.innerHTML = `
      <div style="
        width:100%;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        background:white;
        font-family:Poppins,sans-serif;
        padding:20px;
        text-align:center;
      ">

        <h1 style="
          color:#ff5c8a;
          margin-bottom:15px;
        ">
          😔
        </h1>

        <p style="
          color:#777;
          font-size:18px;
          line-height:1.8;
          max-width:500px;
        ">
          “Aku tahu aku belum menjadi yang terbaik untukmu.<br><br>

          Tapi percayalah,<br>
          setiap hari aku selalu berusaha<br>
          menjadi alasan kecil di balik senyummu.” 🤍
        </p>

      </div>
    `;
  }
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