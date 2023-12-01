let isScrolling;

// 스크롤 이벤트를 감지합니다.
window.addEventListener('scroll', function ( event ) {

  // 스크롤바를 표시합니다.
  document.body.style.overflow = 'auto';

  // 스크롤이 시작되면 실행되는 setTimeout 함수를 지웁니다.
  window.clearTimeout( isScrolling );

  // 스크롤이 끝난 후 66ms가 지나면 스크롤바를 숨깁니다.
  isScrolling = setTimeout(function() {
    document.body.style.overflow = 'hidden';
  }, 66);

}, false);
