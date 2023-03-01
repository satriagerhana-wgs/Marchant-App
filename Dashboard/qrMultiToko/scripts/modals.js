let modal = document.getElementById("myModal");
let btnTambahToko = document.getElementById("btnTambahToko");
let span = document.getElementsByClassName("close")[0];

// Simpan
let myModalBerhasil = document.getElementById("myModalBerhasil");
let btnSimpan = document.getElementById("btnSimpan");
let btnConfrmOkSimpan = document.getElementById("btnConfrmOkSimpan");

// Hapus
let btnHapus = document.getElementById("btnHapus");
let ModalHapus = document.getElementById("ModalHapus");

let btnHapusConfrim = document.getElementById("btnHapusConfrim");
let btnHapusBatal = document.getElementById("btnHapusBatal");
let btnHapusOK = document.getElementById("btnHapusOK");
let ModalHapusConfirm = document.getElementById("ModalHapusConfirm");


let btnTambahDetail = document.getElementById("btnTambahDetail");
let btnTambahEdit = document.getElementById("btnTambahEdit");

// Start Download
// let btnDownload = document.getElementById("btnDownload");
// let ModalDownload = document.getElementById("ModalDownload");
// let btnDownloadOK = document.getElementById("btnDownloadOK");






btnTambahToko.onclick = function() {
  modal.style.display = "block";
}

btnTambahDetail.onclick = function() {
  modal.style.display = "block";
}

btnTambahEdit.onclick = function() {
  modal.style.display = "block";
}

// Start Download
// btnDownload.onclick = function() {
//   ModalDownload.style.display = "block";
// }

// btnDownloadOK.onclick = function() {
//   ModalDownload.style.display = "none";
// }
// End Download

// Start Simpan
btnSimpan.onclick = function() {
  myModalBerhasil.style.display = "block";
  modal.style.display = "none";
}

btnConfrmOkSimpan.onclick = function() {
  myModalBerhasil.style.display = "none";
}
// End Simpan

// Start Hapus
btnHapus.onclick = function() {
  ModalHapus.style.display = "block";
}

btnHapusBatal.onclick = function() {
  ModalHapus.style.display = "none";
}

btnHapusConfrim.onclick = function() {
  ModalHapusConfirm.style.display = "block";
  ModalHapus.style.display = "none";
}

btnHapusOK.onclick = function() {
  ModalHapusConfirm.style.display = "none";
}
// End Hapus


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
