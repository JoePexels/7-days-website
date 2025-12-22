// Enhanced animations for amenities, contact info, parallax effect, tooltip animation, and page load animation
document.querySelectorAll(".amenity-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const icon = this.querySelector(".ammenity-icons");
    icon.style.transform = "translateY(-10px) rotate(15deg) scale(1.1)";
    icon.style.boxShadow = "0 20px 40px rgba(195, 32, 38, 0.4)";
  });

  item.addEventListener("mouseleave", function () {
    const icon = this.querySelector(".ammenity-icons");
    icon.style.transform = "translateY(0) rotate(0) scale(1)";
    icon.style.boxShadow = "0 8px 20px rgba(15, 58, 52, 0.2)";
  });
});

// Enhanced animations for contact info
document.querySelectorAll(".contact-infos p").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    const icon = this.querySelector("i");
    icon.style.transform = "rotate(15deg) scale(1.2)";
  });

  item.addEventListener("mouseleave", function () {
    const icon = this.querySelector("i");
    icon.style.transform = "rotate(0) scale(1)";
  });
});

// Parallax effect for pattern
document
  .querySelector(".luxury-footer")
  .addEventListener("mousemove", function (e) {
    const pattern = this.querySelector(".footer-pattern");
    const x = (e.clientX / window.innerWidth) * 50;
    const y = (e.clientY / window.innerHeight) * 50;
    pattern.style.transform = `translate(${x}px, ${y}px)`;
  });

// Tooltip animation
document.querySelectorAll(".payment-icon").forEach((icon) => {
  icon.addEventListener("mouseenter", function () {
    const tooltip = this.querySelector(".payment-tooltip");
    tooltip.style.transform = "translateX(-50%) translateY(-5px)";
  });

  icon.addEventListener("mouseleave", function () {
    const tooltip = this.querySelector(".payment-tooltip");
    tooltip.style.transform = "translateX(-50%) translateY(-10px)";
  });
});

// Page load animation
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".luxury-footer");
  footer.style.opacity = "0";
  footer.style.transform = "translateY(20px)";

  setTimeout(() => {
    footer.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    footer.style.opacity = "1";
    footer.style.transform = "translateY(0)";
  }, 100);
});

// Room carousel, booking, and modals functionality
document.addEventListener("DOMContentLoaded", function () {
  const carousels = document.querySelector(".carousels");
  const prevBtns = document.querySelector(".prev-btns");
  const nextBtns = document.querySelector(".next-btns");
  const indicatorsContainer = document.querySelector(".carousels-indicators");
  const roomDetailModal = document.getElementById("roomDetailModal");
  const bookingModal = document.getElementById("bookingModal");
  const closeModals = document.querySelectorAll(".close-modal");
  const likeRoomBtns = document.getElementById("likeRoomBtns");
  const modalBookNowBtns = document.getElementById("modalBookNowBtns");
  const viewAllContainer = document.querySelector(".view-all-container");
  const likeToast = document.getElementById("likeToast");
  const toastMessage = document.getElementById("toastMessage");
  const closeBookingModal = document.getElementById("closeBookingModal");
  const confirmBooking = document.getElementById("confirmBooking");
  const bookingRoomTitle = document.getElementById("bookingRoomTitle");
  const bookingRoomSubtitle = document.getElementById("bookingRoomSubtitle");
  const checkInDate = document.getElementById("checkInDate");
  const checkOutDate = document.getElementById("checkOutDate");
  const bookingForm = document.getElementById("bookingForm");

  // Set minimum dates for booking form
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  checkInDate.min = today.toISOString().split("T")[0];
  checkOutDate.min = tomorrow.toISOString().split("T")[0];

  // Set default dates
  checkInDate.value = today.toISOString().split("T")[0];
  checkOutDate.value = tomorrow.toISOString().split("T")[0];

  const roomData = [
    {
      id: "single",
      name: "Single Room",
      price: "$40/night",
      basePrice: 40,
      ribbons: "Budget Friendly",
      image: "https://images2.imgbox.com/ba/03/f1GM4QbZ_o.jpg",
      rating: 4.1,
      reviews: 58,
      guests: 1,
      description:
        "A comfortable and affordable Single Room ideal for solo travelers. Equipped with essential amenities like AC, WiFi, wardrobe, television, guest phone and a clean standard bathroom. Perfect for business stays or quick stopovers.",
      features: [
        { icon: "fas fa-wifi", text: "Free WiFi" },
        { icon: "fas fa-snowflake", text: "Air Conditioning" },
        { icon: "fas fa-tv", text: "Flat-Screen TV" },
        { icon: "fas fa-phone", text: "Guest Room Phone" },
        { icon: "fas fa-bath", text: "Standard Bathroom" },
        { icon: "fas fa-bed", text: "Single Bed" },
      ],
      roomSize: "20 m²",
      maxGuests: "1 Adult",
      bedType: "Single Bed",
      view: "Courtyard View",
      galleryImages: [
        "https://images2.imgbox.com/86/f0/k9VQagZH_o.jpg",
        "https://images.unsplash.com/photo-1560067174-89456ad09d9c",
      ],
    },

    {
      id: "double",
      name: "Double Room",
      price: "$50/night",
      basePrice: 50,
      ribbons: "Popular Choice",
      image: "https://images2.imgbox.com/ec/6f/zNm9SZge_o.jpg",
      rating: 4.6,
      reviews: 82,
      guests: 2,
      description:
        "A well-appointed Double Room with two double beds, AC, WiFi, wardrobe, television, and a standard bathroom with water heater. Ideal for friends, colleagues, or small families.",
      features: [
        { icon: "fas fa-bed", text: "Two Double Beds" },
        { icon: "fas fa-wifi", text: "Free WiFi" },
        { icon: "fas fa-tv", text: "Smart TV" },
        { icon: "fas fa-phone", text: "Guest Phone" },
        { icon: "fas fa-snowflake", text: "Air Conditioning" },
        { icon: "fas fa-bath", text: "Standard Bathroom" },
      ],
      roomSize: "32 m²",
      maxGuests: "2 Adults + 1 Child",
      bedType: "2 Double Beds",
      view: "City View",
      galleryImages: [
        "https://images2.imgbox.com/53/29/JJxH2f7M_o.jpg",
        "https://images2.imgbox.com/a8/5d/JUlkNJLq_o.jpg",
      ],
    },

    {
      id: "family",
      name: "Family Suite",
      price: "$160/night",
      basePrice: 160,
      ribbons: "Family Friendly",
      image: "https://images2.imgbox.com/8c/85/9GunGNH9_o.jpg",
      rating: 4.8,
      reviews: 89,
      guests: 5,
      description:
        "A spacious Family Suite perfect for large families. Includes four double beds, AC, WiFi, wardrobe, television, fridge, guest room phones, a standard bathroom with bathtub, and a private balcony.",
      features: [
        { icon: "fas fa-bed", text: "4 Double Beds" },
        { icon: "fas fa-wifi", text: "High-Speed WiFi" },
        { icon: "fas fa-tv", text: "Multiple TVs" },
        { icon: "fas fa-snowflake", text: "Air Conditioning" },
        { icon: "fas fa-ice-cream", text: "Fridge" },
        { icon: "fas fa-bath", text: "Bathtub & Water Heater" },
      ],
      roomSize: "50 m²",
      maxGuests: "4 Adults + 2 Children",
      bedType: "4 Double Beds",
      view: "Balcony View",
      galleryImages: [
        "https://images2.imgbox.com/15/12/YJjOTuSF_o.jpg",
        "https://images2.imgbox.com/3d/bf/Vfetjdcn_o.jpg",
      ],
    },

    {
      id: "twin",
      name: "Twin Room",
      price: "$80/night",
      basePrice: 80,
      ribbons: "Great for Friends",
      image: "https://images2.imgbox.com/ae/03/CXBoiao1_o.jpg",
      rating: 4.3,
      reviews: 73,
      guests: 2,
      description:
        "A comfortable Twin Room featuring two double beds, AC, WiFi, wardrobe, television, guest room phone, a standard bathroom with water heater, and a private balcony. Perfect for friends, siblings, or colleagues.",
      features: [
        { icon: "fas fa-bed", text: "Two Double Beds" },
        { icon: "fas fa-wifi", text: "Free WiFi" },
        { icon: "fas fa-tv", text: "Television" },
        { icon: "fas fa-phone", text: "Guest Room Phone" },
        { icon: "fas fa-snowflake", text: "Air Conditioning" },
        { icon: "fas fa-bath", text: "Standard Bathroom" },
      ],
      roomSize: "30 m²",
      maxGuests: "2 Adults",
      bedType: "2 Double Beds",
      view: "Balcony View",
      galleryImages: [
        "https://images2.imgbox.com/1e/04/zhsCT5S0_o.jpg",
        "https://images2.imgbox.com/90/73/ZSgzfgl4_o.jpg",
      ],
    },

    {
      id: "apartment",
      name: "Luxury Apartment Suite",
      price: "$60/night",
      basePrice: 60,
      ribbons: "Long Stay",
      image: "https://images2.imgbox.com/a8/31/rBuDiUtO_o.jpg",
      rating: 4.9,
      reviews: 54,
      guests: 6,
      description:
        "A fully furnished Apartment Suite designed for long stays and families. Includes a living room, kitchenette, AC, WiFi, fridge, wardrobe, multiple beds, spacious bathroom and balcony with beautiful views.",
      features: [
        { icon: "fas fa-home", text: "Living Room" },
        { icon: "fas fa-utensils", text: "Kitchenette" },
        { icon: "fas fa-wifi", text: "High-Speed WiFi" },
        { icon: "fas fa-tv", text: "Smart TV" },
        { icon: "fas fa-snowflake", text: "Air Conditioning" },
        { icon: "fas fa-bath", text: "Spacious Bathroom" },
      ],
      roomSize: "85 m²",
      maxGuests: "6 Guests",
      bedType: "Multiple Beds",
      view: "Panoramic Balcony View",
      galleryImages: [
        "https://images2.imgbox.com/88/27/4VVwrpaV_o.jpg",
        "https://images2.imgbox.com/29/7d/3DZwEFdu_o.jpg",
      ],
    },
  ];

  // Carousels state
  let currentIndex = 0;
  let cardsPerView = getCardsPerView();
  let isTransitioning = false;
  let currentRoom = null;

  // Initialize carousels
  initializeCarousels();

  // Next button functionality
  nextBtns.addEventListener("click", function () {
    if (isTransitioning || this.classList.contains("disabled")) return;
    navigateCarousels(1);
  });

  // Previous button functionality
  prevBtns.addEventListener("click", function () {
    if (isTransitioning || this.classList.contains("disabled")) return;
    navigateCarousels(-1);
  });

  // Close modals
  closeModals.forEach((closeBtns) => {
    closeBtns.addEventListener("click", function () {
      roomDetailModal.style.display = "none";
      bookingModal.style.display = "none";
    });
  });

  // Close booking modal with cancel button
  closeBookingModal.addEventListener("click", function () {
    bookingModal.style.display = "none";
  });

  // Prevent form submission and handle it with our custom function
  bookingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // Form submission is handled by the confirmBooking click event
  });

  // Confirm booking - redirect to WhatsApp - DEBUG VERSION
  confirmBooking.addEventListener("click", function (e) {
    console.log("Confirm Booking button clicked!");

    // Validate form
    if (!validateBookingForm()) {
      console.log("Form validation failed");
      return; // Error message shown in validateBookingForm
    }

    console.log("Form validation passed");
    console.log("Current Room:", currentRoom);

    // Prepare WhatsApp message
    const message = prepareWhatsAppMessage();
    console.log("WhatsApp message prepared:", message);

    const whatsappURL = `https://wa.me/256709093939?text=${encodeURIComponent(
      message
    )}`;
    console.log("WhatsApp URL:", whatsappURL);

    // Close booking modal
    bookingModal.style.display = "none";
    console.log("Modal closed");

    // Redirect directly to WhatsApp
    console.log("Attempting to redirect to WhatsApp...");
    redirectToWhatsApp(whatsappURL);
  });

  // Enhanced validateBookingForm with debugging
  function validateBookingForm() {
    console.log("=== FORM VALIDATION START ===");

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const checkIn = document.getElementById("checkInDate").value;
    const checkOut = document.getElementById("checkOutDate").value;

    console.log("Form values:", {
      fullName: fullName,
      email: email,
      phone: phone,
      checkIn: checkIn,
      checkOut: checkOut,
      currentRoom: currentRoom,
    });

    // Check required fields
    if (!fullName) {
      alert("Please enter your full name.");
      console.log("Validation failed: No full name");
      return false;
    }

    if (!email) {
      alert("Please enter your email address.");
      console.log("Validation failed: No email");
      return false;
    }

    if (!phone) {
      alert("Please enter your phone number.");
      console.log("Validation failed: No phone");
      return false;
    }

    if (!checkIn) {
      alert("Please select a check-in date.");
      console.log("Validation failed: No check-in date");
      return false;
    }

    if (!checkOut) {
      alert("Please select a check-out date.");
      console.log("Validation failed: No check-out date");
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address (e.g., name@example.com).");
      console.log("Validation failed: Invalid email format");
      return false;
    }

    // Validate phone (basic validation)
    const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      alert("Please enter a valid phone number (at least 10 digits).");
      console.log("Validation failed: Invalid phone number");
      return false;
    }

    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      alert("Check-in date cannot be in the past.");
      console.log("Validation failed: Check-in date in past");
      return false;
    }

    if (checkOutDate <= checkInDate) {
      alert("Check-out date must be after check-in date.");
      console.log("Validation failed: Check-out not after check-in");
      return false;
    }

    // Check if room is selected
    if (!currentRoom) {
      alert("Please select a room first.");
      console.log("Validation failed: No room selected");
      return false;
    }

    console.log("=== FORM VALIDATION PASSED ===");
    return true;
  }

  // Enhanced redirect function with debugging
  function redirectToWhatsApp(whatsappURL) {
    console.log("Redirect function called with URL:", whatsappURL);

    // Try different methods to ensure redirection works
    try {
      console.log("Attempting Method 1: window.location.href");
      window.location.href = whatsappURL;
      console.log("Method 1 succeeded");
    } catch (e) {
      console.log("Method 1 failed:", e);
      try {
        console.log("Attempting Method 2: window.open");
        const newWindow = window.open(
          whatsappURL,
          "_blank",
          "noopener,noreferrer"
        );
        if (newWindow) {
          console.log("Method 2 succeeded");
        } else {
          console.log("Method 2 failed - window.open returned null");
          throw new Error("window.open failed");
        }
      } catch (e2) {
        console.log("Method 2 failed:", e2);
        // Method 3: Create and click a link
        try {
          console.log("Attempting Method 3: Creating link element");
          const link = document.createElement("a");
          link.href = whatsappURL;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.style.display = "none";
          link.id = "whatsapp-redirect-link";
          document.body.appendChild(link);
          console.log("Link element created and appended");

          // Try to click it
          link.click();
          console.log("Link clicked");

          setTimeout(() => {
            document.body.removeChild(link);
            console.log("Link element removed");
          }, 100);
        } catch (e3) {
          console.log("Method 3 failed:", e3);
          // Final fallback: Show the URL for manual copy
          console.log("All methods failed, showing alert");
          alert(
            `Unable to open WhatsApp automatically. Please copy this link and open it manually:\n\n${whatsappURL}\n\nYou can also manually send this message to +256709093939 on WhatsApp.`
          );
        }
      }
    }
  }

  // WhatsApp redirect function
  function redirectToWhatsApp(whatsappURL) {
    // Try different methods to ensure redirection works
    try {
      // Method 1: Direct navigation (works best in most cases)
      window.location.href = whatsappURL;
    } catch (e) {
      console.log("Direct navigation failed:", e);
      try {
        // Method 2: Open in new tab
        window.open(whatsappURL, "_blank", "noopener,noreferrer");
      } catch (e2) {
        console.log("Window.open failed:", e2);
        // Method 3: Create and click a link
        try {
          const link = document.createElement("a");
          link.href = whatsappURL;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.style.display = "none";
          document.body.appendChild(link);
          link.click();
          setTimeout(() => {
            document.body.removeChild(link);
          }, 100);
        } catch (e3) {
          console.log("Link click method failed:", e3);
          // Final fallback: Show the URL for manual copy
          alert(
            `Unable to open WhatsApp automatically. Please copy this link and open it manually:\n\n${whatsappURL}`
          );
        }
      }
    }
  }

  // Like room functionality
  likeRoomBtns.addEventListener("click", function () {
    const heartIcon = this.querySelector(".heart-icon");

    if (this.classList.contains("liked")) {
      // Unlike
      this.classList.remove("liked");
      heartIcon.classList.remove("fas");
      heartIcon.classList.add("far");
      showLikeToast("Room removed from favorites!");
    } else {
      // Like
      this.classList.add("liked");
      heartIcon.classList.remove("far");
      heartIcon.classList.add("fas");
      showLikeToast("Room added to favorites!");
    }
  });

  // Book now button in modal
  modalBookNowBtns.addEventListener("click", function () {
    if (currentRoom) {
      openBookingModal(currentRoom);
    }
  });

  // Update on window resize
  window.addEventListener("resize", function () {
    cardsPerView = getCardsPerView();
    updateCarouselsPosition();
    updateNavigationButtons();
    updateViewAllButton();
  });

  // Date validation for check-out date
  checkInDate.addEventListener("change", function () {
    const checkInValue = new Date(this.value);
    const nextDay = new Date(checkInValue);
    nextDay.setDate(nextDay.getDate() + 1);

    // Update check-out minimum date
    checkOutDate.min = nextDay.toISOString().split("T")[0];

    // If current check-out date is before the new minimum, update it
    if (new Date(checkOutDate.value) < nextDay) {
      checkOutDate.value = nextDay.toISOString().split("T")[0];
    }

    // Update booking summary if room is selected
    if (currentRoom) {
      updateBookingSummary(currentRoom);
    }
  });

  checkOutDate.addEventListener("change", function () {
    if (currentRoom) {
      updateBookingSummary(currentRoom);
    }
  });

  // Validate booking form
  function validateBookingForm() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const checkIn = document.getElementById("checkInDate").value;
    const checkOut = document.getElementById("checkOutDate").value;

    // Check required fields
    if (!fullName) {
      alert("Please enter your full name.");
      return false;
    }

    if (!email) {
      alert("Please enter your email address.");
      return false;
    }

    if (!phone) {
      alert("Please enter your phone number.");
      return false;
    }

    if (!checkIn) {
      alert("Please select a check-in date.");
      return false;
    }

    if (!checkOut) {
      alert("Please select a check-out date.");
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address (e.g., name@example.com).");
      return false;
    }

    // Validate phone (basic validation)
    const phoneRegex = /^[+]?[\d\s\-()]{10,}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
      alert("Please enter a valid phone number (at least 10 digits).");
      return false;
    }

    // Validate dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (checkInDate < today) {
      alert("Check-in date cannot be in the past.");
      return false;
    }

    if (checkOutDate <= checkInDate) {
      alert("Check-out date must be after check-in date.");
      return false;
    }

    // Check if room is selected
    if (!currentRoom) {
      alert("Please select a room first.");
      return false;
    }

    return true;
  }

  // Prepare WhatsApp message
  function prepareWhatsAppMessage() {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const checkIn = document.getElementById("checkInDate").value;
    const checkOut = document.getElementById("checkOutDate").value;
    const guests = document.getElementById("guests").value;
    const children = document.getElementById("children").value;
    const specialRequests = document
      .getElementById("specialRequests")
      .value.trim();

    // Format dates for display
    const checkInFormatted = new Date(checkIn).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const checkOutFormatted = new Date(checkOut).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Calculate nights
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const nights = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
    );

    // Create WhatsApp message
    const message = `Hello 7Days Motel Entebbe! I would like to book a room:

📅 *Booking Details:*
Room: ${currentRoom.name}
Check-in: ${checkInFormatted}
Check-out: ${checkOutFormatted}
Nights: ${nights}
Guests: ${guests}
Children: ${children}
Total: ${document.getElementById("totalAmount").textContent}

👤 *Guest Information:*
Name: ${fullName}
Email: ${email}
Phone: ${phone}

${specialRequests ? `📝 *Special Requests:*\n${specialRequests}` : ""}

Please confirm my booking availability and provide payment instructions. Thank you!`;

    return message;
  }

  // Initialize carousels with room cards
  function initializeCarousels() {
    // Clear existing content
    carousels.innerHTML = "";
    indicatorsContainer.innerHTML = "";

    // Add room cards to carousels
    roomData.forEach((room, index) => {
      const card = createRoomCard(room);
      carousels.appendChild(card);

      // Add indicator
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      if (index === 0) indicator.classList.add("active");
      indicator.setAttribute("data-index", index);
      indicator.addEventListener("click", function () {
        if (isTransitioning) return;
        const targetIndex = parseInt(this.getAttribute("data-index"));
        navigateToIndex(targetIndex);
      });
      indicatorsContainer.appendChild(indicator);
    });

    // Set initial position
    updateCarouselsPosition();
    updateNavigationButtons();
    updateViewAllButton();
  }

  // Create room card element
  function createRoomCard(room) {
    const card = document.createElement("div");
    card.className = "room-card";

    // Generate star rating HTML
    const starsHTML = generateStars(room.rating);

    // Extract numeric price for data attribute
    const priceNumber =
      room.basePrice || parseFloat(room.price.replace(/[^0-9.]/g, ""));

    card.innerHTML = `
                <div class="image-section">
                    <img src="${room.image}" alt="${
      room.name
    }" class="room-image">
                    <div class="glassmorphism-info">
                        <h3>${room.name}</h3>
                        <div class="price" data-base-price="${priceNumber}">${
      room.price
    }</div>
                    </div>
                    <div class="image-actions">
                        <div class="action-btns like-btns" data-room="${
                          room.name
                        }">
                            <i class="far fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div class="ribbons">${room.ribbons}</div>
                <div class="details-section">
                    <div class="room-meta">
                        <div class="ratings">
                            <div class="stars">
                                ${starsHTML}
                            </div>
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
                            ${room.features
                              .map(
                                (feature) => `
                                <div class="feature-item">
                                    <i class="${feature.icon}"></i>
                                    <span>${feature.text}</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                    <div class="card-actions">
                        <button class="button button-primary book-now-btns" data-room="${
                          room.id
                        }">Book Now</button>
                        <button class="button button-outline view-details-btns" data-room="${
                          room.id
                        }">View Details</button>
                    </div>
                </div>
            `;

    // Add event listeners to buttons
    const likeBtns = card.querySelector(".like-btns");
    const viewDetailsBtns = card.querySelector(".view-details-btns");
    const bookNowBtns = card.querySelector(".book-now-btns");

    likeBtns.addEventListener("click", function () {
      const heartIcon = this.querySelector("i");
      const roomName = this.getAttribute("data-room");

      if (heartIcon.classList.contains("far")) {
        heartIcon.classList.remove("far");
        heartIcon.classList.add("fas");
        heartIcon.style.color = "var(--crimson)";
        showLikeToast("Room added to favorites!");
      } else {
        heartIcon.classList.remove("fas");
        heartIcon.classList.add("far");
        heartIcon.style.color = "";
        showLikeToast("Room removed from favorites!");
      }
    });

    viewDetailsBtns.addEventListener("click", function () {
      const roomId = this.getAttribute("data-room");
      openRoomModal(roomId);
    });

    bookNowBtns.addEventListener("click", function () {
      const roomId = this.getAttribute("data-room");
      const room = roomData.find((r) => r.id === roomId);
      if (room) {
        openBookingModal(room);
      }
    });

    return card;
  }

  // Show like toast notification
  function showLikeToast(message) {
    toastMessage.textContent = message;
    likeToast.classList.add("show");
    setTimeout(() => {
      likeToast.classList.remove("show");
    }, 3000);
  }

  // Generate star rating HTML
  function generateStars(rating) {
    let starsHTML = "";
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

  // Navigate carousels
  function navigateCarousels(direction) {
    isTransitioning = true;

    currentIndex += direction;

    updateCarouselsPosition();
    updateIndicators();
    updateNavigationButtons();
    updateViewAllButton();

    setTimeout(() => {
      isTransitioning = false;
    }, 500);
  }

  // Navigate to specific index
  function navigateToIndex(index) {
    if (isTransitioning) return;

    currentIndex = index;
    updateCarouselsPosition();
    updateIndicators();
    updateNavigationButtons();
    updateViewAllButton();
  }

  // Update carousels position
  function updateCarouselsPosition() {
    const cardWidth = getCardWidth();
    const translateX = -currentIndex * cardWidth;
    carousels.style.transform = `translateX(${translateX}px)`;
  }

  // Get card width based on device
  function getCardWidth() {
    if (window.innerWidth >= 768) {
      return 400 + 30; // card width + margin for desktop/tablet
    } else {
      // For mobile, calculate based on actual card width including margins
      const card = document.querySelector(".room-card");
      if (card) {
        const cardStyle = getComputedStyle(card);
        const cardWidth = card.offsetWidth;
        const marginLeft = parseFloat(cardStyle.marginLeft);
        const marginRight = parseFloat(cardStyle.marginRight);
        return cardWidth + marginLeft + marginRight;
      }
      return 350 + 20; // fallback for mobile
    }
  }

  // Update indicators
  function updateIndicators() {
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });
  }

  // Update navigation buttons
  function updateNavigationButtons() {
    const maxIndex = roomData.length - cardsPerView;

    if (currentIndex <= 0) {
      prevBtns.classList.add("disabled");
    } else {
      prevBtns.classList.remove("disabled");
    }

    if (currentIndex >= maxIndex) {
      nextBtns.classList.add("disabled");
    } else {
      nextBtns.classList.remove("disabled");
    }
  }

  // Update View All button visibility
  function updateViewAllButton() {
    const maxIndex = roomData.length - cardsPerView;

    // Show the button only when at the last card
    if (currentIndex >= maxIndex) {
      viewAllContainer.classList.remove("hidden");
    } else {
      viewAllContainer.classList.add("hidden");
    }
  }

  // Get number of cards to show based on screen size
  function getCardsPerView() {
    if (window.innerWidth >= 1024) {
      return 3; // Desktop
    } else if (window.innerWidth >= 768) {
      return 2; // Tablet
    } else {
      return 1; // Mobile
    }
  }

  // Open room modal with data
  function openRoomModal(roomId) {
    const room = roomData.find((r) => r.id === roomId);
    if (!room) return;

    currentRoom = room;

    // Set modal content
    document.getElementById("modalRoomName").textContent = room.name;
    const modalPriceElement = document.getElementById("modalRoomPrice");
    modalPriceElement.textContent = room.price;
    modalPriceElement.setAttribute(
      "data-base-price",
      room.basePrice || parseFloat(room.price.replace(/[^0-9.]/g, ""))
    );
    document.getElementById("modalRoomBadge").textContent = room.ribbons;
    document.getElementById("modalDescription").textContent = room.description;
    document.getElementById("modalRoomSize").textContent = room.roomSize;
    document.getElementById("modalMaxGuests").textContent = room.maxGuests;
    document.getElementById("modalBedType").textContent = room.bedType;
    document.getElementById("modalView").textContent = room.view;

    // Set main image
    document.getElementById("mainRoomImage").src = room.image;

    // Set features
    const featuresGrid = document.getElementById("modalFeaturesGrid");
    featuresGrid.innerHTML = "";
    room.features.forEach((feature) => {
      const featureEl = document.createElement("div");
      featureEl.className = "modal-feature-item";
      featureEl.innerHTML = `
                    <div class="modal-feature-icon">
                        <i class="${feature.icon}"></i>
                    </div>
                    <span class="modal-feature-text">${feature.text}</span>
                `;
      featuresGrid.appendChild(featureEl);
    });

    // Set gallery images
    const galleryContainer = document.getElementById("modalImageGallery");
    galleryContainer.innerHTML = "";
    room.galleryImages.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = image;
      img.alt = `${room.name} view ${index + 1}`;
      img.className = "modal-gallery-thumb";
      if (index === 0) img.classList.add("active");
      img.addEventListener("click", function () {
        document.getElementById("mainRoomImage").src = this.src;
        document
          .querySelectorAll(".modal-gallery-thumb")
          .forEach((t) => t.classList.remove("active"));
        this.classList.add("active");
      });
      galleryContainer.appendChild(img);
    });

    // Show modal
    roomDetailModal.style.display = "flex";
  }

  // Open booking modal
  function openBookingModal(room) {
    currentRoom = room;
    bookingRoomTitle.textContent = `Book ${room.name}`;
    bookingRoomSubtitle.textContent = `${room.name} - ${room.price}`;

    // Reset form to default values
    document.getElementById("fullName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("specialRequests").value = "";
    document.getElementById("guests").value = "2";
    document.getElementById("children").value = "0";

    // Reset dates
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    checkInDate.value = today.toISOString().split("T")[0];
    checkOutDate.value = tomorrow.toISOString().split("T")[0];
    checkOutDate.min = tomorrow.toISOString().split("T")[0];

    // Calculate and set booking summary
    updateBookingSummary(room);

    // Show modal
    bookingModal.style.display = "flex";
  }

  // Update booking summary based on room and dates
  function updateBookingSummary(room) {
    // Use basePrice if available, otherwise extract from price string
    const pricePerNight =
      room.basePrice || parseFloat(room.price.replace(/[^0-9.]/g, ""));

    // Calculate nights
    const checkIn = new Date(checkInDate.value);
    const checkOut = new Date(checkOutDate.value);
    const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));

    // Calculate costs
    const roomRate = pricePerNight * nights;
    const total = roomRate;

    // Update DOM
    document.getElementById("roomRate").textContent = `$${roomRate.toFixed(2)}`;
    document.getElementById("totalAmount").textContent = `$${total.toFixed(2)}`;
  }
});

// Add this function to preload and stabilize images
function stabilizeRoomCards() {
  const roomImages = document.querySelectorAll(".room-image");

  roomImages.forEach((img) => {
    // Force image loading and caching
    if (img.complete) {
      img.style.opacity = "1";
    } else {
      img.addEventListener("load", function () {
        this.style.opacity = "1";
        // Force a repaint to ensure rendering
        this.style.transform = "translateZ(0)";
      });
      img.addEventListener("error", function () {
        // Handle broken images gracefully
        this.style.opacity = "1";
      });
    }

    // Ensure immediate opacity
    img.style.opacity = "1";
  });

  // Force a reflow to ensure proper rendering
  const carousels = document.querySelector(".carousels");
  if (carousels) {
    carousels.style.display = "flex";
  }
}

// Call this function after room cards are created
document.addEventListener("DOMContentLoaded", function () {
  // After creating room cards in initializeCarousels()
  setTimeout(stabilizeRoomCards, 100);

  // Also call on window load to ensure everything is ready
  window.addEventListener("load", stabilizeRoomCards);
});

// Header - prevent horizontal scrolling on mobile
document.addEventListener("DOMContentLoaded", function () {
  // Variables to track touch position
  let startX = 0;
  let startY = 0;

  // Detect if on mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Prevent touch events that cause horizontal scroll
    document.addEventListener(
      "touchstart",
      function (e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
      },
      { passive: false }
    );

    document.addEventListener(
      "touchmove",
      function (e) {
        const currentX = e.touches[0].clientX;
        const currentY = e.touches[0].clientY;

        // Calculate movement
        const diffX = Math.abs(currentX - startX);
        const diffY = Math.abs(currentY - startY);

        // If horizontal movement is greater than vertical, prevent it
        if (diffX > diffY) {
          e.preventDefault();
        }
      },
      { passive: false }
    );

    // Add this CSS via JavaScript for iOS
    const style = document.createElement("style");
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
                
                /* Fix for iOS Safari */
                @supports (-webkit-touch-callout: none) {
                    body, html {
                        height: -webkit-fill-available;
                    }
                }
            }
        `;
    document.head.appendChild(style);
  }
});

// Weather section
// Function to update date and time
function updateDateTime() {
  const now = new Date();

  // Format date
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateString = now.toLocaleDateString("en-US", options);
  document.getElementById("current-date").textContent = dateString;

  // Format time
  let hours = now.getHours();
  let minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const timeString = hours + ":" + minutes + " " + ampm;
  document.getElementById("current-time").textContent = timeString;

  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
  };
}

// Update time immediately and then every minute
const currentTime = updateDateTime();
setInterval(updateDateTime, 60000);

// Function to get day name with "Today" and "Tomorrow"
function getDayName(dayOffset) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + dayOffset);

  if (dayOffset === 0) return "Today";
  if (dayOffset === 1) return "Tomorrow";
  return days[targetDate.getDay()];
}

// Function to determine time of day
function getTimeOfDay(hour) {
  if (hour >= 5 && hour < 9) return "morning";
  if (hour >= 9 && hour < 12) return "late-morning";
  if (hour >= 12 && hour < 16) return "afternoon";
  if (hour >= 16 && hour < 19) return "evening";
  return "night";
}

// Function to get weather icon based on conditions and time of day
function getWeatherIcon(cloudCover, rain, showers, hour) {
  const timeOfDay = getTimeOfDay(hour);
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
function getWeatherDescription(cloudCover, rain, showers, hour) {
  const timeOfDay = getTimeOfDay(hour);
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
function calculateDynamicValues(temp, weatherCondition) {
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
    pressure: Math.max(990, Math.min(1030, pressure)),
  };
}

// Function to fetch and update weather data
async function updateWeather() {
  try {
    // Show loading state
    document.getElementById("current-temp").textContent = "--";
    document.getElementById("weather-description").textContent =
      "Loading weather data...";

    // Fetch data from Open-Meteo API for Entebbe with wind speed
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=0.0562&longitude=32.4795&hourly=temperature_2m,rain,wind_speed_10m,temperature_120m,cloud_cover,relative_humidity_2m,pressure_msl,showers,apparent_temperature&timezone=auto"
    );
    const data = await response.json();

    if (!data.hourly) {
      throw new Error("Invalid weather data received");
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
    const weatherDescription = getWeatherDescription(
      cloudCover,
      rain,
      showers,
      currentHour
    );
    const dynamicValues = calculateDynamicValues(
      currentTemp,
      weatherDescription
    );

    // Use dynamic values for a more realistic feel
    document.getElementById("current-temp").textContent = currentTemp;
    document.getElementById("feels-like").textContent = feelsLike + "°C";
    document.getElementById("humidity").textContent =
      dynamicValues.humidity + "%";
    document.getElementById("pressure").textContent =
      dynamicValues.pressure + " hPa";
    document.getElementById("wind-speed").textContent =
      dynamicValues.windSpeed + " km/h";

    // Update weather icon and description with current hour
    const weatherIcon = getWeatherIcon(cloudCover, rain, showers, currentHour);
    document.getElementById("weather-icon").className = weatherIcon;
    document.getElementById("weather-description").textContent =
      weatherDescription;

    // Generate 7-day forecast
    generateForecast(hourly);
  } catch (error) {
    console.error("Error fetching weather data:", error);
    document.getElementById("weather-description").textContent =
      "Unable to load weather data";

    // Show sample forecast as fallback with dynamic values
    generateSampleForecast();
  }
}

// Function to generate 7-day forecast from API data
function generateForecast(hourly) {
  const forecastContainer = document.getElementById("forecast-container");
  forecastContainer.innerHTML = "";

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

    const dayName = getDayName(dayOffset);
    const highTemp = Math.round(hourly.temperature_2m[closestIndex]);
    const lowTemp = Math.round(highTemp - (3 + Math.random() * 4)); // Estimate low temp
    const cloudCover = hourly.cloud_cover[closestIndex];
    const rain = hourly.rain[closestIndex];
    const showers = hourly.showers[closestIndex];

    // Use noon (12) for day icons
    const weatherIcon = getWeatherIcon(cloudCover, rain, showers, 12);

    const forecastCard = document.createElement("div");
    forecastCard.className = "forecast-card";
    forecastCard.innerHTML = `
                    <div class="forecast-day">${dayName}</div>
                    <div class="forecast-weather">
                        <div class="forecast-icon">
                            <i class="${weatherIcon}"></i>
                        </div>
                        <div class="weather-desc">${getWeatherDescription(
                          cloudCover,
                          rain,
                          showers,
                          12
                        )}</div>
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
function generateSampleForecast() {
  const forecastContainer = document.getElementById("forecast-container");
  forecastContainer.innerHTML = "";

  // Base temperature for Entebbe
  const baseTemp = 26;

  for (let dayOffset = 0; dayOffset < 7; dayOffset++) {
    const dayName = getDayName(dayOffset);

    // Vary temperature slightly day by day
    const tempVariation = Math.floor(Math.random() * 5) - 2; // -2 to +2
    const highTemp = baseTemp + tempVariation;
    const lowTemp = highTemp - Math.floor(Math.random() * 3) - 2; // 2-4°C lower

    // Sample weather conditions with realistic probabilities for Entebbe
    const conditions = [
      { icon: "fas fa-sun", desc: "Sunny", probability: 0.6 },
      { icon: "fas fa-cloud-sun", desc: "Partly Cloudy", probability: 0.3 },
      { icon: "fas fa-cloud", desc: "Cloudy", probability: 0.05 },
      {
        icon: "fas fa-cloud-showers-heavy",
        desc: "Showers",
        probability: 0.05,
      },
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

    const forecastCard = document.createElement("div");
    forecastCard.className = "forecast-card";
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

// Update weather immediately and then every 10 minutes for more frequent updates
updateWeather();
setInterval(updateWeather, 600000); // 10 minutes

// Add refresh button functionality
document.getElementById("refresh-btn").addEventListener("click", function () {
  // Show loading state
  const originalText = this.innerHTML;
  this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Updating...';
  this.disabled = true;

  // Update weather after a short delay to simulate API call
  setTimeout(() => {
    updateWeather();
    this.innerHTML = originalText;
    this.disabled = false;

    // Show success feedback
    const originalBg = this.style.background;
    this.style.background = "var(--crimson-dark)";
    setTimeout(() => {
      this.style.background = originalBg;
    }, 500);
  }, 1000);
});

// Amenities section
document.addEventListener("DOMContentLoaded", function () {
  const carouselTrack = document.getElementById("carouselTrack");
  const carouselIndicators = document.getElementById("carouselIndicators");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const mainImage = document.getElementById("mainImage");
  const mainTitle = document.getElementById("mainTitle");
  const mainDescription = document.getElementById("mainDescription");
  const mainFeatures = document.getElementById("mainFeatures");

  // Amenities data with all requested amenities
  const amenitiesData = [
    {
      image: "https://images2.imgbox.com/f6/6c/TxDt1ql3_o.jpg",
      title: "Luxury Accommodations",
      description:
        "Experience our elegantly appointed rooms with premium bedding, modern amenities, and stunning views designed for your ultimate comfort and relaxation.",
      brief: "Elegant rooms with premium bedding and modern amenities.",
      features: [
        "Premium Bedding",
        "Smart Room Controls",
        "Panoramic Views",
        "24/7 Room Service",
      ],
      icons: ["fas fa-bed", "fas fa-tv", "fas fa-wifi"],
    },
    {
      image: "https://images2.imgbox.com/26/89/amqn8zP3_o.jpg",
      title: "Bar & Lounge",
      description:
        "Relax and socialize in our sophisticated bar and lounge area with premium beverages and cozy ambiance.",
      brief: "Sophisticated bar with premium beverages and live music.",
      features: [
        "Premium Beverages",
        "Live Music",
        "Cozy Ambiance",
        "Expert Mixologists",
      ],
      icons: ["fas fa-cocktail", "fas fa-music", "fas fa-wine-glass-alt"],
    },
    {
      image: "https://images2.imgbox.com/29/f8/FKkt9428_o.jpg",
      title: "Spa & Wellness",
      description:
        "Rejuvenate your senses with our premium spa treatments and wellness therapies. Our expert therapists provide personalized treatments for ultimate relaxation.",
      brief: "Premium spa treatments and wellness therapies.",
      features: [
        "Massage Therapy",
        "Beauty Treatments",
        "Wellness Programs",
        "Expert Therapists",
      ],
      icons: ["fas fa-spa", "fas fa-hot-tub", "fas fa-leaf"],
    },
    {
      image: "https://images2.imgbox.com/d8/6b/QKNSSdNm_o.jpg",
      title: "Fine Dining",
      description:
        "Savor exquisite culinary experiences at our fine dining restaurant. Our chefs create innovative dishes using locally sourced ingredients and international flavors.",
      brief:
        "Exquisite culinary experiences with local and international flavors.",
      features: [
        "Local Cuisine",
        "International Dishes",
        "Wine Selection",
        "Chef Specials",
      ],
      icons: ["fas fa-utensils", "fas fa-wine-glass-alt", "fas fa-coffee"],
    },
    {
      image: "https://images2.imgbox.com/2f/cc/xCp3HLpR_o.jpg",
      title: "Coffee Corner",
      description:
        "Start your day right with our premium coffee selection, artisanal pastries, and comfortable seating area.",
      brief: "Premium coffee and artisanal pastries to start your day.",
      features: [
        "Premium Coffee",
        "Artisanal Pastries",
        "Comfortable Seating",
        "Morning Specials",
      ],
      icons: ["fas fa-coffee", "fas fa-cookie", "fas fa-mug-hot"],
    },
    {
      image:
        "https://strapi.inorain.com/uploads/Blog_15_hero_image_79e61d6d41.webp",
      title: "High-Speed WiFi",
      description:
        "Stay connected with our complimentary high-speed WiFi available throughout the entire property.",
      brief: "Complimentary high-speed WiFi throughout the property.",
      features: [
        "Fiber Optic",
        "Unlimited Data",
        "Multiple Devices",
        "24/7 Support",
      ],
      icons: ["fas fa-wifi", "fa-solid fa-house-signal", "fas fa-signal"],
    },
    {
      image: "https://images2.imgbox.com/ef/67/HYReeCoV_o.jpg",
      title: "Secure Parking",
      description:
        "Park with peace of mind in our secure, well-lit parking facility with 24/7 surveillance.",
      brief: "Secure, well-lit parking with 24/7 surveillance.",
      features: [
        "24/7 Surveillance",
        "Covered Parking",
        "Easy Access",
        "On-site parking Service",
      ],
      icons: ["fas fa-parking", "fas fa-shield-alt", "fas fa-key"],
    },
    {
      image: "https://tqplc.com/wp-content/uploads/2023/01/tq-hotel-f1.jpg",
      title: "Air Conditioning",
      description:
        "Our state-of-the-art climate control systems ensure your comfort in every season with individual room controls.",
      brief: "State-of-the-art climate control for all-season comfort.",
      features: [
        "Individual Controls",
        "Energy Efficient",
        "Quiet Operation",
        "All-Season Comfort",
      ],
      icons: ["fas fa-snowflake", "fas fa-thermometer-half", "fas fa-wind"],
    },
    {
      image:
        "https://www.hospitalitynet.org/picture/xxl_153115979.jpg?t=1594034983",
      title: "Room Service",
      description:
        "Enjoy delicious meals and snacks delivered directly to your room with our 24/7 room service.",
      brief: "24/7 room service with an extensive menu.",
      features: [
        "24/7 Availability",
        "Extensive Menu",
        "Quick Delivery",
        "Professional Staff",
      ],
      icons: ["fas fa-concierge-bell", "fas fa-utensils", "fas fa-clock"],
    },
    {
      image: "https://images2.imgbox.com/3d/bf/Vfetjdcn_o.jpg",
      title: "Premium Toiletries",
      description:
        "Pamper yourself with our exclusive line of premium toiletries made from natural, eco-friendly ingredients.",
      brief: "Exclusive line of premium, eco-friendly toiletries.",
      features: [
        "Natural Ingredients",
        "Eco-Friendly",
        "Luxury Brands",
        "Daily Replenishment",
      ],
      icons: ["fas fa-pump-soap", "fas fa-recycle", "fas fa-spa"],
    },
  ];

  let currentIndex = 0;
  let isAnimating = false;
  let carouselInterval;

  // Create amenity cards with infinite loop
  function createAmenityCards() {
    carouselTrack.innerHTML = "";
    carouselIndicators.innerHTML = "";

    // Create cards for the original data
    amenitiesData.forEach((amenity, index) => {
      // Create card
      const card = document.createElement("div");
      card.className = "amenity-card";
      card.dataset.index = index;

      card.innerHTML = `
                        <img src="${amenity.image}" alt="${
        amenity.title
      }" class="amenity-image">
                        <div class="amenity-info">
                            <h4>${amenity.title}</h4>
                            <p class="amenity-brief">${amenity.brief}</p>
                            <div class="amenity-icons">
                                ${amenity.icons
                                  .map(
                                    (icon) => `
                                    <div class="amenity-icon">
                                        <i class="${icon}"></i>
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                            <a href="#" class="learn-more-btn">Learn More</a>
                        </div>
                    `;

      carouselTrack.appendChild(card);

      // Create indicator
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      indicator.dataset.index = index;
      carouselIndicators.appendChild(indicator);
    });

    // Clone first few cards and append to end for infinite effect
    for (let i = 0; i < 5; i++) {
      const clone = carouselTrack.children[i].cloneNode(true);
      clone.dataset.index = amenitiesData.length + i;
      carouselTrack.appendChild(clone);
    }

    // Set initial active states
    updateActiveStates();
  }

  // Update main display when amenity card is clicked
  function updateMainDisplay(index) {
    const amenity = amenitiesData[index];

    // Update main content
    mainImage.src = amenity.image;
    mainTitle.textContent = amenity.title;
    mainDescription.textContent = amenity.description;

    // Update features
    mainFeatures.innerHTML = "";
    amenity.features.forEach((feature) => {
      const featureTag = document.createElement("span");
      featureTag.className = "feature-tag";
      featureTag.textContent = feature;
      mainFeatures.appendChild(featureTag);
    });
  }

  // Update active states for cards and indicators
  function updateActiveStates() {
    const amenityCards = document.querySelectorAll(".amenity-card");
    const indicators = document.querySelectorAll(".indicator");

    amenityCards.forEach((card) => {
      card.classList.remove("active");
    });

    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });

    const actualIndex = currentIndex % amenitiesData.length;

    if (amenityCards[currentIndex]) {
      amenityCards[currentIndex].classList.add("active");
    }

    if (indicators[actualIndex]) {
      indicators[actualIndex].classList.add("active");
    }
  }

  // Update carousel position with smooth, slow transition
  function updateCarouselPosition() {
    if (isAnimating) return;

    isAnimating = true;

    const scrollPosition = currentIndex * 320; // 300px card + 20px gap
    carouselTrack.style.transform = `translateX(-${scrollPosition}px)`;

    // Update active states after animation
    setTimeout(() => {
      updateActiveStates();
      isAnimating = false;

      // Reset position if we're at the cloned cards
      if (currentIndex >= amenitiesData.length) {
        currentIndex = currentIndex % amenitiesData.length;
        carouselTrack.style.transition = "none";
        carouselTrack.style.transform = `translateX(-${currentIndex * 320}px)`;
        setTimeout(() => {
          carouselTrack.style.transition = "transform 1.2s ease";
        }, 50);
      }
    }, 1200); // Match the CSS transition duration
  }

  // Navigate carousel with infinite loop
  function navigateCarousel(direction) {
    if (isAnimating) return;

    if (direction === "next") {
      currentIndex = (currentIndex + 1) % (amenitiesData.length + 5);
    } else {
      currentIndex =
        (currentIndex - 1 + (amenitiesData.length + 5)) %
        (amenitiesData.length + 5);

      // If we're going backwards from the beginning, jump to the end of the original set
      if (currentIndex === amenitiesData.length + 5 - 1) {
        currentIndex = amenitiesData.length - 1;
      }
    }

    // Update main display
    updateMainDisplay(currentIndex % amenitiesData.length);

    // Update carousel position
    updateCarouselPosition();
  }

  // Start auto-rotation
  function startAutoRotation() {
    carouselInterval = setInterval(() => {
      navigateCarousel("next");
    }, 6000); // Slower auto-rotation for luxury feel
  }

  // Stop auto-rotation
  function stopAutoRotation() {
    clearInterval(carouselInterval);
  }

  // Initialize
  function init() {
    createAmenityCards();
    updateMainDisplay(0);
    startAutoRotation();

    // Add event listeners to amenity cards
    document.addEventListener("click", (e) => {
      const card = e.target.closest(".amenity-card");
      if (card) {
        const index = parseInt(card.dataset.index);
        currentIndex = index % amenitiesData.length;
        updateMainDisplay(currentIndex);
        updateCarouselPosition();
        stopAutoRotation();
        setTimeout(startAutoRotation, 10000); // Restart after 10 seconds
      }

      const indicator = e.target.closest(".indicator");
      if (indicator) {
        const index = parseInt(indicator.dataset.index);
        currentIndex = index;
        updateMainDisplay(currentIndex);
        updateCarouselPosition();
        stopAutoRotation();
        setTimeout(startAutoRotation, 10000); // Restart after 10 seconds
      }

      // Handle Learn More button clicks
      const learnMoreBtn = e.target.closest(".learn-more-btn");
      if (learnMoreBtn) {
        e.preventDefault();
        const card = learnMoreBtn.closest(".amenity-card");
        const index = parseInt(card.dataset.index);
        currentIndex = index % amenitiesData.length;
        updateMainDisplay(currentIndex);
        updateCarouselPosition();
        stopAutoRotation();
        setTimeout(startAutoRotation, 10000); // Restart after 10 seconds

        // Scroll to main amenity section
        document.querySelector(".main-amenity").scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    });

    // Add event listeners to navigation buttons
    prevBtn.addEventListener("click", () => {
      navigateCarousel("prev");
      stopAutoRotation();
      setTimeout(startAutoRotation, 10000); // Restart after 10 seconds
    });

    nextBtn.addEventListener("click", () => {
      navigateCarousel("next");
      stopAutoRotation();
      setTimeout(startAutoRotation, 10000); // Restart after 10 seconds
    });

    // Add touch/swipe support for mobile
    let startX = 0;
    let endX = 0;

    carouselTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      stopAutoRotation();
    });

    carouselTrack.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
      setTimeout(startAutoRotation, 10000); // Restart after 10 seconds
    });

    function handleSwipe() {
      const swipeThreshold = 50; // Minimum swipe distance

      if (startX - endX > swipeThreshold) {
        // Swipe left - next
        navigateCarousel("next");
      } else if (endX - startX > swipeThreshold) {
        // Swipe right - previous
        navigateCarousel("prev");
      }
    }
  }

  // Initialize the amenities section
  init();
});

// Virtual tour
document.addEventListener("DOMContentLoaded", function () {
  const iframeContainer = document.querySelector(".tour-container");
  const fullscreenBtn = document.querySelector(".control-btn.fullscreen");
  const closeFullscreenBtn = document.querySelector(".close-fullscreen");

  // Fullscreen functionality
  fullscreenBtn.addEventListener("click", function () {
    if (!document.fullscreenElement) {
      iframeContainer.classList.add("fullscreen-active");

      if (iframeContainer.requestFullscreen) {
        iframeContainer.requestFullscreen();
      } else if (iframeContainer.mozRequestFullScreen) {
        iframeContainer.mozRequestFullScreen();
      } else if (iframeContainer.webkitRequestFullscreen) {
        iframeContainer.webkitRequestFullscreen();
      } else if (iframeContainer.msRequestFullscreen) {
        iframeContainer.msRequestFullscreen();
      }
    } else {
      exitFullscreen();
    }
  });

  closeFullscreenBtn.addEventListener("click", function () {
    exitFullscreen();
  });

  function exitFullscreen() {
    iframeContainer.classList.remove("fullscreen-active");

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

  // Update fullscreen button when exiting via ESC key
  document.addEventListener("fullscreenchange", exitHandler);
  document.addEventListener("webkitfullscreenchange", exitHandler);
  document.addEventListener("mozfullscreenchange", exitHandler);
  document.addEventListener("MSFullscreenChange", exitHandler);

  function exitHandler() {
    if (
      !document.fullscreenElement &&
      !document.webkitFullscreenElement &&
      !document.mozFullScreenElement &&
      !document.msFullscreenElement
    ) {
      iframeContainer.classList.remove("fullscreen-active");
    }
  }

  // Add some interactive effects
  const iframe = document.getElementById("virtual-tour-iframe");

  // Show loading state
  iframe.addEventListener("load", function () {
    iframeContainer.style.opacity = "1";
  });

  // Initial state
  iframeContainer.style.opacity = "0.7";
  iframeContainer.style.transition = "opacity 0.5s ease";
});

// Hero section carousel
// Carousel functionality with progress bars
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  const navItems = document.querySelectorAll(".nav-item");
  const progressBars = document.querySelectorAll(".nav-line-progress");
  const headingProgressBars = document.querySelectorAll(
    ".heading-progress-bar"
  );
  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    // Remove active class from all nav items
    navItems.forEach((item) => {
      item.classList.remove("active");
      const container = item.querySelector(".nav-line-container");
      const progress = item.querySelector(".nav-line-progress");
      container.classList.remove("active");
      progress.style.transition = "none";
      progress.style.width = "0%";
    });

    // Reset all heading progress bars
    headingProgressBars.forEach((bar) => {
      bar.style.transition = "none";
      bar.style.width = "0";
    });

    // Show the selected slide
    slides[index].classList.add("active");
    navItems[index].classList.add("active");

    // Reset and restart progress bar
    const activeContainer = navItems[index].querySelector(
      ".nav-line-container"
    );
    const activeProgress = navItems[index].querySelector(".nav-line-progress");

    // Force reflow to reset transition
    void activeProgress.offsetWidth;

    // Start progress bar animation
    activeContainer.classList.add("active");
    activeProgress.style.transition = "width 5s linear";
    activeProgress.style.width = "100%";

    // Start heading progress bar animation
    const activeHeadingProgress = slides[index].querySelector(
      ".heading-progress-bar"
    );
    void activeHeadingProgress.offsetWidth;
    activeHeadingProgress.style.transition = "width 5s linear";
    activeHeadingProgress.style.width = "60px";

    currentSlide = index;
  }

  // Add click event to nav items
  navItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      showSlide(index);
      resetSlideInterval();
    });
  });

  // Auto slide change every 5 seconds
  function startSlideInterval() {
    slideInterval = setInterval(() => {
      let nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    }, 5000);
  }

  function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
  }

  // Initialize the first slide
  showSlide(0);
  startSlideInterval();
});

// Header language and currency
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

  // Added East African currencies
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
  // East African currencies
  UGX: 3850, // Ugandan Shilling
  KES: 160, // Kenyan Shilling
  TZS: 2600, // Tanzanian Shilling
  RWF: 1320, // Rwandan Franc
};

// Initialize Google Translate
function googleTranslateElementInit() {
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
  // Desktop dropdown
  const desktopDropdown = document.getElementById("languageDropdownMenu");
  languages.forEach((lang) => {
    const option = document.createElement("button");
    option.className = "dropdown-item notranslate";
    option.setAttribute("data-lang", lang.code);

    // Create flag element using flag-icons CSS classes
    const flagElement = document.createElement("span");
    flagElement.className = `flag fi fi-${lang.flag}`;

    // Create language name element
    const nameElement = document.createElement("span");
    nameElement.textContent = lang.name;

    option.appendChild(flagElement);
    option.appendChild(nameElement);
    desktopDropdown.appendChild(option);
  });

  // Mobile dropdown
  const mobileDropdown = document
    .getElementById("mobileLanguageDropdown")
    .querySelector(".py-2");
  languages.forEach((lang) => {
    const option = document.createElement("button");
    option.className = "mobile-language-option notranslate";
    option.setAttribute("data-lang", lang.code);

    // Create flag element using flag-icons CSS classes
    const flagElement = document.createElement("span");
    flagElement.className = `flag fi fi-${lang.flag}`;

    // Create language name element
    const nameElement = document.createElement("span");
    nameElement.textContent = lang.name;

    option.appendChild(flagElement);
    option.appendChild(nameElement);
    mobileDropdown.appendChild(option);
  });
}

// Populate currency dropdowns
function populateCurrencyDropdowns() {
  // Desktop dropdown
  const desktopDropdown = document.getElementById("currency-dropdown-menu");
  currencies.forEach((currency) => {
    const option = document.createElement("button");
    option.className = "dropdown-item notranslate";
    option.setAttribute("data-currency", currency.code);

    // Create icon element
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

    // Create currency name element
    const nameElement = document.createElement("span");
    nameElement.textContent = `${currency.code} - ${currency.name}`;

    option.appendChild(iconElement);
    option.appendChild(nameElement);
    desktopDropdown.appendChild(option);
  });

  // Mobile dropdown
  const mobileDropdown = document.querySelector(".mobile-currency-menu");
  currencies.forEach((currency) => {
    const option = document.createElement("button");
    option.className = "mobile-currency-item notranslate";
    option.setAttribute("data-currency", currency.code);

    // Create icon element
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

    // Create currency name element
    const nameElement = document.createElement("span");
    nameElement.textContent = `${currency.code} - ${currency.name}`;

    option.appendChild(iconElement);
    option.appendChild(nameElement);
    mobileDropdown.appendChild(option);
  });
}

// Function to change language
function changeLanguage(lang) {
  // Update desktop language display
  const currentLanguageElement = document.getElementById("currentLanguage");
  if (currentLanguageElement) {
    currentLanguageElement.textContent = lang.toUpperCase();
  }

  // Update mobile language display
  const mobileCurrentLanguageElement = document.getElementById(
    "mobileCurrentLanguage"
  );
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
    // Remove all existing flag classes
    const flagElement = document.getElementById("currentFlag");
    flagElement.className = "flag fi";
    // Add the new flag class
    flagElement.classList.add(`fi-${langData.flag}`);
  }

  localStorage.setItem("preferredLanguage", lang);

  // Trigger Google Translate if available
  if (typeof google !== "undefined" && google.translate) {
    // Wait for the Google Translate element to be fully loaded
    setTimeout(function () {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
        console.log("Google Translate language changed to:", lang);
      } else {
        console.warn("Google Translate select element not found");
      }
    }, 500);
  } else {
    console.warn("Google Translate not loaded yet");
  }

  console.log("Language changed to:", lang);
}

// Function to convert prices
function convertPrices(currency) {
  const rate = exchangeRates[currency];
  const currencyData = currencies.find((c) => c.code === currency);
  const symbol = currencyData ? currencyData.symbol : "$";

  document.querySelectorAll(".price").forEach((priceElement) => {
    const basePrice = parseFloat(priceElement.getAttribute("data-base-price"));
    const convertedPrice = (basePrice * rate).toFixed(2);
    // Get text after the price (like "per night")
    const originalText = priceElement.textContent;
    const textParts = originalText.split(" ");
    const textAfterPrice = textParts.slice(1).join(" ");
    priceElement.textContent = `${symbol}${convertedPrice} ${textAfterPrice}`;
  });

  // Update currency displays
  document.getElementById("currentCurrency").textContent = currency;
  document.getElementById("mobileCurrentCurrency").textContent = currency;

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

  console.log("Currency changed to:", currency);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Populate dropdowns
  populateLanguageDropdowns();
  populateCurrencyDropdowns();

  // Desktop Language Dropdown
  const languageButton = document.getElementById("languageButton");
  const languageDropdown = document.getElementById("languageDropdown");

  if (languageButton && languageDropdown) {
    // Toggle dropdown
    languageButton.addEventListener("click", function (e) {
      e.stopPropagation();
      languageDropdown.classList.toggle("active");

      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        if (
          dropdown !== languageDropdown &&
          dropdown.classList.contains("active")
        ) {
          dropdown.classList.remove("active");
        }
      });
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !languageButton.contains(e.target) &&
        !languageDropdown.contains(e.target)
      ) {
        languageDropdown.classList.remove("active");
      }
    });

    // Language selection
    document
      .querySelectorAll("#languageDropdownMenu .dropdown-item")
      .forEach((option) => {
        option.addEventListener("click", function (e) {
          e.preventDefault();
          const lang = this.getAttribute("data-lang");
          changeLanguage(lang);
          languageDropdown.classList.remove("active");
        });
      });
  }

  // Mobile Language Dropdown
  const mobileLanguageButton = document.getElementById("mobileLanguageButton");
  const mobileLanguageDropdown = document.getElementById(
    "mobileLanguageDropdown"
  );

  if (mobileLanguageButton && mobileLanguageDropdown) {
    mobileLanguageButton.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileLanguageDropdown.classList.toggle("active");

      // Rotate chevron
      const icon = this.querySelector(".fa-chevron-down");
      if (mobileLanguageDropdown.classList.contains("active")) {
        icon.style.transform = "rotate(180deg)";
      } else {
        icon.style.transform = "rotate(0)";
      }

      // Close other dropdowns
      document
        .querySelectorAll(".mobile-currency-dropdown")
        .forEach((dropdown) => {
          if (dropdown.classList.contains("active")) {
            dropdown.classList.remove("active");
            const otherIcon = dropdown.querySelector("i");
            if (otherIcon) {
              otherIcon.style.transform = "rotate(0)";
            }
          }
        });
    });

    // Mobile language selection
    document
      .querySelectorAll("#mobileLanguageDropdown .mobile-language-option")
      .forEach((option) => {
        option.addEventListener("click", function (e) {
          e.preventDefault();
          const lang = this.getAttribute("data-lang");
          changeLanguage(lang);
          mobileLanguageDropdown.classList.remove("active");
          mobileLanguageButton.querySelector(
            ".fa-chevron-down"
          ).style.transform = "rotate(0)";
        });
      });
  }

  // Desktop Currency Dropdown
  const currencyButton = document.getElementById("currency-button");
  const currencyDropdown = document.getElementById("currency-dropdown");

  if (currencyButton && currencyDropdown) {
    // Toggle dropdown
    currencyButton.addEventListener("click", function (e) {
      e.stopPropagation();
      currencyDropdown.classList.toggle("active");

      document.querySelectorAll(".dropdown").forEach((dropdown) => {
        if (
          dropdown !== currencyDropdown &&
          dropdown.classList.contains("active")
        ) {
          dropdown.classList.remove("active");
        }
      });
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !currencyButton.contains(e.target) &&
        !currencyDropdown.contains(e.target)
      ) {
        currencyDropdown.classList.remove("active");
      }
    });

    // Currency selection
    document
      .querySelectorAll("#currency-dropdown-menu .dropdown-item")
      .forEach((option) => {
        option.addEventListener("click", function (e) {
          e.preventDefault();
          const currency = this.getAttribute("data-currency");
          convertPrices(currency);
          currencyDropdown.classList.remove("active");
        });
      });
  }

  // Mobile Currency Dropdown
  const mobileCurrencyButton = document.querySelector(
    "#mobile-currency-dropdown .mobile-currency-toggle"
  );
  const mobileCurrencyDropdown = document.getElementById(
    "mobile-currency-dropdown"
  );

  if (mobileCurrencyButton && mobileCurrencyDropdown) {
    mobileCurrencyButton.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileCurrencyDropdown.classList.toggle("active");

      // Rotate chevron
      const icon = this.querySelector("i");
      if (mobileCurrencyDropdown.classList.contains("active")) {
        icon.style.transform = "rotate(180deg)";
      } else {
        icon.style.transform = "rotate(0)";
      }

      // Close other dropdowns
      if (
        mobileLanguageDropdown &&
        mobileLanguageDropdown.classList.contains("active")
      ) {
        mobileLanguageDropdown.classList.remove("active");
        const langIcon = mobileLanguageButton.querySelector(".fa-chevron-down");
        if (langIcon) {
          langIcon.style.transform = "rotate(0)";
        }
      }
    });

    // Mobile currency selection
    document.querySelectorAll(".mobile-currency-item").forEach((option) => {
      option.addEventListener("click", function (e) {
        e.preventDefault();
        const currency = this.getAttribute("data-currency");
        convertPrices(currency);
        mobileCurrencyDropdown.classList.remove("active");
        mobileCurrencyButton.querySelector("i").style.transform = "rotate(0)";
      });
    });
  }

  // Initialize with saved preferences
  const savedLang = localStorage.getItem("preferredLanguage") || "en";
  changeLanguage(savedLang);

  const savedCurrency = localStorage.getItem("preferredCurrency") || "USD";
  convertPrices(savedCurrency);

  // Mobile menu toggle
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

  // Close mobile menu when window is resized to larger size
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
});

// Coffee section
document.addEventListener("DOMContentLoaded", function () {
  // Coffee carousel functionality
  const coffeeTrack = document.getElementById("coffeeCarouselTrack");
  const coffeeSlides = document.querySelectorAll(".coffee-carousel-slide");
  const coffeePrevBtn = document.getElementById("coffeePrevBtn");
  const coffeeNextBtn = document.getElementById("coffeeNextBtn");

  let coffeeCurrentIndex = 0;
  let coffeeAutoRotateInterval;

  // Initialize coffee carousel
  function initCoffeeCarousel() {
    // Start auto rotation
    startCoffeeAutoRotation();
  }

  // Go to specific slide
  function goToCoffeeSlide(index) {
    // Update current index
    coffeeCurrentIndex = index;

    // Update track position
    coffeeTrack.style.transform = `translateX(-${coffeeCurrentIndex * 100}%)`;

    // Update active slide
    coffeeSlides.forEach((slide, i) => {
      slide.classList.toggle("active", i === coffeeCurrentIndex);
    });

    // Reset auto rotation
    resetCoffeeAutoRotation();
  }

  // Next slide
  function coffeeNextSlide() {
    let nextIndex = (coffeeCurrentIndex + 1) % coffeeSlides.length;
    goToCoffeeSlide(nextIndex);
  }

  // Previous slide
  function coffeePrevSlide() {
    let prevIndex =
      (coffeeCurrentIndex - 1 + coffeeSlides.length) % coffeeSlides.length;
    goToCoffeeSlide(prevIndex);
  }

  // Auto rotation
  function startCoffeeAutoRotation() {
    coffeeAutoRotateInterval = setInterval(coffeeNextSlide, 5000);
  }

  function resetCoffeeAutoRotation() {
    clearInterval(coffeeAutoRotateInterval);
    startCoffeeAutoRotation();
  }

  // Event listeners
  coffeePrevBtn.addEventListener("click", () => {
    coffeePrevSlide();
  });

  coffeeNextBtn.addEventListener("click", () => {
    coffeeNextSlide();
  });

  // Pause auto-rotation on hover
  coffeeTrack.addEventListener("mouseenter", () => {
    clearInterval(coffeeAutoRotateInterval);
  });

  coffeeTrack.addEventListener("mouseleave", () => {
    startCoffeeAutoRotation();
  });

  // Initialize the coffee carousel
  initCoffeeCarousel();
});

// FAQs
document.addEventListener("DOMContentLoaded", function () {
  const accordionHeaders = document.querySelectorAll(".accordion-header");

  accordionHeaders.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const isActive = this.classList.contains("active");

      // Close all accordion items
      document.querySelectorAll(".accordion-header").forEach((h) => {
        h.classList.remove("active");
      });
      document.querySelectorAll(".accordion-content").forEach((c) => {
        c.classList.remove("active");
      });

      // If clicked item wasn't active, open it
      if (!isActive) {
        this.classList.add("active");
        content.classList.add("active");
      }
    });
  });

  // No accordion opens by default now
});

// Newsletter
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("emailInput");
  const successMessage = document.getElementById("successMessage");

  // Add modern input interaction
  emailInput.addEventListener("focus", function () {
    this.parentElement.classList.add("focused");
    this.style.borderColor = "var(--gold)";
    this.style.boxShadow = "0 8px 25px rgba(212, 175, 55, 0.25)";
    this.style.backgroundColor = "var(--white)";
    this.style.color = "var(--evergreen)";
  });

  emailInput.addEventListener("blur", function () {
    this.parentElement.classList.remove("focused");
    if (!this.value) {
      this.style.borderColor = "rgba(255, 255, 255, 0.5)";
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.08)";
      this.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      this.style.color = "var(--charcoal)";
    }
  });

  emailInput.addEventListener("input", function () {
    if (this.value) {
      this.style.borderColor = "var(--evergreen)";
      this.style.color = "var(--evergreen)";
    }
  });

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Simple email validation
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      // Show error state
      emailInput.style.borderColor = "var(--crimson)";
      emailInput.style.boxShadow = "0 8px 25px rgba(195, 32, 38, 0.25)";
      emailInput.style.backgroundColor = "#fff0f0";

      // Shake animation for error
      emailInput.style.animation = "shake 0.5s ease-in-out";
      setTimeout(() => {
        emailInput.style.animation = "";
      }, 500);

      setTimeout(() => {
        if (emailInput.value) {
          emailInput.style.borderColor = "var(--evergreen)";
          emailInput.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.08)";
          emailInput.style.backgroundColor = "var(--white)";
        } else {
          emailInput.style.borderColor = "rgba(255, 255, 255, 0.5)";
          emailInput.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.08)";
          emailInput.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
        }
      }, 2000);

      return;
    }

    // In a real implementation, you would send this to a server
    // For demo purposes, we'll just show a success message

    // Show success message
    successMessage.style.display = "block";

    // Add animation to button
    const submitBtns = form.querySelector(".btns-primary");
    const originalHTML = submitBtns.innerHTML;
    submitBtns.innerHTML = '<i class="fas fa-check"></i> Subscribed!';
    submitBtns.style.background =
      "linear-gradient(135deg, var(--evergreen) 0%, var(--evergreen-dark) 100%)";
    submitBtns.style.pointerEvents = "none";

    // Change input to success state
    emailInput.style.borderColor = "var(--evergreen)";
    emailInput.style.boxShadow = "0 5px 15px rgba(15, 58, 52, 0.25)";
    emailInput.style.backgroundColor = "rgba(244, 228, 166, 0.2)";
    emailInput.disabled = true;

    // Reset form after 4 seconds
    setTimeout(() => {
      form.reset();
      submitBtns.innerHTML = originalHTML;
      submitBtns.style.background = "";
      submitBtns.style.pointerEvents = "";

      emailInput.style.borderColor = "rgba(255, 255, 255, 0.5)";
      emailInput.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.08)";
      emailInput.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      emailInput.style.color = "var(--charcoal)";
      emailInput.disabled = false;
    }, 4000);

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 5000);

    console.log("Newsletter subscription for:", email);
  });

  // Initialize label position if browser autofills
  setTimeout(() => {
    if (emailInput.value) {
      emailInput.dispatchEvent(new Event("input"));
    }
  }, 100);
});

// Add shake animation for error state
const style = document.createElement("style");
style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
document.head.appendChild(style);

// Testimonial Carousel Functionality
const testimonialTrack = document.getElementById("testimonialTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const carouselDots = document.getElementById("carouselDots");
const testimonialCards = document.querySelectorAll(".testimonial-large-card");

let currentSlide = 0;
const totalSlides = testimonialCards.length;
const slideWidth = 100; // Percentage

// Create dots for carousel
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement("button");
  dot.className = "carousel-dot";
  if (i === 0) dot.classList.add("active");
  dot.setAttribute("data-index", i);
  dot.addEventListener("click", () => goToSlide(i));
  carouselDots.appendChild(dot);
}

// Function to update carousel position
function updateCarousel() {
  testimonialTrack.style.transform = `translateX(-${
    currentSlide * slideWidth
  }%)`;

  // Update active dot
  document.querySelectorAll(".carousel-dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
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
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Auto-advance carousel every 5 seconds
let carouselInterval = setInterval(nextSlide, 5000);

// Pause auto-advance on hover
const carouselContainer = document.querySelector(
  ".testimonial-carousel-container"
);
carouselContainer.addEventListener("mouseenter", () => {
  clearInterval(carouselInterval);
});

carouselContainer.addEventListener("mouseleave", () => {
  carouselInterval = setInterval(nextSlide, 5000);
});
