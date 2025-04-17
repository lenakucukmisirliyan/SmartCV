// Tema geçişi
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", function () {
  const body = document.body;
  const currentMode = body.classList.contains("light-mode") ? "light" : "dark";

  if (currentMode === "light") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    themeToggle.textContent = "Açık Mod";
  } else {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    themeToggle.textContent = "Koyu Mod";
  }
});

// Verileri sayfada güncelleme
document.getElementById("cv-form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Formdan veri alma
  const name = document.getElementById("name").value;
  const title = document.getElementById("title").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const about = document.getElementById("about").value;
  const education = document.getElementById("education").value;
  const experience = document.getElementById("experience").value;
  const certification = document.getElementById("certification").value;

  // Sayfada görüntüleme
  document.getElementById("cv-name").textContent = name;
  document.getElementById("cv-title").textContent = title;
  document.getElementById(
    "cv-contact"
  ).textContent = `Email: ${email} | Tel: ${phone}`;
  document.getElementById("cv-about").textContent = about;

  // Eğitim, iş, sertifikaları listeye ekleme
  document.getElementById(
    "cv-education"
  ).innerHTML = `<li class="list-group-item">${education}</li>`;
  document.getElementById(
    "cv-experience"
  ).innerHTML = `<li class="list-group-item">${experience}</li>`;
  document.getElementById(
    "cv-certifications"
  ).innerHTML = `<li class="list-group-item">${certification}</li>`;
});

// Dinamik Listeye Eleman Ekleme
function addItem(section) {
  const input = document.getElementById(section);
  const value = input.value.trim();

  if (value) {
    const list = document.getElementById("cv-" + section);
    const newItem = document.createElement("li");
    newItem.classList.add("list-group-item");
    newItem.textContent = value;
    list.appendChild(newItem);
    input.value = ""; // Input'u temizle
  }
}

// PDF Dışa Aktarma
const downloadPDFButton = document.getElementById("downloadPDF");
downloadPDFButton.addEventListener("click", function () {
  const element = document.querySelector("main");
  html2pdf().from(element).save(); // PDF'yi kaydetme işlemi
});
