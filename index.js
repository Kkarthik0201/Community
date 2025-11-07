// ---------- DEPARTMENT DATA ----------
let departments = [
  { id: "CSE", title: "Computer Science & Engineering", desc: "Artificial Intelligence, Data Science, Systems Research." },
  { id: "ECE", title: "Electronics & Communication Engineering", desc: "VLSI Design, Communication Systems, and Signal Processing." },
  { id: "EE", title: "Electrical Engineering", desc: "Power Systems, Control, Renewable Energy." }
];

let profs = {
  "CSE": [
    { name: "Bala", room: "CS12", email: "bala@iitroorkee.ac.in", phone: "1332-900901" },
    { name: "Satish", room: "CS18", email: "satish@iitroorkee.ac.in", phone: "1332-900902" },
    { name: "Sparsh", room: "CS32", email: "sparsh@iitroorkee.ac.in", phone: "1332-900903" },
    { name: "Mittal", room: "CS45", email: "mittal@iitroorkee.ac.in", phone: "1332-900904" }
  ],
  "ECE": [
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
  ],

  "EE": [
    { name: "Aranab Dey", room: "EE14", email: "aranab@iitroorkee.ac.in", phone: "1332-110800" },
    { name: "Dhibakar", room: "EE18", email: "dhibakar@iitroorkee.ac.in", phone: "1332-110801" }
  ]
};

let labs = {
  "CSE": [ { name:"Machine Learning Lab" }, { name:"Data Science Lab" }, { name:"Software Systems Lab" } ],
  "ECE": [
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
  ],
  "EE": [ { name:"Power Systems Lab" }, { name:"Control & Automation Lab" }, { name:"Renewable Energy Lab" } ]
};

let deptInfo = {
  "CSE": { map: "map/map.html" },
  "ECE": { map: "map/map.html" },
  "EE": { map: "map/map.html" }
};

let selectedDept = "";

// ---------- PANEL MANAGEMENT ----------
function showPanel(panelId) {
  document.getElementById('homeSection').style.display = "none";
  document.getElementById('mainContent').style.display = "none";
  document.getElementById('mapSection').style.display = "none";

  if (panelId !== 'mainContent') {
    document.getElementById('mainContent').innerHTML = "";
  }

  let panel = document.getElementById(panelId);
  if (panel) {
    panel.style.display = (panelId === 'homeSection' || panelId === 'mapSection') ? 'flex' : 'block';
  }
}

// ---------- HOME ----------
function goHome() {
  navigateTo("home");
  closePopups();
  document.getElementById('homeLink').classList.add('active');
  document.getElementById('departmentsLink').classList.remove('active');
  document.getElementById('aboutLink').classList.remove('active');
  showPanel('homeSection');
  startSlideshow();
}

// ---------- SLIDESHOW ----------
let slideIndex = 0;
function changeSlide(n) { showSlide(slideIndex + n); }
function showSlide(n) {
  let slides = document.querySelectorAll("#homeSection .slide");
  if (slides.length === 0) return;
  slides.forEach(s => s.classList.remove("active-slide"));
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add("active-slide");
}
function startSlideshow() {
  clearInterval(window.slideTimer);
  showSlide(slideIndex);
  window.slideTimer = setInterval(() => changeSlide(1), 4000);
}

// ---------- LABORATORIES ----------
function showLaboratories() {
  navigateTo("labs");
  closePopups();
  showPanel('mainContent');
  let html = `
    <div class="lab-grid-container">
      <div class="lab-grid-header">Laboratories in ${selectedDept}</div>
      <div class="lab-grid-search">
        <input type="text" id="searchLab" placeholder="Search Laboratory..." oninput="filterLaboratories()" />
        <button onclick="filterLaboratories()">Search</button>
      </div>
      <div id="labGrid" class="lab-grid"></div>
    </div>`;
  document.getElementById('mainContent').innerHTML = html;
  renderLabGrid("");
}

function filterLaboratories() {
  let q = document.getElementById('searchLab').value.trim().toLowerCase();
  renderLabGrid(q);
}

function renderLabGrid(query) {
  let labArr = labs[selectedDept] || [];
  let cards = "";

  labArr.forEach(lab => {
    let txt = (lab.name + " " + (lab.room || "")).toLowerCase();
    if (!query || txt.includes(query)) {
      cards += `
        <div class="lab-card">
          <h4>${lab.name}</h4>
          <div class="info-line">
            <i class="fa-solid fa-location-dot"></i> ${lab.room || "N/A"}
          </div>
          ${lab.room && lab.room !== "N/A"
            ? `<button onclick="showMap('${lab.room}')">Show on Map</button>`
            : ""}
        </div>`;
    }
  });

  document.getElementById("labGrid").innerHTML =
    cards || "<p style='color:white; text-align:center;'>No laboratories found.</p>";
}

// ---------- ABOUT ----------
function showAbout() {
  navigateTo("about");
  closePopups();
  document.getElementById('aboutLink').classList.add('active');
  document.getElementById('homeLink').classList.remove('active');
  document.getElementById('departmentsLink').classList.remove('active');
  showPanel('mainContent');
  document.getElementById('mainContent').innerHTML = `
    <div class='about-panel'>
      <h2>About IIT Roorkee</h2>
      <p>IIT Roorkee is a premier institute in India, renowned for research, innovation, and excellence in engineering, science, and technology.</p>
    </div>`;
}

// ---------- DEPARTMENT POPUP ----------
function showDepartmentsPopup(event) {
  closePopups();
  navigateTo("departments");
  document.getElementById('departmentsLink').classList.add('active');
  let el = document.getElementById('popupDept');
  let ul = document.getElementById('deptListUL');
  ul.innerHTML = "";
  departments.forEach(dept => {
    ul.innerHTML += `<li onclick="selectDepartmentPopup(event, '${dept.id}')">${dept.title}</li>`;
  });
  let rect = event.target.getBoundingClientRect();
  el.style.left = rect.left + "px";
  el.style.top = (rect.bottom + window.scrollY) + "px";
  el.style.display = "block";
}

function selectDepartmentPopup(event, deptId) {
  selectedDept = deptId;
  const deptItemRect = event.target.getBoundingClientRect();
  const deptPopupRect = document.getElementById('popupDept').getBoundingClientRect();
  let popup = document.getElementById('popupVertical');
  popup.style.left = (deptPopupRect.right + 8) + "px";
  popup.style.top = (deptItemRect.top + window.scrollY) + "px";
  popup.style.display = "block";
}

// ---------- PROFESSORS ----------
function showProfessors() {
  navigateTo("professors");
  closePopups();
  showPanel('mainContent');
  let html = `
    <div class="prof-grid-container">
      <div class="prof-grid-header">Professors in ${selectedDept}</div>
      <div class="prof-grid-search">
        <input type="text" id="searchProf" placeholder="Search Professor..." oninput="filterProfessors()" />
        <button onclick="filterProfessors()">Search</button>
      </div>
      <div id="profGrid" class="prof-grid"></div>
    </div>`;
  document.getElementById('mainContent').innerHTML = html;
  renderProfGrid("");
}

function filterProfessors() {
  let q = document.getElementById('searchProf').value.trim().toLowerCase();
  renderProfGrid(q);
}

function renderProfGrid(query) {
  let profArr = profs[selectedDept] || [];
  let cards = "";

  profArr.forEach(p => {
    let txt = (
      p.name + " " +
      (p.designation || "") + " " +
      p.email + " " +
      (p.phone || "") + " " +
      (p.room || "")
    ).toLowerCase();

    if (!query || txt.includes(query)) {
      cards += `
      <div class="prof-card">
        <h4>${p.name}</h4>
        <div class="card-info">${p.designation || "Professor"}</div>
        <div class="info-line"><i class="fa-solid fa-envelope"></i> ${p.email}</div>
        <div class="info-line"><i class="fa-solid fa-location-dot"></i> ${p.room || "N/A"}</div>
        <div class="info-line"><i class="fa-solid fa-phone"></i> ${p.phone || "N/A"}</div>
        ${p.room && p.room !== "N/A"
          ? `<button onclick="showMap('${p.room}')">Show on Map</button>`
          : ""}
      </div>`;
    }
  });

  document.getElementById("profGrid").innerHTML =
    cards || "<p style='color:white; text-align:center;'>No results found.</p>";
}

// ---------- MAP SYSTEM ----------
let currentFloor = 0;
let currentBlock = "";
const maxFloors = 2;

function detectBlockAndFloor(roomId) {
  if (roomId.startsWith("N-")) currentBlock = "north";
  else if (roomId.startsWith("S-")) currentBlock = "south";
  else currentBlock = "south";

  let num = parseInt(roomId.split("-")[1]) || 0;
  if (num >= 300) currentFloor = 2;
  else if (num >= 200) currentFloor = 1;
  else currentFloor = 0;
}

function showMap(roomId = null) {
  navigateTo("map", { roomId });
  closePopups();
  showPanel('mapSection');

  if (roomId && (roomId.startsWith("S-") || roomId.startsWith("N-"))) {
    detectBlockAndFloor(roomId);
    document.getElementById("blockSelector").style.display = "none";
    document.getElementById("deptMapFrame").style.display = "block";
    document.getElementById("floorControls").style.display = "flex";
    loadFloor(roomId);
  } else {
    document.getElementById("deptMapFrame").style.display = "none";
    document.getElementById("floorControls").style.display = "none";
    document.getElementById("blockSelector").style.display = "flex";
  }
}

function openBlock(blockName) {
  currentBlock = blockName;
  currentFloor = 0;
  document.getElementById("blockSelector").style.display = "none";
  document.getElementById("deptMapFrame").style.display = "block";
  document.getElementById("floorControls").style.display = "flex";
  loadFloor();
}

function loadFloor(roomId = null) {
  const iframe = document.getElementById("deptMapFrame");
  const floorLabel = document.getElementById("floorLabel");
  let filePath = "";

  if (currentBlock === "south") {
    if (currentFloor === 0) filePath = "map/map.html";
    else if (currentFloor === 1) filePath = "map/first_floor.html";
    else if (currentFloor === 2) filePath = "map/second_floor.html";
  } else if (currentBlock === "north") {
    if (currentFloor === 0) filePath = "map/N_Groundfloor.html";
    else if (currentFloor === 1) filePath = "map/N_Firstfloor.html";
    else if (currentFloor === 2) filePath = "map/N_secondfloor.html";
  }

  iframe.src = filePath;
  floorLabel.textContent = `Floor: ${currentFloor}`;
  iframe.onload = () => {
    if (roomId) iframe.contentWindow.postMessage({ type: "highlightRoom", roomId }, "*");
  };
}

function changeFloor(dir) {
  currentFloor = (currentFloor + dir + (maxFloors + 1)) % (maxFloors + 1);
  loadFloor();
}

// ---------- POPUPS ----------
document.addEventListener('click', function(event) {
  let deptPopup = document.getElementById('popupDept');
  let vertPopup = document.getElementById('popupVertical');
  let deptLink = document.getElementById('departmentsLink');
  if (!deptPopup.contains(event.target) && !vertPopup.contains(event.target) && !deptLink.contains(event.target)) {
    closePopups();
  }
});

function closePopups() {
  document.getElementById('popupDept').style.display = "none";
  document.getElementById('popupVertical').style.display = "none";
  let activeId = document.querySelector('.menu-bar a.active')?.id;
  if (activeId !== 'homeLink' && activeId !== 'aboutLink') {
    document.getElementById('departmentsLink').classList.remove('active');
  }
}

// ---------- COLLAPSIBLE TEXT ----------
function toggleECEAbout() {
  const aboutText = document.getElementById("eceAboutText");
  const btn = document.querySelector(".read-more-btn");
  if (!aboutText.classList.contains("expanded")) {
    aboutText.classList.add("expanded");
    btn.textContent = "Read Less";
    clearInterval(window.slideTimer);
  } else {
    aboutText.classList.remove("expanded");
    btn.textContent = "Read More";
    startSlideshow();
  }
}

// ---------- BROWSER HISTORY SUPPORT ----------
window.addEventListener("popstate", (event) => {
  const state = event.state;
  if (!state) return;

  if (state.page === "home") goHome();
  else if (state.page === "about") showAbout();
  else if (state.page === "departments") showDepartmentsPopup(event);
  else if (state.page === "professors") showProfessors();
  else if (state.page === "labs") showLaboratories();
  else if (state.page === "map") showMap(state.roomId || null);
});

function navigateTo(page, extra = {}) {
  history.pushState({ page, ...extra }, "", "");
}
