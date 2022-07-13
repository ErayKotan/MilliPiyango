var newlistbox1 = Number(document.getElementById("listbox1").value);
var newlistbox2 = Number(document.getElementById("listbox2").value);
var newlistbox3 = Number(document.getElementById("listbox3").value);
var newlistbox4 = Number(document.getElementById("listbox4").value);
var newlistbox5 = Number(document.getElementById("listbox5").value);
var newlistbox6 = Number(document.getElementById("listbox6").value);
var newlistbox7 = Number(document.getElementById("listbox7").value);

function getSelectedValue() {
    newlistbox1;  
}
function getSelectedValue2() {
    newlistbox2;
}
function getSelectedValue3() {
    newlistbox3; 
}
function getSelectedValue4() {
    newlistbox4; 
}
function getSelectedValue5() {
    newlistbox5; 
}
function getSelectedValue6() {
    newlistbox6; 
}
function getSelectedValue7() {
    newlistbox7; 
}

getSelectedValue();
getSelectedValue2();
getSelectedValue3();
getSelectedValue4();
getSelectedValue5();
getSelectedValue6();
getSelectedValue7();

var btncekilis=document.getElementById("cekilissifirla");
btncekilis.onclick=function(){
    $("#sayi1").text("");
    $("#sayi2").text("");
    $("#sayi3").text("");
    $("#sayi4").text("");
    $("#sayi5").text("");
    $("#sayi6").text("");
    $("#sayi7").text("");  

    alert("Lütfen Tekrardan Çekiliş Yapınız.");
}
var uret1;
var uret2;
var uret3;
var uret4;
var uret5;
var uret6;
var uret7;


var a,b,c,d,e,f,g;
var toplam = 0;

var btncekilis=document.getElementById("cekilis");
btncekilis.onclick=function(){

        uret1 = Math.floor(Math.random() * 10);
        uret2 = Math.floor(Math.random() * 10);
        uret3 = Math.floor(Math.random() * 10);
        uret4 = Math.floor(Math.random() * 10);
        uret5 = Math.floor(Math.random() * 10);
        uret6 = Math.floor(Math.random() * 10);
        uret7 = Math.floor(Math.random() * 10);
        
         $("#sayi1").text(uret1);
         $("#sayi2").text(uret2);
         $("#sayi3").text(uret3);
         $("#sayi4").text(uret4);
         $("#sayi5").text(uret5);
         $("#sayi6").text(uret6);
         $("#sayi7").text(uret7);

        if(newlistbox1 == uret1) {
            a = 1;
            console.log(a);
        }
        else {a = 0;}
        if(newlistbox2 == uret2) {
            b = 1;
            console.log(b)
        }
        else {b = 0;}
        if(newlistbox3 == uret3) {
            c = 1;
            console.log(c)
        }
        else {c = 0;}
        if(newlistbox4 == uret4) {
            d = 1;
            console.log(d)
        }
        else {d = 0;}
        if(newlistbox5 == uret5) {
            e = 1;
            console.log(e)
        }
        else {e = 0;}
        if(newlistbox6 == uret6) {
            f = 1;
            console.log(f)
        }
        else {f = 0;}
        if(newlistbox7 == uret7) {
            g = 1;
            console.log(g)
        }
        else {g = 0;}
        
        toplam = a+b+c+d+e+f+g;
        console.log(toplam);
	}
var btncekilisgoster=document.getElementById("cekilisgoster");
btncekilisgoster.onclick=function(){   
    
        if (toplam == 0) {
        alert("Biletinizde eşleşme olmamıştır.");
        }
        else {
        alert("Biletinizde toplam " + toplam + " adet eşleşme olmuştur.");
        }           
	}
   
  
       






