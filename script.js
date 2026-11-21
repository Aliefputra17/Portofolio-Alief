
// Portfolio Alief JavaScript

// Menampilkan pesan di console
console.log("Portfolio Alief berhasil dijalankan!");

// Mengatur tahun secara otomatis
const footer = document.querySelector("footer");

if (footer) {
    const copyright = footer.querySelector("p");

    if (copyright) {
        copyright.textContent =
            `© ${new Date().getFullYear()} Muhammad Alief Putra Sopian.`;
    }
}

// Efek klik pada menu navigasi
const navigationLinks = document.querySelectorAll(".navbar a");

navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Menu dibuka: " + link.textContent);
    });
});
