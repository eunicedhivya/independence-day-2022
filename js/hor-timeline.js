var activeSlide = 1, totalSlides=20;

var pmYearNav = document.getElementById("pm-years")


function goNext(){
    if(activeSlide < totalSlides){
        var moveTenureNav = -(activeSlide * 150);
        pmYearNav.style.transform = "translateX("+moveTenureNav+"px)";
        document.getElementById("ten"+(activeSlide+1)).classList.add("active");
        // console.log(moveTenureNav);
        activeSlide++;
    }else{
        console.log("cant move further"); 
    }
    
}
function goPrev(){
    if(activeSlide > 1){
        var moveTenureNav = -(activeSlide * 150);
        pmYearNav.style.transform = "translateX("+moveTenureNav+"px)";
        console.log(moveTenureNav);
        activeSlide--;
    }else{
        console.log("cant move further"); 
    }
}