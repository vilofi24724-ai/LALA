const startBtn = document.getElementById("startBtn");

const gallerySection =
document.getElementById("gallerySection");

const letterSection =
document.getElementById("letterSection");

const galleryImage =
document.getElementById("galleryImage");

const caption =
document.getElementById("caption");

const typingLetter =
document.getElementById("typingLetter");

const music =
document.getElementById("bgMusic");

const photos = [
"foto1.jpeg",
"foto2.jpeg",
"foto3.jpeg",
"foto4.jpeg",
"foto5.jpeg",
"foto6.jpeg",
"foto7.jpeg",
"foto8.jpeg",
"foto9.jpeg",
"foto10.jpeg",
"foto11.jpeg",
"foto12.jpeg",
"foto13.jpeg",
"foto14.jpeg",
"foto15.jpeg",
"foto16.jpeg",
"foto17.jpeg",
"foto18.jpeg",
"foto19.jpeg",
"foto20.jpeg",
"foto21.jpeg",
"foto22.jpeg",
"foto23.jpeg",
"foto24.jpeg",
"foto25.jpeg",
"foto26.jpeg",
"foto27.jpeg",
"foto28.jpeg",
"foto29.jpeg",
"foto30.jpeg"
];

const captions = [

"Awal mula duo 😭",

"Foto pas muda yeu",

"dulu rasanya keren nih 😂",

"ternyata kau partner nonton bioskop aku ya",

"masih missqueen",

"uang merubah segalanya wkwk",

"dah cantek kite",

"🥹",

"parah keren sih kite sekarang",

"Persahabatan level premium",

"abis gereja",

"abis xmas dinner",

"Terima kasih sudah selalu ada",

"liburan berdua pertama kali",

"umur 29 nih",

"bertiga",

"cantek aku ehhhh",

"singkawang",

"toilet diantara",

"lg hobi ke tokam",

"kokotuku nunggu agata datang",

"nikahan dewi",

"sok cantekkk wkwkwk",

"Terima kasih untuk semua tawa",

"Terima kasih untuk semua dukungan",

"Terima kasih udah denger cerita aku",

"Terima kasih selalu percaya sm aku",

"Semoga kita terus berteman",

"kalaupun berantem, semoga kita ttp selalu rendah hati buat memaafkan 💕",

"Lala, kau berharga sekali buat aku ❤️"
];

let current = 0;

startBtn.addEventListener("click", () => {

music.play();

gallerySection.classList.remove("hidden");

gallerySection.scrollIntoView({
behavior:"smooth"
});

launchConfetti();

showPhotos();

});

function showPhotos(){

galleryImage.src = photos[current];

caption.innerText = captions[current];

galleryImage.style.animation = "none";

setTimeout(()=>{
galleryImage.style.animation="pop .8s";
},50);

current++;

if(current < photos.length){

setTimeout(showPhotos,3000);

}else{

setTimeout(()=>{
showLetter();
},4000);

}

}

function showLetter(){

letterSection.classList.remove("hidden");

letterSection.scrollIntoView({
behavior:"smooth"
});

const text = `

Welcome 30 club Lala 💖

Aku sebenarnya bingung harus mulai dari mana.

Karena kalau disuruh menghitung berapa banyak hal yang harus aku syukuri karena ada kau dalam hidup aku, mungkin aku bakal butuh waktu yang lama.

Terima kasih ya Lala...

Terima kasih karena sudah mau berteman dengan aku dari dulu sampai sekarang.

Terima kasih karena sudah hadir di banyak cerita dalam hidup aku.

Terima kasih karena sudah menjadi salah satu orang yang membuat hari-hariku terasa lebih ringan.

Kadang mungkin kau merasa apa yang kau lakukan itu biasa saja.

Tapi buat aku tidak.

Kebaikan kau mungkin terlihat sederhana buat u, tapi buat aku itu adalah sesuatu yang sangat berharga dan tidak mudah dilupakan.

Terima kasih karena tetap menjadi dirimu sendiri.

Terima kasih karena pernah mendengarkan cerita aku.

Terima kasih karena pernah membuat aku tertawa di saat aku sedang tidak baik-baik saja.

Aku bersyukur sekali dipertemukan dengan sahabat kayak kau.

Semoga semua hal baik selalu datang dalam hidup kau ya.

Semoga setiap hari selalu dipenuhi kebahagiaan.

Semoga mimpi-mimpi satu per satu terwujud.

Dan semoga kalau suatu hari nanti kita sama-sama sibuk dengan kehidupan masing-masing (alias menikah wkwkwk), kita tetap bisa mengenang semua cerita lucu yang pernah kita buat bersama.

Terima kasih untuk semuanya.

💖 w love fika 💖
`;

typeWriter(text);

launchConfetti();

}

function typeWriter(text){

let i = 0;

function typing(){

if(i < text.length){

typingLetter.innerHTML += text.charAt(i);

i++;

setTimeout(typing,40);

}

}

typing();

}

function launchConfetti(){

confetti({
particleCount:200,
spread:180,
origin:{y:0.6}
});

}

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML =
["💖","🌸","⭐","🧸","🎀"][Math.floor(Math.random()*5)];

heart.style.left =
Math.random()*100+"vw";

heart.style.fontSize =
Math.random()*20+20+"px";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},8000);

}

setInterval(createHeart,500);