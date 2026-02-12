// ================== DATA SOAL ==================
const allQuestions = [
    {
        question: "Apa nama ilmiah Endelweis jawa?",
        options: ["Anaphalis Javanica", "Magnolia × alba", "Nepenthes hirsuta", "Cananga odorata"],
        answer: 0
    },
    {
        question: "Presbytis thomasi biasa di kenal juga...",
        options: ["Hiu Karpet Bintik", "Orang utan", "Monyet Kedih", "Kangguru Pohon"],
        answer: 2
    },
    {
        question: "Babi rusa berasal dari pulau?",
        options: ["Sumatera", "Kalimantan", "Jawa", "Sulawesi"],
        answer: 3
    },
    {
        question: "Salah satu hewan endemik yang berasal dari Sulawesi adalah..",
        options: ["Harimau Sumatera", "Hiu Karpet Berbintik", "Yaki", "Bekantan"],
        answer: 2
    },
    {
        question: "Bekantan adalah hewan pemakan..",
        options: ["Daun, buah dan biji-bijian", "Kayu", "Daging", "Pemakan segala"],
        answer: 0
    },
    {
        question: "Ciri fisik kucing merah Kalimantan",
        options: ["bulu cokelat kemerahan dengan tubuh ramping dan ekor panjang.",
                  "bulu cokelat merah dengan tubuh ramping dan ekor pendek.",
                  " bulu cokelat oranye dengan tubuh ramping dan ekor panjang. ",
                  "bulu cokelat kemerahan dengan tubuh lebih berisi dan ekor pendek."],
        answer: 0
    },
    {
        question: "Apa perbedaan mencolok pada OrangUtan sumatera dan OrangUtan Kalimantan?",
        options: ["pada warna rambutnya", "pada bentuk tubuhnya", "pada bentuk wajahnya", "pada kepintarannya"],
        answer: 2
    },
    {
        question: "Mengapa Pesut Mahakam terancam punah?",
        options: ["akibat pencemaran udara sekitar dan kerusakan perairan", 
                  "akibat manusia yang membuang knalpot ke laut", 
                  "akibat pembuangan  sampah timah yang sembarangan", 
                  "akibat pencemaran, aktivitas manusia, dan kerusakan habitat."],
        answer: 3
    },
    {
        question: "apa perbedaan paling mencolok dari Nepenthes glabrata dan Nepenthes hamata?",
        options: ["Nepenthes glabrata memiliki kelopak kantongnya yang sangat tipis dan transparan, sedangkan Nepenthes hamata memiliki kelopak kantong yang lebih padat dan tidak transparan.",
                  "Nepenthes glabrata memiliki kelopak kantongnya yang sangat tebal, sedangkan Nepenthes hamata memiliki kelopak kantong yang lebih tipis.", 
                  "Nepenthes berbetuk lebih ramping dan panjang dari Nepnthes hamata.",
                  "Nepnthes hamata memliki wana kemerahan dan nepnthes glabrata memiliki warna lebih gelap."],
        answer: 0
    },
    {
        question: "Eukaliptus biasanya di manfaatkan untuk apa?",
        options: ["menjadi sumber minyak kayu putih", "sebagai salah satu bahan masakan", 
                  "menjadi bahan kerajinan warga setempat", " sebagai barang perdagangan internasional"],
        answer: 0
    },
    {
        question: "Jenis hutan apa yang mendominasi ekosistem Pulau Kalimantan?",
        options: ["Hutan mangrove", "Hutan hujan tropis", "Hutan sabana", "Hutan konifer"],
        answer: 1
    },
    {
        question: "Berikut ini yang bukan merupakan peran flora Kalimantan dalam ekosistem adalah...",
        options: ["Menyerap karbon dioksida", "Menjadi habitat satwa liar", "Menghasilkan minyak bumi", "Mencegah erosi tanah"],
        answer: 2
    },
    {
        question: "Apa yang dimaksud dengan 'fauna endemik' di Kalimantan?",
        options: ["Satwa yang dapat ditemukan di seluruh dunia", 
                  "Satwa yang hanya hidup di wilayah tertentu Kalimantan dan tidak ditemukan di tempat lain",
                  "Satwa yang baru ditemukan tahun ini",
                  "Satwa yang sudah punah"],
        answer: 1
    },
    {
        question: "Berikut ini yang termasuk fauna endemik Kalimantan adalah...",
        options: ["Harimau Sumatra", 
                  "Orangutan Kalimantan (Pongo pygmaeus)",
                  "Komodo",
                  "Burung Cendrawasih"],
        answer: 1
    },
    {
        question: "Faktor utama yang menyebabkan tanah di Pulau Jawa sangat subur adalah...",
        options: ["Curah hujan tinggi", 
                  "Aktivitas vulkanik gunung berapi",
                  "Banyaknya sungai besar",
                  "Iklim tropis yang stabil"],
        answer: 1
    },
    {
        question: "Burung yang menjadi maskot Taman Nasional Baluran dan hidup di ekosistem savana adalah...",
        options: ["Cenderawasih", 
                  "Merak Hijau (Pavo muticus)",
                  "Elang Jawa",
                  "Jalak Bali"],
        answer: 1
    },
    {
        question: "Berikut ini yang telah dinyatakan punah di alam liar adalah...",
        options: [
        "Macan Tutul Jawa", 
        "Harimau Jawa (Panthera tigris sondaica)",
        "Badak Jawa",
        "Banteng Jawa"
        ],
        answer: 1
    },
    {
        question: "Anggrek serat khas Sulawesi banyak ditemukan di ….",
        options: [
        "padang rumput kering", 
        "hutan tropis lembap",
        "daerah bersalju",
        "gurun pasir"],
        answer: 1
    },
    {
        question: "Nama ilmiah dari pohon durian adalah ….",
        options: [
        "Mangifera indica",
        "Carica papaya",
        "Durio zibethinus",
        "Psidium guajava"
        ],
        answer: 2
    },
    {
        question: "Burung maleo memiliki cara berkembang biak yang unik, yaitu ….",
        options: [
        "membuat sarang gantung",
        "bertelur di pasir panas",
        "mengerami telur di pohon",
        "melahirkan anak"
        ],
        answer: 1
    },
    {
        question: "Ciri khas utama babirusa jantan adalah ….",
        options: [
        "tanduk bercabang",
        "tubuh berbulu tebal",
        "taring panjang melengkung ke atas",
        "ekor sangat pendek"
        ],
        answer: 2
    },
    {
        question: "Pulau Papua dikenal memiliki hutan tropis yang ….",
        options: [
        "sempit dan jarang",
        "paling sedikit di Indonesia",
        "sangat luas dan beragam",
        "hanya berisi satu jenis pohon"
        ],
        answer: 2
    },
    {
        question: "Keanekaragaman flora Papua berperan penting dalam ….",
        options: [
        "mengurangi jumlah hewan",
        "menjaga ekosistem dan menyediakan sumber daya alam",
        "mengeringkan hutan",
        "menghilangkan tumbuhan endemik"
        ],
        answer: 1
    },
    {
        question: "Fauna Papua disebut unik karena ….",
        options: [
        "semua hewannya bisa terbang",
        "tidak ada yang hidup di hutan",
        "banyak spesies endemik yang tidak ditemukan di tempat lain",
        "hanya hidup di laut"
        ],
        answer: 2
    },
    {
        question: "Hewan-hewan di Papua hidup di berbagai ekosistem, kecuali ….",
        options: [
        "hutan hujan tropis",
        "pegunungan",
        "rawa dan pesisir",
        "gurun pasir luas"
        ],
        answer: 3
    }
];

// ================== ACAK & AMBIL 5 SOAL ==================
function getRandomQuestions(all, total = 5) {
    return [...all].sort(() => Math.random() - 0.5).slice(0, total);
}
const quizQuestions = getRandomQuestions(allQuestions, 5);

// ================== STATE ==================
let currentIndex = 0;
let userAnswers = new Array(quizQuestions.length).fill(null);

// ================== ELEMENT ==================
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

const scoreModal = document.getElementById("scoreModal");
const scoreValue = document.getElementById("scoreValue");
const backToArticle = document.getElementById("backToArticle");

// ================== GLOBAL INTERVAL ==================
let scoreInterval;

// ================== NEXT BUTTON STATE ==================
function updateNextButtonState() {
    if (userAnswers[currentIndex] === null) {
        nextBtn.disabled = true;
        nextBtn.classList.add("disabled");
    } else {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabled");
    }
}

// ================== RENDER SOAL ==================
function renderQuestion() {
    const q = quizQuestions[currentIndex];
    questionText.textContent = `${currentIndex + 1}. ${q.question}`;
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, i) => {
        const label = document.createElement("label");
        label.className = "option";

        label.innerHTML = `
            <input type="radio" name="quiz" value="${i}">
            <span>${opt}</span>
        `;

        const input = label.querySelector("input");

        if (userAnswers[currentIndex] === i) {
            input.checked = true;
        }

        input.addEventListener("change", () => {
            userAnswers[currentIndex] = i;
            updateNextButtonState();
        });

        optionsContainer.appendChild(label);
    });

    // Back
    backBtn.disabled = currentIndex === 0;

    // Next & Submit
    if (currentIndex === quizQuestions.length - 1) {
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
    }

    updateNextButtonState();
}

// ================== ANIMASI SKOR ==================
function animateScore(finalScore) {
    let current = 0;
    scoreValue.textContent = 0;

    scoreInterval = setInterval(() => {
        current++;
        scoreValue.textContent = current;

        if (current >= finalScore) {
            clearInterval(scoreInterval);
        }
    }, 150);
}

// ================== EVENT ==================
nextBtn.addEventListener("click", () => {
    if (currentIndex < quizQuestions.length - 1) {
        currentIndex++;
        renderQuestion();
    }
});

backBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
});

submitBtn.addEventListener("click", () => {
    const hasAnsweredAtLeastOne = userAnswers.some(a => a !== null);

    let score = 0;
    quizQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) score++;
    });

    scoreModal.classList.remove("hidden");
    animateScore(score);
});

// ================== KEMBALI KE ARTIKEL ==================
backToArticle.addEventListener("click", () => {
    if (scoreInterval) clearInterval(scoreInterval);
    window.location.href = "jawa.html";
});

// ================== INIT ==================
renderQuestion();

// ================== EXIT MODAL ANIMATED ==================
const exitBtn = document.querySelector(".btn-exit");
const exitModal = document.getElementById("exitModal");
const cancelExit = document.getElementById("cancelExit");
const confirmExit = document.getElementById("confirmExit");

exitBtn.addEventListener("click", () => {
    exitModal.classList.remove("hidden");
});

cancelExit.addEventListener("click", () => {
    exitModal.classList.add("hidden");
});

confirmExit.addEventListener("click", () => {
    document.body.style.transition = "opacity 0.4s ease";
    document.body.style.opacity = "0";

    setTimeout(() => {
        window.location.href = "beranda.html";
    }, 400);
});
