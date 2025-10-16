// Üdvözlő videó kezelése - minden betöltésnél megjelenik
document.addEventListener('DOMContentLoaded', function() {
  const videoOverlay = document.getElementById('video-overlay');
  const video = document.getElementById('welcome-video');
  const floatingVideo = document.getElementById('floating-video');
  const floatingVideoPlayer = document.getElementById('floating-video-player');
  const closeFloating = document.getElementById('close-floating');
  
  if (video && videoOverlay) {
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
    
    // Lebegő videó bezárása
    if (closeFloating) {
      closeFloating.addEventListener('click', function(e) {
        e.stopPropagation();
        floatingVideo.style.display = 'none';
        floatingVideoPlayer.pause();
      });
    }
    
    // Lebegő videóra kattintva újra teljes képernyőre
    floatingVideo.addEventListener('click', function() {
      floatingVideo.style.display = 'none';
      floatingVideoPlayer.pause();
      videoOverlay.style.display = 'flex';
      videoOverlay.classList.remove('fade-out');
      video.currentTime = 0;
      video.play();
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