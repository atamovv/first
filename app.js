const themeBtn = document.getElementById("themeBtn");
const greetBtn = document.getElementById("greetBtn");
const overlay = document.getElementById("overlay");
const greetingText = document.getElementById("greetingText");

/* --- 1. Проверка системной темы --- */

function applySystemTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

/* --- 2. При загрузке страницы --- */

applySystemTheme();

/* --- 3. Если система меняет тему во время работы --- */

window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", applySystemTheme);

/* --- 4. Ручное переключение --- */

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

/* --- 5. Приветствие --- */

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
