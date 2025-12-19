// WhatsApp Button Functionality
const whatsappBtns = document.getElementById("whatsappBtns");
const whatsappOverlay = document.getElementById("whatsappOverlay");
const closeOverlay = document.getElementById("closeOverlay");

if (whatsappBtns && whatsappOverlay && closeOverlay) {
    whatsappBtns.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent event bubbling
        whatsappOverlay.classList.toggle("active");
    });

    closeOverlay.addEventListener("click", function () {
        whatsappOverlay.classList.remove("active");
    });

    // Close overlay when clicking outside
    document.addEventListener("click", function (event) {
        if (
            whatsappOverlay.classList.contains("active") &&
            !whatsappOverlay.contains(event.target) &&
            !whatsappBtns.contains(event.target)
        ) {
            whatsappOverlay.classList.remove("active");
        }
    });

    // Close on escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && whatsappOverlay.classList.contains("active")) {
            whatsappOverlay.classList.remove("active");
        }
    });
}

// Scroll to Top Functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");

if (scrollTopBtn) {
    // Show/hide button based on scroll position
    function toggleScrollButton() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add("active");
        } else {
            scrollTopBtn.classList.remove("active");
        }
    }

    window.addEventListener("scroll", toggleScrollButton);

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });

    // Initialize on load
    toggleScrollButton();
}

// Cookie Consent Functionality
const cookieConsent = document.getElementById("cookieConsent");
const cookieSettings = document.getElementById("cookieSettings");
const acceptAllCookies = document.getElementById("acceptAllCookies");
const necessaryOnlyCookies = document.getElementById("necessaryOnlyCookies");
const openCookieSettings = document.getElementById("openCookieSettings");
const cookieClose = document.getElementById("cookieClose");
const closeCookieSettings = document.getElementById("closeCookieSettings");
const saveCookieSettings = document.getElementById("saveCookieSettings");
const analyticsToggle = document.getElementById("analyticsToggle");
const marketingToggle = document.getElementById("marketingToggle");
const analyticsStatus = document.getElementById("analyticsStatus");
const marketingStatus = document.getElementById("marketingStatus");
const cookieMessage = document.getElementById("cookieMessage");
const cookieMessageText = document.getElementById("cookieMessageText");

// Initialize cookie toggle listeners
function initializeCookieToggles() {
    if (analyticsToggle) {
        analyticsToggle.addEventListener('change', function() {
            if (analyticsStatus) {
                analyticsStatus.textContent = this.checked ? "On" : "Off";
                analyticsStatus.className = this.checked ? "option-status status-on" : "option-status status-off";
            }
        });
    }
    
    if (marketingToggle) {
        marketingToggle.addEventListener('change', function() {
            if (marketingStatus) {
                marketingStatus.textContent = this.checked ? "On" : "Off";
                marketingStatus.className = this.checked ? "option-status status-on" : "option-status status-off";
            }
        });
    }
}

// Check if user has already made a choice
function checkCookieConsent() {
    if (!cookieConsent) {
        console.log("Cookie consent banner not found.");
        return;
    }

    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
        // Show cookie consent after 1 second
        setTimeout(() => {
            cookieConsent.classList.add("active");
        }, 1000);
    } else {
        // Apply saved preferences
        try {
            applyCookiePreferences(JSON.parse(consent));
        } catch (e) {
            console.error("Error parsing cookie preferences:", e);
            localStorage.removeItem("cookieConsent");
            // Show cookie consent if there's an error
            setTimeout(() => {
                cookieConsent.classList.add("active");
            }, 1000);
        }
    }
}

// Apply cookie preferences
function applyCookiePreferences(preferences) {
    if (!preferences) return;

    console.log("Applying cookie preferences:", preferences);

    if (analyticsToggle && analyticsStatus) {
        if (preferences.analytics) {
            analyticsToggle.checked = true;
            analyticsStatus.textContent = "On";
            analyticsStatus.className = "option-status status-on";
            // Enable analytics scripts here
            console.log("Analytics cookies enabled");
        } else {
            analyticsToggle.checked = false;
            analyticsStatus.textContent = "Off";
            analyticsStatus.className = "option-status status-off";
        }
    }

    if (marketingToggle && marketingStatus) {
        if (preferences.marketing) {
            marketingToggle.checked = true;
            marketingStatus.textContent = "On";
            marketingStatus.className = "option-status status-on";
            // Enable marketing scripts here
            console.log("Marketing cookies enabled");
        } else {
            marketingToggle.checked = false;
            marketingStatus.textContent = "Off";
            marketingStatus.className = "option-status status-off";
        }
    }
}

// Show cookie message
function showCookieMessage(message) {
    if (!cookieMessage || !cookieMessageText) {
        console.log("Cookie message elements not found");
        return;
    }

    cookieMessageText.textContent = message;
    cookieMessage.classList.add("show");

    setTimeout(() => {
        cookieMessage.classList.remove("show");
    }, 3000);
}

// Accept all cookies
if (acceptAllCookies) {
    acceptAllCookies.addEventListener("click", function () {
        console.log("Accept all cookies clicked");
        const preferences = {
            necessary: true,
            analytics: true,
            marketing: true,
            timestamp: new Date().toISOString(),
        };

        localStorage.setItem("cookieConsent", JSON.stringify(preferences));
        if (cookieConsent) cookieConsent.classList.remove("active");
        applyCookiePreferences(preferences);

        // Show confirmation
        showCookieMessage("All cookies have been accepted. Thank you!");
    });
}

// Accept necessary only
if (necessaryOnlyCookies) {
    necessaryOnlyCookies.addEventListener("click", function () {
        console.log("Accept necessary only clicked");
        const preferences = {
            necessary: true,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString(),
        };

        localStorage.setItem("cookieConsent", JSON.stringify(preferences));
        if (cookieConsent) cookieConsent.classList.remove("active");
        applyCookiePreferences(preferences);

        // Show confirmation
        showCookieMessage("Only essential cookies have been enabled.");
    });
}

// Close cookie consent
if (cookieClose) {
    cookieClose.addEventListener("click", function () {
        console.log("Close cookie consent clicked");
        if (cookieConsent) cookieConsent.classList.remove("active");
        // Save as necessary only if no choice made yet
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            const preferences = {
                necessary: true,
                analytics: false,
                marketing: false,
                timestamp: new Date().toISOString(),
            };
            localStorage.setItem("cookieConsent", JSON.stringify(preferences));
            applyCookiePreferences(preferences);
            showCookieMessage("Essential cookies enabled.");
        }
    });
}

// Open cookie settings
if (openCookieSettings) {
    openCookieSettings.addEventListener("click", function () {
        console.log("Open cookie settings clicked");
        if (cookieSettings) cookieSettings.classList.add("active");
    });
}

// Close cookie settings
if (closeCookieSettings) {
    closeCookieSettings.addEventListener("click", function () {
        console.log("Close cookie settings clicked");
        if (cookieSettings) cookieSettings.classList.remove("active");
    });
}

// Save cookie settings
if (saveCookieSettings) {
    saveCookieSettings.addEventListener("click", function () {
        console.log("Save cookie settings clicked");
        const preferences = {
            necessary: true,
            analytics: analyticsToggle ? analyticsToggle.checked : false,
            marketing: marketingToggle ? marketingToggle.checked : false,
            timestamp: new Date().toISOString(),
        };

        localStorage.setItem("cookieConsent", JSON.stringify(preferences));
        if (cookieSettings) cookieSettings.classList.remove("active");
        if (cookieConsent) cookieConsent.classList.remove("active");
        applyCookiePreferences(preferences);

        // Show confirmation
        showCookieMessage("Cookie preferences have been saved successfully.");
    });
}

// Anti-right-click & Code Protection Functionality
const protectionPopup = document.getElementById("protectionPopup");
const protectionOverlay = document.getElementById("protectionOverlay");
const closePopup = document.getElementById("closePopup");

// Track protection attempts
let protectionCount = 0;

// Function to show protection popup
function showProtectionPopup() {
    if (!protectionPopup || !protectionOverlay) return;

    protectionCount++;
    protectionPopup.classList.add("active");
    protectionOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    // If triggered multiple times, show stronger message
    if (protectionCount >= 3) {
        const title = document.querySelector(".popup-title");
        const text = document.querySelector(".popup-text");

        if (title) title.textContent = "Access Strictly Prohibited";
        if (text) {
            text.textContent = "Repeated attempts to access protected code detected. This is a violation of intellectual property rights. For legitimate inquiries, contact the developer.";
        }
    }

    // Auto close after 6 seconds
    setTimeout(function () {
        closeProtectionPopup();
    }, 6000);
}

// Function to close protection popup
function closeProtectionPopup() {
    if (protectionPopup) protectionPopup.classList.remove("active");
    if (protectionOverlay) protectionOverlay.classList.remove("active");
    document.body.style.overflow = "";
}

// Disable right-click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    showProtectionPopup();
    return false;
}, false);

// Disable all keyboard shortcuts for accessing code/inspector
document.addEventListener("keydown", function (e) {
    // Check for dev tools shortcuts
    const devToolsKeys = [
        { key: "F12", code: 123 },
        { key: "I", code: 73, ctrl: true, shift: true }, // Ctrl+Shift+I
        { key: "J", code: 74, ctrl: true, shift: true }, // Ctrl+Shift+J
        { key: "C", code: 67, ctrl: true, shift: true }, // Ctrl+Shift+C
        { key: "K", code: 75, ctrl: true, shift: true }, // Ctrl+Shift+K
        { key: "E", code: 69, ctrl: true, shift: true }, // Ctrl+Shift+E
        { key: "U", code: 85, ctrl: true }, // Ctrl+U
        { key: "S", code: 83, ctrl: true }, // Ctrl+S
        { key: "", code: 93 } // Menu key
    ];

    for (const keyCombo of devToolsKeys) {
        const keyMatch = e.key === keyCombo.key || e.keyCode === keyCombo.code;
        const ctrlMatch = !keyCombo.ctrl || e.ctrlKey;
        const shiftMatch = !keyCombo.shift || e.shiftKey;

        if (keyMatch && ctrlMatch && shiftMatch) {
            e.preventDefault();
            showProtectionPopup();
            return false;
        }
    }
}, false);

// Close popup functionality
if (closePopup) {
    closePopup.addEventListener("click", closeProtectionPopup);
}

if (protectionOverlay) {
    protectionOverlay.addEventListener("click", closeProtectionPopup);
}

// Prevent drag and drop of images
document.addEventListener("dragstart", function (e) {
    if (e.target.tagName === "IMG" || e.target.classList.contains("amenity")) {
        e.preventDefault();
        showProtectionPopup();
        return false;
    }
}, false);

// Prevent text selection on certain elements
const sections = document.querySelectorAll(
    ".section, header, .amenity, .logo, .motel-info"
);
sections.forEach((section) => {
    section.addEventListener("selectstart", function (e) {
        e.preventDefault();
        return false;
    }, false);

    // Also prevent copy on these elements
    section.addEventListener("copy", function (e) {
        e.preventDefault();
        showProtectionPopup();
        return false;
    }, false);
});

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Content Loaded - Initializing features");
    
    // Disable right-click menu on images
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.setAttribute("oncontextmenu", "return false;");
        img.setAttribute("ondragstart", "return false;");
    });

    // Initialize cookie toggles
    initializeCookieToggles();
    
    // Initialize cookie consent
    checkCookieConsent();
    
    // Add a console message
    setTimeout(function () {
        console.log(
            "%c⚠️ STOP! ⚠️",
            "color: red; font-size: 40px; font-weight: bold;"
        );
        console.log(
            "%cThis website is protected. Unauthorized code access is prohibited.",
            "color: crimson; font-size: 16px;"
        );
        console.log(
            "%cIf you want to use this code, please contact the developer.",
            "color: #0F3A34; font-size: 14px;"
        );
    }, 1000);
});

// Close cookie settings when clicking outside
if (cookieSettings) {
    document.addEventListener("click", function (event) {
        if (cookieSettings.classList.contains("active") &&
            !cookieSettings.contains(event.target) &&
            (!openCookieSettings || !openCookieSettings.contains(event.target))) {
            cookieSettings.classList.remove("active");
        }
    });
}

// Close all overlays on escape key
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (whatsappOverlay && whatsappOverlay.classList.contains("active")) {
            whatsappOverlay.classList.remove("active");
        }
        if (cookieSettings && cookieSettings.classList.contains("active")) {
            cookieSettings.classList.remove("active");
        }
        if (protectionPopup && protectionPopup.classList.contains("active")) {
            closeProtectionPopup();
        }
    }
});

// Ensure cookie settings overlay is on top
if (cookieSettings) {
    cookieSettings.style.zIndex = "10001";
}
if (protectionPopup) {
    protectionPopup.style.zIndex = "10002";
}
if (protectionOverlay) {
    protectionOverlay.style.zIndex = "10000";
}