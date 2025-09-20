function generateQR() {
  const qrText = document.getElementById("qrText").value;
  const qrContainer = document.getElementById("qrcode");
  const qrWrapper = document.getElementById("qrWrapper");
  const generateBtn = document.getElementById("generateBtn");
  const goBackBtn = document.getElementById("goBackBtn");
  qrContainer.innerHTML = ""; // Clear previous QR
  qrContainer.classList.remove("active"); // Remove animation class if present

  // Show the QR wrapper
  qrWrapper.style.display = "inline-block";

  // Hide the generate button
  generateBtn.style.display = "none";

  // Show the Go Back button
  goBackBtn.style.display = "inline-block";

  new QRCode(qrContainer, {
    text: qrText,
    width: 200,
    height: 200,
    colorDark: "#0078D4",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  // Animate in after QR is rendered
  setTimeout(() => {
    qrContainer.classList.add("active");
  }, 50);
}

function goBack() {
  window.location.reload();
}

function downloadQR() {
  const qrCanvas = document.querySelector("#qrcode canvas");
  if (!qrCanvas) {
    alert("Please generate a QR code first.");
    return;
  }

  const link = document.createElement("a");
  link.href = qrCanvas.toDataURL("image/png");
  link.download = "designer-qr-code.png";
  link.click();
}

document.getElementById("qrText").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    generateQR();
  }
});