// ========== HEADER & NAVIGATION FUNCTIONS ==========

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

// Initialize Google Translate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: "en", autoDisplay: false },
    "google_translate_element"
  );

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
}

// Load Google Translate script
window.addEventListener("load", function () {
  const gtScript = document.createElement("script");
  gtScript.type = "text/javascript";
  gtScript.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.body.appendChild(gtScript);
});

// Populate language dropdowns
function populateLanguageDropdowns() {
  const desktopDropdown = document.getElementById("languageDropdownMenu");
  const mobileDropdown = document
    .getElementById("mobileLanguageDropdown")
    ?.querySelector(".py-2");

  languages.forEach((lang) => {
    // Desktop dropdown
    if (desktopDropdown) {
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
    }

    // Mobile dropdown
    if (mobileDropdown) {
      const option = document.createElement("button");
      option.className = "mobile-language-option notranslate";
      option.setAttribute("data-lang", lang.code);

      const flagElement = document.createElement("span");
      flagElement.className = `flag fi fi-${lang.flag}`;
      const nameElement = document.createElement("span");
      nameElement.textContent = lang.name;

      option.appendChild(flagElement);
      option.appendChild(nameElement);
      mobileDropdown.appendChild(option);
    }
  });
}

// Populate currency dropdowns
function populateCurrencyDropdowns() {
  const desktopDropdown = document.getElementById("currency-dropdown-menu");
  const mobileDropdown = document.querySelector(".mobile-currency-menu");

  currencies.forEach((currency) => {
    // Desktop dropdown
    if (desktopDropdown) {
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
    }

    // Mobile dropdown
    if (mobileDropdown) {
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
    }
  });
}

// Function to change language
function changeLanguage(lang) {
  const currentLanguageElement = document.getElementById("currentLanguage");
  const mobileCurrentLanguageElement = document.getElementById(
    "mobileCurrentLanguage"
  );

  if (currentLanguageElement) {
    currentLanguageElement.textContent = lang.toUpperCase();
  }
  if (mobileCurrentLanguageElement) {
    mobileCurrentLanguageElement.textContent = lang.toUpperCase();
  }

  // Update active states
  document
    .querySelectorAll(".dropdown-item, .mobile-language-option")
    .forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("data-lang") === lang) {
        item.classList.add("active");
      }
    });

  // Update flag on desktop
  const langData = languages.find((l) => l.code === lang);
  if (langData && document.getElementById("currentFlag")) {
    const flagElement = document.getElementById("currentFlag");
    flagElement.className = "flag fi";
    flagElement.classList.add(`fi-${langData.flag}`);
  }

  localStorage.setItem("preferredLanguage", lang);

  // Trigger Google Translate if available
  if (typeof google !== "undefined" && google.translate) {
    setTimeout(function () {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
      }
    }, 500);
  }
}

// Function to convert prices
function convertPrices(currency) {
  const rate = exchangeRates[currency];
  const currencyData = currencies.find((c) => c.code === currency);
  const symbol = currencyData ? currencyData.symbol : "$";

  document.querySelectorAll(".price").forEach((priceElement) => {
    const basePrice = parseFloat(priceElement.getAttribute("data-base-price"));
    if (!isNaN(basePrice)) {
      const convertedPrice = (basePrice * rate).toFixed(2);
      const originalText = priceElement.textContent;
      const textParts = originalText.split(" ");
      const textAfterPrice = textParts.slice(1).join(" ");
      priceElement.textContent = `${symbol}${convertedPrice} ${textAfterPrice}`;
    }
  });

  // Update currency displays
  const currentCurrencyElement = document.getElementById("currentCurrency");
  const mobileCurrentCurrencyElement = document.getElementById(
    "mobileCurrentCurrency"
  );
  if (currentCurrencyElement) currentCurrencyElement.textContent = currency;
  if (mobileCurrentCurrencyElement)
    mobileCurrentCurrencyElement.textContent = currency;

  // Update active states
  document
    .querySelectorAll(".dropdown-item, .mobile-currency-item")
    .forEach((item) => {
      item.classList.remove("active");
    });
  document.querySelectorAll(`[data-currency="${currency}"]`).forEach((item) => {
    item.classList.add("active");
  });

  localStorage.setItem("preferredCurrency", currency);
}

// ========== BOOKING FORM FUNCTIONS ==========

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("booking-form");
  const steps = document.querySelectorAll(".form-step");
  const progressSteps = document.querySelectorAll(".progress-step");
  const mobileSteps = document.querySelectorAll(".mobile-step");
  const nextButtons = document.querySelectorAll(".btn-next");
  const prevButtons = document.querySelectorAll(".btn-prev");
  const roomsContainer = document.getElementById("rooms-container");
  const completeBookingButton = document.getElementById("complete-booking");
  const sendWhatsAppButton = document.getElementById("send-whatsapp");
  const sendWhatsAppFromModalButton = document.getElementById(
    "send-whatsapp-from-modal"
  );
  const successModal = document.getElementById("success-modal");
  const whatsappInfoModal = document.getElementById("whatsapp-info-modal");
  const closeWhatsappInfoButton = document.getElementById(
    "close-whatsapp-info"
  );
  const amenitiesGrid = document.getElementById("amenities-grid");
  const detailFeaturesList = document.getElementById("detail-features-list");

  // Define room type data based on your provided room list
  const roomTypeData = [
    {
      type: "single",
      name: "Single Room",
      price: 40,
      subtitle: "Perfect for solo travelers or business trips",
      description:
        "Our Single Rooms offer comfortable and efficient accommodation for solo travelers. Featuring a single bed, these rooms include all essential amenities including air conditioning, high-speed WiFi, television, guest room phone, and a standard bathroom with shower, toilet, sink, and water heater. Some rooms also include wardrobe storage and all have a working table for productivity.",
      capacity: 1,
      features: [
        "Single Bed",
        "Air Conditioning",
        "Free WiFi",
        "Private Bathroom",
        "Work Desk",
        "Television",
        "Telephone",
      ],
      images: {
        main: "https://images2.imgbox.com/86/f0/k9VQagZH_o.jpg",
        gallery: [
          "https://images2.imgbox.com/15/12/YJjOTuSF_o.jpg",
          "https://images2.imgbox.com/ba/03/f1GM4QbZ_o.jpg",
          "https://tqplc.com/wp-content/uploads/2023/01/tq-hotel-f1.jpg",
          "https://thestandard.co.ug/wp-content/uploads/2023/11/Wifi.jpg",
        ],
      },
      amenities: [
        { name: "Single bed", icon: "fas fa-bed" },
        { name: "Air conditioning", icon: "fas fa-snowflake" },
        { name: "High-speed WiFi", icon: "fas fa-wifi" },
        { name: "Flat-screen TV", icon: "fas fa-tv" },
        { name: "Guest room telephone", icon: "fas fa-phone" },
        { name: "Standard bathroom with shower", icon: "fas fa-shower" },
        { name: "Toilet and sink", icon: "fas fa-toilet" },
        { name: "Water heater", icon: "fas fa-fire" },
        { name: "Working table", icon: "fas fa-desktop" },
        { name: "Premium toiletries", icon: "fas fa-pump-soap" },
      ],
    },
    {
      type: "double",
      name: "Double Room",
      price: 50,
      subtitle: "Ideal for couples or business travelers",
      description:
        "Our Double Rooms offer enhanced comfort and space, perfect for couples or business travelers. Featuring a comfortable double bed, these rooms include essential amenities such as air conditioning, high-speed WiFi, television, guest room phone, and a standard bathroom with shower, toilet, sink, and water heater. Most rooms include a working table and some feature wardrobe storage for added convenience.",
      capacity: 2,
      features: [
        "Double Bed",
        "Air Conditioning",
        "Free WiFi",
        "Private Bathroom",
        "Work Desk",
        "Television",
        "Telephone",
      ],
      images: {
        main: "https://images2.imgbox.com/ec/6f/zNm9SZge_o.jpg",
        gallery: [
          "https://images2.imgbox.com/a8/5d/JUlkNJLq_o.jpg",
          "https://images2.imgbox.com/53/29/JJxH2f7M_o.jpg",
          "https://showerstream.net/wp-content/uploads/AdobeStock_284213693-1-scaled-e1604531383170.jpeg",
          "https://www.lodgmate.com/images/uploads/lodgmate_ph201_electronic_hotel_room_phones_3_pop.jpg",
        ],
      },
      amenities: [
        { name: "Double bed", icon: "fas fa-bed" },
        { name: "Air conditioning", icon: "fas fa-snowflake" },
        { name: "High-speed WiFi", icon: "fas fa-wifi" },
        { name: "Flat-screen TV", icon: "fas fa-tv" },
        { name: "Guest room telephone", icon: "fas fa-phone" },
        { name: "Standard bathroom with shower", icon: "fas fa-shower" },
        { name: "Toilet and sink", icon: "fas fa-toilet" },
        { name: "Water heater", icon: "fas fa-fire" },
        { name: "Working table", icon: "fas fa-desktop" },
        { name: "Premium toiletries", icon: "fas fa-pump-soap" },
      ],
    },
    {
      type: "apartment",
      name: "Apartment Suite",
      price: 90,
      subtitle: "Complete home-like experience with kitchen",
      description:
        "Our Apartment Suites offer a complete home-away-from-home experience, perfect for extended stays. Featuring a double bed, small open kitchen, refrigerator, and small balcony, these suites provide maximum comfort and convenience. Includes all standard amenities plus the added benefit of self-catering facilities.",
      capacity: 2,
      features: [
        "Double Bed",
        "Small Open Kitchen",
        "Refrigerator",
        "Balcony",
        "Air Conditioning",
        "Free WiFi",
        "Private Bathroom",
        "Work Desk",
      ],
      images: {
        main: "https://images2.imgbox.com/a8/31/rBuDiUtO_o.jpg",
        gallery: [
          "https://images2.imgbox.com/29/7d/3DZwEFdu_o.jpg",
          "https://bacio.com/wp-content/uploads/2024/09/hotel-mini-fridge.jpg",
          "https://m.media-amazon.com/images/I/71GuCk2BumL.jpg",
          "https://images2.imgbox.com/83/62/OqUlB2Hs_o.jpg",
        ],
      },
      amenities: [
        { name: "Double bed", icon: "fas fa-bed" },
        { name: "Small open kitchen", icon: "fas fa-utensils" },
        { name: "Refrigerator", icon: "fas fa-snowflake" },
        { name: "Small balcony", icon: "fas fa-umbrella-beach" },
        { name: "Air conditioning", icon: "fas fa-snowflake" },
        { name: "High-speed WiFi", icon: "fas fa-wifi" },
        { name: "Flat-screen TV", icon: "fas fa-tv" },
        { name: "Guest room telephone", icon: "fas fa-phone" },
        { name: "Standard bathroom with shower", icon: "fas fa-shower" },
        { name: "Working table", icon: "fas fa-desktop" },
      ],
    },
    {
      type: "twin",
      name: "Twin Room",
      price: 80,
      subtitle: "Two double beds perfect for friends or family",
      description:
        "Our Twin Rooms feature two comfortable double beds, making them ideal for friends traveling together or small families. Enjoy the convenience of wardrobe storage, television, guest room phone, and a standard bathroom with shower, toilet, sink, and water heater. The room also includes a balcony for relaxing moments.",
      capacity: 4,
      features: [
        "Two Double Beds",
        "Balcony",
        "Wardrobe",
        "Air Conditioning",
        "Free WiFi",
        "Private Bathroom",
        "Television",
        "Telephone",
      ],
      images: {
        main: "https://images2.imgbox.com/ae/03/CXBoiao1_o.jpg",
        gallery: [
          "https://images2.imgbox.com/90/73/ZSgzfgl4_o.jpg",
          "https://images2.imgbox.com/1e/04/zhsCT5S0_o.jpg",
          "https://images2.imgbox.com/ae/03/CXBoiao1_o.jpg",
          "https://bathrooms365.com.ng/wp-content/uploads/2024/09/DCB206E3-184D-423E-B816-9370B743F259.jpeg",
        ],
      },
      amenities: [
        { name: "Two double beds", icon: "fas fa-bed" },
        { name: "Balcony", icon: "fas fa-umbrella-beach" },
        { name: "Wardrobe", icon: "fas fa-archive" },
        { name: "Air conditioning", icon: "fas fa-snowflake" },
        { name: "High-speed WiFi", icon: "fas fa-wifi" },
        { name: "Flat-screen TV", icon: "fas fa-tv" },
        { name: "Guest room telephone", icon: "fas fa-phone" },
        { name: "Standard bathroom with shower", icon: "fas fa-shower" },
        { name: "Toilet and sink", icon: "fas fa-toilet" },
        { name: "Water heater", icon: "fas fa-fire" },
      ],
    },
    {
      type: "family",
      name: "Family Suite",
      price: 150,
      subtitle: "Spacious accommodation for larger families",
      description:
        "Our Family Suite offers generous space for larger families or groups. Featuring four double beds, this suite includes wardrobe storage, television, fridge, guest room phones, and a luxurious bathroom with bathtub, sink, toilet, and water heater. Enjoy the added comfort of a balcony and ample space for everyone.",
      capacity: 8,
      features: [
        "Four Double Beds",
        "Bathtub",
        "Balcony",
        "Fridge",
        "Wardrobe",
        "Air Conditioning",
        "Free WiFi",
        "Television",
      ],
      images: {
        main: "https://images2.imgbox.com/e1/a4/1NWy1esT_o.jpg",
        gallery: [
          "https://images2.imgbox.com/e1/a4/1NWy1esT_o.jpg",
          "https://images2.imgbox.com/3d/bf/Vfetjdcn_o.jpg",
          "https://ibeeq.com/wp-content/uploads/2025/04/Samsung-telewizor-hotelowy-1024x498.webp",
          "https://images2.imgbox.com/15/12/YJjOTuSF_o.jpg",
        ],
      },
      amenities: [
        { name: "Four double beds", icon: "fas fa-bed" },
        { name: "Bathtub", icon: "fas fa-bath" },
        { name: "Balcony", icon: "fas fa-umbrella-beach" },
        { name: "Fridge", icon: "fas fa-snowflake" },
        { name: "Wardrobe", icon: "fas fa-archive" },
        { name: "Air conditioning", icon: "fas fa-snowflake" },
        { name: "High-speed WiFi", icon: "fas fa-wifi" },
        { name: "Flat-screen TV", icon: "fas fa-tv" },
        { name: "Guest room phones", icon: "fas fa-phone" },
        { name: "Premium toiletries", icon: "fas fa-pump-soap" },
      ],
    },
  ];

  let currentStep = 1;
  let selectedRoomType = null;
  let bookingSent = false;

  // Check if booking was previously sent
  if (completeBookingButton) {
    // Check if booking was previously sent
    const savedBookingSent = localStorage.getItem("bookingSent");
    if (savedBookingSent === "true") {
      bookingSent = true;
      completeBookingButton.disabled = false;
      completeBookingButton.classList.remove("btn-disabled");
      console.log("Booking previously sent, button enabled on load");
    } else {
      completeBookingButton.disabled = true;
      completeBookingButton.classList.add("btn-disabled");
      console.log("Booking not sent yet, button disabled");
    }
  }

  // ========== HEADER INITIALIZATION ==========

  // Initialize header functionality
  function initializeHeader() {
    // Populate dropdowns
    populateLanguageDropdowns();
    populateCurrencyDropdowns();

    // Load saved preferences
    const savedLanguage = localStorage.getItem("preferredLanguage") || "en";
    const savedCurrency = localStorage.getItem("preferredCurrency") || "USD";

    // Apply saved language
    changeLanguage(savedLanguage);

    // Apply saved currency
    convertPrices(savedCurrency);

    // Language dropdown functionality
    const languageDropdown = document.getElementById("languageDropdown");
    const languageButton = document.getElementById("languageButton");
    const languageDropdownMenu = document.getElementById(
      "languageDropdownMenu"
    );
    const mobileLanguageButton = document.getElementById(
      "mobileLanguageButton"
    );
    const mobileLanguageDropdown = document.getElementById(
      "mobileLanguageDropdown"
    );

    // Desktop language dropdown
    if (languageButton) {
      languageButton.addEventListener("click", function (e) {
        e.stopPropagation();
        languageDropdown.classList.toggle("active");
      });
    }

    // Mobile language dropdown
    if (mobileLanguageButton) {
      mobileLanguageButton.addEventListener("click", function (e) {
        e.stopPropagation();
        mobileLanguageDropdown.classList.toggle("active");
      });
    }

    // Language selection
    document
      .querySelectorAll(
        ".dropdown-item[data-lang], .mobile-language-option[data-lang]"
      )
      .forEach((item) => {
        item.addEventListener("click", function () {
          const lang = this.getAttribute("data-lang");
          changeLanguage(lang);
          if (languageDropdown) languageDropdown.classList.remove("active");
          if (mobileLanguageDropdown)
            mobileLanguageDropdown.classList.remove("active");
        });
      });

    // Currency dropdown functionality
    const currencyDropdown = document.getElementById("currency-dropdown");
    const currencyButton = document.getElementById("currency-button");
    const currencyDropdownMenu = document.getElementById(
      "currency-dropdown-menu"
    );
    const mobileCurrencyDropdown = document.getElementById(
      "mobile-currency-dropdown"
    );
    const mobileCurrencyToggle = document.querySelector(
      ".mobile-currency-toggle"
    );
    const mobileCurrencyMenu = document.querySelector(".mobile-currency-menu");

    // Desktop currency dropdown
    if (currencyButton) {
      currencyButton.addEventListener("click", function (e) {
        e.stopPropagation();
        currencyDropdown.classList.toggle("active");
      });
    }

    // Mobile currency dropdown
    if (mobileCurrencyToggle) {
      mobileCurrencyToggle.addEventListener("click", function (e) {
        e.stopPropagation();
        mobileCurrencyDropdown.classList.toggle("active");
      });
    }

    // Currency selection
    document
      .querySelectorAll(
        ".dropdown-item[data-currency], .mobile-currency-item[data-currency]"
      )
      .forEach((item) => {
        item.addEventListener("click", function () {
          const currency = this.getAttribute("data-currency");
          convertPrices(currency);
          if (currencyDropdown) currencyDropdown.classList.remove("active");
          if (mobileCurrencyDropdown)
            mobileCurrencyDropdown.classList.remove("active");
        });
      });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function () {
      if (languageDropdown) languageDropdown.classList.remove("active");
      if (currencyDropdown) currencyDropdown.classList.remove("active");
      if (mobileLanguageDropdown)
        mobileLanguageDropdown.classList.remove("active");
      if (mobileCurrencyDropdown)
        mobileCurrencyDropdown.classList.remove("active");
    });

    // Hamburger menu functionality
    const hamburgerCheckbox = document.getElementById("hamburger-checkbox");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const hamburgerMenu = document.getElementById("hamburger-menu");

    if (hamburgerCheckbox) {
      hamburgerCheckbox.addEventListener("change", function () {
        if (this.checked) {
          mobileMenu.classList.add("active");
          mobileMenuOverlay.classList.add("active");
          document.body.style.overflow = "hidden";
        } else {
          mobileMenu.classList.remove("active");
          mobileMenuOverlay.classList.remove("active");
          document.body.style.overflow = "";
        }
      });
    }

    // Close mobile menu when clicking overlay
    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener("click", function () {
        hamburgerCheckbox.checked = false;
        mobileMenu.classList.remove("active");
        this.classList.remove("active");
        document.body.style.overflow = "";
      });
    }

        // Close mobile menu when window is resized to larger size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (hamburgerCheckbox) {
                hamburgerCheckbox.checked = false;
            }
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
            if (mobileMenuOverlay) {
                mobileMenuOverlay.classList.remove('active');
            }
            document.body.style.overflow = 'auto';
        }
    });

    // Close mobile menu when clicking links
    document
      .querySelectorAll(".mobile-links a, .mobile-reserve-now")
      .forEach((link) => {
        link.addEventListener("click", function () {
          hamburgerCheckbox.checked = false;
          mobileMenu.classList.remove("active");
          mobileMenuOverlay.classList.remove("active");
          document.body.style.overflow = "";
        });
      });
  }

  // ========== BOOKING FORM FUNCTIONS ==========

  // Function to show a specific step with scrolling
  function showStep(step) {
    steps.forEach((s) => s.classList.remove("active"));
    document.getElementById(`step-${step}`).classList.add("active");
    currentStep = step;

    // Scroll to the top of the form when changing steps
    setTimeout(() => {
      const bookingContent = document.querySelector(".booking-content");
      if (bookingContent) {
        bookingContent.scrollTop = 0;
      }

      const bookingContainer = document.querySelector(".booking-container");
      if (bookingContainer) {
        const containerPosition =
          bookingContainer.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: containerPosition - 20,
          behavior: "smooth",
        });
      }
    }, 50);
  }

  // Generate room type cards with new layout
  function generateRoomCards() {
    roomsContainer.innerHTML = "";

    roomTypeData.forEach((roomType) => {
      const roomCard = document.createElement("div");
      roomCard.className = "room-card";
      roomCard.setAttribute("data-type", roomType.type);

      // Generate amenities preview (first 4 amenities)
      const amenitiesPreview = roomType.amenities
        .slice(0, 4)
        .map(
          (amenity) => `
                    <div class="amenity">
                        <div class="amenity-icon">
                            <i class="${amenity.icon}"></i>
                        </div>
                        <span class="amenity-name">${amenity.name}</span>
                    </div>
                `
        )
        .join("");

      // Generate feature tags
      const featureTags = roomType.features
        .slice(0, 3)
        .map((feature) => `<div class="feature-tag">${feature}</div>`)
        .join("");

      roomCard.innerHTML = `
                    <div class="room-image-section">
                        <img src="${roomType.images.main}" alt="${
        roomType.name
      }" class="room-image-large">
                        <div class="room-badge">${roomType.name.toUpperCase()}</div>
                        <button class="like-button" type="button">
                            <i class="far fa-heart"></i>
                        </button>
                        <div class="reserve-overlay">
                            <button type="button" class="btn-reserve">
                                <i class="fas fa-calendar-check"></i> Reserve Now
                            </button>
                        </div>
                    </div>
                    <div class="room-content-section">
                        <div class="room-header">
                            <h2 class="room-title">${roomType.name}</h2>
                            <div class="room-price">$${
                              roomType.price
                            }<span>/night</span></div>
                        </div>
                        
                        <p class="room-subtitle">${roomType.subtitle}</p>
                        
                        <div class="accordion">
                            <div class="accordion-header">
                                <span class="accordion-title"><i class="fas fa-info-circle"></i> Description</span>
                                <i class="fas fa-chevron-down accordion-icon"></i>
                            </div>
                            <div class="accordion-content">
                                ${roomType.description}
                            </div>
                        </div>
                        
                        <div class="amenities-section">
                            <h3 class="amenities-title"><i class="fas fa-crown"></i> Key Amenities</h3>
                            <div class="amenities-grid-small">
                                ${amenitiesPreview}
                            </div>
                        </div>
                        
                        <div class="room-features-small">
                            ${featureTags}
                        </div>
                        
                        <div class="room-footer">
                            <div class="capacity-info">
                                <i class="fas fa-user-friends"></i>
                                <span>Up to ${roomType.capacity} guest${
        roomType.capacity > 1 ? "s" : ""
      }</span>
                            </div>
                            <button type="button" class="btn-select">Select <i class="fas fa-check"></i></button>
                        </div>
                    </div>
                `;

      roomsContainer.appendChild(roomCard);
    });

    // Add event listeners to new room cards and buttons
    initializeRoomSelection();
  }

  function initializeRoomSelection() {
    const roomCards = document.querySelectorAll(".room-card");
    const selectButtons = document.querySelectorAll(".btn-select");
    const reserveButtons = document.querySelectorAll(".btn-reserve");
    const likeButtons = document.querySelectorAll(".like-button");
    const accordions = document.querySelectorAll(".accordion");

    // Room selection via Select button
    selectButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation();

        const roomCard = this.closest(".room-card");
        const roomType = roomCard.getAttribute("data-type");

        // Remove selected state from all cards and buttons
        roomCards.forEach((card) => {
          card.classList.remove("selected");
          const btn = card.querySelector(".btn-select");
          btn.classList.remove("selected");
          btn.innerHTML = 'Select <i class="fas fa-check"></i>';
        });

        // Add selected state to current card and button
        roomCard.classList.add("selected");
        this.classList.add("selected");
        this.innerHTML = 'Selected <i class="fas fa-check-circle"></i>';

        selectedRoomType = roomType;
        updateRoomDetails();

        // AUTOMATICALLY NAVIGATE TO ROOM DETAILS STEP
        updateProgress(2);
        showStep(2);
      });
    });

    // Room selection via Reserve Now button
    reserveButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation();

        const roomCard = this.closest(".room-card");
        const roomType = roomCard.getAttribute("data-type");
        const selectButton = roomCard.querySelector(".btn-select");

        // Remove selected state from all cards and buttons
        roomCards.forEach((card) => {
          card.classList.remove("selected");
          const btn = card.querySelector(".btn-select");
          btn.classList.remove("selected");
          btn.innerHTML = 'Select <i class="fas fa-check"></i>';
        });

        // Add selected state to current card and button
        roomCard.classList.add("selected");
        selectButton.classList.add("selected");
        selectButton.innerHTML = 'Selected <i class="fas fa-check-circle"></i>';

        selectedRoomType = roomType;
        updateRoomDetails();

        // AUTOMATICALLY NAVIGATE TO ROOM DETAILS STEP
        updateProgress(2);
        showStep(2);
      });
    });

    // Room selection via card click (backup)
    roomCards.forEach((card) => {
      card.addEventListener("click", function (e) {
        if (
          !e.target.closest(".btn-select") &&
          !e.target.closest(".btn-reserve") &&
          !e.target.closest(".like-button") &&
          !e.target.closest(".accordion-header")
        ) {
          const roomType = this.getAttribute("data-type");
          const button = this.querySelector(".btn-select");

          // Remove selected state from all cards and buttons
          roomCards.forEach((c) => {
            c.classList.remove("selected");
            const btn = c.querySelector(".btn-select");
            btn.classList.remove("selected");
            btn.innerHTML = 'Select <i class="fas fa-check"></i>';
          });

          // Add selected state to current card and button
          this.classList.add("selected");
          button.classList.add("selected");
          button.innerHTML = 'Selected <i class="fas fa-check-circle"></i>';

          selectedRoomType = roomType;
          updateRoomDetails();

          // AUTOMATICALLY NAVIGATE TO ROOM DETAILS STEP
          updateProgress(2);
          showStep(2);
        }
      });
    });

    // Like button functionality
    likeButtons.forEach((button) => {
      button.addEventListener("click", function (e) {
        e.stopPropagation();
        const icon = this.querySelector("i");
        if (icon.classList.contains("far")) {
          icon.classList.remove("far");
          icon.classList.add("fas");
          this.classList.add("liked");
        } else {
          icon.classList.remove("fas");
          icon.classList.add("far");
          this.classList.remove("liked");
        }
      });
    });

    // Enhanced accordion functionality
    accordions.forEach((accordion) => {
      const header = accordion.querySelector(".accordion-header");
      const roomCard = accordion.closest(".room-card");

      header.addEventListener("click", function () {
        const isActive = accordion.classList.contains("active");

        // Close all other accordions in the same card
        accordions.forEach((otherAccordion) => {
          if (
            otherAccordion !== accordion &&
            otherAccordion.closest(".room-card") === roomCard
          ) {
            otherAccordion.classList.remove("active");
          }
        });

        // Toggle current accordion
        accordion.classList.toggle("active");

        // Expand room card when accordion is opened
        if (!isActive) {
          roomCard.classList.add("expanded");
          roomCard.style.minHeight = "500px";
        } else {
          // Collapse after a delay to allow content to close
          setTimeout(() => {
            roomCard.classList.remove("expanded");
            roomCard.style.minHeight = "";
          }, 300);
        }
      });
    });
  }

  // Set minimum date for check-in to tomorrow
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfterTomorrow = new Date(tomorrow);
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 1);

  // Format date for input
  function formatDateForInput(date) {
    return date.toISOString().split("T")[0];
  }

  // Set initial values
  const checkInInput = document.getElementById("check-in");
  const checkOutInput = document.getElementById("check-out");

  if (checkInInput) {
    checkInInput.min = formatDateForInput(tomorrow);
    checkInInput.value = formatDateForInput(tomorrow);
    checkInInput.setAttribute("placeholder", "Select arrival date");
  }

  if (checkOutInput) {
    checkOutInput.min = formatDateForInput(dayAfterTomorrow);
    checkOutInput.value = formatDateForInput(dayAfterTomorrow);
    checkOutInput.setAttribute("placeholder", "Select departure date");
  }

  // Update check-out min date when check-in changes
  if (checkInInput) {
    checkInInput.addEventListener("change", function () {
      const selectedDate = new Date(this.value);
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);

      if (checkOutInput) {
        checkOutInput.min = formatDateForInput(nextDay);

        // If current check-out is before new min date, update it
        if (new Date(checkOutInput.value) < nextDay) {
          checkOutInput.value = formatDateForInput(nextDay);
        }
      }
    });
  }

  // Validate date selection
  if (checkOutInput) {
    checkOutInput.addEventListener("change", function () {
      const checkIn = new Date(checkInInput.value);
      const checkOut = new Date(this.value);

      if (checkOut <= checkIn) {
        alert("Departure date must be after arrival date");
        this.value = formatDateForInput(addDays(checkIn, 1));
      }
    });
  }

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  // Next button functionality
  nextButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const nextStep = parseInt(this.getAttribute("data-next"));

      // Validate current step before proceeding
      if (validateStep(currentStep)) {
        updateProgress(nextStep);
        showStep(nextStep);

        // Update summary if moving to confirmation step
        if (nextStep === 5) {
          updateBookingSummary();
        }
      }
    });
  });

  // Previous button functionality
  prevButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const prevStep = parseInt(this.getAttribute("data-prev"));
      updateProgress(prevStep);
      showStep(prevStep);
    });
  });

  // WhatsApp functionality
  if (sendWhatsAppButton) {
    sendWhatsAppButton.addEventListener("click", function () {
      sendWhatsAppMessage();
    });
  }

  if (sendWhatsAppFromModalButton) {
    sendWhatsAppFromModalButton.addEventListener("click", function () {
      sendWhatsAppMessage();
      if (whatsappInfoModal) {
        whatsappInfoModal.classList.remove("active");
      }
      document.body.style.overflow = "";
    });
  }

  // Close WhatsApp info modal
  if (closeWhatsappInfoButton) {
    closeWhatsappInfoButton.addEventListener("click", function () {
      if (whatsappInfoModal) {
        whatsappInfoModal.classList.remove("active");
      }
      document.body.style.overflow = "";
    });
  }

  // Complete booking functionality - FIXED VERSION
  if (completeBookingButton) {
    completeBookingButton.addEventListener("click", function () {
      console.log("Complete booking clicked, bookingSent:", bookingSent);

      // Check if button is disabled
      if (this.disabled) {
        console.log("Button is disabled - cannot proceed");
        showNotification(
          "Please send your booking via WhatsApp first",
          "warning"
        );
        return;
      }

      if (!bookingSent) {
        console.log("Booking not sent yet, showing modal");

        // Show WhatsApp info modal first
        if (whatsappInfoModal) {
          whatsappInfoModal.classList.add("active");
          // Add overlay to prevent clicking outside
          document.body.style.overflow = "hidden";
          console.log("Modal shown successfully");
        } else {
          console.error("WhatsApp info modal not found!");
          // Fallback: directly open WhatsApp
          sendWhatsAppMessage();
        }
      } else {
        console.log("Booking already sent, showing success modal");
        if (successModal) {
          successModal.classList.add("active");
          document.body.style.overflow = "hidden";
        }

        // Clear booking sent flag from localStorage
        localStorage.removeItem("bookingSent");

        // Redirect to index.html after 2 seconds
        setTimeout(function () {
          window.location.href = "index.html";
        }, 2000);
      }
    });
  }

  // Also update the markBookingAsSent function to properly enable the button:
  function markBookingAsSent() {
    bookingSent = true;

    // Enable and update complete booking button
    if (completeBookingButton) {
      completeBookingButton.disabled = false;
      completeBookingButton.classList.remove("btn-disabled");
      completeBookingButton.innerHTML =
        '<i class="fas fa-check"></i> Complete Booking';
      console.log("Complete booking button enabled");
    }

    // Update WhatsApp button to show it's been sent
    if (sendWhatsAppButton) {
      sendWhatsAppButton.innerHTML =
        '<i class="fas fa-check"></i> Sent via WhatsApp';
      sendWhatsAppButton.classList.add("btn-success");
      sendWhatsAppButton.classList.remove("btn-whatsapp");
    }

    // Save to localStorage to persist state
    localStorage.setItem("bookingSent", "true");

    // Show notification
    showNotification(
      "WhatsApp sent! Now you can complete your booking.",
      "success"
    );
  }

  // Update the sendWhatsAppMessage function to call markBookingAsSent:
  function sendWhatsAppMessage() {
    try {
      const bookingDetails = getBookingDetails();

      // Check if we have all required details
      if (!bookingDetails.roomType || !bookingDetails.checkIn) {
        showNotification(
          "Please complete all booking details first",
          "warning"
        );
        return;
      }

      const message = formatWhatsAppMessage(bookingDetails);
      const phoneNumber = "+256709093939";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`;

      window.open(whatsappUrl, "_blank");

      // Mark booking as sent - THIS ENABLES THE COMPLETE BOOKING BUTTON
      markBookingAsSent();

      // Auto-close modal if it's open
      if (whatsappInfoModal && whatsappInfoModal.classList.contains("active")) {
        whatsappInfoModal.classList.remove("active");
        document.body.style.overflow = "";
      }
    } catch (error) {
      console.error("Error sending WhatsApp message:", error);
      showNotification(
        "Error sending WhatsApp message. Please try again.",
        "warning"
      );
    }
  }

  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `alert-notification ${type}`;
    notification.innerHTML = `
                <i class="fas fa-${
                  type === "success" ? "check-circle" : "exclamation-triangle"
                }"></i>
                <span>${message}</span>
            `;

    // Add styles if not already present
    if (!document.querySelector(".alert-notification")) {
      const style = document.createElement("style");
      style.textContent = `
                    .alert-notification {
                        position: fixed;
                        top: 20px;
                        right: 20px;
                        padding: 15px 20px;
                        border-radius: 8px;
                        color: white;
                        z-index: 10000;
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        transform: translateX(120%);
                        transition: transform 0.3s ease;
                        max-width: 400px;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                    }
                    .alert-notification.active {
                        transform: translateX(0);
                    }
                    .alert-notification.success {
                        background: linear-gradient(135deg, #28a745, #20c997);
                        border-left: 4px solid #155724;
                    }
                    .alert-notification.warning {
                        background: linear-gradient(135deg, #ffc107, #fd7e14);
                        border-left: 4px solid #856404;
                    }
                    .alert-notification i {
                        font-size: 1.2em;
                    }
                `;
      document.head.appendChild(style);
    }

    // Add to body
    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.classList.add("active");
    }, 10);

    // Remove notification after 5 seconds
    setTimeout(() => {
      notification.classList.remove("active");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }

  function updateProgress(step) {
    // Update desktop progress steps
    progressSteps.forEach((progressStep, index) => {
      if (index + 1 < step) {
        progressStep.classList.remove("active");
        progressStep.classList.add("completed");
      } else if (index + 1 === step) {
        progressStep.classList.add("active");
        progressStep.classList.remove("completed");
      } else {
        progressStep.classList.remove("active", "completed");
      }
    });

    // Update mobile progress steps
    mobileSteps.forEach((mobileStep, index) => {
      if (index + 1 < step) {
        mobileStep.classList.remove("active");
        mobileStep.classList.add("completed");
      } else if (index + 1 === step) {
        mobileStep.classList.add("active");
        mobileStep.classList.remove("completed");
      } else {
        mobileStep.classList.remove("active", "completed");
      }
    });
  }

  function validateStep(step) {
    let isValid = true;

    if (step === 1) {
      if (!selectedRoomType) {
        showNotification(
          "Please select a room type before proceeding",
          "warning"
        );
        isValid = false;
      }
    } else if (step === 3) {
      const checkIn = document.getElementById("check-in").value;
      const checkOut = document.getElementById("check-out").value;

      if (!checkIn || !checkOut) {
        showNotification(
          "Please select both arrival and departure dates",
          "warning"
        );
        isValid = false;
      } else if (checkIn >= checkOut) {
        showNotification(
          "Departure date must be after arrival date",
          "warning"
        );
        isValid = false;
      }
    } else if (step === 4) {
      const firstName = document.getElementById("first-name").value;
      const lastName = document.getElementById("last-name").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;

      if (!firstName || !lastName || !email || !phone) {
        showNotification(
          "Please fill in all required personal details",
          "warning"
        );
        isValid = false;
      }
    }

    return isValid;
  }

  function updateRoomDetails() {
    if (!selectedRoomType) return;

    // Find room type data
    const roomType = roomTypeData.find((r) => r.type === selectedRoomType);
    if (!roomType) return;

    // Update room details display
    const heroRoomType = document.getElementById("hero-room-type");
    const heroRoomImage = document.getElementById("hero-room-image");
    const detailRoomPrice = document.getElementById("detail-room-price");
    const detailRoomDesc = document.getElementById("detail-room-desc");

    if (heroRoomType) heroRoomType.textContent = roomType.name;
    if (heroRoomImage) heroRoomImage.src = roomType.images.main;
    if (detailRoomPrice)
      detailRoomPrice.textContent = `$${roomType.price}/night`;
    if (detailRoomDesc) detailRoomDesc.textContent = roomType.description;

    // Update room images
    const roomImageElements = document.querySelectorAll(".room-image img");
    roomImageElements.forEach((img, index) => {
      if (roomType.images.gallery[index]) {
        img.src = roomType.images.gallery[index];
      }
    });

    // Update features list
    updateFeaturesList(roomType);

    // Update amenities display
    updateAmenitiesDisplay(roomType);
  }

  function updateFeaturesList(roomType) {
    if (!detailFeaturesList) return;

    detailFeaturesList.innerHTML = "";

    const features = [
      {
        icon: "fas fa-user-friends",
        text: `Up to ${roomType.capacity} guest${
          roomType.capacity > 1 ? "s" : ""
        }`,
      },
      {
        icon: "fas fa-bed",
        text:
          roomType.type === "single"
            ? "Single bed"
            : roomType.type === "twin"
            ? "Two double beds"
            : roomType.type === "family"
            ? "Four double beds"
            : "Double bed",
      },
      { icon: "fas fa-ruler-combined", text: "Comfortable layout" },
      { icon: "fas fa-door-open", text: "Private bathroom" },
      { icon: "fas fa-wind", text: "Air conditioning" },
    ];

    features.forEach((feature) => {
      const featureElement = document.createElement("div");
      featureElement.className = "room-feature";
      featureElement.innerHTML = `<i class="${feature.icon}"></i><span>${feature.text}</span>`;
      detailFeaturesList.appendChild(featureElement);
    });
  }

  function updateAmenitiesDisplay(roomType) {
    if (!amenitiesGrid) return;

    // Clear existing amenities
    amenitiesGrid.innerHTML = "";

    // Categorize amenities
    const categories = {
      "Essential Features": [],
      "Bathroom Features": [],
      "Additional Features": [],
    };

    roomType.amenities.forEach((amenity) => {
      if (
        amenity.name.includes("bathroom") ||
        amenity.name.includes("shower") ||
        amenity.name.includes("toilet") ||
        amenity.name.includes("sink") ||
        amenity.name.includes("water heater") ||
        amenity.name.includes("bathtub") ||
        amenity.name.includes("toiletries")
      ) {
        categories["Bathroom Features"].push(amenity);
      } else if (
        amenity.name.includes("kitchen") ||
        amenity.name.includes("balcony") ||
        amenity.name.includes("refrigerator") ||
        amenity.name.includes("fridge") ||
        amenity.name.includes("wardrobe")
      ) {
        categories["Additional Features"].push(amenity);
      } else {
        categories["Essential Features"].push(amenity);
      }
    });

    // Create HTML for each category
    for (const category in categories) {
      if (categories[category].length > 0) {
        const categoryDiv = document.createElement("div");
        categoryDiv.className = "amenity-category";

        // Create category title
        const categoryTitle = document.createElement("h3");
        categoryTitle.className = "amenity-category-title";

        // Set appropriate icon for each category
        let iconClass = "fas fa-star";
        if (category === "Essential Features")
          iconClass = "fas fa-check-circle";
        else if (category === "Bathroom Features") iconClass = "fas fa-bath";
        else if (category === "Additional Features")
          iconClass = "fas fa-plus-circle";

        categoryTitle.innerHTML = `<i class="${iconClass}"></i> ${category}`;

        // Create amenity list
        const amenityList = document.createElement("ul");
        amenityList.className = "amenity-list";

        // Add each amenity to the list
        categories[category].forEach((amenity) => {
          const amenityItem = document.createElement("li");
          amenityItem.className = "amenity-items";
          amenityItem.innerHTML = `<i class="${amenity.icon}"></i> ${amenity.name}`;
          amenityList.appendChild(amenityItem);
        });

        // Append title and list to category div
        categoryDiv.appendChild(categoryTitle);
        categoryDiv.appendChild(amenityList);

        // Append category to amenities grid
        amenitiesGrid.appendChild(categoryDiv);
      }
    }
  }

  function updateBookingSummary() {
    // Get values from form
    const checkIn = document.getElementById("check-in")?.value;
    const checkOut = document.getElementById("check-out")?.value;
    const adults = document.getElementById("adults")?.value;
    const children = document.getElementById("children")?.value;
    const firstName = document.getElementById("first-name")?.value;
    const lastName = document.getElementById("last-name")?.value;
    const email = document.getElementById("email")?.value;
    const phone = document.getElementById("phone")?.value;
    const specialRequests = document.getElementById("special-requests")?.value;

    // Find room type data
    const roomType = roomTypeData.find((r) => r.type === selectedRoomType);
    if (!roomType) return;

    // Format dates and calculate nights
    let nights = 0;
    let total = 0;

    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      // Calculate nights
      const timeDiff = checkOutDate - checkInDate;
      nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      total = roomType.price * nights;
    }

    // Update summary elements
    const summaryRoom = document.getElementById("summary-room");
    const summaryCheckin = document.getElementById("summary-checkin");
    const summaryCheckout = document.getElementById("summary-checkout");
    const summaryGuests = document.getElementById("summary-guests");
    const summaryNights = document.getElementById("summary-nights");
    const summaryName = document.getElementById("summary-name");
    const summaryContact = document.getElementById("summary-contact");
    const summaryRequests = document.getElementById("summary-requests");
    const summaryTotal = document.getElementById("summary-total");

    if (summaryRoom) summaryRoom.textContent = roomType.name;
    if (summaryCheckin)
      summaryCheckin.textContent = checkIn ? formatDate(checkIn) : "-";
    if (summaryCheckout)
      summaryCheckout.textContent = checkOut ? formatDate(checkOut) : "-";
    if (summaryGuests)
      summaryGuests.textContent =
        adults && children ? `${adults} Adult(s), ${children} Child(ren)` : "-";
    if (summaryNights)
      summaryNights.textContent = nights > 0 ? `${nights} Night(s)` : "-";
    if (summaryName)
      summaryName.textContent =
        firstName && lastName ? `${firstName} ${lastName}` : "-";
    if (summaryContact)
      summaryContact.textContent = phone && email ? `${phone} / ${email}` : "-";
    if (summaryRequests)
      summaryRequests.textContent = specialRequests || "None";
    if (summaryTotal) summaryTotal.textContent = total > 0 ? `$${total}` : "-";
  }

  function formatDate(dateString) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  }

  function getBookingDetails() {
    const checkIn = document.getElementById("check-in")?.value;
    const checkOut = document.getElementById("check-out")?.value;
    const adults = document.getElementById("adults")?.value;
    const children = document.getElementById("children")?.value;
    const firstName = document.getElementById("first-name")?.value;
    const lastName = document.getElementById("last-name")?.value;
    const email = document.getElementById("email")?.value;
    const phone = document.getElementById("phone")?.value;
    const specialRequests = document.getElementById("special-requests")?.value;

    // Find room type data
    const roomType = roomTypeData.find((r) => r.type === selectedRoomType);
    if (!roomType) return {};

    // Calculate nights and total
    let nights = 0;
    let total = 0;

    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const timeDiff = checkOutDate - checkInDate;
      nights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      total = roomType.price * nights;
    }

    return {
      roomType: roomType.name,
      checkIn: checkIn ? formatDate(checkIn) : "Not selected",
      checkOut: checkOut ? formatDate(checkOut) : "Not selected",
      adults: adults || "1",
      children: children || "0",
      nights,
      firstName: firstName || "Not provided",
      lastName: lastName || "Not provided",
      email: email || "Not provided",
      phone: phone || "Not provided",
      specialRequests: specialRequests || "None",
      total,
    };
  }

  function formatWhatsAppMessage(details) {
    return `Hello 7Days Motel Entebbe,

I would like to make a booking reservation:

*Room Type:* ${details.roomType}
*Arrival:* ${details.checkIn}
*Departure:* ${details.checkOut}
*Guests:* ${details.adults} Adult(s), ${details.children} Child(ren)
*Duration:* ${details.nights} Night(s)
*Guest Name:* ${details.firstName} ${details.lastName}
*Contact:* ${details.phone} / ${details.email}
*Special Requests:* ${details.specialRequests}
*Total Amount:* $${details.total}

Please confirm availability and booking details.

Thank you!`;
  }

  function markBookingAsSent() {
    bookingSent = true;

    // Enable and update complete booking button
    if (completeBookingButton) {
      completeBookingButton.disabled = false;
      completeBookingButton.innerHTML =
        '<i class="fas fa-check"></i> Complete Booking';
      completeBookingButton.classList.remove("btn-disabled");
    }

    // Update WhatsApp button to show it's been sent
    if (sendWhatsAppButton) {
      sendWhatsAppButton.innerHTML =
        '<i class="fas fa-check"></i> Sent via WhatsApp';
      sendWhatsAppButton.classList.add("btn-success");
      sendWhatsAppButton.classList.remove("btn-whatsapp");
    }

    // Save to localStorage to persist state
    localStorage.setItem("bookingSent", "true");

    // Show notification
    showNotification(
      "WhatsApp sent! Now you can complete your booking.",
      "success"
    );
  }

  function handleSidebarScroll() {
    const sidebar = document.querySelector(".progress-sidebar");
    const footer = document.querySelector(".luxury-footer");
    const bookingContainer = document.querySelector(".booking-container");

    if (!sidebar || !footer || !bookingContainer) return;

    // Get positions
    const footerTop = footer.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    // Calculate when footer starts to appear
    const footerStartsAt = footerTop + scrollPosition;

    // If footer is about to appear, switch sidebar positioning
    if (footerTop < windowHeight) {
      sidebar.classList.add("above-footer");
      // Position sidebar at the bottom of the container
      const containerBottom =
        bookingContainer.offsetTop + bookingContainer.offsetHeight;
      sidebar.style.top = "auto";
      sidebar.style.bottom = window.innerHeight - footerTop + "px";
    } else {
      sidebar.classList.remove("above-footer");
      sidebar.style.top = "140px";
      sidebar.style.bottom = "auto";
    }
  }

  // Throttle scroll for performance
  let scrollTimer;
  window.addEventListener("scroll", function () {
    if (scrollTimer) clearTimeout(scrollTimer);
    scrollTimer = setTimeout(handleSidebarScroll, 10);
  });

  window.addEventListener("resize", handleSidebarScroll);

  // Initialize the page
  initializeHeader();
  generateRoomCards();

  // Initial check
  setTimeout(handleSidebarScroll, 100);
});
