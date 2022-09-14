
let width = 0;
let height = 0;
const brocoli = document.getElementById('brocoli');

window.onload = () =>{
    width = screen.width;
    height = screen.height
    console.log("Width: " + width + " Height: " + height )
}

window.onresize = () => {
    width = screen.width;
    height = screen.height
    console.log("Width: " + width + " Height: " + height )

    if(width = 1200){
        brocoli.style.display = none;
    }
}