
var activeSlide = 1, totalSlides=20;
var pmYearNav = document.getElementById("pm-years")
var pmYearNavAll = document.querySelectorAll("#pm-years li")


function goNext(){
    if(activeSlide < totalSlides){
        var moveTenureNav = -(activeSlide * 150);
        pmYearNav.style.transform = "translateX("+moveTenureNav+"px)";
        pmYearNavAll.forEach(function (element) {
            element.classList.remove("active");
        });
        document.getElementById("ten"+(activeSlide+1)).classList.add("active");
        activeSlide++;
        console.log(activeSlide, moveTenureNav);
    }else{
        console.log("cant move further"); 
    }
    
}
function goPrev(){
    if(activeSlide > 1){
        activeSlide--;
        var moveTenureNav = -((activeSlide-1) * 150);
        pmYearNav.style.transform = "translateX("+moveTenureNav+"px)";
        pmYearNavAll.forEach(function (element) {
            element.classList.remove("active");
        });
        document.getElementById("ten"+(activeSlide)).classList.add("active");
        console.log(activeSlide, moveTenureNav);
    }else{
        console.log("cant move further"); 
    }
}