// ========== HEADER & NAVIGATION FUNCTIONS ==========

// Language data with country flags
const languages = [
    { code: 'en', name: 'English', flag: 'us' },
    { code: 'es', name: 'Español', flag: 'es' },
    { code: 'fr', name: 'Français', flag: 'fr' },
    { code: 'de', name: 'Deutsch', flag: 'de' },
    { code: 'it', name: 'Italiano', flag: 'it' },
    { code: 'pt', name: 'Português', flag: 'pt' },
    { code: 'ru', name: 'Русский', flag: 'ru' },
    { code: 'zh-CN', name: '中文 (简体)', flag: 'cn' },
    { code: 'zh-TW', name: '中文 (繁體)', flag: 'tw' },
    { code: 'ja', name: '日本語', flag: 'jp' },
    { code: 'ko', name: '한국어', flag: 'kr' },
    { code: 'vi', name: 'Tiếng Việt', flag: 'vn' },
    { code: 'nl', name: 'Nederlands', flag: 'nl' },
    { code: 'pl', name: 'Polski', flag: 'pl' },
    { code: 'tr', name: 'Türkçe', flag: 'tr' },
    { code: 'sw', name: 'Kiswahili', flag: 'ke' },
    { code: 'zu', name: 'isiZulu', flag: 'za' },
    { code: 'af', name: 'Afrikaans', flag: 'za' }
];

// Currency data
const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ' },
    { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh' },
    { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
    { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh' },
    { code: 'RWF', name: 'Rwandan Franc', symbol: 'RF' }
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
    RWF: 1320
};

// Initialize Google Translate
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false },
        'google_translate_element'
    );

    var style = document.createElement('style');
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
window.addEventListener('load', function() {
    const gtScript = document.createElement('script');
    gtScript.type = 'text/javascript';
    gtScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(gtScript);
});

// Populate language dropdowns
function populateLanguageDropdowns() {
    const desktopDropdown = document.getElementById('languageDropdownMenu');
    const mobileDropdown = document.getElementById('mobileLanguageDropdown')?.querySelector('.py-2');

    languages.forEach(lang => {
        // Desktop dropdown
        if (desktopDropdown) {
            const option = document.createElement('button');
            option.className = 'dropdown-item notranslate';
            option.setAttribute('data-lang', lang.code);

            const flagElement = document.createElement('span');
            flagElement.className = `flag fi fi-${lang.flag}`;
            const nameElement = document.createElement('span');
            nameElement.textContent = lang.name;

            option.appendChild(flagElement);
            option.appendChild(nameElement);
            desktopDropdown.appendChild(option);
        }

        // Mobile dropdown
        if (mobileDropdown) {
            const option = document.createElement('button');
            option.className = 'mobile-language-option notranslate';
            option.setAttribute('data-lang', lang.code);

            const flagElement = document.createElement('span');
            flagElement.className = `flag fi fi-${lang.flag}`;
            const nameElement = document.createElement('span');
            nameElement.textContent = lang.name;

            option.appendChild(flagElement);
            option.appendChild(nameElement);
            mobileDropdown.appendChild(option);
        }
    });
}

// Populate currency dropdowns
function populateCurrencyDropdowns() {
    const desktopDropdown = document.getElementById('currency-dropdown-menu');
    const mobileDropdown = document.querySelector('.mobile-currency-menu');

    currencies.forEach(currency => {
        // Desktop dropdown
        if (desktopDropdown) {
            const option = document.createElement('button');
            option.className = 'dropdown-item notranslate';
            option.setAttribute('data-currency', currency.code);

            const iconElement = document.createElement('i');
            iconElement.className = `fas fa-${currency.code === 'EUR' ? 'euro-sign' :
                currency.code === 'GBP' ? 'pound-sign' :
                    currency.code === 'JPY' || currency.code === 'CNY' ? 'yen-sign' :
                        currency.code === 'INR' ? 'rupee-sign' :
                            currency.code === 'RUB' ? 'ruble-sign' :
                                currency.code === 'THB' ? 'baht-sign' :
                                    currency.code === 'KRW' ? 'won-sign' :
                                        currency.code === 'TRY' ? 'lira-sign' :
                                            currency.code === 'AED' || currency.code === 'SAR' ? 'hashtag' : 'dollar-sign'}`;

            const nameElement = document.createElement('span');
            nameElement.textContent = `${currency.code} - ${currency.name}`;

            option.appendChild(iconElement);
            option.appendChild(nameElement);
            desktopDropdown.appendChild(option);
        }

        // Mobile dropdown
        if (mobileDropdown) {
            const option = document.createElement('button');
            option.className = 'mobile-currency-item notranslate';
            option.setAttribute('data-currency', currency.code);

            const iconElement = document.createElement('i');
            iconElement.className = `fas fa-${currency.code === 'EUR' ? 'euro-sign' :
                currency.code === 'GBP' ? 'pound-sign' :
                    currency.code === 'JPY' || currency.code === 'CNY' ? 'yen-sign' :
                        currency.code === 'INR' ? 'rupee-sign' :
                            currency.code === 'RUB' ? 'ruble-sign' :
                                currency.code === 'THB' ? 'baht-sign' :
                                    currency.code === 'KRW' ? 'won-sign' :
                                        currency.code === 'TRY' ? 'lira-sign' :
                                            currency.code === 'AED' || currency.code === 'SAR' ? 'hashtag' : 'dollar-sign'}`;

            const nameElement = document.createElement('span');
            nameElement.textContent = `${currency.code} - ${currency.name}`;

            option.appendChild(iconElement);
            option.appendChild(nameElement);
            mobileDropdown.appendChild(option);
        }
    });
}

// Function to change language
function changeLanguage(lang) {
    const currentLanguageElement = document.getElementById('currentLanguage');
    const mobileCurrentLanguageElement = document.getElementById('mobileCurrentLanguage');

    if (currentLanguageElement) {
        currentLanguageElement.textContent = lang.toUpperCase();
    }
    if (mobileCurrentLanguageElement) {
        mobileCurrentLanguageElement.textContent = lang.toUpperCase();
    }

    // Update active states
    document.querySelectorAll('.dropdown-item, .mobile-language-option').forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-lang') === lang) {
            item.classList.add('active');
        }
    });

    // Update flag on desktop
    const langData = languages.find(l => l.code === lang);
    if (langData && document.getElementById('currentFlag')) {
        const flagElement = document.getElementById('currentFlag');
        flagElement.className = 'flag fi';
        flagElement.classList.add(`fi-${langData.flag}`);
    }

    localStorage.setItem('preferredLanguage', lang);

    // Trigger Google Translate if available
    if (typeof google !== 'undefined' && google.translate) {
        setTimeout(function() {
            const select = document.querySelector('.goog-te-combo');
            if (select) {
                select.value = lang;
                select.dispatchEvent(new Event('change'));
            }
        }, 500);
    }
}

// Function to convert prices
function convertPrices(currency) {
    const rate = exchangeRates[currency];
    const currencyData = currencies.find(c => c.code === currency);
    const symbol = currencyData ? currencyData.symbol : '$';

    document.querySelectorAll('.price').forEach(priceElement => {
        const basePrice = parseFloat(priceElement.getAttribute('data-base-price'));
        if (!isNaN(basePrice)) {
            const convertedPrice = (basePrice * rate).toFixed(2);
            const originalText = priceElement.textContent;
            const textParts = originalText.split(' ');
            const textAfterPrice = textParts.slice(1).join(' ');
            priceElement.textContent = `${symbol}${convertedPrice} ${textAfterPrice}`;
        }
    });

    // Update currency displays
    const currentCurrencyElement = document.getElementById('currentCurrency');
    const mobileCurrentCurrencyElement = document.getElementById('mobileCurrentCurrency');
    if (currentCurrencyElement) currentCurrencyElement.textContent = currency;
    if (mobileCurrentCurrencyElement) mobileCurrentCurrencyElement.textContent = currency;

    // Update active states
    document.querySelectorAll('.dropdown-item, .mobile-currency-item').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll(`[data-currency="${currency}"]`).forEach(item => {
        item.classList.add('active');
    });

    localStorage.setItem('preferredCurrency', currency);
}

// ========== TESTIMONIAL CAROUSEL ==========

let currentSlide = 0;
let carouselInterval;

function initializeTestimonialCarousel() {
    const testimonialTrack = document.getElementById('testimonialTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselDots = document.getElementById('carouselDots');
    const testimonialCards = document.querySelectorAll('.testimonial-large-card');

    if (!testimonialTrack || !carouselDots) return;

    const totalSlides = testimonialCards.length;
    const slideWidth = 100;

    // Create dots for carousel
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.className = 'carousel-dot';
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-index', i);
        dot.addEventListener('click', () => goToSlide(i));
        carouselDots.appendChild(dot);
    }

    // Function to update carousel position
    function updateCarousel() {
        testimonialTrack.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // Function to go to specific slide
    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        if (currentSlide >= totalSlides) currentSlide = 0;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        updateCarousel();
    }

    // Next slide
    function nextSlide() {
        currentSlide++;
        if (currentSlide >= totalSlides) currentSlide = 0;
        updateCarousel();
    }

    // Previous slide
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = totalSlides - 1;
        updateCarousel();
    }

    // Event listeners for buttons
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // Auto-advance carousel every 5 seconds
    carouselInterval = setInterval(nextSlide, 5000);

    // Pause auto-advance on hover
    const carouselContainer = document.querySelector('.testimonial-carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(carouselInterval);
        });

        carouselContainer.addEventListener('mouseleave', () => {
            carouselInterval = setInterval(nextSlide, 5000);
        });
    }

    // Initialize carousel
    updateCarousel();
}

// ========== GALLERY & LIGHTBOX ==========

const galleryItems = [
    {
        title: "Executive Suite",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Our Executive Suite offers unparalleled luxury with panoramic city views, a king-sized bed, and premium amenities for the ultimate comfort experience. Perfect for business travelers and couples seeking an extraordinary stay.",
        features: [
            { icon: "fa-bed", text: "King Size Bed" },
            { icon: "fa-tv", text: "Smart TV" },
            { icon: "fa-wifi", text: "High-Speed WiFi" },
            { icon: "fa-wine-glass-alt", text: "Mini Bar" },
            { icon: "fa-bath", text: "Jacuzzi" },
            { icon: "fa-city", text: "City View" }
        ]
    },
    {
        title: "Ethiopian Coffee Lounge",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Experience authentic Ethiopian coffee in our cozy lounge. Our baristas prepare traditional coffee using freshly roasted beans, served with traditional Ethiopian snacks. A perfect place to relax and socialize.",
        features: [
            { icon: "fa-coffee", text: "Authentic Ethiopian Coffee" },
            { icon: "fa-fire", text: "Traditional Roasting" },
            { icon: "fa-cookie-bite", text: "Local Snacks" },
            { icon: "fa-users", text: "Social Lounge" },
            { icon: "fa-wifi", text: "Free WiFi" },
            { icon: "fa-book", text: "Reading Materials" }
        ]
    },
    {
        title: "Premium Bar",
        image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Our premium bar offers an extensive selection of spirits, wines, and signature cocktails. Enjoy expertly crafted drinks in an elegant atmosphere with live music on weekends.",
        features: [
            { icon: "fa-wine-bottle", text: "Extensive Wine List" },
            { icon: "fa-cocktail", text: "Signature Cocktails" },
            { icon: "fa-beer", text: "Craft Beers" },
            { icon: "fa-music", text: "Live Music" },
            { icon: "fa-users", text: "Bartender Service" },
            { icon: "fa-utensils", text: "Bar Snacks" }
        ]
    },
    {
        title: "Serene Gardens",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Our beautifully landscaped gardens provide a peaceful oasis for relaxation and meditation. Enjoy morning walks, afternoon tea, or evening strolls in our meticulously maintained green spaces.",
        features: [
            { icon: "fa-leaf", text: "Landscaped Gardens" },
            { icon: "fa-chair", text: "Seating Areas" },
            { icon: "fa-fountain", text: "Water Features" },
            { icon: "fa-sun", text: "Sun Decks" },
            { icon: "fa-utensils", text: "Garden Dining" },
            { icon: "fa-dove", text: "Peaceful Atmosphere" }
        ]
    },
    {
        title: "Spa & Massage",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Indulge in our rejuvenating spa treatments and therapeutic massages. Our certified therapists use premium products and techniques to help you relax, rejuvenate, and restore balance.",
        features: [
            { icon: "fa-spa", text: "Therapeutic Treatments" },
            { icon: "fa-hand-sparkles", text: "Massage Therapy" },
            { icon: "fa-bath", text: "Steam Room" },
            { icon: "fa-hot-tub", text: "Jacuzzi" },
            { icon: "fa-user-md", text: "Certified Therapists" },
            { icon: "fa-leaf", text: "Natural Products" }
        ]
    },
    {
        title: "Secure Parking",
        image: "https://images.unsplash.com/photo-1551524165-6b6e5a6166f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Our 24/7 monitored parking facility ensures your vehicle's safety with CCTV surveillance, security personnel, and well-lit spaces. Valet parking service is also available for added convenience.",
        features: [
            { icon: "fa-shield-alt", text: "24/7 Security" },
            { icon: "fa-video", text: "CCTV Surveillance" },
            { icon: "fa-lightbulb", text: "Well-Lit Area" },
            { icon: "fa-car", text: "Valet Service" },
            { icon: "fa-key", text: "Secure Access" },
            { icon: "fa-user-shield", text: "Security Personnel" }
        ]
    },
    {
        title: "Grand Lobby",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Our elegant lobby welcomes you with luxurious decor, comfortable seating areas, and exceptional service from our concierge team. Experience the perfect blend of modern comfort and classic elegance.",
        features: [
            { icon: "fa-concierge-bell", text: "24/7 Concierge" },
            { icon: "fa-coffee", text: "Welcome Drinks" },
            { icon: "fa-wifi", text: "Free WiFi" },
            { icon: "fa-newspaper", text: "Newspapers" },
            { icon: "fa-music", text: "Live Piano Music" },
            { icon: "fa-parking", text: "Valet Parking" }
        ]
    },
    {
        title: "Fine Dining Restaurant",
        image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        description: "Indulge in gourmet cuisine at our fine dining restaurant, featuring both local and international dishes prepared by our award-winning chefs. Enjoy an exquisite dining experience in an elegant setting.",
        features: [
            { icon: "fa-utensils", text: "Gourmet Cuisine" },
            { icon: "fa-wine-bottle", text: "Wine Selection" },
            { icon: "fa-users", text: "Private Dining" },
            { icon: "fa-music", text: "Live Entertainment" },
            { icon: "fa-sun", text: "Outdoor Terrace" },
            { icon: "fa-leaf", text: "Vegetarian Options" }
        ]
    }
];

function initializeGallery() {
    const galleryItemsElements = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('galleryLightbox');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxFeatures = document.getElementById('lightboxFeatures');
    const closeLightbox = document.getElementById('closeLightbox');
    const closeLightboxBtn = document.getElementById('closeLightboxBtn');

    if (!lightbox) return;

    // Open lightbox when gallery item is clicked
    galleryItemsElements.forEach(item => {
        item.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            const galleryItem = galleryItems[index];

            if (lightboxTitle) lightboxTitle.textContent = galleryItem.title;
            if (lightboxImage) lightboxImage.src = galleryItem.image;
            if (lightboxDescription) lightboxDescription.textContent = galleryItem.description;

            // Clear previous features
            if (lightboxFeatures) {
                lightboxFeatures.innerHTML = '';
                galleryItem.features.forEach(feature => {
                    const featureElement = document.createElement('div');
                    featureElement.className = 'feature-tag';
                    featureElement.innerHTML = `<i class="fas ${feature.icon}"></i> ${feature.text}`;
                    lightboxFeatures.appendChild(featureElement);
                });
            }

            // Show lightbox
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });

    // Close lightbox
    const closeLightboxFunc = () => {
        if (lightbox) lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (closeLightbox) closeLightbox.addEventListener('click', closeLightboxFunc);
    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightboxFunc);

    // Close lightbox when clicking outside content
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightboxFunc();
            }
        });
    }
}

// ========== WHATSAPP INTEGRATION ==========

function initializeWhatsApp() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    const whatsappModal = document.getElementById('whatsappModal');
    const closeWhatsappModal = document.getElementById('closeWhatsappModal');
    const cancelWhatsapp = document.getElementById('cancelWhatsapp');
    const confirmWhatsapp = document.getElementById('confirmWhatsapp');
    const contactForm = document.getElementById('contactForm');

    if (!whatsappBtn || !whatsappModal) return;

    // WhatsApp button click handler
    whatsappBtn.addEventListener('click', function() {
        const name = document.getElementById('name')?.value;
        const email = document.getElementById('email')?.value;
        const phone = document.getElementById('phone')?.value;
        const guests = document.getElementById('guests')?.value;
        const checkin = document.getElementById('checkin')?.value;
        const subject = document.getElementById('subject')?.value;
        const message = document.getElementById('message')?.value;

        // Validate required fields
        if (!name || !email || !phone || !subject || !message) {
            alert("Please fill in all required fields (*) before sending via WhatsApp.");
            return;
        }

        // Format date if provided
        let checkinFormatted = "Not specified";
        if (checkin) {
            const dateObj = new Date(checkin);
            checkinFormatted = dateObj.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }

        // Format guests if provided
        let guestsFormatted = "Not specified";
        if (guests) {
            guestsFormatted = guests === "5+" ? "5 or more guests" : `${guests} guest${guests > 1 ? 's' : ''}`;
        }

        // Create WhatsApp message
        const whatsappMessage = `*New Inquiry for 7Days Motel Entebbe*

*Name:* ${name}
*Email:* ${email}
*Phone:* ${phone}
*Number of Guests:* ${guestsFormatted}
*Check-in Date:* ${checkinFormatted}
*Subject:* ${subject}

*Message:*
${message}

---
Sent via 7Days Motel Website`;

        // Store the message for sending
        window.whatsappMessageToSend = encodeURIComponent(whatsappMessage);

        // Show the modal
        whatsappModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close WhatsApp modal
    const closeWhatsappModalFunc = () => {
        whatsappModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    if (closeWhatsappModal) closeWhatsappModal.addEventListener('click', closeWhatsappModalFunc);
    if (cancelWhatsapp) cancelWhatsapp.addEventListener('click', closeWhatsappModalFunc);

    // Confirm and open WhatsApp
    if (confirmWhatsapp) {
        confirmWhatsapp.addEventListener('click', function() {
            const phoneNumber = "256762017465";
            const message = window.whatsappMessageToSend;

            if (message) {
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                closeWhatsappModalFunc();
                alert("Opening WhatsApp... Please send the pre-filled message to complete your inquiry.");
            }
        });
    }

    // Close modal when clicking outside
    whatsappModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closeWhatsappModalFunc();
        }
    });

    // Form submission triggers WhatsApp button
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            whatsappBtn.click();
        });

        // Handle Enter key in form fields
        document.querySelectorAll('#contactForm input, #contactForm textarea, #contactForm select').forEach(field => {
            field.addEventListener('keypress', function(e) {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    whatsappBtn.click();
                }
            });
        });
    }
}

// ========== NEWSLETTER FORM ==========

function initializeNewsletter() {
    const form = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const successMessage = document.getElementById('successMessage');

    if (!form || !emailInput) return;

    // Add modern input interaction
    emailInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
        this.style.borderColor = 'var(--gold)';
        this.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.25)';
        this.style.backgroundColor = 'var(--white)';
        this.style.color = 'var(--evergreen)';
    });

    emailInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
        if (!this.value) {
            this.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
            this.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            this.style.color = 'var(--charcoal)';
        }
    });

    emailInput.addEventListener('input', function() {
        if (this.value) {
            this.style.borderColor = 'var(--evergreen)';
            this.style.color = 'var(--evergreen)';
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            // Show error state
            emailInput.style.borderColor = 'var(--crimson)';
            emailInput.style.boxShadow = '0 8px 25px rgba(195, 32, 38, 0.25)';
            emailInput.style.backgroundColor = '#fff0f0';

            // Shake animation for error
            emailInput.style.animation = 'shake 0.5s ease-in-out';
            setTimeout(() => {
                emailInput.style.animation = '';
            }, 500);

            setTimeout(() => {
                if (emailInput.value) {
                    emailInput.style.borderColor = 'var(--evergreen)';
                    emailInput.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                    emailInput.style.backgroundColor = 'var(--white)';
                } else {
                    emailInput.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    emailInput.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                    emailInput.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                }
            }, 2000);

            return;
        }

        // Show success message
        if (successMessage) successMessage.style.display = 'block';

        // Add animation to button
        const submitBtns = form.querySelector('.btns-primary');
        if (submitBtns) {
            const originalHTML = submitBtns.innerHTML;
            submitBtns.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            submitBtns.style.background = 'linear-gradient(135deg, var(--evergreen) 0%, var(--evergreen-dark) 100%)';
            submitBtns.style.pointerEvents = 'none';
        }

        // Change input to success state
        emailInput.style.borderColor = 'var(--evergreen)';
        emailInput.style.boxShadow = '0 5px 15px rgba(15, 58, 52, 0.25)';
        emailInput.style.backgroundColor = 'rgba(244, 228, 166, 0.2)';
        emailInput.disabled = true;

        // Reset form after 4 seconds
        setTimeout(() => {
            form.reset();
            if (submitBtns) {
                submitBtns.innerHTML = originalHTML;
                submitBtns.style.background = '';
                submitBtns.style.pointerEvents = '';
            }

            emailInput.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            emailInput.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
            emailInput.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            emailInput.style.color = 'var(--charcoal)';
            emailInput.disabled = false;
        }, 4000);

        // Hide success message after 5 seconds
        setTimeout(() => {
            if (successMessage) successMessage.style.display = 'none';
        }, 5000);
    });

    // Initialize label position if browser autofills
    setTimeout(() => {
        if (emailInput.value) {
            emailInput.dispatchEvent(new Event('input'));
        }
    }, 100);
}

// ========== MOBILE PREVENTION & SCROLLING ==========

function preventMobileHorizontalScroll() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
        let startX = 0;
        let startY = 0;

        document.addEventListener('touchstart', function(e) {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        }, { passive: false });

        document.addEventListener('touchmove', function(e) {
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;

            const diffX = Math.abs(currentX - startX);
            const diffY = Math.abs(currentY - startY);

            if (diffX > diffY) {
                e.preventDefault();
            }
        }, { passive: false });

        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                * {
                    -webkit-user-drag: none;
                    -khtml-user-drag: none;
                    -moz-user-drag: none;
                    -o-user-drag: none;
                    user-drag: none;
                }
                
                body, html {
                    overscroll-behavior-x: none !important;
                    overflow-x: hidden !important;
                    width: 100vw !important;
                    position: relative !important;
                }
                
                @supports (-webkit-touch-callout: none) {
                    body, html {
                        height: -webkit-fill-available;
                    }
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ========== ANIMATIONS & SCROLL OBSERVER ==========

function initializeAnimations() {
    const featureCards = document.querySelectorAll('.feature-card');
    const galleryItems = document.querySelectorAll('.gallery-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.95)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}

// ========== SMOOTH SCROLLING ==========

function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========== ESCAPE KEY HANDLER ==========

function initializeEscapeKey() {
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('galleryLightbox');
        const whatsappModal = document.getElementById('whatsappModal');

        if (e.key === 'Escape') {
            if (lightbox && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
            if (whatsappModal && whatsappModal.classList.contains('active')) {
                whatsappModal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
}

// ========== HEADER INITIALIZATION ==========

function initializeHeader() {
    // Desktop Language Dropdown
    const languageButton = document.getElementById('languageButton');
    const languageDropdown = document.getElementById('languageDropdown');

    if (languageButton && languageDropdown) {
        languageButton.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('active');

            document.querySelectorAll('.dropdown').forEach(dropdown => {
                if (dropdown !== languageDropdown && dropdown.classList.contains('active')) {
                    dropdown.classList.remove('active');
                }
            });
        });

        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageButton.contains(e.target) && !languageDropdown.contains(e.target)) {
                languageDropdown.classList.remove('active');
            }
        });

        // Language selection
        document.querySelectorAll('#languageDropdownMenu .dropdown-item').forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                languageDropdown.classList.remove('active');
            });
        });
    }

    // Mobile Language Dropdown
    const mobileLanguageButton = document.getElementById('mobileLanguageButton');
    const mobileLanguageDropdown = document.getElementById('mobileLanguageDropdown');

    if (mobileLanguageButton && mobileLanguageDropdown) {
        mobileLanguageButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileLanguageDropdown.classList.toggle('active');

            const icon = this.querySelector('.fa-chevron-down');
            if (mobileLanguageDropdown.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0)';
            }

            // Close other dropdowns
            document.querySelectorAll('.mobile-currency-dropdown').forEach(dropdown => {
                if (dropdown.classList.contains('active')) {
                    dropdown.classList.remove('active');
                    const otherIcon = dropdown.querySelector('i');
                    if (otherIcon) {
                        otherIcon.style.transform = 'rotate(0)';
                    }
                }
            });
        });

        // Mobile language selection
        document.querySelectorAll('#mobileLanguageDropdown .mobile-language-option').forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                changeLanguage(lang);
                mobileLanguageDropdown.classList.remove('active');
                mobileLanguageButton.querySelector('.fa-chevron-down').style.transform = 'rotate(0)';
            });
        });
    }

    // Desktop Currency Dropdown
    const currencyButton = document.getElementById('currency-button');
    const currencyDropdown = document.getElementById('currency-dropdown');

    if (currencyButton && currencyDropdown) {
        currencyButton.addEventListener('click', function(e) {
            e.stopPropagation();
            currencyDropdown.classList.toggle('active');

            document.querySelectorAll('.dropdown').forEach(dropdown => {
                if (dropdown !== currencyDropdown && dropdown.classList.contains('active')) {
                    dropdown.classList.remove('active');
                }
            });
        });

        // Close when clicking outside
        document.addEventListener('click', function(e) {
            if (!currencyButton.contains(e.target) && !currencyDropdown.contains(e.target)) {
                currencyDropdown.classList.remove('active');
            }
        });

        // Currency selection
        document.querySelectorAll('#currency-dropdown-menu .dropdown-item').forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const currency = this.getAttribute('data-currency');
                convertPrices(currency);
                currencyDropdown.classList.remove('active');
            });
        });
    }

    // Mobile Currency Dropdown
    const mobileCurrencyButton = document.querySelector('#mobile-currency-dropdown .mobile-currency-toggle');
    const mobileCurrencyDropdown = document.getElementById('mobile-currency-dropdown');

    if (mobileCurrencyButton && mobileCurrencyDropdown) {
        mobileCurrencyButton.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileCurrencyDropdown.classList.toggle('active');

            const icon = this.querySelector('i');
            if (mobileCurrencyDropdown.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0)';
            }

            if (mobileLanguageDropdown && mobileLanguageDropdown.classList.contains('active')) {
                mobileLanguageDropdown.classList.remove('active');
                const langIcon = mobileLanguageButton.querySelector('.fa-chevron-down');
                if (langIcon) {
                    langIcon.style.transform = 'rotate(0)';
                }
            }
        });

        // Mobile currency selection
        document.querySelectorAll('.mobile-currency-item').forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const currency = this.getAttribute('data-currency');
                convertPrices(currency);
                mobileCurrencyDropdown.classList.remove('active');
                mobileCurrencyButton.querySelector('i').style.transform = 'rotate(0)';
            });
        });
    }

    // Mobile menu toggle
    const hamburgerCheckbox = document.getElementById('hamburger-checkbox');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

    if (hamburgerCheckbox && mobileMenu && mobileMenuOverlay) {
        hamburgerCheckbox.addEventListener('change', function() {
            if (this.checked) {
                mobileMenu.classList.add('active');
                mobileMenuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close mobile menu when clicking on overlay
        mobileMenuOverlay.addEventListener('click', function() {
            hamburgerCheckbox.checked = false;
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-links a, .mobile-reserve-now').forEach(link => {
            link.addEventListener('click', () => {
                hamburgerCheckbox.checked = false;
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
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
}

// ========== MAIN INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', function() {
    // Initialize header and navigation
    populateLanguageDropdowns();
    populateCurrencyDropdowns();
    initializeHeader();

    // Initialize with saved preferences
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);

    const savedCurrency = localStorage.getItem('preferredCurrency') || 'USD';
    convertPrices(savedCurrency);

    // Initialize other functionalities
    initializeTestimonialCarousel();
    initializeGallery();
    initializeWhatsApp();
    initializeNewsletter();
    preventMobileHorizontalScroll();
    initializeAnimations();
    initializeSmoothScrolling();
    initializeEscapeKey();

    // Add shake animation for newsletter error state
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(style);
});