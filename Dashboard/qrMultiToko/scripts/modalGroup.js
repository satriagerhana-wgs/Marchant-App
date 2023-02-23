// redirect
function settingQr() {
    window.location.href = '../qrMultiToko/settingQr.html';
}

function detailGroup() {
    window.location.href = '../qrMultiToko/groupDetail.html';
}

function editGroup() {
    window.location.href = '../qrMultiToko/groupEdit.html';
}

function tambahGroup() {
    window.location.href = '../qrMultiToko/groupEdit.html';
}



// Start Download
let btnDownload = document.getElementById("btnDownload");
let ModalDownload = document.getElementById("ModalDownload");
let btnDownloadOK = document.getElementById("btnDownloadOK");

// Hapus
let btnHapus = document.getElementById("btnHapus");
let ModalHapus = document.getElementById("ModalHapus");

let btnHapusConfrim = document.getElementById("btnHapusConfrim");
let btnHapusBatal = document.getElementById("btnHapusBatal");
let btnHapusOK = document.getElementById("btnHapusOK");
let ModalHapusConfirm = document.getElementById("ModalHapusConfirm");


// Start Download
btnDownload.onclick = function() {
    ModalDownload.style.display = "block";
}

btnDownloadOK.onclick = function() {
    ModalDownload.style.display = "none";
}


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
  