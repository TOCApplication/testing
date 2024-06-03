 // Function to toggle answer visibility
 function toggleAnswer(element) {
  const answer = element.querySelector('.answer');
  if (answer.style.display === 'none' || answer.style.display === '') {
      answer.style.display = 'block';
      answer.style.height = 'auto';  // Adjust for height transition
      answer.style.transition = 'height 0.3s ease-out';
      element.style.marginBottom = '20px';
  } else {
      answer.style.display = 'none';
      answer.style.height = '0';
      element.style.marginBottom = '15px';
  }
}

// Ensure all answers are hidden initially
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.answer').forEach(answer => {
      answer.style.display = 'none';
      answer.style.height = '0';
  });
});

// Function to toggle the sidebar menu
function toggleMenu() {
  const sidebar = document.getElementById('sidebar');
  if (sidebar.style.left === '0px') {
      sidebar.style.left = '-265px';
  } else {
      sidebar.style.left = '0px';
  }
}

// Function to navigate to a unit page
function navigateToUnit(page, unitName) {
  window.location.href = `${page}?unitName=${encodeURIComponent(unitName)}`;
}

// Function to toggle search bar
function toggleSearch() {
  const searchBar = document.getElementById('search-bar');
  if (searchBar.style.display === 'none' || searchBar.style.display === '') {
      searchBar.style.display = 'flex';
  } else {
      searchBar.style.display = 'none';
  }
}

// Function to search questions
function searchQuestions() {
  const input = document.getElementById('search-input').value.toLowerCase();
  const questions = document.querySelectorAll('.question');
  questions.forEach(question => {
      const questionText = question.querySelector('h2').innerText.toLowerCase();
      if (questionText.includes(input)) {
          question.style.display = 'block';
      } else {
          question.style.display = 'none';
      }
  });
}