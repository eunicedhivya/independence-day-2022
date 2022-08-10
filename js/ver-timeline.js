window.addEventListener("scroll", showTimelineItem);

function showTimelineItem(){
    var timelineItems = document.querySelectorAll(".ver-timeline");
    for(var i=0; i<timelineItems.length; i++){
        
        var windowHeight = window.innerHeight;
        var revealtop = timelineItems[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowHeight - revealpoint){
            timelineItems[i].classList.add("active");
        }else{
            timelineItems[i].classList.remove("active");
        }
    }
}


var loadmore = document.getElementsByClassName("load-more")[0]

var noItemsLoad = 5;

var currentItemsDisplay = 5;

loadmore.addEventListener("click", function(e){
    var elementsList = document.getElementsByClassName("ver-timeline");
    // console.log(elementsList);
    e.target.classList.add("show-loader");

    for(var i=currentItemsDisplay; i<currentItemsDisplay + noItemsLoad; i++){
        console.log(i, elementsList[i]);
        e.target.classList.remove("show-loader");
        if(elementsList[i]){
            elementsList[i].style.display = "block";
        }
    }
    currentItemsDisplay += noItemsLoad;

    if(currentItemsDisplay >= elementsList.length){
        e.target.classList.add("done");
    }
})