// ================== DATA SOAL ==================
const allQuestions = [
    {
        question: "Pulau manakah yang terkenal dengan Bunga Raflesia?",
        options: ["Sumatera", "Papua", "Jawa", "Sulawesi"],
        answer: 0
    },
    {
        question: "Hewan khas Papua adalah?",
        options: ["Harimau", "Komodo", "Cendrawasih", "Badak"],
        answer: 2
    },
    {
        question: "Gunung tertinggi di Indonesia adalah?",
        options: ["Merapi", "Semeru", "Rinjani", "Puncak Jaya"],
        answer: 3
    },
    {
        question: "Pulau Komodo berada di provinsi?",
        options: ["Bali", "NTT", "NTB", "Maluku"],
        answer: 1
    },
    {
        question: "Fauna endemik Sulawesi adalah?",
        options: ["Anoa", "Harimau", "Badak", "Orangutan"],
        answer: 0
    },
    {
        question: "Danau terbesar di Indonesia adalah?",
        options: ["Toba", "Maninjau", "Poso", "Sentani"],
        answer: 0
    },
    {
        question: "Pulau terbesar di Indonesia adalah?",
        options: ["Sumatera", "Kalimantan", "Papua", "Sulawesi"],
        answer: 1
    },
    {
        question: "Burung Cendrawasih berasal dari?",
        options: ["Jawa", "Sumatera", "Papua", "Kalimantan"],
        answer: 2
    },
    {
        question: "Hutan hujan tropis banyak terdapat di?",
        options: ["Kalimantan", "Jawa", "Bali", "Madura"],
        answer: 0
    },
    {
        question: "Hewan khas NTT adalah?",
        options: ["Komodo", "Badak", "Anoa", "Harimau"],
        answer: 0
    }
];

// ================== ACAK & AMBIL 5 SOAL ==================
function getRandomQuestions(all, total = 5) {
    return [...all]
        .sort(() => Math.random() - 0.5)
        .slice(0, total);
}

const quizQuestions = getRandomQuestions(allQuestions, 5);

// ================== STATE ==================
let currentIndex = 0;
let userAnswers = new Array(quizQuestions.length).fill(null);

// ================== ELEMENT (HARUS SESUAI ID HTML) ==================
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

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

        if (userAnswers[currentIndex] === i) {
            label.querySelector("input").checked = true;
        }

        label.querySelector("input").addEventListener("change", () => {
            userAnswers[currentIndex] = i;
        });

        optionsContainer.appendChild(label);
    });

    // tombol back
    backBtn.disabled = currentIndex === 0;

    // tombol next / kirim
    if (currentIndex === quizQuestions.length - 1) {
        nextBtn.classList.add("hidden");
        submitBtn.classList.remove("hidden");
    } else {
        nextBtn.classList.remove("hidden");
        submitBtn.classList.add("hidden");
    }
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
    let score = 0;

    quizQuestions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            score++;
        }
    });

    alert(`Quiz selesai!\nSkor kamu: ${score} / ${quizQuestions.length}`);
});

// ================== INIT ==================
renderQuestion();
