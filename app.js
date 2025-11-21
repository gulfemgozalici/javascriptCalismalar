const buton = document.getElementById("karsilastir");
let sonuc = null;

buton.addEventListener("click", ()=>{
    let yas = Number(document.getElementById("yas").value);

    if(yas >= 18){
        sonuc = "Reşit";
    }
    else{
        sonuc = "Reşit değil.";
    }

    document.getElementById("karsilastirma").innerText = sonuc;
});
