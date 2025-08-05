# Kali Tools Downloader

Kali Tools Downloader adalah repositori yang berisi script otomatis untuk mengunduh berbagai paket/tools Kali Linux langsung dari GitLab. Dengan script ini, Anda dapat menghemat waktu dan tenaga dalam proses instalasi banyak tools sekaligus, baik untuk keperluan pentesting, forensik, maupun administrasi jaringan.

## Fitur Utama

- Mengambil daftar paket Kali Linux dari GitLab secara otomatis.
- Mengelompokkan paket berdasarkan kategori fungsinya.
- Menghasilkan script Bash untuk mengunduh semua repository sekaligus.
- Instalasi mudah hanya dengan satu perintah.

## Cara Instalasi

1. **Clone repositori ini**
   ```bash
   git clone https://github.com/Bangkah/kali-linux-tools.git
   cd kali-linux-tools
   ```

2. **Jalankan script instalasi**
   ```bash
   chmod +x install.sh
   ./install.sh
   ```

   Script akan:
   - Memastikan Node.js dan npm sudah terpasang.
   - Menginstall dependensi yang diperlukan.
   - Mengambil daftar paket dari GitLab dan membuat file `data1.sh`.
   - Menjalankan `data1.sh` untuk mengunduh semua repository paket Kali Linux.

> **Catatan:**  
> Pastikan koneksi internet stabil dan ruang penyimpanan cukup sebelum menjalankan script.

## Kontribusi

Silakan pull request atau buka issue jika ada saran, perbaikan, atau ingin menambah kategori/tools