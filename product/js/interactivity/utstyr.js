// Script that make text visible when an image is clicked

document.getElementById("fiskestang").addEventListener("click", showInfoFiskestang);

function showInfoFiskestang(id) {
    let info = document.getElementById("fiskestang_info");
    if (info.style.visibility == "visible") {
        info.style.visibility = "hidden";
    }
    else {
        info.style.visibility = "visible";
    }
}

document.getElementById("fiskesluk").addEventListener("click", showInfoFiskesluk);

function showInfoFiskesluk(id) {
    let info = document.getElementById("fiskesluk_info");
    if (info.style.visibility == "visible") {
        info.style.visibility = "hidden";
    }
    else {
        info.style.visibility = "visible";
    }
}

document.getElementById("fiskehov").addEventListener("click", showInfoFiskehov);

function showInfoFiskehov(id) {
    let info = document.getElementById("fiskehov_info");
    if (info.style.visibility == "visible") {
        info.style.visibility = "hidden";
    }
    else {
        info.style.visibility = "visible";
    }
}