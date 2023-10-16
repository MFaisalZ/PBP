// Pendapatan harian dari penjualan barang
const pendapatan = 530000; // Ganti dengan jumlah pendapatan yang sesuai

// Inisialisasi variabel uangJasa dan persentaseKomisi
let uangJasa;
let persentaseKomisi;

if (pendapatan <= 200000) {
  uangJasa = 10000;
  persentaseKomisi = 0.1;
} else if (pendapatan <= 500000) {
  uangJasa = 20000;
  persentaseKomisi = 0.15;
} else {
  uangJasa = 30000;
  persentaseKomisi = 0.2;
}

// Menghitung komisi
const komisi = pendapatan * persentaseKomisi;

// Menampilkan hasil
console.log("Pendapatan Harian : Rp. " + pendapatan);
console.log("Uang Jasa : Rp. " + uangJasa);
console.log("Komisi : Rp. " + komisi);

// Total bayaran yang diterima
const totalBayaran = uangJasa + komisi;
console.log("Total Bayaran : Rp. " + totalBayaran);
