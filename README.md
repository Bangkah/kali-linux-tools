# Kali Tools Downloader

Repositori ini berisi script untuk mengunduh berbagai paket/tools Kali Linux secara otomatis dari GitLab.

## Struktur File

- **kalifinder.js**  
  Script Node.js untuk mengambil daftar paket dari GitLab dan menghasilkan perintah `git clone` ke file `data1.sh`.

- **data1.sh**  
  Script Bash berisi perintah `git clone` untuk mengunduh semua repository paket Kali Linux.

- **package_names**  
  Daftar nama paket yang dikelompokkan berdasarkan kategori fungsinya.

## Cara Penggunaan

### 1. Install Dependensi

Pastikan Node.js dan npm sudah terpasang.  
Install dependensi yang diperlukan:

```bash
npm install node-fetch sleep
```

### 2. Generate Script Clone

Jalankan script Node.js untuk mengambil daftar paket dan membuat file `data1.sh`:

```bash
node kalifinder.js
```

### 3. Jalankan Script Bash

Setelah file `data1.sh` dibuat, jalankan untuk mengunduh semua repository:

```bash
bash data1.sh
```

> **Catatan:**  
> Pastikan koneksi internet stabil dan ruang penyimpanan cukup.

### 4. (Opsional) Gunakan Kategori Paket

File `package_names` dapat digunakan untuk memilih atau mengelompokkan paket sesuai kategori.  
Anda bisa membuat script tambahan untuk mengunduh paket berdasarkan kategori tertentu.

## Kontribusi

Silakan pull request atau buka issue jika ada saran atau perbaikan.