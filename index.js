Soal Pertama 
{
    var kataPertama = "saya";
    var kataKedua = "senang";
    var kataKetiga = "belajar";
    var kataKeempat = "javascript";
    console.log(kataPertama + " " + kataKedua+ " " + kataKetiga+ " " + kataKeempat.toUpperCase())
}


Soal Kedua 

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";
console.log(Number(kataPertama)+Number(kataKedua)+Number(kataKetiga)+Number(kataKeempat));


soal Ketiga 
{
var kalimat = 'wah javascript itu keren sekali'; 
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15,18); 
var kataKeempat = kalimat.substring(19,24);  
var kataKelima = kalimat.substring(25,31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

}



soal keempat
 
{
var nilai = 90;
if(nilai>=80) console.log('A');
else if(nilai>=70 && nilai<80) console.log('B');
else if(nilai>=60 && nilai<70) console.log('C');
else if(nilai>=50 && nilai<60) console.log('D');
else console.log('E');
}


soal Kelima

{
var tanggal = 30;
var bulan = 6;
var tahun = 1990;

switch(bulan){
    case 1: {console.log(tanggal + ' ' + 'Januari' + ' ' + tahun); break;}
    case 2: {console.log(tanggal + ' ' + 'Februari' + ' ' + tahun); break;}
    case 3: {console.log(tanggal + ' ' + 'Maret' + ' ' + tahun); break;}
    case 4: {console.log(tanggal + ' ' + 'April' + ' ' + tahun); break;}
    case 5: {console.log(tanggal + ' ' + 'Mei' + ' ' + tahun); break;}
    case 6: {console.log(tanggal + ' ' + 'Juni' + ' ' + tahun); break;}
    case 7: {console.log(tanggal + ' ' + 'Juli' + ' ' + tahun); break;}
    case 8: {console.log(tanggal + ' ' + 'Agustus' + ' ' + tahun); break;}
    case 9: {console.log(tanggal + ' ' + 'September' + ' ' + tahun); break;}
    case 10: {console.log(tanggal + ' ' + 'Oktober' + ' ' + tahun); break;}
    case 11: {console.log(tanggal + ' ' + 'November' + ' ' + tahun); break;}
    case 12: {console.log(tanggal + ' ' + 'Desember' + ' ' + tahun); break;}
    default: {console.log('Bulan tidak terdefinisi'); break;}
    console.log(tanggal + " " + bulan + " " + tahun);
}
 