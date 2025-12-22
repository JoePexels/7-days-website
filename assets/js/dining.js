// ============================================
// MAIN JAVASCRIPT FUNCTIONALITY
// ============================================

// Language data with country flags
const languages = [
  { code: "en", name: "English", flag: "us" },
  { code: "es", name: "Español", flag: "es" },
  { code: "fr", name: "Français", flag: "fr" },
  { code: "de", name: "Deutsch", flag: "de" },
  { code: "it", name: "Italiano", flag: "it" },
  { code: "pt", name: "Português", flag: "pt" },
  { code: "ru", name: "Русский", flag: "ru" },
  { code: "zh-CN", name: "中文 (简体)", flag: "cn" },
  { code: "zh-TW", name: "中文 (繁體)", flag: "tw" },
  { code: "ja", name: "日本語", flag: "jp" },
  { code: "ko", name: "한국어", flag: "kr" },
  { code: "vi", name: "Tiếng Việt", flag: "vn" },
  { code: "nl", name: "Nederlands", flag: "nl" },
  { code: "pl", name: "Polski", flag: "pl" },
  { code: "tr", name: "Türkçe", flag: "tr" },
  { code: "sw", name: "Kiswahili", flag: "ke" },
  { code: "zu", name: "isiZulu", flag: "za" },
  { code: "af", name: "Afrikaans", flag: "za" },
];

// Currency data
const currencies = [
  { code: "USD", name: "US Dollar", symbol: "$" },
  { code: "EUR", name: "Euro", symbol: "€" },
  { code: "GBP", name: "British Pound", symbol: "£" },
  { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
  { code: "UGX", name: "Ugandan Shilling", symbol: "USh" },
  { code: "KES", name: "Kenyan Shilling", symbol: "KSh" },
  { code: "TZS", name: "Tanzanian Shilling", symbol: "TSh" },
  { code: "RWF", name: "Rwandan Franc", symbol: "RF" },
];

// Exchange rates (relative to USD)
const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  AED: 3.67,
  UGX: 3850,
  KES: 160,
  TZS: 2600,
  RWF: 1320,
};

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing...");
  initializeDropdowns();
  initializeGoogleTranslate();
  initializeDatePicker();
  setupEventListeners();
  loadPreferences();
});

// Initialize dropdown functionality
function initializeDropdowns() {
  // Populate language dropdowns
  populateLanguageDropdowns();

  // Populate currency dropdowns
  populateCurrencyDropdowns();

  // Setup dropdown toggles
  setupDesktopDropdowns();
  setupMobileDropdowns();
}

// Populate language dropdowns
function populateLanguageDropdowns() {
  const desktopDropdown = document.getElementById("languageDropdownMenu");
  const mobileDropdown = document
    .getElementById("mobileLanguageDropdown")
    ?.querySelector(".py-2");

  // Clear existing options
  if (desktopDropdown) desktopDropdown.innerHTML = "";
  if (mobileDropdown) mobileDropdown.innerHTML = "";

  languages.forEach((lang) => {
    // Desktop dropdown
    if (desktopDropdown) {
      const option = document.createElement("button");
      option.className = "dropdown-item notranslate";
      option.setAttribute("data-lang", lang.code);
      option.innerHTML = `
                    <span class="flag fi fi-${lang.flag}"></span>
                    <span>${lang.name}</span>
                `;
      desktopDropdown.appendChild(option);
    }

    // Mobile dropdown
    if (mobileDropdown) {
      const option = document.createElement("button");
      option.className = "mobile-language-option notranslate";
      option.setAttribute("data-lang", lang.code);
      option.innerHTML = `
                    <span class="flag fi fi-${lang.flag}"></span>
                    <span>${lang.name}</span>
                `;
      mobileDropdown.appendChild(option);
    }
  });
}

// Populate currency dropdowns
function populateCurrencyDropdowns() {
  const desktopDropdown = document.getElementById("currency-dropdown-menu");
  const mobileDropdown = document.querySelector(".mobile-currency-menu");

  // Clear existing options
  if (desktopDropdown) desktopDropdown.innerHTML = "";
  if (mobileDropdown) mobileDropdown.innerHTML = "";

  currencies.forEach((currency) => {
    // Desktop dropdown
    if (desktopDropdown) {
      const option = document.createElement("button");
      option.className = "dropdown-item notranslate";
      option.setAttribute("data-currency", currency.code);
      option.innerHTML = `
                    <i class="fas fa-${
                      currency.code === "EUR"
                        ? "euro-sign"
                        : currency.code === "GBP"
                        ? "pound-sign"
                        : "dollar-sign"
                    }"></i>
                    <span>${currency.code} - ${currency.name}</span>
                `;
      desktopDropdown.appendChild(option);
    }

    // Mobile dropdown
    if (mobileDropdown) {
      const option = document.createElement("button");
      option.className = "mobile-currency-item notranslate";
      option.setAttribute("data-currency", currency.code);
      option.innerHTML = `
                    <i class="fas fa-${
                      currency.code === "EUR"
                        ? "euro-sign"
                        : currency.code === "GBP"
                        ? "pound-sign"
                        : "dollar-sign"
                    }"></i>
                    <span>${currency.code} - ${currency.name}</span>
                `;
      mobileDropdown.appendChild(option);
    }
  });
}

// Setup desktop dropdown toggles
function setupDesktopDropdowns() {
  // Language dropdown
  const languageButton = document.getElementById("languageButton");
  const languageDropdown = document.getElementById("languageDropdownMenu");

  if (languageButton && languageDropdown) {
    languageButton.addEventListener("click", function (e) {
      e.stopPropagation();
      languageDropdown.classList.toggle("show");
      document
        .getElementById("currency-dropdown-menu")
        ?.classList.remove("show");
    });

    // Language selection
    languageDropdown.addEventListener("click", function (e) {
      const button = e.target.closest("[data-lang]");
      if (button) {
        const lang = button.getAttribute("data-lang");
        changeLanguage(lang);
        languageDropdown.classList.remove("show");
      }
    });
  }

  // Currency dropdown
  const currencyButton = document.getElementById("currency-button");
  const currencyDropdown = document.getElementById("currency-dropdown-menu");

  if (currencyButton && currencyDropdown) {
    currencyButton.addEventListener("click", function (e) {
      e.stopPropagation();
      currencyDropdown.classList.toggle("show");
      document.getElementById("languageDropdownMenu")?.classList.remove("show");
    });

    // Currency selection
    currencyDropdown.addEventListener("click", function (e) {
      const button = e.target.closest("[data-currency]");
      if (button) {
        const currency = button.getAttribute("data-currency");
        convertPrices(currency);
        currencyDropdown.classList.remove("show");
      }
    });
  }
}

// Setup mobile dropdown toggles
function setupMobileDropdowns() {
  // Mobile language dropdown
  const mobileLanguageButton = document.getElementById("mobileLanguageButton");
  const mobileLanguageDropdown = document.getElementById(
    "mobileLanguageDropdown"
  );

  if (mobileLanguageButton && mobileLanguageDropdown) {
    mobileLanguageButton.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileLanguageDropdown.classList.toggle("show");
      document.querySelector(".mobile-currency-menu")?.classList.remove("show");
    });

    // Language selection
    mobileLanguageDropdown.addEventListener("click", function (e) {
      const button = e.target.closest("[data-lang]");
      if (button) {
        const lang = button.getAttribute("data-lang");
        changeLanguage(lang);
        mobileLanguageDropdown.classList.remove("show");
      }
    });
  }

  // Mobile currency dropdown
  const mobileCurrencyToggle = document.querySelector(
    ".mobile-currency-toggle"
  );
  const mobileCurrencyMenu = document.querySelector(".mobile-currency-menu");

  if (mobileCurrencyToggle && mobileCurrencyMenu) {
    mobileCurrencyToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileCurrencyMenu.classList.toggle("show");
      document
        .getElementById("mobileLanguageDropdown")
        ?.classList.remove("show");
    });

    // Currency selection
    mobileCurrencyMenu.addEventListener("click", function (e) {
      const button = e.target.closest("[data-currency]");
      if (button) {
        const currency = button.getAttribute("data-currency");
        convertPrices(currency);
        mobileCurrencyMenu.classList.remove("show");
      }
    });
  }
}

// Initialize Google Translate - SIMPLIFIED VERSION
function initializeGoogleTranslate() {
  console.log("Initializing Google Translate...");

  // Check if script is already loaded
  if (document.querySelector('script[src*="translate.google.com"]')) {
    console.log("Google Translate script already loaded");
    return;
  }

  // Load Google Translate script
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;

  script.onload = function () {
    console.log("Google Translate script loaded successfully");
  };

  script.onerror = function () {
    console.error("Failed to load Google Translate script");
  };

  document.head.appendChild(script);
}

// Google Translate callback - SIMPLIFIED
window.googleTranslateElementInit = function () {
  console.log("googleTranslateElementInit called");

  if (typeof google === "undefined" || !google.translate) {
    console.error("Google Translate API not available");
    return;
  }

  try {
    // Create a minimal Google Translate element
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,es,fr,de,it,pt,ru,zh-CN,ja,ko,ar",
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        disableAutoTranslation: true,
      },
      "google_translate_element"
    );

    console.log("Google Translate element created");

    // Apply styles to hide Google's default UI
    const style = document.createElement("style");
    style.textContent = `
                #google_translate_element {
                    display: none !important;
                }
                .goog-te-gadget {
                    font-size: 0 !important;
                }
                .goog-te-gadget-simple {
                    background: transparent !important;
                    border: none !important;
                    padding: 0 !important;
                }
                .goog-te-menu-value {
                    display: none !important;
                }
                .goog-te-banner-frame {
                    display: none !important;
                }
                .goog-te-menu-frame {
                    display: none !important;
                }
                body {
                    top: 0px !important;
                }
                .goog-te-banner-frame.skiptranslate {
                    display: none !important;
                }
                .goog-tooltip {
                    display: none !important;
                }
            `;
    document.head.appendChild(style);
  } catch (error) {
    console.error("Error creating Google Translate element:", error);
  }
};

// Function to change language - UPDATED
function changeLanguage(lang) {
  console.log("Changing language to:", lang);

  // Update UI
  const currentLanguage = document.getElementById("currentLanguage");
  const mobileCurrentLanguage = document.getElementById(
    "mobileCurrentLanguage"
  );

  if (currentLanguage) currentLanguage.textContent = lang.toUpperCase();
  if (mobileCurrentLanguage)
    mobileCurrentLanguage.textContent = lang.toUpperCase();

  // Update flag
  const langData = languages.find((l) => l.code === lang);
  const currentFlag = document.getElementById("currentFlag");
  if (langData && currentFlag) {
    currentFlag.className = `flag fi fi-${langData.flag}`;
  }

  // Save preference
  localStorage.setItem("preferredLanguage", lang);

  // Trigger Google Translate
  triggerGoogleTranslate(lang);
}

// New function to trigger Google Translate
function triggerGoogleTranslate(lang) {
  console.log("Triggering Google Translate for:", lang);

  // Method 1: Direct API call if available
  if (
    typeof google !== "undefined" &&
    google.translate &&
    google.translate.TranslateService
  ) {
    try {
      google.translate.TranslateService().translate({
        sourceLang: "en",
        targetLang: lang,
        onComplete: function (result) {
          console.log("Translation completed:", result);
        },
      });
    } catch (error) {
      console.error("Error using TranslateService:", error);
    }
  }

  // Method 2: Use the dropdown if it exists
  const googleTranslateSelect = document.querySelector(".goog-te-combo");
  if (googleTranslateSelect) {
    console.log("Found Google Translate select, setting value to:", lang);
    googleTranslateSelect.value = lang;

    // Dispatch change event
    const event = new Event("change", { bubbles: true });
    googleTranslateSelect.dispatchEvent(event);

    // Also try the Google Translate API method
    if (window.google && google.translate && google.translate.translate) {
      google.translate.translate(
        document.documentElement,
        "en",
        lang,
        function (result) {
          console.log("Google translate API result:", result);
        }
      );
    }
  } else {
    console.log(
      "Google Translate select not found, trying alternative method..."
    );

    // Alternative method: Direct API call
    if (window.gt_translate_script) {
      window.location.hash = "#googtrans(en|" + lang + ")";
      window.location.reload();
    }
  }

  // Store language in cookie for Google Translate
  document.cookie = "googtrans=/en/" + lang + "; path=/; max-age=31536000";
  document.cookie =
    "googtrans=/en/" +
    lang +
    "; path=/; domain=." +
    window.location.hostname +
    "; max-age=31536000";
}

// Function to convert prices
function convertPrices(currency) {
  const rate = exchangeRates[currency] || 1;
  const currencyData = currencies.find((c) => c.code === currency);
  const symbol = currencyData ? currencyData.symbol : "$";

  // Update all price elements on the page
  document.querySelectorAll(".price").forEach((priceElement) => {
    const basePrice =
      parseFloat(priceElement.getAttribute("data-base-price")) || 0;
    if (basePrice > 0) {
      const convertedPrice = (basePrice * rate).toFixed(2);
      priceElement.textContent = `${symbol}${convertedPrice}`;
    }
  });

  // Update UI
  const currentCurrency = document.getElementById("currentCurrency");
  const mobileCurrentCurrency = document.getElementById(
    "mobileCurrentCurrency"
  );

  if (currentCurrency) currentCurrency.textContent = currency;
  if (mobileCurrentCurrency) mobileCurrentCurrency.textContent = currency;

  // Save preference
  localStorage.setItem("preferredCurrency", currency);
}

// Load saved preferences
function loadPreferences() {
  // Load language preference
  const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
  changeLanguage(savedLanguage);

  // Load currency preference
  const savedCurrency = localStorage.getItem("preferredCurrency") || "USD";
  convertPrices(savedCurrency);
}

// Initialize date picker
function initializeDatePicker() {
  const dateInput = document.getElementById("date");
  if (dateInput) {
    // Set min date to today
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;

    // Set default to tomorrow
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split("T")[0];
  }
}

// Setup all event listeners
function setupEventListeners() {
  // Modal functionality
  const readMoreBtn = document.getElementById("readMoreBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  const closeModal = document.getElementById("closeModal");
  const closeModalAlt = document.getElementById("closeModalAlt");

  if (readMoreBtn && modalOverlay) {
    readMoreBtn.addEventListener("click", () => {
      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeModal && modalOverlay) {
    closeModal.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });
  }

  if (closeModalAlt && modalOverlay) {
    closeModalAlt.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "auto";

      // Scroll to menu section
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        setTimeout(() => {
          menuSection.scrollIntoView({ behavior: "smooth" });
        }, 300);
      }
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });
  }

  // WhatsApp functionality
  const whatsappBtn = document.getElementById("sendToWhatsApp");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", sendWhatsAppReservation);
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") return;

      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Mobile menu functionality
  setupMobileMenu();

  // Close dropdowns when clicking outside
  document.addEventListener("click", function (e) {
    // Close desktop dropdowns
    const languageButton = document.getElementById("languageButton");
    const languageDropdown = document.getElementById("languageDropdownMenu");
    const currencyButton = document.getElementById("currency-button");
    const currencyDropdown = document.getElementById("currency-dropdown-menu");

    if (
      languageDropdown &&
      languageButton &&
      !languageButton.contains(e.target) &&
      !languageDropdown.contains(e.target)
    ) {
      languageDropdown.classList.remove("show");
    }

    if (
      currencyDropdown &&
      currencyButton &&
      !currencyButton.contains(e.target) &&
      !currencyDropdown.contains(e.target)
    ) {
      currencyDropdown.classList.remove("show");
    }

    // Close mobile dropdowns
    const mobileLanguageButton = document.getElementById(
      "mobileLanguageButton"
    );
    const mobileLanguageDropdown = document.getElementById(
      "mobileLanguageDropdown"
    );
    const mobileCurrencyToggle = document.querySelector(
      ".mobile-currency-toggle"
    );
    const mobileCurrencyMenu = document.querySelector(".mobile-currency-menu");

    if (
      mobileLanguageDropdown &&
      mobileLanguageButton &&
      !mobileLanguageButton.contains(e.target) &&
      !mobileLanguageDropdown.contains(e.target)
    ) {
      mobileLanguageDropdown.classList.remove("show");
    }

    if (
      mobileCurrencyMenu &&
      mobileCurrencyToggle &&
      !mobileCurrencyToggle.contains(e.target) &&
      !mobileCurrencyMenu.contains(e.target)
    ) {
      mobileCurrencyMenu.classList.remove("show");
    }
  });
}

// Mobile menu setup
function setupMobileMenu() {
  const hamburgerCheckbox = document.getElementById("hamburger-checkbox");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");

  if (hamburgerCheckbox && mobileMenu && mobileMenuOverlay) {
    hamburgerCheckbox.addEventListener("change", function () {
      if (this.checked) {
        mobileMenu.classList.add("active");
        mobileMenuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      } else {
        mobileMenu.classList.remove("active");
        mobileMenuOverlay.classList.remove("active");
        document.body.style.overflow = "auto";
      }
    });

    // Close mobile menu when clicking on overlay
    mobileMenuOverlay.addEventListener("click", function () {
      hamburgerCheckbox.checked = false;
      mobileMenu.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });

    // Close mobile menu when clicking on a link
    document
      .querySelectorAll(".mobile-links a, .mobile-reserve-now")
      .forEach((link) => {
        link.addEventListener("click", () => {
          hamburgerCheckbox.checked = false;
          mobileMenu.classList.remove("active");
          mobileMenuOverlay.classList.remove("active");
          document.body.style.overflow = "auto";
        });
      });
  }
}

// WhatsApp reservation function
function sendWhatsAppReservation() {
  // Get form values
  const name = document.getElementById("name")?.value.trim() || "";
  const email = document.getElementById("email")?.value.trim() || "";
  const phone = document.getElementById("phone")?.value.trim() || "";
  const date = document.getElementById("date")?.value || "";
  const time = document.getElementById("time")?.value || "";
  const guests = document.getElementById("guests")?.value || "";
  const occasion = document.getElementById("occasion")?.value || "";
  const specialRequests =
    document.getElementById("specialRequests")?.value.trim() || "";

  // Validate required fields
  if (!name || !email || !phone || !date || !time || !guests) {
    alert(
      "Please fill in all required fields (marked with *) before sending via WhatsApp."
    );
    return;
  }

  // Format the date
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Get the selected time text
  const timeSelect = document.getElementById("time");
  const selectedTimeText = timeSelect.options[timeSelect.selectedIndex].text;

  // Occasion text
  let occasionText = "";
  if (occasion) {
    const occasionSelect = document.getElementById("occasion");
    occasionText = `• Occasion: ${
      occasionSelect.options[occasionSelect.selectedIndex].text
    }\n`;
  }

  // Build WhatsApp message
  const whatsappMessage =
    `*TABLE RESERVATION - 7Days Motel Entebbe* 🍽️\n\n` +
    `*Customer Details:*\n` +
    `• Name: ${name}\n` +
    `• Phone: ${phone}\n` +
    `• Email: ${email}\n\n` +
    `*Reservation Details:*\n` +
    `• Date: ${formattedDate}\n` +
    `• Time: ${selectedTimeText}\n` +
    `• Guests: ${guests} person(s)\n` +
    `${occasionText}` +
    (specialRequests ? `• Special Requests: ${specialRequests}\n\n` : "\n") +
    `_Reservation placed via website_`;

  // Encode message for WhatsApp URL
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // WhatsApp number
  const whatsappNumber = "256709093939";

  // Create WhatsApp URL
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappUrl, "_blank");
}
