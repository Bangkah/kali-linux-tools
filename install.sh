echo "Memastikan dependensi Node.js dan npm..."
if ! command -v node &> /dev/null || ! command -v npm &> /dev/null; then
    echo "Node.js dan npm belum terpasang. Silakan install terlebih dahulu."
    exit 1
fi

echo "Menginstall dependensi npm..."
npm install node-fetch sleep

echo "Menjalankan kalifinder.js untuk generate data1.sh..."
node kalifinder.js

if [ ! -f data1.sh ]; then
    echo "File data1.sh tidak ditemukan. Proses gagal."
    exit 1
fi

echo "Menjalankan data1.sh untuk mengunduh semua repository..."
bash data1.sh

echo "Instalasi selesai."