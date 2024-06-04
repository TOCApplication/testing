window.onload = function() {
  setTimeout(function() {
      const container = document.querySelector('.credits-container');
      const totalHeight = container.scrollHeight - container.clientHeight;
      const duration = 10000; // 10 seconds
      const increment = totalHeight / (duration / 16.67); // roughly 60fps

      let currentScroll = 0;
      const scrollInterval = setInterval(function() {
          container.scrollTo(0, currentScroll);
          currentScroll += increment;

          if (currentScroll >= totalHeight) {
              clearInterval(scrollInterval);
          }
      }, 16.67); // roughly 60fps
  }, 2000);
};
