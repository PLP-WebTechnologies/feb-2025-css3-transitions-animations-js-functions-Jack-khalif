
const button = document.querySelector('button');

// Load stored preference (animation on/off)
const animationEnabled = localStorage.getItem('animationEnabled') === 'true';

if (animationEnabled) {
  button.classList.add('animate');
}

// Toggle animation & save preference
function toggleAnimation() {
  if (button.classList.contains('animate')) {
    button.classList.remove('animate');
    localStorage.setItem('animationEnabled', 'false');
  } else {
    button.classList.add('animate');
    localStorage.setItem('animationEnabled', 'true');
  }
}

// Trigger animation toggle on button click
button.addEventListener('click', toggleAnimation);
