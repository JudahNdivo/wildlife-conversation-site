const video = document.getElementById('wildlife-video');
const toggleBtn = document.getElementById('toggle-btn');

toggleBtn.addEventListener('click', () => {
  const isHidden = video.classList.contains('hidden');

  if (isHidden) {
    video.classList.remove('hidden');
    video.play();
    toggleBtn.textContent = 'Hide Video';
  } else if (video.paused) {
    video.play();
    toggleBtn.textContent = 'Hide Video';
  } else {
    video.pause();
    video.classList.add('hidden');
    toggleBtn.textContent = 'Show Video';
  }
});