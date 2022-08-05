import {Generatei} from "./objects.mjs"
Generate = new Generatei()

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
let player = {
    x: 0,
    y: 0,
    z: 0
}
let obj = [
    Generate.Cube(0, 0, 0, 5, 5, 5)
]
console.log(obj)
let keyW, keyA, keyS, keyD, keySp, keySh = false
canvas.width = 500
canvas.height = 500
window.onload = () => {
    
    
    loop()
}

window.addEventListener("keydown", () => {
    var keyCode = event.keyCode;
    //console.log(keyCode)
    switch (keyCode) {
        case 68: //d
            keyD = true;
            break;
        case 83: //s
            keyS = true;
            break;
        case 65: //a
            keyA = true;
            break;
        case 87: //w
            keyW = true;
            break;
        case 32: //space
            keySp = true;
            break;
        case 16: //shift
            keySh = true;
            break;
        
    }
})
window.addEventListener("keyup", () => {
    var keyCode = event.keyCode;
    switch (keyCode) {
        case 68: //d
            keyD = false;
            break;
        case 83: //s
            keyS = false;
            break;
        case 65: //a
            keyA = false;
            break;
        case 87: //w
            keyW = false;
            break;
        case 32: //space
            keySp = false;
            break;
        case 16: //shift
            keySh = false;
            break;
    }
})
//const verts = [new Vertex(-2.5, -2.5, 0), new Vertex(2.5, -2.5, 0), new Vertex(2.5, 2.5, 0), new Vertex(-2.5, 2.5, 0), new Vertex(-2.5, -2.5, -2.5), new Vertex(2.5, -2.5, -2.5), new Vertex(2.5, 2.5, -2.5), new Vertex(-2.5, 2.5, -2.5), ]
//const edges = [new Edge(verts[0], verts[1])]



function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i=0;i<obj.length;i++) {
        obj[i].draw()
        if (keyW) {
            obj[i].move(0, 0, -1)
            player.z--
        }
        if (keyA) {
            obj[i].move(1, 0, 0)
            player.x++
        }
        if (keyS) {
            obj[i].move(0, 0, 1)
            player.z++
        }
        if (keyD) {
            obj[i].move(-1, 0, 0)
            player.x--
        }
        if (keySp) {
            obj[i].move(0, 1, 0)
            player.y++
        }
        if (keySh) {
            obj[i].move(0, -1, 0)
            player.y--
        }
    }
    requestAnimationFrame(loop)
}