// Üdvözlő videó kezelése - minden betöltésnél megjelenik
document.addEventListener('DOMContentLoaded', function() {
  const videoOverlay = document.getElementById('video-overlay');
  const video = document.getElementById('welcome-video');
  
  if (video && videoOverlay) {
    // Biztosítjuk, hogy az overlay látható és a videó az elején van
    videoOverlay.style.display = 'flex';
    videoOverlay.classList.remove('fade-out');
    video.currentTime = 0;
    video.play();
    
    // Videó végeztével eltűnik az overlay
    video.addEventListener('ended', function() {
      videoOverlay.classList.add('fade-out');
      setTimeout(function() {
        videoOverlay.style.display = 'none';
      }, 500);
    });
    
    // Ha valaki rákattint az overlay-re, szintén eltűnik
    videoOverlay.addEventListener('click', function() {
      video.pause();
      videoOverlay.classList.add('fade-out');
      setTimeout(function() {
        videoOverlay.style.display = 'none';
      }, 500);
    });
  }
});

// Korábbi kód
var $reviewsSlider = $('.reviews-slider');
if ($reviewsSlider.length) {
  $reviewsSlider.slick({
    accessibility: false,
    centerMode: true,
    slidesToShow: 5,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false,
      }
    }]
  });
}