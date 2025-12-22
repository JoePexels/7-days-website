// Only 6 rooms as specified
const rooms = [
  {
    number: "SINGLE",
    type: "Single Room",
    beds: "Single bed",
    capacity: 1,
    price: 40,
    amenities: [
      { name: "Air Conditioning", icon: "fas fa-snowflake" },
      { name: "High-Speed WiFi", icon: "fas fa-wifi" },
      { name: "Smart Television", icon: "fas fa-tv" },
      { name: "Guest Room Phone", icon: "fas fa-phone" },
      { name: "Working Table", icon: "fas fa-desktop" },
      { name: "Private Bathroom", icon: "fas fa-bath" },
    ],
    description:
      "A cozy and comfortable single room perfect for solo travelers. Features a comfortable single bed, working table, and all essential amenities for a pleasant stay.",
    longDescription:
      "Our Single Room is meticulously designed for solo travelers seeking comfort and functionality. The room features a plush single bed with premium bedding, ensuring a restful night's sleep. A dedicated workspace with a comfortable chair and ample lighting makes it ideal for business travelers. The room is equipped with high-speed WiFi, a flat-screen TV with international channels, and air conditioning for your comfort. The en-suite bathroom includes a walk-in shower, modern fixtures, and complimentary toiletries. Enjoy the convenience of a guest room phone for internal calls and room service requests.",
    image: "single-room.jpg",
  },
  {
    number: "DOUBLE",
    type: "Double Room",
    beds: "Double bed",
    capacity: 2,
    price: 50,
    amenities: [
      { name: "Air Conditioning", icon: "fas fa-snowflake" },
      { name: "High-Speed WiFi", icon: "fas fa-wifi" },
      { name: "Spacious Wardrobe", icon: "fas fa-archive" },
      { name: "Smart Television", icon: "fas fa-tv" },
      { name: "Guest Room Phone", icon: "fas fa-phone" },
      { name: "Working Table", icon: "fas fa-desktop" },
      { name: "Private Bathroom", icon: "fas fa-bath" },
    ],
    description:
      "Spacious double room ideal for couples or business travelers. Includes a comfortable double bed, ample storage, and a dedicated workspace. The room features elegant decor with warm tones and premium furnishings.",
    longDescription:
      "Our Double Room offers a perfect blend of comfort and style for couples or business travelers. The room features a premium double bed with luxurious linens, ensuring a peaceful night's rest. A spacious wardrobe provides ample storage for your belongings, while the dedicated workspace includes a large desk and ergonomic chair. The room is equipped with modern amenities including high-speed WiFi, a 32-inch flat-screen TV, and individually controlled air conditioning. The en-suite bathroom features a walk-in shower with excellent water pressure, premium toiletries, and soft towels. Additional amenities include a safety deposit box, mini-fridge, and complimentary bottled water.",
    image: "double-room.jpg",
  },
  {
    number: "APARTMENT",
    type: "Apartment Room",
    beds: "Double bed",
    capacity: 3,
    price: 60,
    amenities: [
      { name: "Air Conditioning", icon: "fas fa-snowflake" },
      { name: "High-Speed WiFi", icon: "fas fa-wifi" },
      { name: "Spacious Wardrobe", icon: "fas fa-archive" },
      { name: "Smart Television", icon: "fas fa-tv" },
      { name: "Guest Room Phone", icon: "fas fa-phone" },
      { name: "Working Table", icon: "fas fa-desktop" },
      { name: "Small Open Kitchen", icon: "fas fa-utensils" },
      { name: "Refrigerator", icon: "fas fa-snowflake" },
      { name: "Private Balcony", icon: "fas fa-door-open" },
      { name: "Private Bathroom", icon: "fas fa-bath" },
    ],
    description:
      "Spacious apartment-style room with a small open kitchen and balcony. Perfect for longer stays or guests who prefer self-catering options.",
    longDescription:
      "Our Apartment Room offers the perfect solution for guests seeking additional space and self-catering facilities. This spacious room features a comfortable double bed with premium bedding, a spacious wardrobe, and a dedicated workspace. The highlight is the small open kitchen equipped with basic cooking facilities, a fridge, and essential utensils, perfect for preparing simple meals. A small balcony provides outdoor space to enjoy the Entebbe breeze. The room includes high-speed WiFi, a 32-inch flat-screen TV with international channels, individually controlled air conditioning, and a guest room phone. The en-suite bathroom offers a walk-in shower with constant hot water and premium toiletries. Additional features include a safety deposit box and daily housekeeping service. Ideal for longer stays or guests who prefer the flexibility of self-catering.",
    image: "apartment-room.jpg",
  },
  {
    number: "FAMILY",
    type: "Family Room",
    beds: "Four double beds",
    capacity: 8,
    price: 160,
    amenities: [
      { name: "Air Conditioning", icon: "fas fa-snowflake" },
      { name: "High-Speed WiFi", icon: "fas fa-wifi" },
      { name: "Spacious Wardrobe", icon: "fas fa-archive" },
      { name: "Smart Television", icon: "fas fa-tv" },
      { name: "Refrigerator", icon: "fas fa-snowflake" },
      { name: "Guest Room Phones", icon: "fas fa-phone" },
      { name: "Private Balcony", icon: "fas fa-door-open" },
      { name: "Bathtub", icon: "fas fa-bath" },
      { name: "Extra Beds Available", icon: "fas fa-bed" },
      { name: "Children Friendly", icon: "fas fa-child" },
    ],
    description:
      "Luxurious family room with four double beds, perfect for large families or groups. Features a balcony and bathtub for added comfort.",
    longDescription:
      "Our Family Room is the ultimate accommodation for large families or groups visiting Entebbe. This expansive room features four comfortable double beds with premium bedding, ensuring restful sleep for up to eight guests. Multiple wardrobes provide ample storage for everyone's belongings. The room includes a spacious seating area, a 40-inch flat-screen TV with international channels, high-speed WiFi, and individually controlled air conditioning. The en-suite bathroom features a bathtub for relaxation, along with a separate walk-in shower, double vanity, and premium toiletries. A private balcony offers outdoor space with views of the surroundings. Additional amenities include a fridge, multiple guest room phones, safety deposit boxes, and daily housekeeping service. The room's family-friendly design and comprehensive amenities ensure a comfortable and memorable stay for large groups.",
    image: "family-room.jpg",
  },
  {
    number: "TWIN",
    type: "Twin Room",
    beds: "Two double beds",
    capacity: 4,
    price: 80,
    amenities: [
      { name: "Air Conditioning", icon: "fas fa-snowflake" },
      { name: "High-Speed WiFi", icon: "fas fa-wifi" },
      { name: "Spacious Wardrobe", icon: "fas fa-archive" },
      { name: "Smart Television", icon: "fas fa-tv" },
      { name: "Guest Room Phone", icon: "fas fa-phone" },
      { name: "Private Balcony", icon: "fas fa-door-open" },
      { name: "Private Bathroom", icon: "fas fa-bath" },
      { name: "Extra Pillows", icon: "fas fa-couch" },
      { name: "Sitting Area", icon: "fas fa-chair" },
    ],
    description:
      "Spacious twin room with two double beds and a balcony. Ideal for small families or groups of friends traveling together.",
    longDescription:
      "Our Twin Room offers flexible accommodation perfect for small families or groups of friends traveling together. The room features two comfortable double beds with premium bedding, allowing flexible sleeping arrangements for up to four guests. A spacious wardrobe provides ample storage for everyone's belongings. The room includes a private balcony with seating, perfect for enjoying the Entebbe weather. Amenities include high-speed WiFi, a 32-inch flat-screen TV with international channels, individually controlled air conditioning, and a guest room phone. The en-suite bathroom offers a walk-in shower with excellent water pressure and premium toiletries. Additional features include a safety deposit box, mini-fridge, complimentary bottled water, and daily housekeeping service. The room's spacious design and flexible sleeping arrangements make it ideal for families or groups seeking comfortable shared accommodation.",
    image: "twin-room.jpg",
  },
];

// Room image mapping
const roomImages = {
  "single-room.jpg": "https://images2.imgbox.com/86/f0/k9VQagZH_o.jpg",
  "double-room.jpg": "https://images2.imgbox.com/ec/6f/zNm9SZge_o.jpg",
  "apartment-room.jpg": "https://images2.imgbox.com/a8/31/rBuDiUtO_o.jpg",
  "family-room.jpg": "https://images2.imgbox.com/e1/a4/1NWy1esT_o.jpg",
  "twin-room.jpg": "https://images2.imgbox.com/ae/03/CXBoiao1_o.jpg",
};

// Current selected room
let selectedRoom = null;
let bookingData = {
  room: null,
  checkIn: null,
  checkOut: null,
  nights: 0,
  adults: 1,
  children: 0,
  totalPrice: 0,
  guestInfo: {},
};

// Function to scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// DOM elements
const roomsGrid = document.getElementById("roomsGrid");
const nextToDetailsBtn = document.getElementById("nextToDetails");
const nextToDatesBtn = document.getElementById("nextToDates");
const nextToBookingBtn = document.getElementById("nextToBooking");
const backToSelectionBtn = document.getElementById("backToSelection");
const backToDetailsBtn = document.getElementById("backToDetails");
const backToDatesBtn = document.getElementById("backToDates");
const submitBookingBtn = document.getElementById("submitBooking");
const newBookingBtn = document.getElementById("newBooking");
const stepContainers = document.querySelectorAll(".step-container");
const steps = document.querySelectorAll(".step");
const stepLines = document.querySelectorAll(".step-line");
const roomDetailsContainer = document.getElementById("roomDetails");
const selectedRoomSummary = document.getElementById("selectedRoomSummary");
const bookingSummaryDetails = document.getElementById("bookingSummaryDetails");
const finalBookingSummary = document.getElementById("finalBookingSummary");
const bookingForm = document.getElementById("bookingForm");
const checkInInput = document.getElementById("checkInDate");
const checkOutInput = document.getElementById("checkOutDate");
const adultsCount = document.getElementById("adultsCount");
const childrenCount = document.getElementById("childrenCount");
const decreaseAdultsBtn = document.getElementById("decreaseAdults");
const increaseAdultsBtn = document.getElementById("increaseAdults");
const decreaseChildrenBtn = document.getElementById("decreaseChildren");
const increaseChildrenBtn = document.getElementById("increaseChildren");
const capacityInfo = document.getElementById("capacityInfo");
const dateSummary = document.getElementById("dateSummary");
const nightsCount = document.getElementById("nightsCount");
const totalPriceElement = document.getElementById("totalPrice");
const bookingTotal = document.getElementById("bookingTotal");

// Initialize the page
document.addEventListener("DOMContentLoaded", function () {
  // Set default dates using default HTML date pickers
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Format dates for HTML date input (YYYY-MM-DD)
  const todayFormatted = formatDate(today);
  const tomorrowFormatted = formatDate(tomorrow);

  // Store in booking data
  bookingData.checkIn = todayFormatted;
  bookingData.checkOut = tomorrowFormatted;

  // Set input values for default date pickers
  if (checkInInput && checkOutInput) {
    checkInInput.min = todayFormatted;
    checkInInput.value = todayFormatted;

    checkOutInput.min = tomorrowFormatted;
    checkOutInput.value = tomorrowFormatted;

    // Add event listeners for date changes
    checkInInput.addEventListener("change", function () {
      const selectedDate = new Date(this.value);
      const nextDay = new Date(selectedDate);
      nextDay.setDate(nextDay.getDate() + 1);
      const nextDayFormatted = formatDate(nextDay);

      checkOutInput.min = nextDayFormatted;

      if (new Date(checkOutInput.value) < nextDay) {
        checkOutInput.value = nextDayFormatted;
      }

      bookingData.checkIn = this.value;
      updateDateSummary();
    });

    checkOutInput.addEventListener("change", function () {
      bookingData.checkOut = this.value;
      updateDateSummary();
    });
  }

  // Generate room cards
  generateRoomCards();

  // Set up event listeners
  setupEventListeners();

  // Initialize step indicators
  updateStepIndicator(1);

  // Initialize date summary
  updateDateSummary();
});

// Format date as YYYY-MM-DD
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Format date for display
function formatDateDisplay(date) {
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

// Generate room cards for the selection step
function generateRoomCards() {
  roomsGrid.innerHTML = "";

  rooms.forEach((room) => {
    const roomCard = document.createElement("div");
    roomCard.className = "room-card";
    roomCard.dataset.roomNumber = room.number;

    // Generate amenities HTML with icons (show first 4 amenities)
    const amenitiesHtml = room.amenities
      .slice(0, 4)
      .map(
        (amenity) =>
          `<span class="amenity"><i class="${amenity.icon}"></i> ${amenity.name}</span>`
      )
      .join("");

    // Room image
    const roomImageUrl =
      roomImages[room.image] ||
      "https://images2.imgbox.com/29/7d/3DZwEFdu_o.jpg";

    roomCard.innerHTML = `
                    <div class="room-info">
                        <div>
                            <div class="room-header">
                                <div class="room-type">${room.type}</div>
                                <div class="room-price">$${room.price}</div>
                            </div>
                            <div class="room-amenities">${amenitiesHtml}</div>
                        </div>
                        <div class="room-capacity">
                            <i class="fas fa-user-friends"></i>
                            <span>${room.capacity} Guest${
      room.capacity > 1 ? "s" : ""
    } • ${room.beds}</span>
                        </div>
                    </div>
                    <div class="room-image" style="background-image: url('${roomImageUrl}');">
                    </div>
                `;

    roomCard.addEventListener("click", () => {
      selectRoom(room);
      // Auto-advance to step 2
      setTimeout(() => {
        showStep(2);
        updateStepIndicator(2);
        scrollToTop();
      }, 300);
    });
    roomsGrid.appendChild(roomCard);
  });
}

// Select a room
function selectRoom(room) {
  // Remove selected class from all rooms
  document.querySelectorAll(".room-card").forEach((card) => {
    card.classList.remove("selected");
  });

  // Add selected class to clicked room
  const selectedCard = document.querySelector(
    `.room-card[data-room-number="${room.number}"]`
  );
  selectedCard.classList.add("selected");

  // Set selected room
  selectedRoom = room;
  bookingData.room = room;

  // Reset guests to room capacity
  bookingData.adults = Math.min(1, room.capacity);
  bookingData.children = 0;
  updateGuestCounters();

  // Enable next button
  nextToDetailsBtn.disabled = false;

  // Update room details for step 2
  updateRoomDetails(room);

  // Update room summary for step 3
  updateRoomSummary(room);

  // Update capacity info
  capacityInfo.textContent = `Max: ${room.capacity} guests`;

  // Update date summary with new price
  updateDateSummary();
}

// Update room details for step 2
function updateRoomDetails(room) {
  // Generate amenities list HTML with modern cards
  const amenitiesHtml = room.amenities
    .map((amenity) => {
      return `
                    <div class="amenity-card">
                        <div class="amenity-icon">
                            <i class="${amenity.icon}"></i>
                        </div>
                        <div class="amenity-text">${amenity.name}</div>
                    </div>
                `;
    })
    .join("");

  // Room image
  const roomImageUrl =
    roomImages[room.image] || "https://images2.imgbox.com/88/27/4VVwrpaV_o.jpg";

  roomDetailsContainer.innerHTML = `
                <div class="room-details-hero">
                    <img src="${roomImageUrl}" alt="${
    room.type
  }" class="room-hero-image">
                    <div class="room-hero-overlay">
                        <h2 class="room-hero-title">${room.type}</h2>
                        <div class="room-hero-price">$${
                          room.price
                        } / night</div>
                    </div>
                </div>
                
                <div class="room-description-container">
                    <div class="room-description">
                        <p>${room.longDescription || room.description}</p>
                        
                        <div style="margin-top: 30px; padding: 20px; background-color: rgba(212, 175, 55, 0.1); border-radius: 10px;">
                            <h4 style="color: var(--evergreen); margin-bottom: 15px; font-size: 20px; font-family: 'Playfair Display', serif;">Room Features</h4>
                            <div style="display: flex; gap: 30px; flex-wrap: wrap;">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <i class="fas fa-user-friends" style="color: var(--gold);"></i>
                                    <span>Capacity: ${room.capacity} guest${
    room.capacity > 1 ? "s" : ""
  }</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <i class="fas fa-bed" style="color: var(--gold);"></i>
                                    <span>${room.beds}</span>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <i class="fas fa-dollar-sign" style="color: var(--gold);"></i>
                                    <span>$${room.price} / night</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 style="font-size: 20px; color: var(--evergreen); margin-bottom: 20px; font-family: 'Playfair Display', serif;">Room Amenities</h4>
                        <div class="amenities-grid">
                            ${amenitiesHtml}
                        </div>
                    </div>
                </div>
            `;

  roomDetailsContainer.style.display = "block";
}

// Update room summary for step 3
function updateRoomSummary(room) {
  selectedRoomSummary.innerHTML = `
                <div style="display: flex; align-items: center; gap: 20px; padding: 20px; background-color: var(--light-gray); border-radius: 10px;">
                    <div style="width: 100px; height: 80px; border-radius: 8px; overflow: hidden;" class="summary-room-image";>
                        <img src="${
                          roomImages[room.image] ||
                          "https://images2.imgbox.com/a8/5d/JUlkNJLq_o.jpg"
                        }" alt="${
    room.type
  }" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="flex: 1;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                            <div>
                                <h5 style="color: var(--evergreen); margin-bottom: 5px; font-size: 18px;">${
                                  room.type
                                }</h5>
                                <div style="display: flex; gap: 15px; margin-top: 8px; flex-wrap: wrap;">
                                    <span style="font-size: 14px; color: var(--dark-gray);"><i class="fas fa-user-friends"></i> ${
                                      room.capacity
                                    } guests</span>
                                    <span style="font-size: 14px; color: var(--dark-gray);"><i class="fas fa-bed"></i> ${
                                      room.beds
                                    }</span>
                                    <span style="font-size: 14px; color: var(--dark-gray);"><i class="fas fa-dollar-sign"></i> $${
                                      room.price
                                    } / night</span>
                                </div>
                            </div>
                            <div style="color: var(--crimson); font-weight: 700; font-size: 22px;">$${
                              room.price
                            } / night</div>
                        </div>
                    </div>
                </div>
            `;
}

// Update guest counters
function updateGuestCounters() {
  adultsCount.textContent = bookingData.adults;
  childrenCount.textContent = bookingData.children;

  // Update button states
  decreaseAdultsBtn.disabled = bookingData.adults <= 1;
  increaseAdultsBtn.disabled =
    bookingData.adults + bookingData.children >=
    (selectedRoom ? selectedRoom.capacity : 2);

  decreaseChildrenBtn.disabled = bookingData.children <= 0;
  increaseChildrenBtn.disabled =
    bookingData.adults + bookingData.children >=
    (selectedRoom ? selectedRoom.capacity : 2);

  // Update date summary with new guest count
  updateDateSummary();
}

// Calculate nights between two dates
function calculateNights(checkIn, checkOut) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(checkIn);
  const secondDate = new Date(checkOut);

  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

// Update date summary
function updateDateSummary() {
  const checkIn = bookingData.checkIn;
  const checkOut = bookingData.checkOut;

  if (!checkIn || !checkOut || !selectedRoom) return;

  const nights = calculateNights(checkIn, checkOut);
  const totalPrice = nights * selectedRoom.price;

  bookingData.nights = nights;
  bookingData.totalPrice = totalPrice;

  // Format dates for display
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  // Show date summary if we have valid dates
  if (nights > 0) {
    dateSummary.style.display = "block";
    nightsCount.textContent = `${nights} night${nights > 1 ? "s" : ""}`;
    totalPriceElement.textContent = `$${totalPrice}`;

    // Update booking summary for step 4
    updateBookingSummary();
  } else {
    dateSummary.style.display = "none";
  }
}

// Update booking summary for step 4
function updateBookingSummary() {
  if (!selectedRoom) return;

  const room = selectedRoom;
  const checkInDate = new Date(bookingData.checkIn);
  const checkOutDate = new Date(bookingData.checkOut);
  const options = { weekday: "short", month: "short", day: "numeric" };

  bookingSummaryDetails.innerHTML = `
                <div class="summary-item">
                    <div class="summary-label">Room Type</div>
                    <div class="summary-value">${room.type}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Price per Night</div>
                    <div class="summary-value">$${room.price}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Check-in Date</div>
                    <div class="summary-value">${checkInDate.toLocaleDateString(
                      "en-US",
                      options
                    )}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Check-out Date</div>
                    <div class="summary-value">${checkOutDate.toLocaleDateString(
                      "en-US",
                      options
                    )}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Number of Nights</div>
                    <div class="summary-value">${bookingData.nights}</div>
                </div>
                <div class="summary-item">
                    <div class="summary-label">Guests</div>
                    <div class="summary-value">${bookingData.adults} adult${
    bookingData.adults > 1 ? "s" : ""
  }${
    bookingData.children > 0
      ? `, ${bookingData.children} child${
          bookingData.children > 1 ? "ren" : ""
        }`
      : ""
  }</div>
                </div>
            `;

  bookingTotal.textContent = `Total: $${bookingData.totalPrice}`;
}

// Set up event listeners for navigation
function setupEventListeners() {
  // Step 2 to Step 3
  nextToDatesBtn.addEventListener("click", () => {
    showStep(3);
    updateStepIndicator(3);
    scrollToTop();
  });

  // Step 3 to Step 4
  nextToBookingBtn.addEventListener("click", () => {
    // Validate dates using default date pickers
    const checkIn = bookingData.checkIn;
    const checkOut = bookingData.checkOut;

    if (!checkIn || !checkOut) {
      alert("Please select both check-in and check-out dates.");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    // Validate guests
    const totalGuests = bookingData.adults + bookingData.children;
    if (selectedRoom && totalGuests > selectedRoom.capacity) {
      alert(
        `This room has a maximum capacity of ${selectedRoom.capacity} guests. Please adjust your guest count.`
      );
      return;
    }

    if (totalGuests === 0) {
      alert("Please select at least one guest.");
      return;
    }

    updateDateSummary();
    showStep(4);
    updateStepIndicator(4);
    scrollToTop();
  });

  // Step 2 back to Step 1
  backToSelectionBtn.addEventListener("click", () => {
    showStep(1);
    updateStepIndicator(1);
    scrollToTop();
  });

  // Step 3 back to Step 2
  backToDetailsBtn.addEventListener("click", () => {
    showStep(2);
    updateStepIndicator(2);
    scrollToTop();
  });

  // Step 4 back to Step 3
  backToDatesBtn.addEventListener("click", () => {
    showStep(3);
    updateStepIndicator(3);
    scrollToTop();
  });

  // Step 4 to Step 5 (Submit booking to WhatsApp)
  submitBookingBtn.addEventListener("click", () => {
    // Form validation
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    if (!fullName || !email || !phone) {
      alert("Please fill in all required fields (Name, Email, Phone).");
      return;
    }

    // Save guest info
    bookingData.guestInfo = {
      fullName,
      email,
      phone,
      nationality: document.getElementById("nationality").value,
      payment: document.getElementById("payment").value,
      specialRequests: document.getElementById("specialRequests").value,
    };

    // Generate WhatsApp message
    const whatsappMessage = generateWhatsAppMessage();

    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL
    const whatsappNumber = "256709093939";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Update final booking summary
    updateFinalBookingSummary();

    // Show confirmation step
    showStep(5);
    updateStepIndicator(5);
    scrollToTop();
  });

  // Step 5 back to Step 1 (New booking)
  newBookingBtn.addEventListener("click", () => {
    // Reset form
    bookingForm.reset();

    // Reset dates to today and tomorrow using default date pickers
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const todayFormatted = formatDate(today);
    const tomorrowFormatted = formatDate(tomorrow);

    if (checkInInput && checkOutInput) {
      checkInInput.value = todayFormatted;
      checkOutInput.value = tomorrowFormatted;
    }

    bookingData.checkIn = todayFormatted;
    bookingData.checkOut = tomorrowFormatted;

    // Reset room selection
    if (selectedRoom) {
      const selectedCard = document.querySelector(
        `.room-card[data-room-number="${selectedRoom.number}"]`
      );
      selectedCard.classList.remove("selected");
      selectedRoom = null;
    }

    // Reset booking data
    bookingData = {
      room: null,
      checkIn: todayFormatted,
      checkOut: tomorrowFormatted,
      nights: 0,
      adults: 1,
      children: 0,
      totalPrice: 0,
      guestInfo: {},
    };

    // Reset guest counters
    adultsCount.textContent = "1";
    childrenCount.textContent = "0";

    nextToDetailsBtn.disabled = true;

    showStep(1);
    updateStepIndicator(1);
    scrollToTop();
  });

  // Guest counter listeners
  decreaseAdultsBtn.addEventListener("click", () => {
    if (bookingData.adults > 1) {
      bookingData.adults--;
      updateGuestCounters();
    }
  });

  increaseAdultsBtn.addEventListener("click", () => {
    if (
      selectedRoom &&
      bookingData.adults + bookingData.children < selectedRoom.capacity
    ) {
      bookingData.adults++;
      updateGuestCounters();
    }
  });

  decreaseChildrenBtn.addEventListener("click", () => {
    if (bookingData.children > 0) {
      bookingData.children--;
      updateGuestCounters();
    }
  });

  increaseChildrenBtn.addEventListener("click", () => {
    if (
      selectedRoom &&
      bookingData.adults + bookingData.children < selectedRoom.capacity
    ) {
      bookingData.children++;
      updateGuestCounters();
    }
  });
}

// Generate WhatsApp message
function generateWhatsAppMessage() {
  const room = bookingData.room;
  const guest = bookingData.guestInfo;

  // Format dates
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const checkInDate = new Date(bookingData.checkIn);
  const checkOutDate = new Date(bookingData.checkOut);

  return `*NEW BOOKING REQUEST - 7Days Motel Entebbe*

*Room Details:*
- Room Type: ${room.type}
- Capacity: ${room.capacity} guests
- Beds: ${room.beds}
- Price: $${room.price}/night

*Booking Dates:*
- Check-in: ${checkInDate.toLocaleDateString("en-US", options)}
- Check-out: ${checkOutDate.toLocaleDateString("en-US", options)}
- Nights: ${bookingData.nights}
- Guests: ${bookingData.adults} adult${bookingData.adults > 1 ? "s" : ""}${
    bookingData.children > 0
      ? `, ${bookingData.children} child${
          bookingData.children > 1 ? "ren" : ""
        }`
      : ""
  }
- Total: $${bookingData.totalPrice}

*Guest Information:*
- Name: ${guest.fullName}
- Email: ${guest.email}
- Phone: ${guest.phone}
- Nationality: ${guest.nationality || "Not specified"}
- Payment Method: ${guest.payment}

*Special Requests:*
${guest.specialRequests || "None"}

---
This booking request was submitted via the 7Days Motel website.`;
}

// Update final booking summary
function updateFinalBookingSummary() {
  const room = bookingData.room;
  const guest = bookingData.guestInfo;

  // Format dates
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const checkInDate = new Date(bookingData.checkIn);
  const checkOutDate = new Date(bookingData.checkOut);

  finalBookingSummary.innerHTML = `
                <div class="summary-item-row">
                    <span class="summary-label">Room Type:</span>
                    <span class="summary-value">${room.type}</span>
                </div>
                <div class="summary-item-row">
                    <span class="summary-label">Check-in Date:</span>
                    <span class="summary-value">${checkInDate.toLocaleDateString(
                      "en-US",
                      options
                    )}</span>
                </div>
                <div class="summary-item-row">
                    <span class="summary-label">Check-out Date:</span>
                    <span class="summary-value">${checkOutDate.toLocaleDateString(
                      "en-US",
                      options
                    )}</span>
                </div>
                <div class="summary-item-row">
                    <span class="summary-label">Number of Nights:</span>
                    <span class="summary-value">${bookingData.nights}</span>
                </div>
                <div class="summary-item-row">
                    <span class="summary-label">Guests:</span>
                    <span class="summary-value">${bookingData.adults} adult${
    bookingData.adults > 1 ? "s" : ""
  }${
    bookingData.children > 0
      ? `, ${bookingData.children} child${
          bookingData.children > 1 ? "ren" : ""
        }`
      : ""
  }</span>
                </div>
                <div class="summary-item-row">
                    <span class="summary-label">Price per Night:</span>
                    <span class="summary-value">$${room.price}</span>
                </div>
                <div class="summary-item-row">
                    <span class="summary-label">Guest Name:</span>
                    <span class="summary-value">${guest.fullName}</span>
                </div>
                <div class="summary-item-row">
                    <span class="summary-label">Guest Contact:</span>
                    <span class="summary-value">${guest.phone} | ${
    guest.email
  }</span>
                </div>
                <div class="summary-item-row summary-total-row">
                    <span class="summary-label">Total Amount:</span>
                    <span class="summary-value">$${
                      bookingData.totalPrice
                    }</span>
                </div>
            `;
}

// Show specific step
function showStep(stepNumber) {
  stepContainers.forEach((container) => {
    container.classList.remove("active");
  });

  document.getElementById(`step${stepNumber}`).classList.add("active");
}

// Update step indicator
function updateStepIndicator(activeStep) {
  steps.forEach((step, index) => {
    const stepNum = index + 1;

    step.classList.remove("active", "completed");

    if (stepNum < activeStep) {
      step.classList.add("completed");
    } else if (stepNum === activeStep) {
      step.classList.add("active");
    }
  });

  stepLines.forEach((line, index) => {
    const stepNum = index + 1;

    line.classList.remove("active");

    if (stepNum < activeStep) {
      line.classList.add("active");
    }
  });
}

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