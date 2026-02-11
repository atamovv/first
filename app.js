const themeBtn = document.getElementById("themeBtn");
const greetBtn = document.getElementById("greetBtn");
const overlay = document.getElementById("overlay");
const greetingText = document.getElementById("greetingText");

// Переключение темы
themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Приветствие
greetBtn.addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();

  if (name === "") {
    alert("Введите имя");
    return;
  }

  greetingText.textContent = `Привет, ${name}! Рад тебя видеть 👋`;
  overlay.style.display = "flex";
});

function closeModal() {
  overlay.style.display = "none";
}
