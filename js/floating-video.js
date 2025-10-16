// Lebegő videó widget kezelése - minden oldalon megjelenik
document.addEventListener('DOMContentLoaded', function() {
  const floatingVideo = document.getElementById('floating-video');
  const floatingVideoPlayer = document.getElementById('floating-video-player');
  const closeFloating = document.getElementById('close-floating');
  
  if (floatingVideo && floatingVideoPlayer) {
    // Lebegő videó megjelenítése betöltés után (csak nem index.html-en)
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';
    
    if (!isIndexPage) {
      // Ha nem a főoldalon vagyunk, rögtön megjelenik a lebegő videó
      setTimeout(function() {
        floatingVideo.style.display = 'block';
        floatingVideoPlayer.currentTime = 0;
        floatingVideoPlayer.play();
      }, 1000); // 1 másodperc késleltetés
    }
    
    // Lebegő videó bezárása
    if (closeFloating) {
      closeFloating.addEventListener('click', function(e) {
        e.stopPropagation();
        floatingVideo.style.display = 'none';
        floatingVideoPlayer.pause();
      });
    }
    
    // Lebegő videóra kattintva újraindítja
    floatingVideo.addEventListener('click', function(e) {
      // Ha nem az X gombra kattintottak
      if (e.target !== closeFloating) {
        floatingVideoPlayer.currentTime = 0;
        floatingVideoPlayer.play();
      }
    });
  }
});
