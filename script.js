// ===============================
// Secret Passcode
// ===============================

const unlockBtn = document.getElementById("unlockBtn");
const passcode = document.getElementById("passcode");
const lockScreen = document.getElementById("lockScreen");
const loading = document.getElementById("loading");
const app = document.getElementById("app");
const wrong = document.getElementById("wrong");

unlockBtn.onclick = function(){

    if(passcode.value === "220806"){

        lockScreen.style.display="none";
        loading.style.display="flex";

        setTimeout(()=>{

            loading.style.display="none";
            app.style.display="flex";

            startHearts();
            startRoses();
            startSlideshow();
            playMusic();

        },3000);

    }

    else{

        wrong.style.display="block";

        setTimeout(()=>{
            wrong.style.display="none";
        },2000);

    }

};


// ===============================
// Floating Hearts
// ===============================

function starthearts(){

setInterval(()=>{

let heart=document.createElement("div");

heart.className="heart";
heart.innerHTML="💜";

heart.style.left=Math.random()*100+"%";
heart.style.fontSize=(20+Math.random()*30)+"px";
heart.style.animationDuration=(4+Math.random()*5)+"s";

document.getElementById("hearts").appendChild(heart);


setTimeout(()=>{
heart.remove();
},9000);


},500);

}



// ===============================
// Falling Kiss Petals
// ===============================

function startKisses(){

setInterval(()=>{

let kiss=document.createElement("div");

kiss.className="kiss";
kiss.innerHTML="💋";

kiss.style.left=Math.random()*100+"%";
kiss.style.fontSize=(20+Math.random()*25)+"px";
kiss.style.animationDuration=(5+Math.random()*5)+"s";

document.getElementById("kisses").appendChild(kiss);


setTimeout(()=>{
kiss.remove();
},10000);


},800);

}



// ===============================
// Auto Photo Slideshow
// ===============================

let photos=[
"1.jpg",
"2.jpg",
"3.jpg"
];

let photoIndex=0;

function startSlideshow(){

let image=document.getElementById("photo");

setInterval(()=>{

photoIndex++;

if(photoIndex>=photos.length){
photoIndex=0;
}

image.style.opacity=0;


setTimeout(()=>{

image.src=photos[photoIndex];
image.style.opacity=1;

},500);


},3000);

}



// ===============================
// Surprise Button
// ===============================

const surpriseBtn=document.getElementById("surpriseBtn");

const loveMessage=document.getElementById("loveMessage");
const countdown=document.getElementById("countdown");
const proposal=document.getElementById("proposal");


let letter=`

Happy Birthday, Fabiha! ❤️

Happy Birthday to the most beautiful and amazing girl in my life.

Thank you for being my peace, my favorite person, and the absolute best part of my days. Just having you near makes everything better, and I am so incredibly lucky to love you.

I hope your day is as bright and wonderful as your smile. I’m always here for you, cheering you on and holding your hand through it all.

Have a beautiful day, my love.
Always yours,
Jibon

`;


surpriseBtn.onclick=function(){

loveMessage.style.display="block";
countdown.style.display="block";
proposal.style.display="block";

typeWriter();

startCountdown();

};



// ===============================
// Typewriter Effect
// ===============================

let i=0;

function typeWriter(){

let typing=document.getElementById("typing");

typing.innerHTML="";

i=0;


function write(){

if(i<letter.length){

typing.innerHTML+=letter.charAt(i);

i++;

setTimeout(write,50);

}

}

write();

}



// ===============================
// Background Music
// ===============================

function playMusic(){

let music=document.getElementById("music");

music.volume=0.5;

music.play().catch(()=>{

console.log("Music waiting");

});

}



// ===============================
// Countdown
// ===============================

function startCountdown(){

let target=new Date("2026-08-22 00:00:00").getTime();

setInterval(()=>{

let now=new Date().getTime();

let distance=target-now;


let days=Math.floor(distance/(1000*60*60*24));

let hours=Math.floor(
(distance%(1000*60*60*24))/(1000*60*60)
);

let minutes=Math.floor(
(distance%(1000*60*60))/(1000*60)
);

let seconds=Math.floor(
(distance%(1000*60))/1000
);



document.getElementById("timer").innerHTML=

days+" Days ❤️ "+
hours+" Hours ❤️ "+
minutes+" Minutes ❤️ "+
seconds+" Seconds";


},1000);

}



// ===============================
// Proposal YES Button
// ===============================

const yesBtn=document.getElementById("yesBtn");


yesBtn.onclick=function(){

fireworks();

let love=document.createElement("div");

love.innerHTML="Ummahhhhhhh 💋💜";

love.style.position="fixed";
love.style.left="50%";
love.style.top="50%";
love.style.transform="translate(-50%,-50%)";
love.style.fontSize="35px";
love.style.fontWeight="700";
love.style.color="white";
love.style.textAlign="center";
love.style.zIndex="9999";
love.style.textShadow="0 0 20px #ff2d75";

document.body.appendChild(love);


love.animate(
[
{
transform:"translate(-50%,-50%) scale(0.5)",
opacity:0
},
{
transform:"translate(-50%,-50%) scale(1.2)",
opacity:1
},
{
transform:"translate(-50%,-150%) scale(1)",
opacity:0
}
],
{
duration:3000,
easing:"ease-out"
}
);


setTimeout(()=>{

love.remove();

},3000);


};



// ===============================
// Fireworks Animation
// ===============================

function fireworks(){


for(let i=0;i<80;i++){


let fire=document.createElement("div");

fire.innerHTML="✨";

fire.style.position="fixed";
fire.style.left="50%";
fire.style.top="50%";

fire.style.fontSize=
(20+Math.random()*30)+"px";


let x=(Math.random()-0.5)*600;
let y=(Math.random()-0.5)*600;


fire.animate([

{
transform:"translate(0,0)",
opacity:1
},

{
transform:`translate(${x}px,${y}px)`,
opacity:0
}

],
{
duration:1500
});


document.body.appendChild(fire);


setTimeout(()=>{

fire.remove();

},1500);


}


}