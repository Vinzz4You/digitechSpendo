document.addEventListener('DOMContentLoaded', () => {

    // 1. Toggle Menu Navbar Mobile
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Menutup menu mobile ketika link diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 2. Direct Form Pendaftaran ke WhatsApp
    const joinForm = document.getElementById('joinForm');

    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Ambil data dari input form
        const nama = document.getElementById('nama').value;
        const kelas = document.getElementById('kelas').value;
        const whatsapp = document.getElementById('whatsapp').value;

        // Nomor WhatsApp tujuan (Format internasional tanpa tanda + atau 0 di depan)
        const nomorWA = "6285731045476";

        // Format pesan otomatis
        const pesan = `Halo kak! Saya ingin bergabung dengan ekstrakurikuler *Digitech Funclub*.\n\nBerikut data diri saya:\n- *Nama:* ${nama}\n- *Kelas:* ${kelas}\n- *No. WA:* ${whatsapp}\n\nMohon info selanjutnya ya, terima kasih!`;

        // Encode pesan agar aman untuk URL WhatsApp
        const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;

        // Buka link WhatsApp di tab baru
        window.open(urlWA, '_blank');

        // Reset form setelah terkirim
        joinForm.reset();
    });

});