document.getElementById('transaksiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Ambil nilai dari input
    const namaMobil = document.getElementById('namaMobil').value;
    const jumlahHari = document.getElementById('jumlahHari').value;
    const kategori = document.getElementById('kategori').value;

    // Validasi input
    if (namaMobil === '' || jumlahHari === '' || kategori === '') {
        alert('Semua field harus diisi!');
        return;
    }

    // Tambahkan data ke tabel
    const tableBody = document.querySelector('#daftarTransaksi tbody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${namaMobil}</td>
        <td>${jumlahHari}</td>
        <td>${kategori}</td>
    `;
    tableBody.appendChild(newRow);

    // Reset form
    document.getElementById('transaksiForm').reset();
});