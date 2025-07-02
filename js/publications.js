// Truncate abstracts to first sentence on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.publication-abstract').forEach(abstract => {
    if (abstract.classList.contains('no-toggle')) return;
    const fullText = abstract.getAttribute('data-full');
    const firstLine = fullText.split('. ')[0] + (fullText.includes('.') ? '...' : '');
    abstract.textContent = firstLine;
    abstract.classList.add('truncated');
  });
});

// Expand/collapse functionality
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('toggle-abstract')) {
    event.preventDefault();
    const toggleLink = event.target;
    const abstract = toggleLink.previousElementSibling;

    const fullText = abstract.getAttribute('data-full');
    const firstLine = fullText.split('. ')[0] + (fullText.includes('.') ? '...' : '');

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
