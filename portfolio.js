let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex+1]


Array.from(currentWord.children).forEach((letter,i)=>{
    setTimeout(()=>{
        letter.className="letter out";
    },i * 80)
});

nextWord.style.opacity="1";
Array.from(nextWord.children).forEach((letter,i)=>{
    letter.className="letter behind";
    setTimeout(()=>{
        letter.className="letter in";
    },340+1*80);
})
currentWordIndex = currentWord === maxWordIndex ? 0 : currentWordIndex+1 
};

changeText();
setInterval(changeText,3000);



// const circles = document.querySelectorAll('.circle');
// circles.forEach(elem=>{
//     var dots = elem.getAttribute("data-dots");
//     var marked = elem.getAttribute("data-percent");
//     var percent = Math.floor(dots*marked/100);
//     var points="";
//     var rotate = 360 / dots;

//     for(let i = 0 ; i < dots ; i++){
//         points+=`<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`
//     }
//     elem.innerHTML = points;

//     const pointsMarked = elem.querySelectorAll('.points');
//     for(let i = 0 ; i < percent ; i++){
//         pointsMarked[i].classList.add('marked')
//     }
// })


// var mixer = mixitup('.portfolio-gallery');

// let menuli = document.querySelectorAll('header ul li a');
// let section = document.querySelectorAll('section');

// function activeMenu(){
//     let len = section.length;
//     while(--len && window.scrollY +97 < section[len].offsetTop){}
//     menuli.forEach(sec=> sec.classList.remove("active"));
//     menuli[len].classList.add("active")  
// }

// activeMenu();
// window.addEventListener("scroll",activeMenu);



const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
});


let menuIcon =  document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menuIcon.onclick = () =>{
    menuIcon.classList.toggle("bx-x")
    navList.classList.toggle("open")
}

window.onscroll = () =>{
    menuIcon.classList.remove("bx-x")
    navList.classList.remove("open")
}


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items")
        }
    });
})


const scroleScale = document.querySelectorAll(".scroll-scale");
scroleScale.forEach((el)=>observer.observe(el));

const scroleBottom = document.querySelectorAll(".scroll-bottom");
scroleBottom.forEach((el)=>observer.observe(el));

const scroleTop = document.querySelectorAll(".scroll-top");
scroleTop.forEach((el)=>observer.observe(el));










// function sendEmail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "youssefnachar331@gmail.com",
//         Password : "youssefhala1",
//         To : 'youssefnachar331@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "New contact from:",
//         Body : "HELLOW"
//     }).then(
//       message => alert(message)
//     );
// }