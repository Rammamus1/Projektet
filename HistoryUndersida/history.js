window.addEventListener("scroll",scroll);

function scroll() {
 const timeline = document.querySelector(".timeline");
 const line = document.querySelector(".line");
 
 
 const timelineTop = timeline.offsetTop;
 const timelineHeight = timeline.offsetHeight;
 const scrollposition = window.scrollY + window.innerHeight;

 let height = scrollposition - timelineTop;

 if (height<0) height =0;
 if (height > timelineHeight) height = timelineHeight;

 line.style.height = height + "px"

 const events = document.querySelectorAll(".event");

events.forEach(event => {
    const rect = event.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        event.classList.add("show");
    }
});
}
