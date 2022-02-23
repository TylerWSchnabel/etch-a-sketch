
var n = 100;
const container = document.getElementById('all')
var color = "black";

function grid(n){
    n=slider.value;
    for (let i = 1; i<=n; i++){
        for (let j=1; j<=n; j++){
           const div = document.createElement('div');
           div.className="square";
           div.addEventListener("mouseover", setColor);
           container.appendChild(div);
           container.style.display = "grid";
           container.style.display = "grid";
           container.style.width = "500px";
           container.style.height= "500px";
           container.style.gridTemplateColumns = "repeat("+n+", 1fr)";
           container.style.gridTemplateRows = "repeat("+n+", 1fr)";
           container.style.borderColor = "black";
           container.style.borderStyle="solid"
        }
    }
}

var slider = document.getElementById('myRange');
var output = document.getElementById('count');
output.innerHTML = slider.value + " x " + slider.value;

slider.oninput = function(){
    output.innerHTML = this.value + " x " + this.value;
    reset();
    grid();
}

function setBlack() {
    color = "black";
    console.log(color);
}

function setErase() {
    color = "erase";
    console.log(color);
}

function setGrey() {
    color = "grey";
    console.log(color);
}

function setRainbow(){
    color = "rainbow"
    console.log(color);
}
function setPicker(){
    color = "picker";
}


function setColor(){
    console.log(color);
    if (color === "black"){
        this.style.backgroundColor = "black";
        this.style.opacity = 1;
        this.className = "square"
    } else if (color === "rainbow"){
        var letters = "0123456789ABCDEF";
        var shade = "#";
        for (let i=0; i<6; i++){
            shade += letters[Math.floor(Math.random() * 16)];
        }
        this.style.backgroundColor = shade;
        this.style.opacity = 1;
        this.className = "square"
        console.log(shade);
    } else if (color === "erase") {
        this.style.backgroundColor = "white";
        this.style.opacity = 0;
        this.className = "square"
    } else if (color === "grey") {
        if (this.className === "grey"){
            console.log(Number(this.style.opacity));
            let o = Number(this.style.opacity) + .1;
            this.style.opacity = o;
            this.style.backgroundColor = `rgb(0, 0, 0)`;
        } else {
            this.style.backgroundColor = `rgb(0, 0, 0)`;
            this.style.opacity = 0.1;
            this.className = "grey";
        } 
    } else if (color === "picker"){
        let colorInput = document.querySelector('#colorPicker');
        let bgColor = colorInput.value;
        this.style.backgroundColor = bgColor;
        this.style.opacity = 1;
        this.className = "square";
        console.log(bgColor);
    }
}


function reset() {
    var collect = container.querySelectorAll('div');
    for (let i=0; i<collect.length; i++){
        collect[i].style.backgroundColor = "white";
        collect[i].style.opacity = 0.0;
        collect[i].className = "square";
    }
    color = "black";
    console.log(color);
}

document.getElementById("reset").addEventListener("click", reset);
document.getElementById("erase").addEventListener("click", setErase);
document.getElementById("black").addEventListener("click", setBlack);
document.getElementById("grey").addEventListener("click", setGrey);
document.getElementById("rainbow").addEventListener("click", setRainbow);
document.getElementById("picker").addEventListener("click", setPicker);

grid(n);






 

