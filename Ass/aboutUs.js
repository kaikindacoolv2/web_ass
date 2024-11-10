// JavaScript for toggling the flipped state of the card
document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped'); // Toggle the 'flipped' class on click
    });
  });
  