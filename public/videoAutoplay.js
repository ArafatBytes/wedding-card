// public/videoAutoplay.js or utils/videoAutoplay.js
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.video-container').forEach(container => {
      container.addEventListener('mouseover', () => {
        const iframe = container.querySelector('iframe');
        const src = iframe.getAttribute('data-src');
        iframe.setAttribute('src', src);
      });
      container.addEventListener('mouseleave', () => {
        const iframe = container.querySelector('iframe');
        const src = iframe.getAttribute('src').split('?')[0];
        iframe.setAttribute('src', src);
      });
    });
  });
  