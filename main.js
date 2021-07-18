'use strict';

const shareBtn = document.querySelectorAll('.preview__share-link');
const toggleShare = document.querySelector('.share');
const arrowShare = document.querySelector('.preview__share-img');

for (const btn of shareBtn) {
  btn.addEventListener('click', function () {
    toggleShare.classList.toggle('hidden');
    btn.classList.toggle('dark-btn');
    arrowShare.classList.toggle('lighten-arrow');
  });
}

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !toggleShare.classList.contains('hidden')) {
    toggleShare.classList.toggle('hidden');
  }
});
