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