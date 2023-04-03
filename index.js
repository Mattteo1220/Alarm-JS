let add = document.getElementById("add");
let edit = document.getElementById("edit");
let setters = Array.from(document.getElementsByClassName("setter"));
let other = document.getElementById("other");
let addAlarm = document.getElementById("add-alarm");

function createAlarm(time, isEnabled){
    let otherHeader = document.getElementById("other-header");

     if(otherHeader == null){
         other.innerHTML += "<h6 id='other-header'>Other</h6>";
      }


}


add.addEventListener("click", () => {
    addAlarm.removeAttribute("hidden");
});