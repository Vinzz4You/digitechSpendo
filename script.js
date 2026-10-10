document.addEventListener('DOMContentLoaded', () => {

    // 1. Toggle Menu Navbar Mobile
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Feature: Ganti Tema (Cyber Dark / Cyber Light)
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;

    // Cek tema tersimpan dari sesi sebelumnya
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateIcon(savedTheme === 'theme-light');
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isLight = body.classList.contains('theme-light');
            
            if (isLight) {
                body.classList.remove('theme-light');
                body.classList.add('theme-dark');
                localStorage.setItem('theme', 'theme-dark');
                updateIcon(false);
            } else {
                body.classList.remove('theme-dark');
                body.classList.add('theme-light');
                localStorage.setItem('theme', 'theme-light');
                updateIcon(true);
            }
        });
    }

    function updateIcon(isLight) {
        if (themeIcon) {
            if (isLight) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
        }
    }

    // 3. Direct Form Pendaftaran ke WhatsApp
    const joinForm = document.getElementById('joinForm');

    if (joinForm) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const nama = document.getElementById('nama').value;
            const kelas = document.getElementById('kelas').value;
            const whatsapp = document.getElementById('whatsapp').value;

            const nomorWA = "6285731045476";
            const pesan = `Halo kak! Saya ingin bergabung dengan ekstrakurikuler *Digitech Funclub*.\n\nBerikut data diri saya:\n- *Nama:* ${nama}\n- *Kelas:* ${kelas}\n- *No. WA:* ${whatsapp}\n\nMohon info selanjutnya ya, terima kasih!`;

            const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
            window.open(urlWA, '_blank');
            joinForm.reset();
        });
    }

});
