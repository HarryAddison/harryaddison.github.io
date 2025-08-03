window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.publication-abstract').forEach(abstract => {
    const fullText = abstract.getAttribute('data-full');
    const firstSentenceEnd = fullText.indexOf('. ');
    const hasMultipleSentences = firstSentenceEnd !== -1;
    const firstLine = hasMultipleSentences ? fullText.slice(0, firstSentenceEnd + 1) + '...' : fullText;

    abstract.textContent = firstLine;
    abstract.classList.add('truncated');

    // Show/hide toggle link depending on length/multisentence
    const toggleLink = abstract.nextElementSibling;
    if (!hasMultipleSentences || fullText.length <= firstLine.length + 10) {
      // Hide toggle link if no second sentence or abstract is short
      if (toggleLink && toggleLink.classList.contains('toggle-abstract')) {
        toggleLink.style.display = 'none';
      }
    } else {
      // Make sure toggle link is visible
      if (toggleLink && toggleLink.classList.contains('toggle-abstract')) {
        toggleLink.style.display = 'inline';
      }
    }
  });
});

// Expand/collapse functionality remains the same
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('toggle-abstract')) {
    event.preventDefault();
    const toggleLink = event.target;
    const abstract = toggleLink.previousElementSibling;

    const fullText = abstract.getAttribute('data-full');
    const firstSentenceEnd = fullText.indexOf('. ');
    const firstLine = firstSentenceEnd !== -1 ? fullText.slice(0, firstSentenceEnd + 1) + '...' : fullText;

    if (abstract.classList.contains('truncated')) {
      abstract.textContent = fullText;
      abstract.classList.remove('truncated');
      toggleLink.textContent = 'Show less';
    } else {
      abstract.textContent = firstLine;
      abstract.classList.add('truncated');
      toggleLink.textContent = 'Show more';
    }
  }
});
