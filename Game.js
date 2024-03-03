let rastgele= Math.ceil(Math.random()*20)
console.log(rastgele);

let mesaj = document.querySelector(".msg") //! Burada mesaj değişkenine atamamın sebebi değişikli yapacağım için msg classında ondan değişkene atadık
let skor = 10; //? kullanıcıya 10 hak verdik

// ilk başta html'den almıştım ancak sonra local storage'ye kaydettiğim için get item ile local'den çekip again yaptığımda top skor yani kaçıncı hakta bildiğin kısmı kayıtlı olacak
 //? skoru index.html'den çekebilirdik ancak çok kullanacağımız için bu daha tercih edilen bir yöntem

 //! local storage da top-score adıyla bir değişken varsa onu getir yoksa 0 olsun
 let enYuksekSkor = localStorage.getItem("top-score") ||0;
 //!-- browser'da Dom'da top score değerini local storageden okuyarak güncelle,özellikle 2.ve 3.oyuncular için gerekli
 document.querySelector(".top-score").textContent=enYuksekSkor



// Check butonunu dinlemeye alacağız click yapıldığında yapılcak işlemi dinliyor

//!Addeventlistener'da ihtiyacımız olan şey input'a girilen değer
document.querySelector(".check").addEventListener("click", () => {
    const tahmin = document.querySelector(".guess").value;
    document.querySelector(".guess").value = "";
    const tahminSayı = parseInt(tahmin);

    if (!tahmin) {
        mesaj.textContent = "Lütfen Bir Sayı Giriniz";
    } else if (tahminSayı === rastgele) {
        mesaj.textContent = "Tebrikler Bildiniz...👏";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").textContent = rastgele;
        document.querySelector(".check").disabled = true;

        if (skor > enYuksekSkor) {
            localStorage.setItem("top-score", skor);
            enYuksekSkor = skor;
            document.querySelector(".top-score").textContent = skor;
        }
    } else if (tahminSayı < 1 || tahminSayı > 20 || isNaN(tahminSayı)) {
        mesaj.textContent = "Geçersiz sayı girdiniz (1 - 20 arasında bir sayı giriniz)";
    } else {
        if (skor > 1) {
            skor--;
            document.querySelector(".score").textContent = skor;
            tahmin < rastgele
            ? mesaj.textContent = "Arttır"
            : mesaj.textContent = "Azalt";
        } else {
            mesaj.textContent = "Oyunu Kaybettiniz";
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }
});



// Again butonuna basınca ayarlar başlangıç değerine dönsün.Arka plan #2d3436 olsun

//! .addEventListener("click") ile de yapabiliriz

document.querySelector(".again").onclick=()=>{
    document.querySelector("body").style.backgroundColor="#2d3436"
    rastgele= Math.ceil(Math.random()*20)
    skor = 10;
    document.querySelector(".score").textContent = skor
    document.querySelector(".check").disabled=false
    document.querySelector(".number").textContent="?"
    document.querySelector(".guess").value = ""
    mesaj.textContent ="Oyun yeni oyuncu için başlıyor..."

}


//? ENTER TUŞU ÇALIŞSIN
// Klavyeden enter tuşuna basıldığında tetikle
document.addEventListener("keydown",(e)=>{


console.log(e);

if(e.key === "Enter"){
    document.querySelector(".check").click()
}


})


 

// İlk örnekte e isimli bir parametre kullanılmamış, sadece olay dinleyicisinin işlevsel kısmı verilmiştir. İkinci örnekte ise, keydown olayının detaylarını içeren event objesine erişmek için e isimli bir parametre kullanılmıştır. Bu şekilde, bu iki olay dinleyicisi de farklı bir isimlendirme tercihi kullanmaktadır.

// localStorage.setItem("selman",38)
// localStorage.removeItem("selman")
// localStorage.clear()

//! Geçersiz sayı girdiniz 1 ile 20 arasında bir sayı giriniz.

// document.querySelector(".check").addEventListener("click", ()=>{
//    tahmin = document.querySelector(".guess").value 
   
//    const tahminSayı = parseInt(tahmin)

//    if (tahminSayı>=1&&tahminSayı<=20&&!isNan(tahminSayı)) {
//     // Doğru sayı girilmişse oyunu devam ettir
//    } else {
//     mesaj.textContent = "Geçersiz sayı girdiniz(1 - 20 arasında bir sayı giriniz"
//      skor ++
    
//     document.querySelector(".guess").value = ""
//    }
// } )