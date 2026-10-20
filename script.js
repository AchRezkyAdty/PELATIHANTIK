// 1. Pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton');

// 2. Pastikan tombolnya ada sebelum menjalankan perintah klik (mencegah error)
if (tombolSapa) {
  // 3. Tambahkan 'event listener' untuk aksi 'click'
  tombolSapa.addEventListener('click', function() {
    // Munculkan kotak pesan (alert) saat tombol ditekan
    alert('Halo! Terima kasih sudah berkunjung!');
  });
}
