const nama = "Vincent valentino";
let umur = 18;

let biodata = document.getElementById("Biodata");
console.log(biodata);

function diriSaya() {
    let generasi;
    if (umur > 0 && umur < 8) {
        generasi = "balita";
    }
    else if (umur > 7 && umur < 15) {
        generasi = "anak-anak";
    }
    else if (umur > 14 && umur < 19) {
        generasi = "remaja";
    }
    else if (umur > 18 && umur < 51) {
        generasi = "dewasa";
    }
    else {
        generasi = "lansia";
    }
    return biodata.innerHTML = generasi;
}

console.log(nama);
diriSaya();
console.log(umur);





