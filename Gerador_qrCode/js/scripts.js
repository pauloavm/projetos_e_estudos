const constainer = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// eventos

function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value;

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

  qrCodeImg.addEventListener("load", () => {
    constainer.classList.add("active");
    qrCodeBtn.innerText = "Código criado!";
  });
}
qrCodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter");
  generateQrCode();
});

// limpar input
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value) {
    constainer.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
    // qrCodeImg.src = "";
  }
});
