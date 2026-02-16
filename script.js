// Mobile nav toggle
const toggle = document.querySelector(".nav__toggle");
const menu = document.querySelector("#navMenu");

if (toggle && menu) {
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("isOpen");
    toggle.setAttribute("aria-expanded", String(open));
  });

  // Close after clicking a link (mobile)
  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      menu.classList.remove("isOpen");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
// Text message form instead of email
const form = document.getElementById("leadForm");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value;
    const phone = form.querySelector('[name="phone"]').value;
    const need = form.querySelector('[name="need"]').value;
    const message = form.querySelector('[name="message"]').value;

    const textMessage = `New Request Call Back:
Name: ${name}
Phone: ${phone}
Need: ${need}
Message: ${message}`;

    window.location.href = `sms:+17076713253?body=${encodeURIComponent(textMessage)}`;
  });
}


