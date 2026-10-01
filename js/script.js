/* =========================
SECTION NAVIGATION
========================= */

function showSection(sectionName) {

const sections = document.querySelectorAll(".dashboard-section");

sections.forEach(function(section) {
    section.classList.add("hidden");
});

const selectedSection = document.getElementById(sectionName);

if (selectedSection) {
    selectedSection.classList.remove("hidden");
}


/* Update page title */

const titles = {
    dashboard: "Admin Dashboard",
    complaints: "Complaints",
    assign: "Assign Work",
    collectors: "Collectors",
    tracking: "Work Tracking"
};

const pageTitle = document.getElementById("pageTitle");

if (pageTitle && titles[sectionName]) {
    pageTitle.textContent = titles[sectionName];
}


/* Update active menu */

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(function(item) {
    item.classList.remove("active");
});

event?.currentTarget?.classList.add("active");


}

/* =========================
ASSIGN MODAL
========================= */

function openAssignModal(complaintId) {

const modal = document.getElementById("assignModal");

const selectedComplaint =
    document.getElementById("selectedComplaint");

if (selectedComplaint) {
    selectedComplaint.textContent = "#" + complaintId;
}

modal.classList.add("show");


}

function closeAssignModal() {

const modal = document.getElementById("assignModal");

modal.classList.remove("show");


}

window.onclick = function(event) {

const modal = document.getElementById("assignModal");

if (event.target === modal) {
    closeAssignModal();
}


};

/* =========================
ASSIGN FROM MODAL
========================= */

function assignFromModal(event) {

event.preventDefault();

const collector =
    document.getElementById("modalCollector").value;

if (!collector) {
    alert("Please select a collector.");
    return;
}

alert(
    "Complaint successfully assigned to " +
    collector
);

closeAssignModal();


}

/* =========================
ASSIGN WORK PAGE
========================= */

function assignWork(event) {

event.preventDefault();

const complaintId =
    document.getElementById("complaintId").value;

const collector =
    document.getElementById("collectorName").value;

if (!complaintId || !collector) {

    alert("Please fill all required fields.");

    return;
}


alert(
    "Work " +
    complaintId +
    " assigned successfully to " +
    collector
);


document.getElementById("assignForm").reset();


}

/* =========================
SEARCH COMPLAINTS
========================= */

function searchComplaints() {

const input =
    document.getElementById("complaintSearch");

const filter =
    input.value.toLowerCase();

const table =
    document.getElementById("complaintTable");

const rows =
    table.getElementsByTagName("tr");


for (let i = 1; i < rows.length; i++) {

    const rowText =
        rows[i].textContent.toLowerCase();

    if (rowText.includes(filter)) {

        rows[i].style.display = "";

    } else {

        rows[i].style.display = "none";

    }
}


}

/* =========================
DEMO NOTIFICATION
========================= */

document.addEventListener("DOMContentLoaded", function() {

console.log(
    "CleanCity Admin Dashboard loaded successfully."
);


});