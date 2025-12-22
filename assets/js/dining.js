// ============================================
// MAIN JAVASCRIPT FUNCTIONALITY - UPDATED FOR .show CLASS
// ============================================

// --- Language & Currency Data ---
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

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", function () {
  populateLanguageDropdowns();
  populateCurrencyDropdowns();
  setupDropdowns();
  loadGoogleTranslateScript();
  loadPreferences();
  
  // Initialize other components
  initializeDatePicker();
  setupEventListeners();
  setupMobileMenu();
});

// ============================================
// GOOGLE TRANSLATE
// ============================================

function loadGoogleTranslateScript() {
  // Check if script is already loaded
  if (!document.querySelector('script[src*="translate.google.com"]')) {
    const gtScript = document.createElement("script");
    gtScript.type = "text/javascript";
    gtScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(gtScript);
    console.log("Google Translate script loaded");
  }
}

function googleTranslateElementInit() {
  try {
    new google.translate.TranslateElement(
      { pageLanguage: "en", autoDisplay: false },
      "google_translate_element"
    );

    // Hide Google Translate toolbar and banner
    var style = document.createElement("style");
    style.innerHTML = `
      .goog-te-banner-frame, .goog-te-menu-frame { 
          display: none !important; 
      }
      body { 
          top: 0px !important; 
      }
      .goog-tooltip {
          display: none !important;
      }
      .goog-tooltip:hover {
          display: none !important;
      }
      .goog-text-highlight {
          background-color: transparent !important;
          border: none !important;
          box-shadow: none !important;
      }
    `;
    document.head.appendChild(style);
    
    console.log("Google Translate initialized successfully");
    
    // Apply saved language preference after initialization
    setTimeout(function() {
      const savedLang = localStorage.getItem("preferredLanguage") || "en";
      if (savedLang !== "en") {
        triggerGoogleTranslate(savedLang);
      }
    }, 1000);
  } catch (error) {
    console.error("Error initializing Google Translate:", error);
  }
}

// ============================================
// LANGUAGE DROPDOWNS
// ============================================
function populateLanguageDropdowns() {
  // Desktop dropdown
  const desktopDropdown = document.getElementById("languageDropdownMenu");
  if (desktopDropdown) {
    languages.forEach((lang) => {
      const option = document.createElement("button");
      option.className = "dropdown-item notranslate";
      option.setAttribute("data-lang", lang.code);

      const flagElement = document.createElement("span");
      flagElement.className = `flag fi fi-${lang.flag}`;

      const nameElement = document.createElement("span");
      nameElement.textContent = lang.name;

      option.appendChild(flagElement);
      option.appendChild(nameElement);
      desktopDropdown.appendChild(option);
    });
  }

  // Mobile dropdown
  const mobileDropdown = document.getElementById("mobileLanguageDropdown");
  if (mobileDropdown) {
    const mobileContainer = mobileDropdown.querySelector(".py-2") || mobileDropdown;
    languages.forEach((lang) => {
      const option = document.createElement("button");
      option.className = "mobile-language-option notranslate";
      option.setAttribute("data-lang", lang.code);

      const flagElement = document.createElement("span");
      flagElement.className = `flag fi fi-${lang.flag}`;

      const nameElement = document.createElement("span");
      nameElement.textContent = lang.name;

      option.appendChild(flagElement);
      option.appendChild(nameElement);
      mobileContainer.appendChild(option);
    });
  }
}

function changeLanguage(lang) {
  console.log("Changing language to:", lang);
  
  // Update UI elements
  const currentLangDesktop = document.getElementById("currentLanguage");
  const currentLangMobile = document.getElementById("mobileCurrentLanguage");
  const currentFlag = document.getElementById("currentFlag");

  if (currentLangDesktop) currentLangDesktop.textContent = lang.toUpperCase();
  if (currentLangMobile) currentLangMobile.textContent = lang.toUpperCase();
  
  // Update flag
  const langData = languages.find(l => l.code === lang);
  if (currentFlag && langData) {
    const flagElement = document.getElementById("currentFlag");
    flagElement.className = "flag fi";
    flagElement.classList.add(`fi-${langData.flag}`);
  }

  // Update active states (for selected item highlighting)
  document.querySelectorAll(".dropdown-item, .mobile-language-option").forEach((item) => {
    item.classList.remove("active");
    if (item.getAttribute("data-lang") === lang) {
      item.classList.add("active");
    }
  });

  localStorage.setItem("preferredLanguage", lang);
  triggerGoogleTranslate(lang);
}

function triggerGoogleTranslate(lang) {
  console.log("Triggering Google Translate for language:", lang);
  
  if (typeof google !== "undefined" && google.translate) {
    setTimeout(function () {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        console.log("Google Translate language changed to:", lang);
      } else {
        console.warn("Google Translate select element not found");
        setTimeout(() => {
          const select = document.querySelector(".goog-te-combo");
          if (select) {
            select.value = lang;
            select.dispatchEvent(new Event("change"));
          }
        }, 500);
      }
    }, 100);
  } else {
    console.warn("Google Translate not loaded yet, will try again");
    setTimeout(() => triggerGoogleTranslate(lang), 500);
  }
}

// ============================================
// CURRENCY DROPDOWNS
// ============================================
function populateCurrencyDropdowns() {
  // Desktop dropdown
  const desktopDropdown = document.getElementById("currency-dropdown-menu");
  if (desktopDropdown) {
    currencies.forEach((currency) => {
      const option = document.createElement("button");
      option.className = "dropdown-item notranslate";
      option.setAttribute("data-currency", currency.code);

      const iconElement = document.createElement("i");
      iconElement.className = `fas fa-${
        currency.code === "EUR"
          ? "euro-sign"
          : currency.code === "GBP"
          ? "pound-sign"
          : currency.code === "JPY" || currency.code === "CNY"
          ? "yen-sign"
          : currency.code === "INR"
          ? "rupee-sign"
          : currency.code === "RUB"
          ? "ruble-sign"
          : currency.code === "THB"
          ? "baht-sign"
          : currency.code === "KRW"
          ? "won-sign"
          : currency.code === "TRY"
          ? "lira-sign"
          : currency.code === "AED" || currency.code === "SAR"
          ? "hashtag"
          : "dollar-sign"
      }`;

      const nameElement = document.createElement("span");
      nameElement.textContent = `${currency.code} - ${currency.name}`;

      option.appendChild(iconElement);
      option.appendChild(nameElement);
      desktopDropdown.appendChild(option);
    });
  }

  // Mobile dropdown
  const mobileDropdown = document.querySelector(".mobile-currency-menu");
  if (mobileDropdown) {
    currencies.forEach((currency) => {
      const option = document.createElement("button");
      option.className = "mobile-currency-item notranslate";
      option.setAttribute("data-currency", currency.code);

      const iconElement = document.createElement("i");
      iconElement.className = `fas fa-${
        currency.code === "EUR"
          ? "euro-sign"
          : currency.code === "GBP"
          ? "pound-sign"
          : currency.code === "JPY" || currency.code === "CNY"
          ? "yen-sign"
          : currency.code === "INR"
          ? "rupee-sign"
          : currency.code === "RUB"
          ? "ruble-sign"
          : currency.code === "THB"
          ? "baht-sign"
          : currency.code === "KRW"
          ? "won-sign"
          : currency.code === "TRY"
          ? "lira-sign"
          : currency.code === "AED" || currency.code === "SAR"
          ? "hashtag"
          : "dollar-sign"
      }`;

      const nameElement = document.createElement("span");
      nameElement.textContent = `${currency.code} - ${currency.name}`;

      option.appendChild(iconElement);
      option.appendChild(nameElement);
      mobileDropdown.appendChild(option);
    });
  }
}

function convertPrices(currency) {
  const rate = exchangeRates[currency];
  const currencyData = currencies.find((c) => c.code === currency);
  const symbol = currencyData ? currencyData.symbol : "$";

  document.querySelectorAll(".price").forEach((priceElement) => {
    const basePrice = parseFloat(priceElement.getAttribute("data-base-price"));
    const convertedPrice = (basePrice * rate).toFixed(2);
    const originalText = priceElement.textContent;
    const textParts = originalText.split(" ");
    const textAfterPrice = textParts.slice(1).join(" ");
    priceElement.textContent = `${symbol}${convertedPrice} ${textAfterPrice}`;
  });

  // Update currency displays
  document.getElementById("currentCurrency").textContent = currency;
  document.getElementById("mobileCurrentCurrency").textContent = currency;

  // Update active states (for selected item highlighting)
  document.querySelectorAll(".dropdown-item, .mobile-currency-item").forEach((item) => {
    item.classList.remove("active");
  });
  document.querySelectorAll(`[data-currency="${currency}"]`).forEach((item) => {
    item.classList.add("active");
  });

  localStorage.setItem("preferredCurrency", currency);
  console.log("Currency changed to:", currency);
}

// ============================================
// DROPDOWN EVENTS & TOGGLES - UPDATED FOR .show CLASS
// ============================================
function setupDropdowns() {
  // Get all dropdown elements
  const langBtn = document.getElementById("languageButton");
  const langDropdown = document.getElementById("languageDropdownMenu");

  const curBtn = document.getElementById("currency-button");
  const curDropdown = document.getElementById("currency-dropdown-menu");

  const mobileLangBtn = document.getElementById("mobileLanguageButton");
  const mobileLangDropdown = document.getElementById("mobileLanguageDropdown");

  const mobileCurBtn = document.querySelector(".mobile-currency-toggle");
  const mobileCurMenu = document.querySelector(".mobile-currency-menu");

  // --- Desktop Language Dropdown ---
  langBtn?.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    // Toggle current dropdown
    langDropdown?.classList.toggle("show");
    
    // Close other dropdowns
    if (curDropdown?.classList.contains("show")) {
      curDropdown.classList.remove("show");
    }
    
    // Close mobile dropdowns
    if (mobileLangDropdown?.classList.contains("show")) {
      mobileLangDropdown.classList.remove("show");
    }
    if (mobileCurMenu?.classList.contains("show")) {
      mobileCurMenu.classList.remove("show");
    }
  });

  // --- Desktop Currency Dropdown ---
  curBtn?.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    // Toggle current dropdown
    curDropdown?.classList.toggle("show");
    
    // Close other dropdowns
    if (langDropdown?.classList.contains("show")) {
      langDropdown.classList.remove("show");
    }
    
    // Close mobile dropdowns
    if (mobileLangDropdown?.classList.contains("show")) {
      mobileLangDropdown.classList.remove("show");
    }
    if (mobileCurMenu?.classList.contains("show")) {
      mobileCurMenu.classList.remove("show");
    }
  });

  // --- Mobile Language Dropdown ---
  mobileLangBtn?.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    // Toggle current dropdown
    mobileLangDropdown?.classList.toggle("show");
    
    // Close other dropdowns
    if (mobileCurMenu?.classList.contains("show")) {
      mobileCurMenu.classList.remove("show");
    }
    if (langDropdown?.classList.contains("show")) {
      langDropdown.classList.remove("show");
    }
    if (curDropdown?.classList.contains("show")) {
      curDropdown.classList.remove("show");
    }
  });

  // --- Mobile Currency Dropdown ---
  mobileCurBtn?.addEventListener("click", function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    // Toggle current dropdown
    mobileCurMenu?.classList.toggle("show");
    
    // Close other dropdowns
    if (mobileLangDropdown?.classList.contains("show")) {
      mobileLangDropdown.classList.remove("show");
    }
    if (langDropdown?.classList.contains("show")) {
      langDropdown.classList.remove("show");
    }
    if (curDropdown?.classList.contains("show")) {
      curDropdown.classList.remove("show");
    }
  });

  // --- Language Selection ---
  [langDropdown, mobileLangDropdown].forEach(dropdown => {
    dropdown?.addEventListener("click", function(e) {
      const button = e.target.closest("[data-lang]");
      if (button) {
        const lang = button.getAttribute("data-lang");
        changeLanguage(lang);
        
        // Close all dropdowns
        closeAllDropdowns();
      }
    });
  });

  // --- Currency Selection ---
  [curDropdown, mobileCurMenu].forEach(dropdown => {
    dropdown?.addEventListener("click", function(e) {
      const button = e.target.closest("[data-currency]");
      if (button) {
        const currency = button.getAttribute("data-currency");
        convertPrices(currency);
        
        // Close all dropdowns
        closeAllDropdowns();
      }
    });
  });

  // --- Close dropdowns on outside click ---
  document.addEventListener("click", function(e) {
    // Check if click is outside all dropdowns and buttons
    const isClickInsideDropdown = 
      (langBtn && langBtn.contains(e.target)) ||
      (langDropdown && langDropdown.contains(e.target)) ||
      (curBtn && curBtn.contains(e.target)) ||
      (curDropdown && curDropdown.contains(e.target)) ||
      (mobileLangBtn && mobileLangBtn.contains(e.target)) ||
      (mobileLangDropdown && mobileLangDropdown.contains(e.target)) ||
      (mobileCurBtn && mobileCurBtn.contains(e.target)) ||
      (mobileCurMenu && mobileCurMenu.contains(e.target));
    
    if (!isClickInsideDropdown) {
      closeAllDropdowns();
    }
  });

  // --- Close dropdowns on ESC key ---
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
      closeAllDropdowns();
    }
  });

  // Helper function to close all dropdowns
  function closeAllDropdowns() {
    [langDropdown, curDropdown, mobileLangDropdown, mobileCurMenu].forEach(dropdown => {
      dropdown?.classList.remove("show");
    });
  }
}

// ============================================
// LOAD PREFERENCES
// ============================================
function loadPreferences() {
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  changeLanguage(savedLang);

  const savedCurrency = localStorage.getItem("preferredCurrency") || "USD";
  convertPrices(savedCurrency);
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================
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

    mobileMenuOverlay.addEventListener("click", function () {
      hamburgerCheckbox.checked = false;
      mobileMenu.classList.remove("active");
      mobileMenuOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    });

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

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      if (hamburgerCheckbox) {
        hamburgerCheckbox.checked = false;
      }
      if (mobileMenu) {
        mobileMenu.classList.remove("active");
      }
      if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove("active");
      }
      document.body.style.overflow = "auto";
    }
  });
}

// ============================================
// DATE PICKER
// ============================================
function initializeDatePicker() {
  const dateInput = document.getElementById("date");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split("T")[0];
  }
}

// ============================================
// MODALS, MOBILE MENU, WHATSAPP
// ============================================
function setupEventListeners() {
  // Modal
  const readMoreBtn = document.getElementById("readMoreBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  const closeModal = document.getElementById("closeModal");
  const closeModalAlt = document.getElementById("closeModalAlt");

  readMoreBtn?.addEventListener("click", () => {
    modalOverlay?.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  [closeModal, closeModalAlt].forEach((btn) => {
    btn?.addEventListener("click", () => {
      modalOverlay?.classList.remove("active");
      document.body.style.overflow = "auto";
      if (btn === closeModalAlt) {
        const menuSection = document.getElementById("menu");
        menuSection?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // WhatsApp
  document.getElementById("sendToWhatsApp")?.addEventListener("click", sendWhatsAppReservation);

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") === "#") return;
      e.preventDefault();
      const targetElement = document.querySelector(this.getAttribute("href"));
      if (targetElement) window.scrollTo({ top: targetElement.offsetTop - 80, behavior: "smooth" });
    });
  });
}

// ============================================
// WHATSAPP RESERVATION
// ============================================
function sendWhatsAppReservation() {
  const name = document.getElementById("name")?.value.trim() || "";
  const email = document.getElementById("email")?.value.trim() || "";
  const phone = document.getElementById("phone")?.value.trim() || "";
  const date = document.getElementById("date")?.value || "";
  const time = document.getElementById("time")?.value || "";
  const guests = document.getElementById("guests")?.value || "";
  const occasion = document.getElementById("occasion")?.value || "";
  const specialRequests = document.getElementById("specialRequests")?.value.trim() || "";

  if (!name || !email || !phone || !date || !time || !guests) {
    alert("Please fill in all required fields (*) before sending via WhatsApp.");
    return;
  }

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric"
  });

  let occasionText = occasion ? `• Occasion: ${document.getElementById("occasion").selectedOptions[0].text}\n` : "";

  const whatsappMessage =
    `*TABLE RESERVATION - 7Days Motel Entebbe* 🍽️\n\n` +
    `*Customer Details:*\n` +
    `• Name: ${name}\n• Phone: ${phone}\n• Email: ${email}\n\n` +
    `*Reservation Details:*\n` +
    `• Date: ${formattedDate}\n• Time: ${document.getElementById("time").selectedOptions[0].text}\n` +
    `• Guests: ${guests} person(s)\n` +
    `${occasionText}${specialRequests ? `• Special Requests: ${specialRequests}\n\n` : "\n"}` +
    `_Reservation placed via website_`;

  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappNumber = "256709093939";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}