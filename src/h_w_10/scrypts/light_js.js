export function clickCounterJs(elem) {
    var lights = document.querySelectorAll("#content_wrapper_light > div");
    if(elem.id == "input_red_js"){
        elem.className = "open";
      lights[1].className = "closed";
      lights[2].className = "closed";
    }
    else if(elem.id == "input_yellow_js"){
        elem.className = "open";
      lights[0].className = "closed";
      lights[2].className = "closed";
    }
    else{
        elem.className = "open";
      lights[1].className = "closed";
      lights[0].className = "closed";
    }
}