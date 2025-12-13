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
  "single-room.jpg":
    "https://images2.imgbox.com/86/f0/k9VQagZH_o.jpg",
  "double-room.jpg":
    "https://images2.imgbox.com/ec/6f/zNm9SZge_o.jpg",
  "apartment-room.jpg":
    "https://images2.imgbox.com/a8/31/rBuDiUtO_o.jpg",
  "family-room.jpg":
    "https://images2.imgbox.com/e1/a4/1NWy1esT_o.jpg",
  "twin-room.jpg":
    "https://images2.imgbox.com/ae/03/CXBoiao1_o.jpg",
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

// Calendar variables
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let activeCalendar = null;

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
const customCheckInInput = document.getElementById("customCheckIn");
const customCheckOutInput = document.getElementById("customCheckOut");
const checkInCalendar = document.getElementById("checkInCalendar");
const checkOutCalendar = document.getElementById("checkOutCalendar");
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
  // Set default dates
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Format dates for display
  bookingData.checkIn = formatDate(today);
  bookingData.checkOut = formatDate(tomorrow);

  // Set input values
  customCheckInInput.value = formatDateDisplay(today);
  customCheckOutInput.value = formatDateDisplay(tomorrow);

  // Generate room cards
  generateRoomCards();

  // Set up event listeners
  setupEventListeners();

  // Initialize step indicators
  updateStepIndicator(1);

  // Initialize date summary
  updateDateSummary();

  // Generate calendars
  generateCalendar(checkInCalendar, currentMonth, currentYear, "checkin");
  generateCalendar(checkOutCalendar, currentMonth, currentYear, "checkout");
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
    roomImages[room.image] ||
    "https://images2.imgbox.com/88/27/4VVwrpaV_o.jpg";

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
                    <div style="width: 100px; height: 80px; border-radius: 8px; overflow: hidden;">
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

// Generate calendar
function generateCalendar(calendarElement, month, year, type) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstDayIndex = firstDay.getDay();
  const lastDayIndex = lastDay.getDay();
  const prevLastDay = new Date(year, month, 0).getDate();

  let calendarHTML = `
                <div class="calendar-header">
                    <button class="prev-month"><i class="fas fa-chevron-left"></i></button>
                    <div class="calendar-month">${monthNames[month]} ${year}</div>
                    <button class="next-month"><i class="fas fa-chevron-right"></i></button>
                </div>
                <div class="calendar-weekdays">
                    <div class="weekday">Sun</div>
                    <div class="weekday">Mon</div>
                    <div class="weekday">Tue</div>
                    <div class="weekday">Wed</div>
                    <div class="weekday">Thu</div>
                    <div class="weekday">Fri</div>
                    <div class="weekday">Sat</div>
                </div>
                <div class="calendar-days">
            `;

  // Previous month days
  for (let i = firstDayIndex; i > 0; i--) {
    const day = prevLastDay - i + 1;
    calendarHTML += `<div class="calendar-day other-month">${day}</div>`;
  }

  // Current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);
    const isToday =
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();

    let isSelected = false;
    if (type === "checkin" && bookingData.checkIn) {
      const checkInDate = new Date(bookingData.checkIn);
      isSelected =
        date.getDate() === checkInDate.getDate() &&
        date.getMonth() === checkInDate.getMonth() &&
        date.getFullYear() === checkInDate.getFullYear();
    } else if (type === "checkout" && bookingData.checkOut) {
      const checkOutDate = new Date(bookingData.checkOut);
      isSelected =
        date.getDate() === checkOutDate.getDate() &&
        date.getMonth() === checkOutDate.getMonth() &&
        date.getFullYear() === checkOutDate.getFullYear();
    }

    const dayClass = `calendar-day ${isToday ? "today" : ""} ${
      isSelected ? "selected" : ""
    }`;
    calendarHTML += `<div class="${dayClass}" data-date="${formatDate(
      date
    )}">${i}</div>`;
  }

  // Next month days
  for (let i = lastDayIndex + 1, day = 1; i < 7; i++, day++) {
    calendarHTML += `<div class="calendar-day other-month">${day}</div>`;
  }

  calendarHTML += `</div>`;
  calendarElement.innerHTML = calendarHTML;

  // Add event listeners to calendar buttons
  const prevMonthBtn = calendarElement.querySelector(".prev-month");
  const nextMonthBtn = calendarElement.querySelector(".next-month");

  prevMonthBtn.addEventListener("click", () => {
    if (month === 0) {
      month = 11;
      year--;
    } else {
      month--;
    }
    generateCalendar(calendarElement, month, year, type);
  });

  nextMonthBtn.addEventListener("click", () => {
    if (month === 11) {
      month = 0;
      year++;
    } else {
      month++;
    }
    generateCalendar(calendarElement, month, year, type);
  });

  // Add event listeners to calendar days
  const dayElements = calendarElement.querySelectorAll(
    ".calendar-day:not(.other-month)"
  );
  dayElements.forEach((dayElement) => {
    dayElement.addEventListener("click", () => {
      const date = dayElement.getAttribute("data-date");

      if (type === "checkin") {
        bookingData.checkIn = date;
        customCheckInInput.value = formatDateDisplay(new Date(date));
        checkInCalendar.classList.remove("active");

        // Ensure check-out is after check-in
        if (
          bookingData.checkOut &&
          new Date(bookingData.checkOut) <= new Date(date)
        ) {
          const nextDay = new Date(date);
          nextDay.setDate(nextDay.getDate() + 1);
          bookingData.checkOut = formatDate(nextDay);
          customCheckOutInput.value = formatDateDisplay(nextDay);
        }
      } else if (type === "checkout") {
        bookingData.checkOut = date;
        customCheckOutInput.value = formatDateDisplay(new Date(date));
        checkOutCalendar.classList.remove("active");
      }

      updateDateSummary();
      generateCalendar(checkInCalendar, currentMonth, currentYear, "checkin");
      generateCalendar(checkOutCalendar, currentMonth, currentYear, "checkout");
    });
  });
}

// Update guest counters
function updateGuestCounters() {
  adultsCount.textContent = bookingData.adults;
  childrenCount.textContent = bookingData.children;

  // Update button states
  decreaseAdultsBtn.disabled = bookingData.adults <= 1;
  increaseAdultsBtn.disabled =
    bookingData.adults + bookingData.children >= bookingData.room.capacity;

  decreaseChildrenBtn.disabled = bookingData.children <= 0;
  increaseChildrenBtn.disabled =
    bookingData.adults + bookingData.children >= bookingData.room.capacity;

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
  });

  // Step 3 to Step 4
  nextToBookingBtn.addEventListener("click", () => {
    // Validate dates
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
    if (totalGuests > selectedRoom.capacity) {
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
  });

  // Step 2 back to Step 1
  backToSelectionBtn.addEventListener("click", () => {
    showStep(1);
    updateStepIndicator(1);
  });

  // Step 3 back to Step 2
  backToDetailsBtn.addEventListener("click", () => {
    showStep(2);
    updateStepIndicator(2);
  });

  // Step 4 back to Step 3
  backToDatesBtn.addEventListener("click", () => {
    showStep(3);
    updateStepIndicator(3);
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
    const whatsappNumber = "256762017465";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    // Update final booking summary
    updateFinalBookingSummary();

    // Show confirmation step
    showStep(5);
    updateStepIndicator(5);
  });

  // Step 5 back to Step 1 (New booking)
  newBookingBtn.addEventListener("click", () => {
    // Reset form
    bookingForm.reset();

    // Reset dates to today and tomorrow
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    bookingData.checkIn = formatDate(today);
    bookingData.checkOut = formatDate(tomorrow);
    customCheckInInput.value = formatDateDisplay(today);
    customCheckOutInput.value = formatDateDisplay(tomorrow);

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
      checkIn: formatDate(today),
      checkOut: formatDate(tomorrow),
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
  });

  // Custom date picker event listeners
  customCheckInInput.addEventListener("click", (e) => {
    e.stopPropagation();
    checkInCalendar.classList.toggle("active");
    checkOutCalendar.classList.remove("active");
    activeCalendar = "checkin";
  });

  customCheckOutInput.addEventListener("click", (e) => {
    e.stopPropagation();
    checkOutCalendar.classList.toggle("active");
    checkInCalendar.classList.remove("active");
    activeCalendar = "checkout";
  });

  // Close calendar when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".date-input-container")) {
      checkInCalendar.classList.remove("active");
      checkOutCalendar.classList.remove("active");
    }
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
