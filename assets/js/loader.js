// Luxury loader control with 5-second maximum timeout
(function() {
  // Configuration
  const MAX_DISPLAY_TIME = 5000; // 5 seconds maximum
  const FADE_OUT_DURATION = 1000; // 1 second fade-out
  
  // State tracking
  let isLoaderHidden = false;
  let pageLoadStartTime = Date.now();
  
  // Get loader element
  const loader = document.getElementById('luxuryLoader');
  if (!loader) return; // Exit if loader not found
  
  // Function to hide the loader with smooth animation
  function hideLoader() {
    // Prevent multiple calls
    if (isLoaderHidden) return;
    isLoaderHidden = true;
    
    // Calculate how long the loader was visible
    const displayDuration = Date.now() - pageLoadStartTime;
    
    // Start fade-out animation
    loader.classList.add('hidden');
    
    // Optional: Stop all animations after fade-out starts
    setTimeout(() => {
      const rings = document.querySelectorAll('.ring-1, .ring-2, .ring-3, .ring-4, .crimson-accent');
      rings.forEach(ring => {
        ring.style.animationPlayState = 'paused';
      });
    }, 50);
    
    // Remove from DOM after fade-out completes
    setTimeout(() => {
      if (loader.parentNode) {
        loader.style.display = 'none';
        
        // Dispatch custom event for any post-loader actions
        window.dispatchEvent(new CustomEvent('luxuryLoaderHidden', {
          detail: { displayDuration: displayDuration }
        }));
      }
    }, FADE_OUT_DURATION);
  }
  
  // Set maximum display timeout (5 seconds)
  const maxTimeout = setTimeout(hideLoader, MAX_DISPLAY_TIME);
  
  // Function to check if page is already loaded
  function checkPageLoaded() {
    if (document.readyState === 'complete') {
      // Page already loaded, hide immediately but with minimal delay
      // to ensure the animation is seen briefly
      clearTimeout(maxTimeout);
      const minDisplayTime = 800; // Minimum 0.8s to see the animation
      const elapsed = Date.now() - pageLoadStartTime;
      
      if (elapsed < minDisplayTime) {
        setTimeout(hideLoader, minDisplayTime - elapsed);
      } else {
        hideLoader();
      }
      return true;
    }
    return false;
  }
  
  // Initial check - if page is already loaded
  if (!checkPageLoaded()) {
    // Wait for full page load (images, stylesheets, etc.)
    window.addEventListener('load', () => {
      clearTimeout(maxTimeout);
      
      // Hide loader immediately on full load
      // (Could add a slight delay here if you want to showcase animation)
      hideLoader();
    }, { once: true });
  }
  
  // Additional safety net: If load event doesn't fire properly
  // Check periodically if page appears to be loaded
  const domCheckInterval = setInterval(() => {
    if (document.readyState === 'complete' && !isLoaderHidden) {
      clearInterval(domCheckInterval);
      clearTimeout(maxTimeout);
      hideLoader();
    }
  }, 500);
  
  // Clean up interval when loader is hidden
  window.addEventListener('luxuryLoaderHidden', () => {
    clearInterval(domCheckInterval);
  });
  
  // Optional: Also hide on DOMContentLoaded as a fallback
  document.addEventListener('DOMContentLoaded', () => {
    // DOM is ready, but we'll wait for full load or timeout
    // This is just a backup in case load event doesn't fire
    console.log('DOM loaded - luxury loader active');
  });
})();