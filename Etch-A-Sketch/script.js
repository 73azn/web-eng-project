let isMouseDown = false;
let isEraser = false


const color = document.querySelector(".color")
let painting = document.querySelector("#container")
const paper = document.querySelector(".paper")
const slider = document.querySelector(".amount")
const viewer = document.querySelector("#slider")
let touch = false


function load(){
    if(painting.hasChildNodes) painting.innerHTML = ''

    let squareSize = 360/slider.value
    for(i = 1 ; i<=slider.value*slider.value ; i++){

        const paperg = document.createElement("div")
        paperg.style.backgroundColor = "white"
        paperg.style.width = `${squareSize}px`
        paperg.style.height = `${squareSize}px`
        paperg.classList.add("paper")
        paperg.setAttribute("onmouseover",`change(this)`)
        
        paperg.addEventListener("touchstart",function(e){
            touch = true
            change(paperg)
        })

        painting.appendChild(paperg)

        viewer.textContent = `${slider.value} x ${slider.value}`
        
    }

}


load()


let clear = painting.innerHTML
let docData = [painting.innerHTML]
let docDataret = []




function udpateBody(){
    docData.push(painting.innerHTML)
}

function reset(){
   load()
}

function changeValue(self){
    viewer.textContent = `${slider.value} x ${slider.value}`
}

function change(self){
    if(isEraser && isMouseDown || touch) self.style.backgroundColor = "#fff"
    else if(isMouseDown || touch && !isEraser) self.style.backgroundColor = color.value
    
}

function eraser(self){
    isEraser = !isEraser
    if(isEraser) self.classList.add("selected")
    else self.classList.remove("selected")
}




// to check if the mouse down or not
document.addEventListener('mousedown', function() {
    isMouseDown = true;
    
});


document.addEventListener('mouseup', function() {
    isMouseDown = false;
    udpateBody();
});

//to undo
document.addEventListener("keydown" , function(e){
if(e.ctrlKey && e.key.toLowerCase() == "z" && docData.length-1>0){
    
    
    docDataret.push(docData.pop())
    painting.innerHTML = docData[docData.length-1] 
}
})
//to do
document.addEventListener("keydown",function(e){
    if(e.ctrlKey && e.key.toLowerCase() == "y"&& docDataret.length>0){
        let temp = docDataret.pop()
        painting.innerHTML = temp
        docData.push(temp)

        
    }

})
















