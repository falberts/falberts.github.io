function initCardSelect() {

  const projectInfo = {
    bachelorThesis: {
      fullTitle: "TESTTITLE",
      info: "Test info",
    }
  };

  const cards = document.querySelectorAll('.card');
  const detail = document.getElementById('project-detail');
  const content = detail.querySelector('.detail-content');
  const closeBtn = detail.querySelector('.close-btn');

  let selectedCard = null;

  const originalParent = detail.parentNode;
  const originalNextSibling = detail.nextSibling;

  function resetDetailPosition() {
    if (originalNextSibling) {
      originalParent.insertBefore(detail, originalNextSibling);
    } else {
      originalParent.appendChild(detail);
    }
  }

  function closeDetail() {
    if (!detail.classList.contains('active')) return;

    if (selectedCard) {
      selectedCard.classList.remove('active');
    }

    detail.classList.remove('active');

    const onTransitionEnd = (e) => {
      if (e.target !== detail) return;

      resetDetailPosition();
      detail.removeEventListener('transitionend', onTransitionEnd);
    };

    detail.addEventListener('transitionend', onTransitionEnd);

    selectedCard = null;
  }

  cards.forEach(card => {
    card.addEventListener('click', () => {

      if (selectedCard === card) {
        closeDetail();
        return;
      }

      if (selectedCard) {
        selectedCard.classList.remove('active');
      }

      selectedCard = card;
      card.classList.add('active');

      const title = card.querySelector('h2')?.innerText;

      const cardTop = card.offsetTop;
      const rowCards = [...cards].filter(c => c.offsetTop === cardTop);
      const lastCard = rowCards[rowCards.length - 1];

      lastCard.after(detail);

      void detail.offsetHeight;

      const cardDetails = document.getElementById(card.id + "-details")?.innerHTML;

      content.innerHTML = `
        ${cardDetails || 
          `<h1>PROJECT DETAILS</h1>
          <p>No project details found.</p>`}
      `;

      detail.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', closeDetail);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDetail();
    }
  });

  document.addEventListener('click', (e) => {
    if (!selectedCard) return;

    const clickedCard = e.target.closest('.card');
    const clickedDetail = e.target.closest('#project-detail');

    if (clickedCard || clickedDetail) return;

    closeDetail();
  });
}