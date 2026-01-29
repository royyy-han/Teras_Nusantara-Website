// ===============================
// EXPAND / COLLAPSE CARD VEGETASI
// ===============================

function toggle(card) {
    const allCards = document.querySelectorAll('.card1');

    // jika card yang sama diklik lagi → tutup
    if (card.classList.contains('expanded')) {
        card.classList.remove('expanded');
        return;
    }

    // tutup semua card
    allCards.forEach(c => c.classList.remove('expanded'));

    // buka card yang diklik
    card.classList.add('expanded');
}

// ===============================
// ANIMASI SAAT SCROLL
// ===============================
const sections = document.querySelectorAll(".animate-section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.2,
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


