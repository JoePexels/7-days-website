// Luxury loader control with 8-second maximum timeout
(function() {
  // Configuration
  const MAX_DISPLAY_TIME = 8000; // 8 seconds maximum (as per your requirement)
  const FADE_OUT_DURATION = 1000; // 1 second fade-out (was 4000ms, changed to 1000ms for faster fade)
  const MIN_DISPLAY_TIME = 1000; // Minimum 1 second to showcase animation
  
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
    
    console.log(`Loader displayed for ${displayDuration}ms before hiding`);
    
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
  
  // Set maximum display timeout (8 seconds)
  const maxTimeout = setTimeout(hideLoader, MAX_DISPLAY_TIME);
  
  // Function to check if ALL page resources are loaded
  function checkAllResourcesLoaded() {
    // Check if all images are loaded
    const images = Array.from(document.images);
    const allImagesLoaded = images.every(img => img.complete);
    
    // Check if all stylesheets are loaded
    const stylesheets = Array.from(document.styleSheets);
    const allStylesLoaded = stylesheets.every(sheet => {
      try {
        return sheet.cssRules || sheet.rules;
      } catch(e) {
        // Cross-origin stylesheet might throw error
        // If we can access sheet.cssRules, it's loaded
        return true;
      }
    });
    
    // Check if all scripts are loaded
    const scripts = Array.from(document.scripts);
    const allScriptsLoaded = scripts.every(script => {
      // For scripts with src attribute, check if they're loaded
      if (script.src) {
        return script.readyState === 'complete' || script.readyState === 'loaded';
      }
      return true; // Inline scripts are loaded by default
    });
    
    return allImagesLoaded && allStylesLoaded && allScriptsLoaded;
  }
  
  // Function to ensure minimum display time
  function hideWithMinimumTime() {
    clearTimeout(maxTimeout);
    
    const elapsed = Date.now() - pageLoadStartTime;
    
    if (elapsed < MIN_DISPLAY_TIME) {
      // Wait for minimum display time
      setTimeout(hideLoader, MIN_DISPLAY_TIME - elapsed);
    } else {
      // Hide immediately
      hideLoader();
    }
  }
  
  // Main load event listener for when ENTIRE page is loaded
  window.addEventListener('load', () => {
    console.log('Window load event fired - all resources loaded');
    hideWithMinimumTime();
  }, { once: true });
  
  // Fallback: Check periodically for complete loading
  const resourceCheckInterval = setInterval(() => {
    // If loader is already hidden, stop checking
    if (isLoaderHidden) {
      clearInterval(resourceCheckInterval);
      return;
    }
    
    // Check if all resources are loaded AND window load hasn't fired yet
    if (checkAllResourcesLoaded() && document.readyState === 'complete') {
      console.log('All resources detected as loaded via interval check');
      clearInterval(resourceCheckInterval);
      hideWithMinimumTime();
    }
  }, 100); // Check every 100ms
  
  // DOMContentLoaded as early indicator (for debugging)
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded - structure ready, waiting for resources');
  });
  
  // Image-specific loading check
  window.addEventListener('imagesLoaded', () => {
    console.log('All images loaded event fired');
  });
  
  // Clean up everything when loader is hidden
  window.addEventListener('luxuryLoaderHidden', () => {
    clearInterval(resourceCheckInterval);
    console.log('Luxury loader hidden event dispatched');
  });
  
  // Safety cleanup - ensure max timeout is cleared if we're hiding earlier
  window.addEventListener('beforeunload', () => {
    clearTimeout(maxTimeout);
    clearInterval(resourceCheckInterval);
  });
  
})();