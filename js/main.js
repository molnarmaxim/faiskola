// Üdvözlő videó kezelése - minden betöltésnél megjelenik (csak index.html-en)
document.addEventListener('DOMContentLoaded', function() {
  const videoOverlay = document.getElementById('video-overlay');
  const video = document.getElementById('welcome-video');
  const floatingVideo = document.getElementById('floating-video');
  const floatingVideoPlayer = document.getElementById('floating-video-player');
  
  if (video && videoOverlay && floatingVideo) {
    // Biztosítjuk, hogy az overlay látható és a videó az elején van
    videoOverlay.style.display = 'flex';
    videoOverlay.classList.remove('fade-out');
    video.currentTime = 0;
    video.play();
    
    // Függvény a lebegő videó megjelenítésére
    function showFloatingVideo() {
      videoOverlay.classList.add('fade-out');
      setTimeout(function() {
        videoOverlay.style.display = 'none';
        // Lebegő videó megjelenítése
        floatingVideo.style.display = 'block';
        floatingVideoPlayer.currentTime = 0;
        floatingVideoPlayer.play();
      }, 500);
    }
    
    // Videó végeztével megjelenik a lebegő verzió
    video.addEventListener('ended', showFloatingVideo);
    
    // Ha valaki rákattint az overlay-re, megjelenik a lebegő verzió
    videoOverlay.addEventListener('click', function() {
      video.pause();
      showFloatingVideo();
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