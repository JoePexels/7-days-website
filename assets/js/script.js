// ============================================
// GLOBAL UTILITIES
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ============================================
// ROOM DATA (Shared across sections)
// ============================================

const roomData = [
    {
        id: "single",
        name: "Single Room",
        price: "$40/night",
        basePrice: 40,
        ribbons: "Budget Friendly",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=80",
        rating: 4.1,
        reviews: 58,
        guests: 1,
        description: "A comfortable and affordable Single Room ideal for solo travelers. Equipped with essential amenities like AC, WiFi, wardrobe, television, guest phone and a clean standard bathroom. Perfect for business stays or quick stopovers.",
        features: [
            { icon: "fas fa-wifi", text: "Free WiFi" },
            { icon: "fas fa-snowflake", text: "Air Conditioning" },
            { icon: "fas fa-tv", text: "Flat-Screen TV" },
            { icon: "fas fa-phone", text: "Guest Room Phone" },
            { icon: "fas fa-bath", text: "Standard Bathroom" },
            { icon: "fas fa-bed", text: "Single Bed" }
        ],
        roomSize: "20 m²",
        maxGuests: "1 Adult",
        bedType: "Single Bed",
        view: "Courtyard View",
        galleryImages: [
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1560067174-89456ad09d9c?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: "deluxe",
        name: "Deluxe Room",
        price: "$160/night",
        basePrice: 160,
        ribbons: "Best Value",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=80",
        rating: 4.4,
        reviews: 96,
        guests: 2,
        description: "A spacious Deluxe Room offering comfort and convenience. Features AC, WiFi, wardrobe, television, fridge, and a standard bathroom with water heater. Ideal for couples or travelers needing extra space.",
        features: [
            { icon: "fas fa-wifi", text: "Unlimited WiFi" },
            { icon: "fas fa-snowflake", text: "Air Conditioning" },
            { icon: "fas fa-tv", text: "Flat-Screen TV" },
            { icon: "fas fa-ice-cream", text: "Mini Fridge" },
            { icon: "fas fa-phone", text: "Guest Phone" },
            { icon: "fas fa-bath", text: "Standard Bathroom" }
        ],
        roomSize: "28 m²",
        maxGuests: "2 Adults",
        bedType: "Queen Bed",
        view: "Garden View",
        galleryImages: [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: "double",
        name: "Double Room",
        price: "$50/night",
        basePrice: 50,
        ribbons: "Popular Choice",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=80",
        rating: 4.6,
        reviews: 82,
        guests: 2,
        description: "A well-appointed Double Room with two double beds, AC, WiFi, wardrobe, television, and a standard bathroom with water heater. Ideal for friends, colleagues, or small families.",
        features: [
            { icon: "fas fa-bed", text: "Two Double Beds" },
            { icon: "fas fa-wifi", text: "Free WiFi" },
            { icon: "fas fa-tv", text: "Smart TV" },
            { icon: "fas fa-phone", text: "Guest Phone" },
            { icon: "fas fa-snowflake", text: "Air Conditioning" },
            { icon: "fas fa-bath", text: "Standard Bathroom" }
        ],
        roomSize: "32 m²",
        maxGuests: "2 Adults + 1 Child",
        bedType: "2 Double Beds",
        view: "City View",
        galleryImages: [
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: "family",
        name: "Family Suite",
        price: "$160/night",
        basePrice: 160,
        ribbons: "Family Friendly",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=80",
        rating: 4.8,
        reviews: 89,
        guests: 5,
        description: "A spacious Family Suite perfect for large families. Includes four double beds, AC, WiFi, wardrobe, television, fridge, guest room phones, a standard bathroom with bathtub, and a private balcony.",
        features: [
            { icon: "fas fa-bed", text: "4 Double Beds" },
            { icon: "fas fa-wifi", text: "High-Speed WiFi" },
            { icon: "fas fa-tv", text: "Multiple TVs" },
            { icon: "fas fa-snowflake", text: "Air Conditioning" },
            { icon: "fas fa-ice-cream", text: "Fridge" },
            { icon: "fas fa-bath", text: "Bathtub & Water Heater" }
        ],
        roomSize: "50 m²",
        maxGuests: "4 Adults + 2 Children",
        bedType: "4 Double Beds",
        view: "Balcony View",
        galleryImages: [
            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1592229505720-cf0eab629ab4?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: "twin",
        name: "Twin Room",
        price: "$80/night",
        basePrice: 80,
        ribbons: "Great for Friends",
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80",
        rating: 4.3,
        reviews: 73,
        guests: 2,
        description: "A comfortable Twin Room featuring two double beds, AC, WiFi, wardrobe, television, guest room phone, a standard bathroom with water heater, and a private balcony. Perfect for friends, siblings, or colleagues.",
        features: [
            { icon: "fas fa-bed", text: "Two Double Beds" },
            { icon: "fas fa-wifi", text: "Free WiFi" },
            { icon: "fas fa-tv", text: "Television" },
            { icon: "fas fa-phone", text: "Guest Room Phone" },
            { icon: "fas fa-snowflake", text: "Air Conditioning" },
            { icon: "fas fa-bath", text: "Standard Bathroom" }
        ],
        roomSize: "30 m²",
        maxGuests: "2 Adults",
        bedType: "2 Double Beds",
        view: "Balcony View",
        galleryImages: [
            "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&auto=format&fit=crop&q=80"
        ]
    },
    {
        id: "apartment",
        name: "Luxury Apartment Suite",
        price: "$60/night",
        basePrice: 60,
        ribbons: "Long Stay",
        image: "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=500&auto=format&fit=crop&q=80",
        rating: 4.9,
        reviews: 54,
        guests: 6,
        description: "A fully furnished Apartment Suite designed for long stays and families. Includes a living room, kitchenette, AC, WiFi, fridge, wardrobe, multiple beds, spacious bathroom and balcony with beautiful views.",
        features: [
            { icon: "fas fa-home", text: "Living Room" },
            { icon: "fas fa-utensils", text: "Kitchenette" },
            { icon: "fas fa-wifi", text: "High-Speed WiFi" },
            { icon: "fas fa-tv", text: "Smart TV" },
            { icon: "fas fa-snowflake", text: "Air Conditioning" },
            { icon: "fas fa-bath", text: "Spacious Bathroom" }
        ],
        roomSize: "85 m²",
        maxGuests: "6 Guests",
        bedType: "Multiple Beds",
        view: "Panoramic Balcony View",
        galleryImages: [
            "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&auto=format&fit=crop&q=80"
        ]
    }
];

// ============================================
// CURRENCY AND EXCHANGE RATES
// ============================================

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

// Exchange rates (relative to USD) - using realistic rates
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

// ============================================
// 1. HEADER & NAVIGATION
// ============================================

class HeaderManager {
    constructor() {
        this.hamburger = document.getElementById('hamburger-checkbox');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.mobileOverlay = document.getElementById('mobile-menu-overlay');
        this.mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
        this.header = document.querySelector('.main-header');
        
        this.init();
    }

    init() {
        this.setupMobileMenu();
        this.setupDropdowns();
        this.setupStickyHeader();
        this.setupLanguageCurrency();
        this.hideScrollbars();
    }

    hideScrollbars() {
        // Hide scrollbars but keep functionality
        const style = document.createElement('style');
        style.textContent = `
            /* Hide scrollbars but keep functionality */
            ::-webkit-scrollbar {
                display: none;
            }
            
            * {
                -ms-overflow-style: none;  /* IE and Edge */
                scrollbar-width: none;  /* Firefox */
            }
            
            /* Ensure content doesn't overflow horizontally */
            html, body {
                overflow-x: hidden;
                max-width: 100vw;
                position: relative;
            }
            
            /* Prevent horizontal scroll */
            .container, .section, .hero-carousel-track, .carousels {
                max-width: 100%;
                overflow-x: hidden;
            }
        `;
        document.head.appendChild(style);
    }

    setupMobileMenu() {
        if (!this.hamburger || !this.mobileMenu) return;

        this.hamburger.addEventListener('change', () => {
            const isOpen = this.hamburger.checked;
            this.mobileMenu.classList.toggle('active', isOpen);
            if (this.mobileOverlay) this.mobileOverlay.classList.toggle('active', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('#mobile-menu') && 
                !e.target.closest('.hamburger-container') && 
                this.hamburger.checked) {
                this.hamburger.checked = false;
                this.mobileMenu.classList.remove('active');
                if (this.mobileOverlay) this.mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close on window resize
        window.addEventListener('resize', debounce(() => {
            if (window.innerWidth > 768 && this.hamburger.checked) {
                this.hamburger.checked = false;
                this.mobileMenu.classList.remove('active');
                if (this.mobileOverlay) this.mobileOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        }, 250));
    }

    setupDropdowns() {
        // Mobile dropdown toggles
        this.mobileDropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.mobile-dropdown-toggle');
            const chevron = dropdown.querySelector('.fa-chevron-down');
            
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Close other dropdowns
                    this.mobileDropdowns.forEach(d => {
                        if (d !== dropdown) {
                            d.classList.remove('active');
                            const otherChevron = d.querySelector('.fa-chevron-down');
                            if (otherChevron) otherChevron.style.transform = 'rotate(0deg)';
                        }
                    });
                    
                    // Toggle current dropdown
                    dropdown.classList.toggle('active');
                    if (chevron) {
                        chevron.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
                    }
                });
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            this.mobileDropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
                const chevron = dropdown.querySelector('.fa-chevron-down');
                if (chevron) chevron.style.transform = 'rotate(0deg)';
            });
        });
    }

    setupStickyHeader() {
        if (!this.header) return;

        let lastScrollTop = 0;
        
        window.addEventListener('scroll', throttle(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 100) {
                this.header.classList.add('scrolled');
            } else {
                this.header.classList.remove('scrolled');
            }
            
            // Hide/show on scroll
            if (scrollTop > lastScrollTop && scrollTop > 200) {
                // Scrolling down
                this.header.style.transform = 'translateY(-100%)';
                this.header.style.transition = 'transform 0.3s ease';
            } else {
                // Scrolling up
                this.header.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        }, 100));
    }

    setupLanguageCurrency() {
        // Desktop dropdowns
        const languageButton = document.getElementById('languageButton');
        const languageDropdown = document.getElementById('languageDropdown');
        const currencyButton = document.getElementById('currency-button');
        const currencyDropdown = document.getElementById('currency-dropdown');

        // Language dropdown
        if (languageButton && languageDropdown) {
            languageButton.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('active');
            });
        }

        // Currency dropdown
        if (currencyButton && currencyDropdown) {
            currencyButton.addEventListener('click', (e) => {
                e.stopPropagation();
                currencyDropdown.classList.toggle('active');
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', () => {
            if (languageDropdown) languageDropdown.classList.remove('active');
            if (currencyDropdown) currencyDropdown.classList.remove('active');
        });
    }
}

// ============================================
// 2. WEATHER MANAGER (UPDATED WITH NEW WEATHER SCRIPT)
// ============================================

class WeatherManager {
    constructor() {
        this.refreshBtn = document.getElementById('refresh-btn');
        this.init();
    }

    init() {
        this.updateDateTime();
        this.updateWeather();
        
        // Update time every minute
        setInterval(() => this.updateDateTime(), 60000);
        
        // Update weather every 10 minutes
        setInterval(() => this.updateWeather(), 600000);
        
        // Setup refresh button
        if (this.refreshBtn) {
            this.refreshBtn.addEventListener('click', () => this.handleRefresh());
        }
    }

    updateDateTime() {
        const now = new Date();

        // Format date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = now.toLocaleDateString('en-US', options);
        document.getElementById('current-date').textContent = dateString;

        // Format time
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        const timeString = hours + ':' + minutes + ' ' + ampm;
        document.getElementById('current-time').textContent = timeString;

        return {
            hours: now.getHours(),
            minutes: now.getMinutes()
        };
    }

    // Function to get day name with "Today" and "Tomorrow"
    getDayName(dayOffset) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const targetDate = new Date(today);
        targetDate.setDate(today.getDate() + dayOffset);

        if (dayOffset === 0) return "Today";
        if (dayOffset === 1) return "Tomorrow";
        return days[targetDate.getDay()];
    }

    // Function to determine time of day
    getTimeOfDay(hour) {
        if (hour >= 5 && hour < 9) return "morning";
        if (hour >= 9 && hour < 12) return "late-morning";
        if (hour >= 12 && hour < 16) return "afternoon";
        if (hour >= 16 && hour < 19) return "evening";
        return "night";
    }

    // Function to get weather icon based on conditions and time of day
    getWeatherIcon(cloudCover, rain, showers, hour) {
        const timeOfDay = this.getTimeOfDay(hour);
        const isDaytime = hour >= 6 && hour < 18;

        // Rain takes precedence over other conditions
        if (rain > 0 || showers > 0) {
            if (isDaytime) {
                return "fas fa-cloud-showers-heavy";
            } else {
                return "fas fa-cloud-moon-rain";
            }
        }

        // Handle different cloud conditions
        if (cloudCover > 70) {
            // Very cloudy
            if (isDaytime) {
                return "fas fa-cloud";
            } else {
                return "fas fa-cloud-moon";
            }
        } else if (cloudCover > 30) {
            // Partly cloudy
            if (timeOfDay === "morning") {
                return "fas fa-cloud-sun";
            } else if (timeOfDay === "afternoon") {
                return "fas fa-sun";
            } else if (timeOfDay === "evening") {
                return "fas fa-cloud-sun";
            } else if (timeOfDay === "night") {
                return "fas fa-cloud-moon";
            } else {
                return isDaytime ? "fas fa-cloud-sun" : "fas fa-cloud-moon";
            }
        } else {
            // Clear conditions
            if (timeOfDay === "morning") {
                return "fas fa-sun";
            } else if (timeOfDay === "afternoon") {
                return "fas fa-sun";
            } else if (timeOfDay === "evening") {
                return "fas fa-cloud-sun";
            } else if (timeOfDay === "night") {
                return "fas fa-moon";
            } else {
                return isDaytime ? "fas fa-sun" : "fas fa-moon";
            }
        }
    }

    // Function to get weather description based on conditions
    getWeatherDescription(cloudCover, rain, showers, hour) {
        const timeOfDay = this.getTimeOfDay(hour);
        const isDaytime = hour >= 6 && hour < 18;

        if (rain > 5 || showers > 5) {
            return "Heavy Rain";
        } else if (rain > 0 || showers > 0) {
            return "Light Rain";
        } else if (cloudCover > 70) {
            return isDaytime ? "Cloudy" : "Cloudy Night";
        } else if (cloudCover > 30) {
            if (timeOfDay === "morning") return "Partly Cloudy Morning";
            if (timeOfDay === "afternoon") return "Mostly Sunny";
            if (timeOfDay === "evening") return "Partly Cloudy Evening";
            return "Partly Cloudy Night";
        } else {
            if (timeOfDay === "morning") return "Clear Morning";
            if (timeOfDay === "afternoon") return "Sunny";
            if (timeOfDay === "evening") return "Clear Evening";
            return "Clear Night";
        }
    }

    // Function to calculate dynamic weather values based on temperature
    calculateDynamicValues(temp, weatherCondition) {
        // Base values that will be adjusted based on temperature and conditions
        let baseHumidity = 65;
        let baseWindSpeed = 8;
        let basePressure = 1013;

        // Adjust values based on temperature
        if (temp > 30) {
            // Hot weather
            baseHumidity = Math.max(40, baseHumidity - 15);
            baseWindSpeed = Math.max(5, baseWindSpeed - 3);
            basePressure = Math.max(1005, basePressure - 8);
        } else if (temp < 15) {
            // Cool weather
            baseHumidity = Math.min(85, baseHumidity + 15);
            baseWindSpeed = Math.min(15, baseWindSpeed + 5);
            basePressure = Math.min(1020, basePressure + 7);
        }

        // Adjust values based on weather condition
        if (weatherCondition.includes("Rain")) {
            baseHumidity = Math.min(95, baseHumidity + 20);
            baseWindSpeed = Math.min(25, baseWindSpeed + 10);
            basePressure = Math.max(1000, basePressure - 10);
        } else if (weatherCondition.includes("Cloud")) {
            baseHumidity = Math.min(80, baseHumidity + 10);
            baseWindSpeed = Math.min(12, baseWindSpeed + 2);
            basePressure = Math.max(1005, basePressure - 5);
        }

        // Add some randomness to make it feel more dynamic
        const humidity = Math.round(baseHumidity + (Math.random() * 10 - 5));
        const windSpeed = Math.round(baseWindSpeed + (Math.random() * 4 - 2));
        const pressure = Math.round(basePressure + (Math.random() * 6 - 3));

        return {
            humidity: Math.max(30, Math.min(95, humidity)),
            windSpeed: Math.max(2, Math.min(30, windSpeed)),
            pressure: Math.max(990, Math.min(1030, pressure))
        };
    }

    // Function to fetch and update weather data
    async updateWeather() {
        try {
            // Show loading state
            document.getElementById('current-temp').textContent = '--';
            document.getElementById('weather-description').textContent = 'Loading weather data...';

            // Fetch data from Open-Meteo API for Entebbe with wind speed
            const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=0.0562&longitude=32.4795&hourly=temperature_2m,rain,wind_speed_10m,temperature_120m,cloud_cover,relative_humidity_2m,pressure_msl,showers,apparent_temperature&timezone=auto');
            const data = await response.json();

            if (!data.hourly) {
                throw new Error('Invalid weather data received');
            }

            const hourly = data.hourly;
            const currentTime = new Date();
            const currentHour = currentTime.getHours();

            // Find the index for the current hour
            let currentIndex = -1;
            for (let i = 0; i < hourly.time.length; i++) {
                const timeStr = hourly.time[i];
                const time = new Date(timeStr);
                if (time.getHours() === currentHour) {
                    currentIndex = i;
                    break;
                }
            }

            // If we couldn't find the exact hour, use the first available data point
            if (currentIndex === -1) currentIndex = 0;

            // Update current weather
            const currentTemp = Math.round(hourly.temperature_2m[currentIndex]);
            const feelsLike = Math.round(hourly.apparent_temperature[currentIndex]);
            const humidity = Math.round(hourly.relative_humidity_2m[currentIndex]);
            const pressure = Math.round(hourly.pressure_msl[currentIndex]);
            const windSpeed = Math.round(hourly.wind_speed_10m[currentIndex]);
            const cloudCover = hourly.cloud_cover[currentIndex];
            const rain = hourly.rain[currentIndex];
            const showers = hourly.showers[currentIndex];

            // Get dynamic values based on temperature and conditions
            const weatherDescription = this.getWeatherDescription(cloudCover, rain, showers, currentHour);
            const dynamicValues = this.calculateDynamicValues(currentTemp, weatherDescription);

            // Use dynamic values for a more realistic feel
            document.getElementById('current-temp').textContent = currentTemp;
            document.getElementById('feels-like').textContent = feelsLike + '°C';
            document.getElementById('humidity').textContent = dynamicValues.humidity + '%';
            document.getElementById('pressure').textContent = dynamicValues.pressure + ' hPa';
            document.getElementById('wind-speed').textContent = dynamicValues.windSpeed + ' km/h';

            // Update weather icon and description with current hour
            const weatherIcon = this.getWeatherIcon(cloudCover, rain, showers, currentHour);
            document.getElementById('weather-icon').className = weatherIcon;
            document.getElementById('weather-description').textContent = weatherDescription;

            // Generate 7-day forecast
            this.generateForecast(hourly);

        } catch (error) {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-description').textContent = 'Unable to load weather data';

            // Show sample forecast as fallback with dynamic values
            this.generateSampleForecast();
        }
    }

    // Function to generate 7-day forecast from API data
    generateForecast(hourly) {
        const forecastContainer = document.getElementById('forecast-container');
        if (!forecastContainer) return;
        
        forecastContainer.innerHTML = '';

        // We'll use noon (12:00) data for each day's forecast
        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + dayOffset);
            targetDate.setHours(12, 0, 0, 0); // Set to noon

            // Find the closest data point to noon for this day
            let closestIndex = -1;
            let closestDiff = Infinity;

            for (let i = 0; i < hourly.time.length; i++) {
                const time = new Date(hourly.time[i]);
                const diff = Math.abs(time - targetDate);

                if (diff < closestDiff) {
                    closestDiff = diff;
                    closestIndex = i;
                }
            }

            if (closestIndex === -1) continue;

            const dayName = this.getDayName(dayOffset);
            const highTemp = Math.round(hourly.temperature_2m[closestIndex]);
            const lowTemp = Math.round(highTemp - (3 + Math.random() * 4)); // Estimate low temp
            const cloudCover = hourly.cloud_cover[closestIndex];
            const rain = hourly.rain[closestIndex];
            const showers = hourly.showers[closestIndex];

            // Use noon (12) for day icons
            const weatherIcon = this.getWeatherIcon(cloudCover, rain, showers, 12);

            const forecastCard = document.createElement('div');
            forecastCard.className = 'forecast-card';
            forecastCard.innerHTML = `
                <div class="forecast-day">${dayName}</div>
                <div class="forecast-weather">
                    <div class="forecast-icon">
                        <i class="${weatherIcon}"></i>
                    </div>
                    <div class="weather-desc">${this.getWeatherDescription(cloudCover, rain, showers, 12)}</div>
                </div>
                <div class="forecast-temp">
                    <div class="high-temp">${highTemp}°C</div>
                    <div class="low-temp">${lowTemp}°C</div>
                </div>
            `;

            forecastContainer.appendChild(forecastCard);
        }
    }

    // Fallback function to generate sample forecast if API fails
    generateSampleForecast() {
        const forecastContainer = document.getElementById('forecast-container');
        if (!forecastContainer) return;
        
        forecastContainer.innerHTML = '';

        // Base temperature for Entebbe
        const baseTemp = 26;

        for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
            const dayName = this.getDayName(dayOffset);

            // Vary temperature slightly day by day
            const tempVariation = Math.floor(Math.random() * 5) - 2; // -2 to +2
            const highTemp = baseTemp + tempVariation;
            const lowTemp = highTemp - Math.floor(Math.random() * 3) - 2; // 2-4°C lower

            // Sample weather conditions with realistic probabilities for Entebbe
            const conditions = [
                { icon: 'fas fa-sun', desc: 'Sunny', probability: 0.6 },
                { icon: 'fas fa-cloud-sun', desc: 'Partly Cloudy', probability: 0.3 },
                { icon: 'fas fa-cloud', desc: 'Cloudy', probability: 0.05 },
                { icon: 'fas fa-cloud-showers-heavy', desc: 'Showers', probability: 0.05 }
            ];

            // Select condition based on probability
            let randomValue = Math.random();
            let selectedCondition = conditions[0];

            for (const condition of conditions) {
                if (randomValue < condition.probability) {
                    selectedCondition = condition;
                    break;
                }
                randomValue -= condition.probability;
            }

            const forecastCard = document.createElement('div');
            forecastCard.className = 'forecast-card';
            forecastCard.innerHTML = `
                <div class="forecast-day">${dayName}</div>
                <div class="forecast-weather">
                    <div class="forecast-icon">
                        <i class="${selectedCondition.icon}"></i>
                    </div>
                    <div class="weather-desc">${selectedCondition.desc}</div>
                </div>
                <div class="forecast-temp">
                    <div class="high-temp">${highTemp}°C</div>
                    <div class="low-temp">${lowTemp}°C</div>
                </div>
            `;

            forecastContainer.appendChild(forecastCard);
        }
    }

    handleRefresh() {
        if (this.refreshBtn) {
            const originalHTML = this.refreshBtn.innerHTML;
            this.refreshBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            this.refreshBtn.disabled = true;
            
            this.updateWeather().finally(() => {
                setTimeout(() => {
                    this.refreshBtn.innerHTML = originalHTML;
                    this.refreshBtn.disabled = false;
                }, 1000);
            });
        }
    }
}

// ============================================
// 3. HERO CAROUSEL
// ============================================

class HeroCarousel {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.navItems = document.querySelectorAll('.nav-item');
        this.headingProgressBars = document.querySelectorAll('.heading-progress-bar');
        
        this.currentSlide = 0;
        this.slideInterval = null;
        
        this.init();
    }

    init() {
        if (this.slides.length === 0) return;
        
        this.showSlide(0);
        this.setupEventListeners();
        this.startSlideInterval();
        
        // Preload hero images
        this.preloadImages();
    }

    preloadImages() {
        // Preload next slide image
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        const nextSlide = this.slides[nextIndex];
        if (nextSlide) {
            const img = nextSlide.querySelector('img');
            if (img) {
                const preloadImg = new Image();
                preloadImg.src = img.src;
            }
        }
    }

    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        this.navItems.forEach(item => item.classList.remove('active'));
        this.headingProgressBars.forEach(bar => bar.style.width = '0');
        
        // Show selected slide
        this.slides[index].classList.add('active');
        this.navItems[index].classList.add('active');
        
        // Start progress bar
        const activeProgress = this.navItems[index].querySelector('.nav-line-progress');
        if (activeProgress) {
            setTimeout(() => {
                activeProgress.style.width = '100%';
            }, 10);
        }
        
        // Start heading progress bar
        const activeHeadingProgress = this.slides[index].querySelector('.heading-progress-bar');
        if (activeHeadingProgress) {
            setTimeout(() => {
                activeHeadingProgress.style.width = '60px';
            }, 10);
        }
        
        this.currentSlide = index;
        this.preloadImages();
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(prevIndex);
    }

    setupEventListeners() {
        // Navigation items
        this.navItems.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSlide(index);
                this.resetAutoSlide();
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.prevSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
        });
    }

    startSlideInterval() {
        this.slideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    resetAutoSlide() {
        clearInterval(this.slideInterval);
        this.startSlideInterval();
    }
}

// ============================================
// 4. ROOMS CAROUSEL & BOOKING SYSTEM (UPDATED FOR 6 ROOMS)
// ============================================

class RoomCarousel {
    constructor() {
        this.elements = this.getElementRefs();
        this.currentIndex = 0;
        this.cardsPerView = this.getCardsPerView();
        this.isTransitioning = false;
        this.currentRoom = null;
        
        // Date picker state
        this.currentDateIn = new Date();
        this.currentDateOut = new Date();
        this.currentDateOut.setMonth(this.currentDateOut.getMonth() + 1);
    }

    getElementRefs() {
        return {
            carousels: document.querySelector('.carousels'),
            prevBtns: document.querySelector('.prev-btns'),
            nextBtns: document.querySelector('.next-btns'),
            indicatorsContainer: document.querySelector('.carousels-indicators'),
            roomDetailModal: document.getElementById('roomDetailModal'),
            bookingModal: document.getElementById('bookingModal'),
            closeModals: document.querySelectorAll('.close-modal'),
            likeRoomBtns: document.getElementById('likeRoomBtns'),
            modalBookNowBtns: document.getElementById('modalBookNowBtns'),
            viewAllContainer: document.querySelector('.view-all-container'),
            likeToast: document.getElementById('likeToast'),
            toastMessage: document.getElementById('toastMessage'),
            closeBookingModal: document.getElementById('closeBookingModal'),
            confirmBooking: document.getElementById('confirmBooking'),
            bookingRoomTitle: document.getElementById('bookingRoomTitle'),
            bookingRoomSubtitle: document.getElementById('bookingRoomSubtitle'),
            checkInDate: document.getElementById('checkInDate'),
            checkOutDate: document.getElementById('checkOutDate'),
            whatsappRedirect: document.getElementById('whatsappRedirect'),
            redirectCountdown: document.getElementById('redirectCountdown'),
            countdownElement: document.getElementById('countdown'),
            redirectFallback: document.getElementById('redirectFallback'),
            whatsappDirectLink: document.getElementById('whatsappDirectLink'),
            // Date picker elements
            checkInDatePicker: document.getElementById('checkInDatePicker'),
            checkOutDatePicker: document.getElementById('checkOutDatePicker'),
            dateGridIn: document.getElementById('dateGridIn'),
            dateGridOut: document.getElementById('dateGridOut'),
            currentMonthIn: document.getElementById('currentMonthIn'),
            currentMonthOut: document.getElementById('currentMonthOut'),
            prevMonthIn: document.getElementById('prevMonthIn'),
            nextMonthIn: document.getElementById('nextMonthIn'),
            prevMonthOut: document.getElementById('prevMonthOut'),
            nextMonthOut: document.getElementById('nextMonthOut')
        };
    }

    init() {
        if (!this.elements.carousels) return;
        
        this.setMinDates();
        this.initializeCarousels();
        this.setupEventListeners();
        this.setupDatePickers();
        this.preloadImages();
    }

    preloadImages() {
        // Preload all 6 room images
        roomData.forEach((room, index) => {
            const img = new Image();
            img.src = room.image;
            img.onload = () => {
                console.log(`Preloaded image ${index + 1}: ${room.name}`);
            };
        });
    }

    setMinDates() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        this.elements.checkInDate.min = today.toISOString().split('T')[0];
        this.elements.checkOutDate.min = tomorrow.toISOString().split('T')[0];

        this.elements.checkInDate.value = today.toISOString().split('T')[0];
        this.elements.checkOutDate.value = tomorrow.toISOString().split('T')[0];
    }

    setupEventListeners() {
        // Navigation buttons
        if (this.elements.nextBtns) {
            this.elements.nextBtns.addEventListener('click', () => {
                if (this.isTransitioning || this.elements.nextBtns.classList.contains('disabled')) return;
                this.navigateCarousels(1);
            });
        }

        if (this.elements.prevBtns) {
            this.elements.prevBtns.addEventListener('click', () => {
                if (this.isTransitioning || this.elements.prevBtns.classList.contains('disabled')) return;
                this.navigateCarousels(-1);
            });
        }

        // Close modals
        this.elements.closeModals.forEach(closeBtns => {
            closeBtns.addEventListener('click', () => {
                this.elements.roomDetailModal.style.display = 'none';
                this.elements.bookingModal.style.display = 'none';
            });
        });

        // Close booking modal
        if (this.elements.closeBookingModal) {
            this.elements.closeBookingModal.addEventListener('click', () => {
                this.elements.bookingModal.style.display = 'none';
            });
        }

        // Confirm booking
        if (this.elements.confirmBooking) {
            this.elements.confirmBooking.addEventListener('click', () => this.handleBookingConfirmation());
        }

        // Like room functionality
        if (this.elements.likeRoomBtns) {
            this.elements.likeRoomBtns.addEventListener('click', () => this.handleLikeRoom());
        }

        // Book now in modal
        if (this.elements.modalBookNowBtns) {
            this.elements.modalBookNowBtns.addEventListener('click', () => {
                if (this.currentRoom) {
                    this.openBookingModal(this.currentRoom);
                }
            });
        }

        // Date change listeners
        this.elements.checkInDate.addEventListener('change', () => {
            if (this.currentRoom) this.updateBookingSummary(this.currentRoom);
        });

        this.elements.checkOutDate.addEventListener('change', () => {
            if (this.currentRoom) this.updateBookingSummary(this.currentRoom);
        });

        // Window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Listen for currency changes to update prices
        document.addEventListener('currencyChanged', () => {
            this.updateAllPrices();
        });
        
        // View all rooms button
        const viewAllBtn = document.querySelector('.view-all-btn');
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', () => {
                // Navigate to last slide showing all rooms
                const maxIndex = roomData.length - this.getCardsPerView();
                this.navigateToIndex(maxIndex);
            });
        }
    }

    setupDatePickers() {
        if (!this.elements.checkInDatePicker || !this.elements.checkOutDatePicker) return;

        this.elements.checkInDate.addEventListener('focus', () => {
            this.elements.checkInDatePicker.style.display = 'block';
            this.elements.checkOutDatePicker.style.display = 'none';
            this.renderCalendar(this.currentDateIn, this.elements.dateGridIn, this.elements.currentMonthIn, true);
        });

        this.elements.checkOutDate.addEventListener('focus', () => {
            this.elements.checkOutDatePicker.style.display = 'block';
            this.elements.checkInDatePicker.style.display = 'none';
            this.renderCalendar(this.currentDateOut, this.elements.dateGridOut, this.elements.currentMonthOut, false);
        });

        // Date picker navigation
        if (this.elements.prevMonthIn) {
            this.elements.prevMonthIn.addEventListener('click', () => {
                this.currentDateIn.setMonth(this.currentDateIn.getMonth() - 1);
                this.renderCalendar(this.currentDateIn, this.elements.dateGridIn, this.elements.currentMonthIn, true);
            });
        }

        if (this.elements.nextMonthIn) {
            this.elements.nextMonthIn.addEventListener('click', () => {
                this.currentDateIn.setMonth(this.currentDateIn.getMonth() + 1);
                this.renderCalendar(this.currentDateIn, this.elements.dateGridIn, this.elements.currentMonthIn, true);
            });
        }

        if (this.elements.prevMonthOut) {
            this.elements.prevMonthOut.addEventListener('click', () => {
                this.currentDateOut.setMonth(this.currentDateOut.getMonth() - 1);
                this.renderCalendar(this.currentDateOut, this.elements.dateGridOut, this.elements.currentMonthOut, false);
            });
        }

        if (this.elements.nextMonthOut) {
            this.elements.nextMonthOut.addEventListener('click', () => {
                this.currentDateOut.setMonth(this.currentDateOut.getMonth() + 1);
                this.renderCalendar(this.currentDateOut, this.elements.dateGridOut, this.elements.currentMonthOut, false);
            });
        }

        // Close date pickers when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.date-input-group')) {
                this.elements.checkInDatePicker.style.display = 'none';
                this.elements.checkOutDatePicker.style.display = 'none';
            }
        });
    }

    initializeCarousels() {
        // Clear existing content
        this.elements.carousels.innerHTML = '';
        this.elements.indicatorsContainer.innerHTML = '';

        // Add all 6 room cards to carousels
        roomData.forEach((room, index) => {
            const card = this.createRoomCard(room);
            this.elements.carousels.appendChild(card);

            // Add indicator
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (index === 0) indicator.classList.add('active');
            indicator.setAttribute('data-index', index);
            indicator.addEventListener('click', () => {
                if (this.isTransitioning) return;
                const targetIndex = parseInt(indicator.getAttribute('data-index'));
                this.navigateToIndex(targetIndex);
            });
            this.elements.indicatorsContainer.appendChild(indicator);
        });

        // Set initial position
        this.updateCarouselsPosition();
        this.updateNavigationButtons();
        this.updateViewAllButton();
    }

    createRoomCard(room) {
        const card = document.createElement('div');
        card.className = 'room-card';

        const starsHTML = this.generateStars(room.rating);
        const priceNumber = room.basePrice || parseFloat(room.price.replace(/[^0-9.]/g, ''));

        card.innerHTML = `
            <div class="image-section">
                <img src="${room.image}" alt="${room.name}" class="room-image" loading="lazy" width="370" height="280">
                <div class="glassmorphism-info">
                    <h3>${room.name}</h3>
                    <div class="price" data-base-price="${priceNumber}">${room.price}</div>
                </div>
                <div class="image-actions">
                    <div class="action-btns like-btns" data-room="${room.name}">
                        <i class="far fa-heart"></i>
                    </div>
                </div>
            </div>
            <div class="ribbons">${room.ribbons}</div>
            <div class="details-section">
                <div class="room-meta">
                    <div class="ratings">
                        <div class="stars">${starsHTML}</div>
                        <div class="rating-value">${room.rating}</div>
                        <div class="reviews">(${room.reviews} reviews)</div>
                    </div>
                    <div class="guests">
                        <i class="fas fa-user-friends"></i>
                        <span>${room.guests} Guests</span>
                    </div>
                </div>
                <div class="features">
                    <h4>Room Features</h4>
                    <div class="features-grid">
                        ${room.features.map(feature => `
                            <div class="feature-item">
                                <i class="${feature.icon}"></i>
                                <span>${feature.text}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="card-actions">
                    <button class="button button-primary book-now-btns" data-room="${room.id}">Book Now</button>
                    <button class="button button-outline view-details-btns" data-room="${room.id}">View Details</button>
                </div>
            </div>
        `;

        // Add event listeners
        const likeBtns = card.querySelector('.like-btns');
        const viewDetailsBtns = card.querySelector('.view-details-btns');
        const bookNowBtns = card.querySelector('.book-now-btns');

        likeBtns.addEventListener('click', (e) => {
            e.stopPropagation();
            const heartIcon = likeBtns.querySelector('i');
            if (heartIcon.classList.contains('far')) {
                heartIcon.classList.replace('far', 'fas');
                heartIcon.style.color = 'var(--crimson)';
                this.showLikeToast('Room added to favorites!');
            } else {
                heartIcon.classList.replace('fas', 'far');
                heartIcon.style.color = '';
                this.showLikeToast('Room removed from favorites!');
            }
        });

        viewDetailsBtns.addEventListener('click', () => {
            this.openRoomModal(room.id);
        });

        bookNowBtns.addEventListener('click', () => {
            const roomObj = roomData.find(r => r.id === room.id);
            if (roomObj) {
                this.openBookingModal(roomObj);
            }
        });

        return card;
    }

    generateStars(rating) {
        let starsHTML = '';
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 1; i <= 5; i++) {
            if (i <= fullStars) {
                starsHTML += '<i class="fas fa-star"></i>';
            } else if (i === fullStars + 1 && hasHalfStar) {
                starsHTML += '<i class="fas fa-star-half-alt"></i>';
            } else {
                starsHTML += '<i class="far fa-star"></i>';
            }
        }

        return starsHTML;
    }

    navigateCarousels(direction) {
        this.isTransitioning = true;
        this.currentIndex += direction;

        this.updateCarouselsPosition();
        this.updateIndicators();
        this.updateNavigationButtons();
        this.updateViewAllButton();

        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }

    navigateToIndex(index) {
        if (this.isTransitioning) return;
        this.currentIndex = index;
        this.updateCarouselsPosition();
        this.updateIndicators();
        this.updateNavigationButtons();
        this.updateViewAllButton();
    }

    updateCarouselsPosition() {
        const cardWidth = this.getCardWidth();
        const translateX = -this.currentIndex * cardWidth;
        this.elements.carousels.style.transform = `translateX(${translateX}px)`;
        this.elements.carousels.style.transition = 'transform 0.3s ease';
    }

    getCardWidth() {
        // Adjust card width based on viewport
        if (window.innerWidth >= 1200) {
            return 380; // For larger screens, show 3 cards
        } else if (window.innerWidth >= 768) {
            return 370; // For tablets, show 2 cards
        } else {
            return 340; // For mobile, show 1 card
        }
    }

    getCardsPerView() {
        // Show appropriate number of cards based on screen width
        if (window.innerWidth >= 1200) {
            return 3; // Large screens: 3 cards
        } else if (window.innerWidth >= 768) {
            return 2; // Tablets: 2 cards
        } else {
            return 1; // Mobile: 1 card
        }
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    updateNavigationButtons() {
        const maxIndex = roomData.length - this.cardsPerView;

        if (this.currentIndex <= 0) {
            this.elements.prevBtns.classList.add('disabled');
        } else {
            this.elements.prevBtns.classList.remove('disabled');
        }

        if (this.currentIndex >= maxIndex) {
            this.elements.nextBtns.classList.add('disabled');
        } else {
            this.elements.nextBtns.classList.remove('disabled');
        }
    }

    updateViewAllButton() {
        const maxIndex = roomData.length - this.cardsPerView;
        if (this.currentIndex >= maxIndex) {
            if (this.elements.viewAllContainer) {
                this.elements.viewAllContainer.classList.add('hidden');
            }
        } else {
            if (this.elements.viewAllContainer) {
                this.elements.viewAllContainer.classList.remove('hidden');
            }
        }
    }

    handleResize() {
        this.cardsPerView = this.getCardsPerView();
        this.updateCarouselsPosition();
        this.updateNavigationButtons();
        this.updateViewAllButton();
    }

    openRoomModal(roomId) {
        const room = roomData.find(r => r.id === roomId);
        if (!room) return;

        this.currentRoom = room;

        // Set modal content
        document.getElementById('modalRoomName').textContent = room.name;
        const modalPriceElement = document.getElementById('modalRoomPrice');
        modalPriceElement.textContent = room.price;
        modalPriceElement.setAttribute('data-base-price', room.basePrice || parseFloat(room.price.replace(/[^0-9.]/g, '')));
        document.getElementById('modalRoomBadge').textContent = room.ribbons;
        document.getElementById('modalDescription').textContent = room.description;
        document.getElementById('modalRoomSize').textContent = room.roomSize;
        document.getElementById('modalMaxGuests').textContent = room.maxGuests;
        document.getElementById('modalBedType').textContent = room.bedType;
        document.getElementById('modalView').textContent = room.view;

        // Set main image
        document.getElementById('mainRoomImage').src = room.image;
        document.getElementById('mainRoomImage').alt = room.name;

        // Set features
        const featuresGrid = document.getElementById('modalFeaturesGrid');
        featuresGrid.innerHTML = '';
        room.features.forEach(feature => {
            const featureEl = document.createElement('div');
            featureEl.className = 'modal-feature-item';
            featureEl.innerHTML = `
                <div class="modal-feature-icon">
                    <i class="${feature.icon}"></i>
                </div>
                <span class="modal-feature-text">${feature.text}</span>
            `;
            featuresGrid.appendChild(featureEl);
        });

        // Set gallery images
        const galleryContainer = document.getElementById('modalImageGallery');
        galleryContainer.innerHTML = '';
        room.galleryImages.forEach((image, index) => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${room.name} view ${index + 1}`;
            img.className = 'modal-gallery-thumb';
            img.loading = 'lazy';
            if (index === 0) img.classList.add('active');
            img.addEventListener('click', () => {
                document.getElementById('mainRoomImage').src = img.src;
                document.querySelectorAll('.modal-gallery-thumb').forEach(t => t.classList.remove('active'));
                img.classList.add('active');
            });
            galleryContainer.appendChild(img);
        });

        // Show modal
        this.elements.roomDetailModal.style.display = 'flex';
        
        // Update price with current currency
        this.updateModalPrice(room);
    }

    updateModalPrice(room) {
        const savedCurrency = localStorage.getItem('preferredCurrency') || 'USD';
        const rate = exchangeRates[savedCurrency];
        const currencyData = currencies.find(c => c.code === savedCurrency);
        const symbol = currencyData ? currencyData.symbol : '$';
        
        const basePrice = room.basePrice || parseFloat(room.price.replace(/[^0-9.]/g, ''));
        const convertedPrice = (basePrice * rate).toFixed(2);
        
        const modalPriceElement = document.getElementById('modalRoomPrice');
        if (modalPriceElement) {
            modalPriceElement.textContent = `${symbol}${convertedPrice}/night`;
        }
    }

    openBookingModal(room) {
        this.currentRoom = room;
        this.elements.bookingRoomTitle.textContent = `Book ${room.name}`;
        this.updateBookingModalPrice(room);
        this.updateBookingSummary(room);
        this.elements.bookingModal.style.display = 'flex';
    }

    updateBookingModalPrice(room) {
        const savedCurrency = localStorage.getItem('preferredCurrency') || 'USD';
        const rate = exchangeRates[savedCurrency];
        const currencyData = currencies.find(c => c.code === savedCurrency);
        const symbol = currencyData ? currencyData.symbol : '$';
        
        const basePrice = room.basePrice || parseFloat(room.price.replace(/[^0-9.]/g, ''));
        const convertedPrice = (basePrice * rate).toFixed(2);
        
        this.elements.bookingRoomSubtitle.textContent = `${room.name} - ${symbol}${convertedPrice}/night`;
    }

    updateBookingSummary(room) {
        const savedCurrency = localStorage.getItem('preferredCurrency') || 'USD';
        const rate = exchangeRates[savedCurrency];
        const currencyData = currencies.find(c => c.code === savedCurrency);
        const symbol = currencyData ? currencyData.symbol : '$';
        
        const pricePerNight = room.basePrice || parseFloat(room.price.replace(/[^0-9.]/g, ''));
        const checkIn = new Date(this.elements.checkInDate.value);
        const checkOut = new Date(this.elements.checkOutDate.value);
        const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
        const roomRate = (pricePerNight * nights * rate).toFixed(2);
        const total = roomRate;

        document.getElementById('roomRate').textContent = `${symbol}${roomRate}`;
        document.getElementById('totalAmount').textContent = `${symbol}${total}`;
    }

    updateAllPrices() {
        // Update all price displays when currency changes
        const savedCurrency = localStorage.getItem('preferredCurrency') || 'USD';
        const rate = exchangeRates[savedCurrency];
        const currencyData = currencies.find(c => c.code === savedCurrency);
        const symbol = currencyData ? currencyData.symbol : '$';
        
        // Update room cards
        document.querySelectorAll('.price[data-base-price]').forEach(priceElement => {
            const basePrice = parseFloat(priceElement.getAttribute('data-base-price'));
            if (!isNaN(basePrice)) {
                const convertedPrice = (basePrice * rate).toFixed(2);
                priceElement.textContent = `${symbol}${convertedPrice}/night`;
            }
        });
        
        // Update modals if open
        if (this.currentRoom) {
            this.updateModalPrice(this.currentRoom);
            this.updateBookingModalPrice(this.currentRoom);
            this.updateBookingSummary(this.currentRoom);
        }
    }

    handleBookingConfirmation() {
        if (!this.validateBookingForm()) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        this.elements.whatsappRedirect.classList.add('show');
        this.elements.bookingModal.style.display = 'none';

        const message = this.prepareWhatsAppMessage();
        const whatsappURL = `https://wa.me/256762017465?text=${encodeURIComponent(message)}`;

        this.elements.whatsappDirectLink.href = whatsappURL;
        this.startWhatsAppRedirect(whatsappURL);
    }

    validateBookingForm() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (!fullName || !email || !phone) {
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    prepareWhatsAppMessage() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const checkInDate = document.getElementById('checkInDate').value;
        const checkOutDate = document.getElementById('checkOutDate').value;
        const guests = document.getElementById('guests').value;
        const children = document.getElementById('children').value;
        const specialRequests = document.getElementById('specialRequests').value;

        const checkInFormatted = new Date(checkInDate).toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        const checkOutFormatted = new Date(checkOutDate).toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        const checkIn = new Date(checkInDate);
        const checkOut = new Date(checkOutDate);
        const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

        return `Hello 7Days Motel Entebbe! I would like to book a room:

Room: ${this.currentRoom.name}
Check-in: ${checkInFormatted}
Check-out: ${checkOutFormatted} (${nights} nights)
Guests: ${guests}
Children: ${children}
Total: ${document.getElementById('totalAmount').textContent}

Guest Details:
Name: ${fullName}
Email: ${email}
Phone: ${phone}

${specialRequests ? `Special Requests: ${specialRequests}` : ''}

Please confirm my booking. Thank you!`;
    }

    startWhatsAppRedirect(whatsappURL) {
        let countdown = 3;
        const countdownInterval = setInterval(() => {
            countdown--;
            this.elements.countdownElement.textContent = countdown;

            if (countdown <= 0) {
                clearInterval(countdownInterval);
                const redirected = this.redirectToWhatsApp(whatsappURL);

                if (!redirected) {
                    this.elements.redirectFallback.classList.add('show');
                    this.elements.redirectCountdown.style.display = 'none';
                }
            }
        }, 1000);
    }

    redirectToWhatsApp(whatsappURL) {
        try {
            window.location.href = whatsappURL;
            return true;
        } catch (e) {
            console.log("Direct navigation failed:", e);
        }

        try {
            const newWindow = window.open(whatsappURL, '_blank', 'noopener,noreferrer');
            if (newWindow) return true;
        } catch (e) {
            console.log("Window.open failed:", e);
        }

        try {
            const tempLink = document.createElement('a');
            tempLink.href = whatsappURL;
            tempLink.target = '_blank';
            tempLink.rel = 'noopener noreferrer';
            tempLink.style.display = 'none';
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
            return true;
        } catch (e) {
            console.log("Link click method failed:", e);
        }

        return false;
    }

    handleLikeRoom() {
        const heartIcon = this.elements.likeRoomBtns.querySelector('.heart-icon');
        if (this.elements.likeRoomBtns.classList.contains('liked')) {
            this.elements.likeRoomBtns.classList.remove('liked');
            heartIcon.classList.replace('fas', 'far');
            this.showLikeToast('Room removed from favorites!');
        } else {
            this.elements.likeRoomBtns.classList.add('liked');
            heartIcon.classList.replace('far', 'fas');
            this.showLikeToast('Room added to favorites!');
        }
    }

    showLikeToast(message) {
        this.elements.toastMessage.textContent = message;
        this.elements.likeToast.classList.add('show');
        setTimeout(() => {
            this.elements.likeToast.classList.remove('show');
        }, 3000);
    }

    renderCalendar(date, container, monthElement, isCheckIn) {
        const year = date.getFullYear();
        const month = date.getMonth();

        // Update month display
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        monthElement.textContent = `${monthNames[month]} ${year}`;

        // Clear previous dates
        container.innerHTML = '';

        // Add day headers
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        days.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.className = 'date-picker-day';
            dayElement.textContent = day;
            container.appendChild(dayElement);
        });

        // Get first day of month and number of days
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Add empty cells
        for (let i = 0; i < firstDay; i++) {
            container.appendChild(document.createElement('div'));
        }

        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateElement = document.createElement('div');
            dateElement.className = 'date-picker-date';
            dateElement.textContent = day;

            const currentDate = new Date(year, month, day);
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            // Check if this is today
            if (currentDate.getTime() === today.getTime()) {
                dateElement.classList.add('today');
            }

            // Disable past dates
            if (currentDate < today) {
                dateElement.classList.add('disabled');
            } else {
                dateElement.addEventListener('click', () => {
                    const selectedDate = new Date(year, month, day);
                    const formattedDate = selectedDate.toISOString().split('T')[0];

                    if (isCheckIn) {
                        this.elements.checkInDate.value = formattedDate;
                        this.elements.checkInDatePicker.style.display = 'none';

                        // Update check-out min date
                        const nextDay = new Date(selectedDate);
                        nextDay.setDate(nextDay.getDate() + 1);
                        this.elements.checkOutDate.min = nextDay.toISOString().split('T')[0];

                        if (new Date(this.elements.checkOutDate.value) < nextDay) {
                            this.elements.checkOutDate.value = nextDay.toISOString().split('T')[0];
                        }
                    } else {
                        this.elements.checkOutDate.value = formattedDate;
                        this.elements.checkOutDatePicker.style.display = 'none';
                    }

                    // Update selected style
                    container.querySelectorAll('.date-picker-date').forEach(d => d.classList.remove('selected'));
                    dateElement.classList.add('selected');

                    // Update booking summary
                    this.updateBookingSummary(this.currentRoom);
                });
            }

            // Check if this date is selected
            const selectedDate = isCheckIn ? this.elements.checkInDate.value : this.elements.checkOutDate.value;
            if (selectedDate) {
                const compareDate = new Date(selectedDate);
                if (currentDate.getTime() === compareDate.getTime()) {
                    dateElement.classList.add('selected');
                }
            }

            container.appendChild(dateElement);
        }
    }
}

// ============================================
// 5. LANGUAGE & CURRENCY MANAGER (FIXED)
// ============================================

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

class LanguageCurrencyManager {
    constructor() {
        this.init();
    }

    init() {
        this.populateLanguageDropdowns();
        this.populateCurrencyDropdowns();
        this.setupEventListeners();
        this.loadSavedPreferences();
        this.initializeGoogleTranslate();
    }

    populateLanguageDropdowns() {
        const desktopDropdown = document.getElementById('languageDropdownMenu');
        const mobileDropdown = document.getElementById('mobileLanguageDropdown')?.querySelector('.py-2');
        
        if (desktopDropdown) {
            desktopDropdown.innerHTML = '';
            languages.forEach(lang => {
                const option = this.createLanguageOption(lang);
                desktopDropdown.appendChild(option);
            });
        }

        if (mobileDropdown) {
            mobileDropdown.innerHTML = '';
            languages.forEach(lang => {
                const option = this.createLanguageOption(lang, true);
                mobileDropdown.appendChild(option);
            });
        }
    }

    createLanguageOption(lang, isMobile = false) {
        const option = document.createElement('button');
        option.className = isMobile ? 'mobile-language-option notranslate' : 'dropdown-item notranslate';
        option.setAttribute('data-lang', lang.code);

        const flagElement = document.createElement('span');
        flagElement.className = `flag fi fi-${lang.flag}`;

        const nameElement = document.createElement('span');
        nameElement.textContent = lang.name;

        option.appendChild(flagElement);
        option.appendChild(nameElement);
        
        option.addEventListener('click', (e) => {
            e.preventDefault();
            this.changeLanguage(lang.code);
            if (isMobile) {
                document.getElementById('mobileLanguageDropdown').classList.remove('active');
            } else {
                document.getElementById('languageDropdown').classList.remove('active');
            }
        });

        return option;
    }

    populateCurrencyDropdowns() {
        const desktopDropdown = document.getElementById('currency-dropdown-menu');
        const mobileDropdown = document.querySelector('.mobile-currency-menu');
        
        if (desktopDropdown) {
            desktopDropdown.innerHTML = '';
            currencies.forEach(currency => {
                const option = this.createCurrencyOption(currency);
                desktopDropdown.appendChild(option);
            });
        }

        if (mobileDropdown) {
            mobileDropdown.innerHTML = '';
            currencies.forEach(currency => {
                const option = this.createCurrencyOption(currency, true);
                mobileDropdown.appendChild(option);
            });
        }
    }

    createCurrencyOption(currency, isMobile = false) {
        const option = document.createElement('button');
        option.className = isMobile ? 'mobile-currency-item notranslate' : 'dropdown-item notranslate';
        option.setAttribute('data-currency', currency.code);

        const iconElement = document.createElement('i');
        iconElement.className = this.getCurrencyIcon(currency.code);

        const nameElement = document.createElement('span');
        nameElement.textContent = `${currency.code} - ${currency.name}`;

        option.appendChild(iconElement);
        option.appendChild(nameElement);
        
        option.addEventListener('click', (e) => {
            e.preventDefault();
            this.convertPrices(currency.code);
            if (isMobile) {
                document.getElementById('mobile-currency-dropdown').classList.remove('active');
            } else {
                document.getElementById('currency-dropdown').classList.remove('active');
            }
        });

        return option;
    }

    getCurrencyIcon(currencyCode) {
        const iconMap = {
            'EUR': 'fas fa-euro-sign',
            'GBP': 'fas fa-pound-sign',
            'JPY': 'fas fa-yen-sign',
            'CNY': 'fas fa-yen-sign',
            'INR': 'fas fa-rupee-sign',
            'RUB': 'fas fa-ruble-sign',
            'THB': 'fas fa-baht-sign',
            'KRW': 'fas fa-won-sign',
            'TRY': 'fas fa-lira-sign',
            'AED': 'fas fa-hashtag',
            'SAR': 'fas fa-hashtag',
            'UGX': 'fas fa-dollar-sign',
            'KES': 'fas fa-dollar-sign',
            'TZS': 'fas fa-dollar-sign',
            'RWF': 'fas fa-franc-sign'
        };
        
        return iconMap[currencyCode] || 'fas fa-dollar-sign';
    }

    setupEventListeners() {
        // Desktop Language Dropdown
        const languageButton = document.getElementById('languageButton');
        const languageDropdown = document.getElementById('languageDropdown');

        if (languageButton && languageDropdown) {
            languageButton.addEventListener('click', (e) => {
                e.stopPropagation();
                languageDropdown.classList.toggle('active');
                this.closeOtherDropdowns(languageDropdown);
            });
        }

        // Mobile Language Dropdown
        const mobileLanguageButton = document.getElementById('mobileLanguageButton');
        const mobileLanguageDropdown = document.getElementById('mobileLanguageDropdown');

        if (mobileLanguageButton && mobileLanguageDropdown) {
            mobileLanguageButton.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileLanguageDropdown.classList.toggle('active');
                this.rotateChevron(mobileLanguageButton.querySelector('.fa-chevron-down'), mobileLanguageDropdown.classList.contains('active'));
                this.closeOtherMobileDropdowns(mobileLanguageDropdown);
            });
        }

        // Desktop Currency Dropdown
        const currencyButton = document.getElementById('currency-button');
        const currencyDropdown = document.getElementById('currency-dropdown');

        if (currencyButton && currencyDropdown) {
            currencyButton.addEventListener('click', (e) => {
                e.stopPropagation();
                currencyDropdown.classList.toggle('active');
                this.closeOtherDropdowns(currencyDropdown);
            });
        }

        // Mobile Currency Dropdown
        const mobileCurrencyButton = document.querySelector('#mobile-currency-dropdown .mobile-currency-toggle');
        const mobileCurrencyDropdown = document.getElementById('mobile-currency-dropdown');

        if (mobileCurrencyButton && mobileCurrencyDropdown) {
            mobileCurrencyButton.addEventListener('click', (e) => {
                e.stopPropagation();
                mobileCurrencyDropdown.classList.toggle('active');
                this.rotateChevron(mobileCurrencyButton.querySelector('i'), mobileCurrencyDropdown.classList.contains('active'));
                this.closeOtherMobileDropdowns(mobileCurrencyDropdown);
            });
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                });
            }
            
            if (!e.target.closest('.mobile-dropdown')) {
                document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
                    dropdown.classList.remove('active');
                    const icon = dropdown.querySelector('.fa-chevron-down, i');
                    if (icon) icon.style.transform = 'rotate(0)';
                });
            }
        });

        // Mobile menu toggle
        this.setupMobileMenu();
    }

    setupMobileMenu() {
        const hamburgerCheckbox = document.getElementById('hamburger-checkbox');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');

        if (hamburgerCheckbox && mobileMenu && mobileMenuOverlay) {
            hamburgerCheckbox.addEventListener('change', () => {
                if (hamburgerCheckbox.checked) {
                    mobileMenu.classList.add('active');
                    mobileMenuOverlay.classList.add('active');
                    document.body.style.overflow = 'hidden';
                } else {
                    mobileMenu.classList.remove('active');
                    mobileMenuOverlay.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });

            mobileMenuOverlay.addEventListener('click', () => {
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

        // Close mobile menu on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                if (hamburgerCheckbox) hamburgerCheckbox.checked = false;
                if (mobileMenu) mobileMenu.classList.remove('active');
                if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }

    closeOtherDropdowns(currentDropdown) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
            if (dropdown !== currentDropdown && dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
            }
        });
    }

    closeOtherMobileDropdowns(currentDropdown) {
        document.querySelectorAll('.mobile-dropdown').forEach(dropdown => {
            if (dropdown !== currentDropdown && dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                const icon = dropdown.querySelector('.fa-chevron-down, i');
                if (icon) icon.style.transform = 'rotate(0)';
            }
        });
    }

    rotateChevron(icon, isActive) {
        if (icon) {
            icon.style.transform = isActive ? 'rotate(180deg)' : 'rotate(0)';
        }
    }

    changeLanguage(lang) {
        // Update displays
        const currentLanguageElement = document.getElementById('currentLanguage');
        const mobileCurrentLanguageElement = document.getElementById('mobileCurrentLanguage');
        
        if (currentLanguageElement) currentLanguageElement.textContent = lang.toUpperCase();
        if (mobileCurrentLanguageElement) mobileCurrentLanguageElement.textContent = lang.toUpperCase();

        // Update flag
        const langData = languages.find(l => l.code === lang);
        const flagElement = document.getElementById('currentFlag');
        if (langData && flagElement) {
            flagElement.className = `flag fi fi-${langData.flag}`;
        }

        // Save preference
        localStorage.setItem('preferredLanguage', lang);

        // Trigger Google Translate if available
        this.triggerGoogleTranslate(lang);
    }

    initializeGoogleTranslate() {
        // Load Google Translate script if not already loaded
        if (!window.googleTranslateLoader) {
            const script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.head.appendChild(script);
            window.googleTranslateLoader = true;
        }
    }

    triggerGoogleTranslate(lang) {
        // Wait for Google Translate to load
        const waitForGoogle = setInterval(() => {
            if (typeof google !== 'undefined' && google.translate && google.translate.TranslateElement) {
                clearInterval(waitForGoogle);
                
                // Check if the translate element already exists
                let translateElement = document.getElementById('google_translate_element');
                if (!translateElement) {
                    translateElement = document.createElement('div');
                    translateElement.id = 'google_translate_element';
                    translateElement.style.display = 'none';
                    document.body.appendChild(translateElement);
                }
                
                // Initialize or re-initialize Google Translate
                try {
                    new google.translate.TranslateElement({
                        pageLanguage: 'en',
                        includedLanguages: languages.map(l => l.code).join(','),
                        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false
                    }, 'google_translate_element');
                    
                    // Change language
                    setTimeout(() => {
                        const select = document.querySelector('.goog-te-combo');
                        if (select) {
                            select.value = lang;
                            select.dispatchEvent(new Event('change'));
                        }
                    }, 100);
                } catch (error) {
                    console.log('Google Translate error:', error);
                }
            }
        }, 100);
        
        // Timeout after 5 seconds
        setTimeout(() => clearInterval(waitForGoogle), 5000);
    }

    convertPrices(currency) {
        const rate = exchangeRates[currency];
        const currencyData = currencies.find(c => c.code === currency);
        const symbol = currencyData ? currencyData.symbol : '$';

        // Update all price elements with data-base-price attribute
        document.querySelectorAll('.price[data-base-price]').forEach(priceElement => {
            const basePrice = parseFloat(priceElement.getAttribute('data-base-price'));
            if (!isNaN(basePrice)) {
                const convertedPrice = (basePrice * rate).toFixed(2);
                priceElement.textContent = `${symbol}${convertedPrice}/night`;
            }
        });

        // Update currency displays
        const currentCurrencyElement = document.getElementById('currentCurrency');
        const mobileCurrentCurrencyElement = document.getElementById('mobileCurrentCurrency');
        
        if (currentCurrencyElement) currentCurrencyElement.textContent = currency;
        if (mobileCurrentCurrencyElement) mobileCurrentCurrencyElement.textContent = currency;

        // Save preference
        localStorage.setItem('preferredCurrency', currency);
        
        // Dispatch event for other components to update prices
        document.dispatchEvent(new CustomEvent('currencyChanged', {
            detail: { currency, rate, symbol }
        }));
    }

    loadSavedPreferences() {
        const savedLang = localStorage.getItem('preferredLanguage') || 'en';
        this.changeLanguage(savedLang);

        const savedCurrency = localStorage.getItem('preferredCurrency') || 'USD';
        this.convertPrices(savedCurrency);
    }
}

// ============================================
// 6. AMENITIES CAROUSEL
// ============================================

class AmenitiesCarousel {
    constructor() {
        this.carouselTrack = document.getElementById('carouselTrack');
        this.carouselIndicators = document.getElementById('carouselIndicators');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.mainImage = document.getElementById('mainImage');
        this.mainTitle = document.getElementById('mainTitle');
        this.mainDescription = document.getElementById('mainDescription');
        this.mainFeatures = document.getElementById('mainFeatures');
        
        this.currentIndex = 0;
        this.isAnimating = false;
        this.carouselInterval = null;
        
        this.amenitiesData = [
            {
                image: 'https://images2.imgbox.com/f6/6c/TxDt1ql3_o.jpg',
                title: 'Luxury Accommodations',
                description: 'Experience our elegantly appointed rooms with premium bedding, modern amenities, and stunning views designed for your ultimate comfort and relaxation.',
                brief: 'Elegant rooms with premium bedding and modern amenities.',
                features: ['Premium Bedding', 'Smart Room Controls', 'Panoramic Views', '24/7 Room Service'],
                icons: ['fas fa-bed', 'fas fa-tv', 'fas fa-wifi']
            },
            {
                image: 'https://images2.imgbox.com/26/89/amqn8zP3_o.jpg',
                title: 'Bar & Lounge',
                description: 'Relax and socialize in our sophisticated bar and lounge area with premium beverages and cozy ambiance.',
                brief: 'Sophisticated bar with premium beverages and live music.',
                features: ['Premium Beverages', 'Live Music', 'Cozy Ambiance', 'Expert Mixologists'],
                icons: ['fas fa-cocktail', 'fas fa-music', 'fas fa-wine-glass-alt']
            },
            {
                image: 'https://images2.imgbox.com/29/f8/FKkt9428_o.jpg',
                title: 'Spa & Wellness',
                description: 'Rejuvenate your senses with our premium spa treatments and wellness therapies. Our expert therapists provide personalized treatments for ultimate relaxation.',
                brief: 'Premium spa treatments and wellness therapies.',
                features: ['Massage Therapy', 'Beauty Treatments', 'Wellness Programs', 'Expert Therapists'],
                icons: ['fas fa-spa', 'fas fa-hot-tub', 'fas fa-leaf']
            },
            {
                image: 'https://images2.imgbox.com/f3/ee/azS0f2Yp_o.jpg',
                title: 'Fine Dining',
                description: 'Savor exquisite culinary experiences at our fine dining restaurant. Our chefs create innovative dishes using locally sourced ingredients and international flavors.',
                brief: 'Exquisite culinary experiences with local and international flavors.',
                features: ['Local Cuisine', 'International Dishes', 'Wine Selection', 'Chef Specials'],
                icons: ['fas fa-utensils', 'fas fa-wine-glass-alt', 'fas fa-coffee']
            },
            {
                image: 'https://images2.imgbox.com/2f/cc/xCp3HLpR_o.jpg',
                title: 'Coffee Corner',
                description: 'Start your day right with our premium coffee selection, artisanal pastries, and comfortable seating area.',
                brief: 'Premium coffee and artisanal pastries to start your day.',
                features: ['Premium Coffee', 'Artisanal Pastries', 'Comfortable Seating', 'Morning Specials'],
                icons: ['fas fa-coffee', 'fas fa-cookie', 'fas fa-mug-hot']
            }
        ];
        
        this.init();
    }

    init() {
        this.createAmenityCards();
        this.updateMainDisplay(0);
        this.startAutoRotation();
        this.setupEventListeners();
    }

    createAmenityCards() {
        if (!this.carouselTrack || !this.carouselIndicators) return;
        
        this.carouselTrack.innerHTML = '';
        this.carouselIndicators.innerHTML = '';

        // Create cards for original data
        this.amenitiesData.forEach((amenity, index) => {
            const card = this.createCard(amenity, index);
            this.carouselTrack.appendChild(card);

            // Create indicator
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            indicator.dataset.index = index;
            this.carouselIndicators.appendChild(indicator);
        });

        // Clone first few cards for infinite effect
        for (let i = 0; i < 5; i++) {
            const clone = this.carouselTrack.children[i].cloneNode(true);
            clone.dataset.index = this.amenitiesData.length + i;
            this.carouselTrack.appendChild(clone);
        }

        this.updateActiveStates();
    }

    createCard(amenity, index) {
        const card = document.createElement('div');
        card.className = 'amenity-card';
        card.dataset.index = index;

        card.innerHTML = `
            <img src="${amenity.image}" alt="${amenity.title}" class="amenity-image" loading="lazy" width="300" height="200">
            <div class="amenity-info">
                <h4>${amenity.title}</h4>
                <p class="amenity-brief">${amenity.brief}</p>
                <div class="amenity-icons">
                    ${amenity.icons.map(icon => `
                        <div class="amenity-icon">
                            <i class="${icon}"></i>
                        </div>
                    `).join('')}
                </div>
                <a href="#" class="learn-more-btn">Learn More</a>
            </div>
        `;

        return card;
    }

    updateMainDisplay(index) {
        const amenity = this.amenitiesData[index];
        if (!amenity) return;

        if (this.mainImage) this.mainImage.src = amenity.image;
        if (this.mainTitle) this.mainTitle.textContent = amenity.title;
        if (this.mainDescription) this.mainDescription.textContent = amenity.description;

        if (this.mainFeatures) {
            this.mainFeatures.innerHTML = '';
            amenity.features.forEach(feature => {
                const featureTag = document.createElement('span');
                featureTag.className = 'feature-tag';
                featureTag.textContent = feature;
                this.mainFeatures.appendChild(featureTag);
            });
        }
    }

    updateActiveStates() {
        const amenityCards = document.querySelectorAll('.amenity-card');
        const indicators = document.querySelectorAll('.indicator');

        amenityCards.forEach(card => card.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));

        const actualIndex = this.currentIndex % this.amenitiesData.length;

        if (amenityCards[this.currentIndex]) {
            amenityCards[this.currentIndex].classList.add('active');
        }

        if (indicators[actualIndex]) {
            indicators[actualIndex].classList.add('active');
        }
    }

    updateCarouselPosition() {
        if (this.isAnimating || !this.carouselTrack) return;

        this.isAnimating = true;
        const scrollPosition = this.currentIndex * 320;
        this.carouselTrack.style.transform = `translateX(-${scrollPosition}px)`;

        setTimeout(() => {
            this.updateActiveStates();
            this.isAnimating = false;

            // Reset position if we're at the cloned cards
            if (this.currentIndex >= this.amenitiesData.length) {
                this.currentIndex = this.currentIndex % this.amenitiesData.length;
                this.carouselTrack.style.transition = 'none';
                this.carouselTrack.style.transform = `translateX(-${this.currentIndex * 320}px)`;
                setTimeout(() => {
                    this.carouselTrack.style.transition = 'transform 1.2s ease';
                }, 50);
            }
        }, 1200);
    }

    navigateCarousel(direction) {
        if (this.isAnimating) return;

        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % (this.amenitiesData.length + 5);
        } else {
            this.currentIndex = (this.currentIndex - 1 + (this.amenitiesData.length + 5)) % (this.amenitiesData.length + 5);

            if (this.currentIndex === this.amenitiesData.length + 5 - 1) {
                this.currentIndex = this.amenitiesData.length - 1;
            }
        }

        this.updateMainDisplay(this.currentIndex % this.amenitiesData.length);
        this.updateCarouselPosition();
    }

    startAutoRotation() {
        this.carouselInterval = setInterval(() => {
            this.navigateCarousel('next');
        }, 6000);
    }

    stopAutoRotation() {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
        }
    }

    setupEventListeners() {
        // Card and indicator clicks
        document.addEventListener('click', (e) => {
            const card = e.target.closest('.amenity-card');
            if (card) {
                const index = parseInt(card.dataset.index);
                this.currentIndex = index % this.amenitiesData.length;
                this.updateMainDisplay(this.currentIndex);
                this.updateCarouselPosition();
                this.stopAutoRotation();
                setTimeout(() => this.startAutoRotation(), 10000);
                return;
            }

            const indicator = e.target.closest('.indicator');
            if (indicator) {
                const index = parseInt(indicator.dataset.index);
                this.currentIndex = index;
                this.updateMainDisplay(this.currentIndex);
                this.updateCarouselPosition();
                this.stopAutoRotation();
                setTimeout(() => this.startAutoRotation(), 10000);
                return;
            }

            const learnMoreBtn = e.target.closest('.learn-more-btn');
            if (learnMoreBtn) {
                e.preventDefault();
                const card = learnMoreBtn.closest('.amenity-card');
                const index = parseInt(card.dataset.index);
                this.currentIndex = index % this.amenitiesData.length;
                this.updateMainDisplay(this.currentIndex);
                this.updateCarouselPosition();
                this.stopAutoRotation();
                setTimeout(() => this.startAutoRotation(), 10000);

                // Scroll to main amenity section
                document.querySelector('.main-amenity')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        });

        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => {
                this.navigateCarousel('prev');
                this.stopAutoRotation();
                setTimeout(() => this.startAutoRotation(), 10000);
            });
        }

        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => {
                this.navigateCarousel('next');
                this.stopAutoRotation();
                setTimeout(() => this.startAutoRotation(), 10000);
            });
        }
    }
}

// ============================================
// 7. VIRTUAL TOUR
// ============================================

class VirtualTour {
    constructor() {
        this.iframeContainer = document.querySelector('.tour-container');
        this.fullscreenBtn = document.querySelector('.control-btn.fullscreen');
        this.closeFullscreenBtn = document.querySelector('.close-fullscreen');
        this.iframe = document.getElementById('virtual-tour-iframe');
        
        this.init();
    }

    init() {
        if (!this.iframeContainer || !this.fullscreenBtn) return;

        // Fullscreen functionality
        this.fullscreenBtn.addEventListener('click', () => this.toggleFullscreen());

        if (this.closeFullscreenBtn) {
            this.closeFullscreenBtn.addEventListener('click', () => this.exitFullscreen());
        }

        // Handle fullscreen change events
        this.setupFullscreenEvents();

        // Show loading state
        this.setupLoadingState();
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.iframeContainer.classList.add('fullscreen-active');
            this.requestFullscreenElement(this.iframeContainer);
        } else {
            this.exitFullscreen();
        }
    }

    requestFullscreenElement(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    exitFullscreen() {
        this.iframeContainer.classList.remove('fullscreen-active');
        
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }

    setupFullscreenEvents() {
        const exitHandler = () => {
            if (!document.fullscreenElement &&
                !document.webkitFullscreenElement &&
                !document.mozFullScreenElement &&
                !document.msFullscreenElement) {
                this.iframeContainer.classList.remove('fullscreen-active');
            }
        };

        document.addEventListener('fullscreenchange', exitHandler);
        document.addEventListener('webkitfullscreenchange', exitHandler);
        document.addEventListener('mozfullscreenchange', exitHandler);
        document.addEventListener('MSFullscreenChange', exitHandler);
    }

    setupLoadingState() {
        if (this.iframe) {
            this.iframe.addEventListener('load', () => {
                this.iframeContainer.style.opacity = '1';
            });
            
            // Initial state
            this.iframeContainer.style.opacity = '0.7';
            this.iframeContainer.style.transition = 'opacity 0.5s ease';
        }
    }
}

// ============================================
// 8. COFFEE CAROUSEL
// ============================================

class CoffeeCarousel {
    constructor() {
        this.coffeeTrack = document.getElementById('coffeeCarouselTrack');
        this.coffeeSlides = document.querySelectorAll('.coffee-carousel-slide');
        this.coffeePrevBtn = document.getElementById('coffeePrevBtn');
        this.coffeeNextBtn = document.getElementById('coffeeNextBtn');
        
        this.coffeeCurrentIndex = 0;
        this.coffeeAutoRotateInterval = null;
        
        this.init();
    }

    init() {
        if (!this.coffeeTrack || this.coffeeSlides.length === 0) return;
        
        this.startCoffeeAutoRotation();
        this.setupEventListeners();
    }

    goToCoffeeSlide(index) {
        this.coffeeCurrentIndex = index;
        this.coffeeTrack.style.transform = `translateX(-${this.coffeeCurrentIndex * 100}%)`;
        
        this.coffeeSlides.forEach((slide, i) => {
            slide.classList.toggle('active', i === this.coffeeCurrentIndex);
        });
        
        this.resetCoffeeAutoRotation();
    }

    coffeeNextSlide() {
        let nextIndex = (this.coffeeCurrentIndex + 1) % this.coffeeSlides.length;
        this.goToCoffeeSlide(nextIndex);
    }

    coffeePrevSlide() {
        let prevIndex = (this.coffeeCurrentIndex - 1 + this.coffeeSlides.length) % this.coffeeSlides.length;
        this.goToCoffeeSlide(prevIndex);
    }

    startCoffeeAutoRotation() {
        this.coffeeAutoRotateInterval = setInterval(() => this.coffeeNextSlide(), 5000);
    }

    resetCoffeeAutoRotation() {
        clearInterval(this.coffeeAutoRotateInterval);
        this.startCoffeeAutoRotation();
    }

    setupEventListeners() {
        // Event listeners
        if (this.coffeePrevBtn) {
            this.coffeePrevBtn.addEventListener('click', () => this.coffeePrevSlide());
        }
        
        if (this.coffeeNextBtn) {
            this.coffeeNextBtn.addEventListener('click', () => this.coffeeNextSlide());
        }

        // Pause auto-rotation on hover
        this.coffeeTrack.addEventListener('mouseenter', () => {
            clearInterval(this.coffeeAutoRotateInterval);
        });

        this.coffeeTrack.addEventListener('mouseleave', () => {
            this.startCoffeeAutoRotation();
        });
    }
}

// ============================================
// 9. FAQS ACCORDION
// ============================================

class FAQsAccordion {
    constructor() {
        this.accordionHeaders = document.querySelectorAll('.accordion-header');
        this.init();
    }

    init() {
        this.accordionHeaders.forEach(header => {
            header.addEventListener('click', () => this.toggleAccordion(header));
        });
    }

    toggleAccordion(clickedHeader) {
        const content = clickedHeader.nextElementSibling;
        const isActive = clickedHeader.classList.contains('active');

        // Close all accordion items
        document.querySelectorAll('.accordion-header').forEach(h => {
            h.classList.remove('active');
        });
        document.querySelectorAll('.accordion-content').forEach(c => {
            c.classList.remove('active');
        });

        // If clicked item wasn't active, open it
        if (!isActive) {
            clickedHeader.classList.add('active');
            content.classList.add('active');
        }
    }
}

// ============================================
// 10. NEWSLETTER FORM
// ============================================

class NewsletterForm {
    constructor() {
        this.form = document.getElementById('newsletterForm');
        this.emailInput = document.getElementById('emailInput');
        this.successMessage = document.getElementById('successMessage');
        
        this.init();
    }

    init() {
        if (!this.form || !this.emailInput) return;

        this.setupInputInteractions();
        this.setupFormSubmission();
        this.checkAutofill();
    }

    setupInputInteractions() {
        this.emailInput.addEventListener('focus', () => {
            this.emailInput.parentElement.classList.add('focused');
            this.emailInput.style.borderColor = 'var(--gold)';
            this.emailInput.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.25)';
            this.emailInput.style.backgroundColor = 'var(--white)';
            this.emailInput.style.color = 'var(--evergreen)';
        });

        this.emailInput.addEventListener('blur', () => {
            this.emailInput.parentElement.classList.remove('focused');
            if (!this.emailInput.value) {
                this.emailInput.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                this.emailInput.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                this.emailInput.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                this.emailInput.style.color = 'var(--charcoal)';
            }
        });

        this.emailInput.addEventListener('input', () => {
            if (this.emailInput.value) {
                this.emailInput.style.borderColor = 'var(--evergreen)';
                this.emailInput.style.color = 'var(--evergreen)';
            }
        });
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Simple email validation
            const email = this.emailInput.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                this.showErrorState();
                return;
            }

            this.showSuccessState();
            console.log('Newsletter subscription for:', email);
        });
    }

    showErrorState() {
        // Show error state
        this.emailInput.style.borderColor = 'var(--crimson)';
        this.emailInput.style.boxShadow = '0 8px 25px rgba(195, 32, 38, 0.25)';
        this.emailInput.style.backgroundColor = '#fff0f0';

        // Shake animation for error
        this.emailInput.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            this.emailInput.style.animation = '';
        }, 500);

        setTimeout(() => {
            if (this.emailInput.value) {
                this.emailInput.style.borderColor = 'var(--evergreen)';
                this.emailInput.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                this.emailInput.style.backgroundColor = 'var(--white)';
            } else {
                this.emailInput.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                this.emailInput.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
                this.emailInput.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            }
        }, 2000);
    }

    showSuccessState() {
        // Show success message
        if (this.successMessage) {
            this.successMessage.style.display = 'block';
        }

        // Add animation to button
        const submitBtn = this.form.querySelector('.btns-primary');
        if (submitBtn) {
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
            submitBtn.style.background = 'linear-gradient(135deg, var(--evergreen) 0%, var(--evergreen-dark) 100%)';
            submitBtn.style.pointerEvents = 'none';
        }

        // Change input to success state
        this.emailInput.style.borderColor = 'var(--evergreen)';
        this.emailInput.style.boxShadow = '0 5px 15px rgba(15, 58, 52, 0.25)';
        this.emailInput.style.backgroundColor = 'rgba(244, 228, 166, 0.2)';
        this.emailInput.disabled = true;

        // Reset form after 4 seconds
        setTimeout(() => {
            this.form.reset();
            
            if (submitBtn) {
                submitBtn.innerHTML = originalHTML;
                submitBtn.style.background = '';
                submitBtn.style.pointerEvents = '';
            }

            this.emailInput.style.borderColor = 'rgba(255, 255, 255, 0.5)';
            this.emailInput.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
            this.emailInput.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            this.emailInput.style.color = 'var(--charcoal)';
            this.emailInput.disabled = false;
        }, 4000);

        // Hide success message after 5 seconds
        setTimeout(() => {
            if (this.successMessage) {
                this.successMessage.style.display = 'none';
            }
        }, 5000);
    }

    checkAutofill() {
        setTimeout(() => {
            if (this.emailInput.value) {
                this.emailInput.dispatchEvent(new Event('input'));
            }
        }, 100);
    }
}

// ============================================
// 11. TESTIMONIALS CAROUSEL
// ============================================

class TestimonialsCarousel {
    constructor() {
        this.testimonialTrack = document.getElementById('testimonialTrack');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.carouselDots = document.getElementById('carouselDots');
        this.testimonialCards = document.querySelectorAll('.testimonial-large-card');
        this.carouselContainer = document.querySelector('.testimonial-carousel-container');
        
        this.currentSlide = 0;
        this.totalSlides = this.testimonialCards.length;
        this.carouselInterval = null;
        
        this.init();
    }

    init() {
        if (this.totalSlides === 0) return;
        
        this.createDots();
        this.updateCarousel();
        this.setupEventListeners();
        this.startAutoAdvance();
    }

    createDots() {
        if (!this.carouselDots) return;
        
        this.carouselDots.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = 'carousel-dot';
            if (i === 0) dot.classList.add('active');
            dot.setAttribute('data-index', i);
            dot.addEventListener('click', () => this.goToSlide(i));
            this.carouselDots.appendChild(dot);
        }
    }

    updateCarousel() {
        if (this.testimonialTrack) {
            this.testimonialTrack.style.transform = `translateX(-${this.currentSlide * 100}%)`;
        }

        // Update active dot
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    goToSlide(slideIndex) {
        this.currentSlide = slideIndex;
        if (this.currentSlide >= this.totalSlides) this.currentSlide = 0;
        if (this.currentSlide < 0) this.currentSlide = this.totalSlides - 1;
        this.updateCarousel();
    }

    nextSlide() {
        this.currentSlide++;
        if (this.currentSlide >= this.totalSlides) this.currentSlide = 0;
        this.updateCarousel();
    }

    prevSlide() {
        this.currentSlide--;
        if (this.currentSlide < 0) this.currentSlide = this.totalSlides - 1;
        this.updateCarousel();
    }

    startAutoAdvance() {
        this.carouselInterval = setInterval(() => this.nextSlide(), 5000);
    }

    stopAutoAdvance() {
        if (this.carouselInterval) {
            clearInterval(this.carouselInterval);
        }
    }

    setupEventListeners() {
        // Navigation buttons
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }

        // Pause auto-advance on hover
        if (this.carouselContainer) {
            this.carouselContainer.addEventListener('mouseenter', () => {
                this.stopAutoAdvance();
            });

            this.carouselContainer.addEventListener('mouseleave', () => {
                this.startAutoAdvance();
            });
        }
    }
}

// ============================================
// 12. PERFORMANCE OPTIMIZATIONS
// ============================================

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.fixImageLoading();
        this.setupPassiveListeners();
        this.preventMobileScrollIssues();
        this.optimizeAnimations();
    }

    fixImageLoading() {
        // Mark images as loaded when they finish loading
        document.querySelectorAll('img').forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
            }
            
            // Set default dimensions if not set
            if (!img.hasAttribute('width') || !img.hasAttribute('height')) {
                img.setAttribute('width', '300');
                img.setAttribute('height', '200');
            }
        });
    }

    setupPassiveListeners() {
        // Use passive event listeners for better scroll performance
        const passiveOptions = { passive: true };
        
        // Touch events
        document.addEventListener('touchstart', () => {}, passiveOptions);
        document.addEventListener('touchmove', () => {}, passiveOptions);
        
        // Wheel events
        document.addEventListener('wheel', () => {}, passiveOptions);
    }

    preventMobileScrollIssues() {
        // Fix for iOS Safari 100vh issue
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        
        setVH();
        window.addEventListener('resize', debounce(setVH, 250));
    }

    optimizeAnimations() {
        // Use transform for hardware acceleration
        const style = document.createElement('style');
        style.textContent = `
            /* Performance optimizations */
            .carousels, .amenity-card, .room-card, .slide, .hero-carousel-track {
                transform: translateZ(0);
                backface-visibility: hidden;
                perspective: 1000px;
            }
            
            img {
                image-rendering: auto;
                max-width: 100%;
                height: auto;
            }
            
            .room-image, .amenity-image {
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .room-image.loaded, .amenity-image.loaded {
                opacity: 1;
            }
            
            html {
                scroll-behavior: smooth;
            }
            
            body {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
            
            /* Shake animation for errors */
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
            
            /* Ensure no horizontal overflow */
            .container, .section {
                max-width: 100%;
                overflow-x: hidden;
            }
        `;
        document.head.appendChild(style);
    }
}

// ============================================
// MAIN INITIALIZATION
// ============================================

// Initialize Google Translate
function googleTranslateElementInit() {
    if (typeof google !== 'undefined' && google.translate) {
        new google.translate.TranslateElement(
            { pageLanguage: 'en', autoDisplay: false },
            'google_translate_element'
        );
        
        // Hide Google Translate toolbar
        const style = document.createElement('style');
        style.innerHTML = `
            .goog-te-banner-frame, .goog-te-menu-frame { 
                display: none !important; 
            }
            body { 
                top: 0px !important; 
            }
            .goog-te-gadget-simple {
                border: none !important;
                background: transparent !important;
            }
            .goog-te-gadget-icon {
                display: none !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Load Google Translate script
function loadGoogleTranslate() {
    if (!document.querySelector('script[src*="translate.google.com"]')) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        document.body.appendChild(script);
    }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing all components...');
    
    // Initialize performance optimizations first
    new PerformanceOptimizer();
    
    // Initialize all components
    new HeaderManager();
    new WeatherManager();
    new HeroCarousel();
    new RoomCarousel().init();
    new LanguageCurrencyManager();
    new AmenitiesCarousel();
    new VirtualTour();
    new CoffeeCarousel();
    new FAQsAccordion();
    new NewsletterForm();
    new TestimonialsCarousel();
    
    // Load Google Translate
    loadGoogleTranslate();
    
    // Load images after page is ready
    setTimeout(() => {
        document.querySelectorAll('img').forEach(img => {
            if (img.complete) {
                img.classList.add('loaded');
            }
        });
    }, 500);
    
    // Add CSS for scrollbar hiding
    const scrollbarCSS = document.createElement('style');
    scrollbarCSS.textContent = `
        /* Hide scrollbars but keep scrolling functionality */
        ::-webkit-scrollbar {
            width: 0px;
            height: 0px;
            display: none;
        }
        
        * {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
        
        /* Ensure content fits within viewport */
        html, body {
            overflow-x: hidden;
            max-width: 100vw;
            position: relative;
        }
        
        .container {
            max-width: 100%;
            overflow-x: hidden;
        }
    `;
    document.head.appendChild(scrollbarCSS);
});

// Fallback for Google Translate
window.googleTranslateElementInit = googleTranslateElementInit;

// Add CSS for image loading states
const imageLoadingCSS = document.createElement('style');
imageLoadingCSS.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
    
    .room-image, .amenity-image {
        animation: fadeIn 0.5s ease forwards;
    }
`;
document.head.appendChild(imageLoadingCSS);