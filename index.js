// ========== ECE DEPARTMENT DATA ==========

const professors = [
  // ===== SOUTH BLOCK =====
  { name: "Tharun Kumar Reddy Bollu", designation: "Assistant Professor", email: "tharun.reddy@ece.iitr.ac.in", phone: "+91-1332-285622", room: "S-117" },
  { name: "Anshul Jaiswal", designation: "Associate Professor", email: "anshul.jaiswal@ece.iitr.ac.in", phone: "+91-1332-284929", room: "S-110" },
  { name: "Brijesh Kumar", designation: "Associate Professor", email: "brijesh@ece.iitr.ac.in", phone: "+91-1332-284791", room: "S-109" },
  { name: "Debashis Ghosh", designation: "Professor", email: "debashis.ghosh@ece.iitr.ac.in", phone: "N/A", room: "S-111" },
  { name: "Meenakshi Rawat", designation: "Professor", email: "meenakshi.rawat@ece.iitr.ac.in", phone: "8979879044", room: "S-113" },
  { name: "Pyari Mohan Pradhan", designation: "Professor", email: "pmpradhan@ece.iitr.ac.in", phone: "+91-1332-284807", room: "S-115" },
  { name: "Bishnu Prasad Das", designation: "Professor", email: "bishnu.das@ece.iitr.ac.in", phone: "+91-1332-284798", room: "S-121" },
  { name: "Dharmendra Singh", designation: "Professor", email: "dharmfec@ece.iitr.ac.in", phone: "+91-1332-285695", room: "S-129" },
  { name: "Anshul Tyagi", designation: "Associate Professor", email: "anshul.tyagi@ece.iitr.ac.in", phone: "+91-1332-285688", room: "S-127" },
  { name: "Gowrish Basavarajappa", designation: "Assistant Professor", email: "gowrish.b@ece.iitr.ac.in", phone: "01332-285015", room: "S-207" },
  { name: "Sourajeet Roy", designation: "Assistant Professor", email: "sourajeet.roy@ece.iitr.ac.in", phone: "9836311221", room: "S-209" },
  { name: "Saurabh Khanna", designation: "Assistant Professor", email: "sakhanna@ece.iitr.ac.in", phone: "9900158674", room: "S-215" },
  { name: "Amita Giri", designation: "Assistant Professor", email: "amita.giri@ece.iitr.ac.in", phone: "01332-285368", room: "S-223" },
  { name: "Dheeraj Kumar", designation: "Associate Professor", email: "dheeraj.kumar@ece.iitr.ac.in", phone: "+91-1332-284918", room: "S-217" },
  { name: "Saravana Kumar M", designation: "Assistant Professor", email: "saravana.kumar@ece.iitr.ac.in", phone: "N/A", room: "S-319" },
  { name: "Abhay Kumar Sah", designation: "Associate Professor", email: "abhaysah@ece.iitr.ac.in", phone: "N/A", room: "S-311" },
  { name: "Sandeep Kumar Singh", designation: "Assistant Professor", email: "sandeep.singh@ece.iitr.ac.in", phone: "N/A", room: "S-310" },
  { name: "Priyansha Kaurav", designation: "Assistant Professor", email: "priyansha.kaurav@ece.iitr.ac.in", phone: "01332-285004", room: "S-317" },
  { name: "Ashish Kumar Chowdhary", designation: "Assistant Professor", email: "ashish.chowdhary@ece.iitr.ac.in", phone: "01332-285240 / 01332-285313", room: "S-310/1" },

  // ===== NORTH BLOCK =====
  { name: "Bulusu Anand", designation: "Professor", email: "anand.bulusu@ece.iitr.ac.in", phone: "+91-1332-245347", room: "N-113" },
  { name: "Sudeb Dasgupta", designation: "Professor", email: "sudeb.dasgupta@ece.iitr.ac.in", phone: "+91-1332-285666", room: "N-111" },
  { name: "Karun Rawat", designation: "Professor", email: "karun.rawat@ece.iitr.ac.in", phone: "+91-1332-284830", room: "N-201" },
  { name: "Vishvendra Singh Poonia", designation: "Associate Professor", email: "vishvendra@ece.iitr.ac.in", phone: "+91-1332-285601", room: "N-205" },
  { name: "Sanjeev Manhas", designation: "Head of the Department", email: "sanjeev.manhas@ece.iitr.ac.in", phone: "+91-1332-285147", room: "N-207" },
  { name: "Vinod Pankajakshan", designation: "Associate Professor", email: "vinod.pankajakshan@ece.iitr.ac.in", phone: "7409726873", room: "N-211" },
  { name: "Arnab Datta", designation: "Professor", email: "arnab.datta@ece.iitr.ac.in", phone: "+91-1332-285464", room: "N-215" },
  { name: "Rajib Kumar Panigrahi", designation: "Professor", email: "rajib.panigrahi@ece.iitr.ac.in", phone: "4767", room: "N-213" },
  { name: "N.P. Pathak", designation: "Professor", email: "nagendra.pathak@ece.iitr.ac.in", phone: "+91-1332-285771", room: "N-217" },
  { name: "Darshak Bhatt", designation: "Associate Professor", email: "darshak.bhatt@ece.iitr.ac.in", phone: "N/A", room: "N-309" },
  { name: "Bodhibrata Mukhopadhyay", designation: "Assistant Professor", email: "bodhibrata@ece.iitr.ac.in", phone: "+91-1332-285593", room: "N-317" }
];

const laboratories = [
  { name: "Signal Processing Laboratory", room: "S-104" },
  { name: "Jio 5G Innovation Lab", room: "S-128" },
  { name: "SDR Laboratory", room: "S-128" },
  { name: "Server Laboratory", room: "S-204" },
  { name: "Special Manpower Facility", room: "S-206" },
  { name: "Standards Laboratory", room: "S-208" },
  { name: "Characterisation Laboratory", room: "S-210A" },
  { name: "Solid State Device Laboratory", room: "S-210" },
  { name: "Parimal Laboratory", room: "S-212" },
  { name: "IoT Laboratory", room: "S-214" },
  { name: "Machine Vision Laboratory", room: "S-213B" },
  { name: "High Performance Laboratory", room: "S-215B" },
  { name: "Network Security Laboratory", room: "S-304" },
  { name: "Design Automation Laboratory", room: "S-307" },
  { name: "IC Testing Laboratory", room: "S-309" },
  { name: "Opto Electronics Laboratory", room: "S-313" },
  { name: "Information Security Laboratory", room: "S-306" },
  { name: "RF Characterisation Laboratory", room: "S-312" },
  { name: "Image Laboratory", room: "S-314" },
  { name: "Wireless Laboratory", room: "S-316" },
  { name: "PEVC and Surface Profilometer Facilities", room: "N-108" },
  { name: "VLSI Design Laboratory", room: "N-110" },
  { name: "Millimeter Tz Wave Laboratory", room: "N-202" },
  { name: "Non Linear Vector Network Analyzer Facility", room: "N-206" },
  { name: "Wireless Communication Laboratory", room: "N-208" },
  { name: "RFIC Laboratory", room: "N-210" },
  { name: "Data Mining Laboratory", room: "N-212" },
  { name: "Microwave Laboratory", room: "N-302" },
  { name: "Remote Sensing Laboratory", room: "N-306" },
  { name: "Digital Electronics Laboratory", room: "N-308" },
  { name: "E&ICT Multipurpose Laboratory", room: "N-310" },
  { name: "E&ICT Smart Classroom", room: "N-316" },
  { name: "Machine Intelligence Laboratory", room: "N-319" }
];

// ========== MAP STATE GLOBAL VARIABLES ==========
let currentBlock = '';
let currentFloor = 0;
const MAX_FLOOR = 2; // Max floor for both blocks (0, 1, 2)
const MIN_FLOOR = 0; // Min floor

// ========== NAVIGATION FUNCTIONS ==========

function hideAllSections() {
  document.getElementById('homeSection').style.display = 'none';
  document.getElementById('professorsSection').style.display = 'none';
  document.getElementById('laboratoriesSection').style.display = 'none';
  document.getElementById('mapSection').style.display = 'none';
}

function setActiveLink(activeId) {
  const links = ['homeLink', 'professorsLink', 'laboratoriesLink', 'mapLink'];
  links.forEach(id => {
    document.getElementById(id).classList.remove('active');
  });
  document.getElementById(activeId).classList.add('active');
}

function navigateTo(page, extra = {}) {
  history.pushState({ page, ...extra }, "", "");
}

function showHome() {
  hideAllSections();
  document.getElementById('homeSection').style.display = 'flex';
  setActiveLink('homeLink');
  navigateTo('home');
}

function showProfessors() {
  hideAllSections();
  document.getElementById('professorsSection').style.display = 'block';
  setActiveLink('professorsLink');
  renderProfessors();
  navigateTo('professors');
}

function showLaboratories() {
  hideAllSections();
  document.getElementById('laboratoriesSection').style.display = 'block';
  setActiveLink('laboratoriesLink');
  renderLaboratories();
  navigateTo('laboratories');
}

/**
 * Main function to display the Map section.
 * Handles initial view (selector) or direct room highlight.
 * @param {string} roomId - Optional room ID to focus on.
 */
function showMap(roomId = null) {
  // 1. Core navigation setup
  hideAllSections();
  document.getElementById('mapSection').style.display = 'block';
  setActiveLink('mapLink');
  navigateTo('map', { roomId });

  const isRoomValid = roomId && (roomId.startsWith("S-") || roomId.startsWith("N-"));

  if (isRoomValid) {
    // Case 1: Room ID provided (e.g., from Professor/Lab card)
    detectBlockAndFloor(roomId);
    
    // Set visibility for room view
    document.getElementById("blockSelector").style.display = "none"; 
    document.getElementById("floorControls").style.display = "flex"; 
    document.getElementById("deptMapFrame").style.display = "block"; 
    
    // Load the correct map and highlight the room
    loadFloor(roomId);
  } else {
    // Case 2: No Room ID provided (clicked the main 'Map' link)
    
    // Set visibility for selector view
    document.getElementById("blockSelector").style.display = "block"; 
    document.getElementById("floorControls").style.display = "none";
    document.getElementById("deptMapFrame").style.display = "none";
    currentBlock = ''; 
  }
}


// ========== PROFESSORS/LAB FUNCTIONS ==========

function renderProfessors(query = '') {
  let cards = "";
  professors.forEach(p => {
    let searchText = (
      p.name + " " +
      p.designation + " " +
      p.email + " " +
      p.phone + " " +
      p.room
    ).toLowerCase();

    if (!query || searchText.includes(query.toLowerCase())) {
      cards += `
      <div class="prof-card">
        <h4>${p.name}</h4>
        <div class="card-info">${p.designation}</div>
        <div class="info-line">
          <i class="fa-solid fa-envelope"></i> ${p.email}
        </div>
        <div class="info-line">
          <i class="fa-solid fa-location-dot"></i> ${p.room}
        </div>
        <div class="info-line">
          <i class="fa-solid fa-phone"></i> ${p.phone}
        </div>
        <button onclick="showMap('${p.room}')">Show on Map</button>
      </div>`;
    }
  });

  document.getElementById("profGrid").innerHTML =
    cards || "<p style='color:white; text-align:center; padding: 40px;'>No results found.</p>";
}

function searchProfessors() {
  const query = document.getElementById('profSearch').value;
  renderProfessors(query);
}

function renderLaboratories(query = '') {
  let cards = "";
  laboratories.forEach(lab => {
    let searchText = (lab.name + " " + lab.room).toLowerCase();

    if (!query || searchText.includes(query.toLowerCase())) {
      cards += `
      <div class="lab-card">
        <h4>${lab.name}</h4>
        <div class="info-line">
          <i class="fa-solid fa-location-dot"></i> ${lab.room}
        </div>
        <button onclick="showMap('${lab.room}')">Show on Map</button>
      </div>`;
    }
  });

  document.getElementById("labGrid").innerHTML =
    cards || "<p style='color:white; text-align:center; padding: 40px;'>No results found.</p>";
}

function searchLaboratories() {
  const query = document.getElementById('labSearch').value;
  renderLaboratories(query);
}

// ========== MAP SYSTEM FUNCTIONS (Updated File Paths) ==========

/**
 * Determines the block and floor from a room ID (e.g., S-210 -> south, 1).
 * @param {string} roomId - The room identifier.
 */
function detectBlockAndFloor(roomId) {
  // Set Block
  if (roomId.startsWith("N-")) {
    currentBlock = "north";
  } else if (roomId.startsWith("S-")) {
    currentBlock = "south";
  } else {
    currentBlock = "south";
  }

  // Set Floor based on room number structure
  let numPart = roomId.split("-")[1] || "100";
  let num = parseInt(numPart.substring(0, 3)) || 100;
  
  if (num >= 300) {
    currentFloor = 2; // Second Floor
  } else if (num >= 200) {
    currentFloor = 1; // First Floor
  } else {
    currentFloor = 0; // Ground Floor
  }
}

/**
 * Loads the correct map file into the iframe and updates the floor label.
 * @param {string} roomId - Optional room ID to highlight after loading.
 */
function loadFloor(roomId = null) {
  const iframe = document.getElementById("deptMapFrame");
  const label = document.getElementById("floorLabel");
  let filePath = "";

  // Dynamic file path logic: NOW USING THE NAMES YOU PREVIOUSLY SUGGESTED
  if (currentBlock === "south") {
    if (currentFloor === 0) filePath = "map/map.html"; 
    else if (currentFloor === 1) filePath = "map/first_floor.html"; 
    else if (currentFloor === 2) filePath = "map/second_floor.html"; 
  } else if (currentBlock === "north") {
    if (currentFloor === 0) filePath = "map/N_Groundfloor.html"; 
    else if (currentFloor === 1) filePath = "map/N_Firstfloor.html"; 
    else if (currentFloor === 2) filePath = "map/N_secondfloor.html"; 
  } else {
    return;
  }
  
  // Set the map source
  iframe.src = filePath;

  // Update the label text
  let floorText = `Floor: ${currentFloor}`;
  if (currentFloor === 0) floorText = 'Floor: Ground';
  else if (currentFloor === 1) floorText = 'Floor: 1st';
  else if (currentFloor === 2) floorText = 'Floor: 2nd';
  label.textContent = floorText;
  
  // Highlight room after map loads (This ensures the highlight works after navigation)
  iframe.onload = () => {
    if (roomId) {
      // Send a message to the iframe content to highlight the specific room
      iframe.contentWindow.postMessage({ type: "highlightRoom", roomId }, "*");
    }
  };
}

/**
 * Initializes the map view for a selected block (called from block buttons).
 * @param {string} blockName - The selected block ('south' or 'north').
 */
function openBlock(blockName) {
  currentBlock = blockName;
  currentFloor = 0; // Start at Ground floor
  document.getElementById("blockSelector").style.display = "none";
  document.getElementById("deptMapFrame").style.display = "block";
  document.getElementById("floorControls").style.display = "flex";
  loadFloor(); 
}

/**
 * Changes the current floor level (called from + and - buttons).
 * @param {number} dir - The change in floor level (1 for up, -1 for down).
 */
function changeFloor(dir) {
  const newFloor = currentFloor + dir;
  
  if (newFloor >= MIN_FLOOR && newFloor <= MAX_FLOOR) {
    currentFloor = newFloor;
    loadFloor();
  } else {
    console.log(`Cannot go to floor ${newFloor}. Max is ${MAX_FLOOR}, Min is ${MIN_FLOOR}.`);
  }
}

// ========== BROWSER HISTORY SUPPORT ==========

window.addEventListener("popstate", (event) => {
  const state = event.state;
  if (!state) return;

  if (state.page === "home") showHome();
  else if (state.page === "professors") showProfessors();
  else if (state.page === "laboratories") showLaboratories();
  else if (state.page === "map") showMap(state.roomId || null);
});


// ========== INITIALIZATION ==========

// Show home on load
window.onload = function() {
  showHome();
};
