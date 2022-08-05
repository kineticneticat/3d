const scale = 20
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext("2d")
/////////////////////////////////////////////
export class Vertex {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
        this.groundy = y
    }

    project() {
        this.prox = (this.x*scale/(this.z+scale))*10+250
        this.proy = (this.y*scale/(this.z+scale))*10+250
    }

    draw() {
        this.project()
        //if (!Math.abs(this.z)<Math.abs(player.z)) {
            ctx.beginPath()
            ctx.arc(this.prox, this.proy, 2, 0, Math.PI*2)
            ctx.fill()
        //} 
    }
}
/////////////////////////////////////////////
export class Edge {
    constructor(a, b) {
        this.a = a
        this.b = b
    }

    draw() {
        ctx.beginPath()
        ctx.moveTo(this.a.prox, this.a.proy)
        ctx.lineTo(this.b.prox, this.b.proy)
        ctx.stroke()
    }
}
/////////////////////////////////////////////
export class Obj {
    constructor(Verts, Edges, Faces) {
        this.v = Verts
        this.e = Edges
        this.f = Faces
    }

    draw() {
        for (let i=0;i<this.v.length;i++) {
            this.v[i].draw()
        }
        for (let i=0;i<this.e.length;i++) {
            this.e[i].draw()
        }
        for (let i=0;i<this.f.length;i++) {
            this.f[i].draw()
        }
    }
a
    move(dx, dy, dz) {
        for (let i=0;i<this.v.length;i++) {
            this.v[i].x += dx
            this.v[i].y += dy
            this.v[i].z += dz
        }
    }
}
/////////////////////////////////////////////
export class Generatei {
    Cube(x, y, z, wx, wy, wz){//, rx, ry, rz) {

        let v = [
            new Vertex(x, y, z), new Vertex(x+wx, y, z), new Vertex(x, y+wy, z), new Vertex(x+wx, y+wy, z), new Vertex(x, y, z+wz), new Vertex(x+wx, y, z+wz), new Vertex(x, y+wy, z+wz), new Vertex(x+wx, y+wy, z+wz)
        ]
        let e =[
            new Edge(v[0], v[1]), new Edge(v[1], v[3]), new Edge(v[3], v[2]), new Edge(v[2], v[0]), new Edge(v[4], v[5]), new Edge(v[5], v[7]), new Edge(v[7], v[6]), new Edge(v[6], v[4]), new Edge(v[0], v[4]), new Edge(v[1], v[5]), new Edge(v[2], v[6]), new Edge(v[3], v[7])
        ]
        let f = [
    
        ]
    
        return new Obj(v, e, f)
    }
}

window.Generate = new Generatei