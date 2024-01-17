var components = document.getElementById("components")
var up_Arrow = document.getElementById("up_Arrow")
var down_arrow = document.getElementById("down_arrow")

var rotate_Value = components.style.transform
var rotate_Sum

up_Arrow.onclick = function(){
    rotate_Sum = rotate_Value + "rotate(-90deg)"
    components.style.transform = rotate_Sum
    rotate_Value = rotate_Sum 
}

down_arrow.onclick = function(){
    rotate_Sum = rotate_Value + "rotate(90deg)"
    components.style.transform = rotate_Sum
    rotate_Value = rotate_Sum 
}