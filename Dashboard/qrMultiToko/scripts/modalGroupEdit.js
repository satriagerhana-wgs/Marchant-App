let modal = document.getElementById("myModal");
let btnTambahToko = document.getElementById("btnTambahToko");
let span = document.getElementsByClassName("close")[0];

// Simpan
let myModalBerhasil = document.getElementById("myModalBerhasil");
let btnSimpan = document.getElementById("btnSimpan");
let btnConfrmOkSimpan = document.getElementById("btnConfrmOkSimpan");


// edit
let ModalEdit = document.getElementById("ModalEdit");
let btnEdit = document.getElementById("btnEdit");
let btnSimpanEdit = document.getElementById("btnSimpanEdit");
let closeEdit = document.getElementsByClassName("closeEdit")[0];

// Detail
let btnDetail = document.getElementById("btnDetail");



btnTambahToko.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

// Start Simpan
btnSimpan.onclick = function() {
    myModalBerhasil.style.display = "block";
    modal.style.display = "none";
  }
  
btnConfrmOkSimpan.onclick = function() {
    myModalBerhasil.style.display = "none";
}
// End Simpan


// Start Edit
btnEdit.onclick = function() {
    ModalEdit.style.display = "block";
}

btnSimpanEdit.onclick = function() {
    myModalBerhasil.style.display = "block";
    ModalEdit.style.display = "none";
}

closeEdit.onclick = function() {
    ModalEdit.style.display = "none";
}
// End Edit

// Start Detail
btnDetail.onclick = function() {
    ModalEdit.style.display = "block";
}

btnSimpanEdit.onclick = function() {
    myModalBerhasil.style.display = "block";
    ModalEdit.style.display = "none";
}
