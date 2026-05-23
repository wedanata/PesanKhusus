// =========================
// Ambil Element
// =========================
const questionPopup =
  document.getElementById('questionPopup');

const loveBtn =
  document.getElementById('loveBtn');

// Hitungan tombol tidak
let noCount = 0;

// =========================
// Saat Tombol Diklik
// =========================
loveBtn.onclick = function () {

  questionPopup.classList.add('active');

};

// =========================
// Ke Halaman Surat
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
          Iya Deh 🤍
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

  // Terakhir
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
        padding:30px;
        text-align:center;
        font-family:Poppins,sans-serif;
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
        ">

          Aku tahu aku belum menjadi
          yang terbaik untukmu.
          <br><br>

          Tapi percayalah,
          setiap hari aku selalu berusaha
          menjadi alasan kecil
          di balik senyummu 🤍

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

// Jalankan terus
setInterval(createHeart, 300);