// Smooth scrolling for internal links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
const typingElement = document.querySelector('.typing');
const words = [" Aspiring Data Analyst", "Passionate Learner", "SQA Practioner"];
let wordIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 60;
let newWordDelay = 1500;

function type() {
  if (charIndex < words[wordIndex].length) {
    typingElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newWordDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) setTimeout(type, newWordDelay + 250);
});

