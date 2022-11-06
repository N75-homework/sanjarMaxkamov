var xato = 'Noto`g`ri ma`lumot kiritdingiz';
var bad = 'Tanlagan OTMga o`qishga tavsiya etilmadiz';
var kontrakt = 'Tanlangan OTMga kontrakt asosisda o`qishga tavsiya etildingiz';
var grant = 'Siz tanlangan OTMga grant asosida o`qishga tavsiya etildingiz!';
var name = prompt('Ismingizni kiriting?');
var OTM = prompt ('Quyidagi OTMlardan birini tanlang: 1.TDIU, 2.TDMI, 3.MU');
var bal = prompt('To`plangan balni kiriting:');

// TDIU
if (OTM == 1){
    if (bal < 120){
        alert(bad);
    }
    else if (bal <= 149){
        alert(kontrakt);
    }
    else if (bal >= 150){
        alert(grant);
    }
    else {
        alert (xato);
    }
}
// TDMI
else if (OTM == 2){
    if (bal < 120){
        alert(bad);
    }
    else if (bal <= 159){
        alert(kontrakt);
    }
    else if (bal >= 160){
        alert(grant);
    }
    else {
        alert (xato);
    }
}
// MU
else if (OTM == 3){
    if (bal < 168){
        alert(bad);
    }
    else if (bal <= 179){
        alert(kontrakt);
    }
    else if(bal >= 180){
        alert(grant);
    }
    else {
        alert (xato);
    }
}
else {
    alert (xato);
}