
//Sticky header

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let promotedArticleSharelink = document.querySelector(".promotedArticleSharelink")
let promotedArticleSharelinkIconsAll = document.querySelector(".promotedArticleSharelinkIconsAll")
var count = 0;
promotedArticleSharelink.onclick = ()=>{
  if(count%2 == 0){
    promotedArticleSharelinkIconsAll.classList.add("promotedArticleSharelinkIconsAllBlock")
  }else{
    promotedArticleSharelinkIconsAll.classList.remove("promotedArticleSharelinkIconsAllBlock")

  }
  
  count++
}


// let articlesCarouselSectionSharelink = document.querySelector(".articlesCarouselSectionSharelink")
// let articlesCarouselIcons = document.querySelector(".articlesCarouselIcons")
// var count1 = 0;
// articlesCarouselSectionSharelink.onclick = ()=>{
//   if(count1%2 == 0){
//     articlesCarouselIcons.classList.add("promotedArticleSharelinkIconsAllBlock")
//   }else{
//     articlesCarouselIcons.classList.remove("promotedArticleSharelinkIconsAllBlock")

//   }
  
//   count1++
// }