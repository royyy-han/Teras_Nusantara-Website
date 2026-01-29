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
// OPTIONAL: ANIMASI SAAT SCROLL
// ===============================
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.card1, .card2').forEach(card => {
    observer.observe(card);
});
