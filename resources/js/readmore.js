const readMorebtn = document.querySelectorAll(".readmore-btn")[0];
const readMorebtn2 = document.querySelectorAll(".readmore-btn")[1];
const readMoretext = document.querySelectorAll(".read-more-text")[0];
const readMoretext2 = document.querySelectorAll(".read-more-text")[1];
readMorebtn.addEventListener("click" , ()=>{
    if(readMorebtn.innerHTML == "Read More"){
        readMorebtn.innerHTML = "Read Less";
    }
    else{
        readMorebtn.innerHTML = "Read More";
    }
    readMoretext.classList.toggle("active");
});
// readMorebtn2.addEventListener("click" , ()=>{
//     if(readMorebtn2.innerHTML == "Read More"){
//         readMorebtn2.innerHTML = "Read Less";
//     }
//     else{
//         readMorebtn2.innerHTML = "Read More";
//     }
//     readMoretext2.classList.toggle("active");
// });