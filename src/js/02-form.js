const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// Sayfa yüklenince localStorage kontrolü
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";
}

// Delegasyon: form üzerinde input olayını dinle
form.addEventListener("input", (event) => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// Submit olayını dinle
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  // Alanların dolu olup olmadığını kontrol et
  if (!email || !message) {
    alert("Lütfen tüm alanları doldurun!");
    return;
  }

  // Konsola nesne yazdır
  console.log({ email, message });

  // Temizleme
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});