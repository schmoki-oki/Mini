const qrButton = document.getElementById("qrButton");
const linkInput = document.getElementById("linkInput");
const qrCodeContainer = document.getElementById("qrCode");

qrButton.addEventListener("click", function () {

    const link = linkInput.value.trim();

    if (link === "") {
        alert("Bitte einen Link eingeben.");
        return;
    }

    qrCodeContainer.innerHTML = "";

    const qrImage = document.createElement("img");

    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" +
        encodeURIComponent(link);

    qrImage.alt = "QR-Code";

    qrCodeContainer.appendChild(qrImage);
tadaText.classList.remove("show");

setTimeout(function () {
    tadaText.classList.add("show");
}, 300);
});