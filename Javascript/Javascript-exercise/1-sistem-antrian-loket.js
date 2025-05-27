// =======================
// USE CASE: SISTEM ANTRIAN LOKET
// =======================

/*
Deskripsi:
Sebuah loket melayani maksimal 10 orang. 
Setiap kali nomor antrian diproses, sistem mencetak status.
Jika nomor antrian kelipatan 4, akan ditampilkan juga info bahwa petugas sedang istirahat sebentar.

Struktur yang digunakan:
- while loop → untuk memproses antrian satu per satu
- if condition → untuk menambahkan pesan istirahat pada antrian tertentu
*/

let queue = 1;

while (queue <= 10) {
  if (queue % 4 === 0) {
    console.log(
      `Antrian No. ${queue} sedang diproses. Harap sabar, petugas sedang istirahat sebentar`
    );
  } else {
    console.log(`Antrian No. ${queue} sedang diproses`);
  }
  queue++;
}
