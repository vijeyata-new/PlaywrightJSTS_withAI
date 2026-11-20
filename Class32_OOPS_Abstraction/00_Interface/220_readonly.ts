// Readonly

interface Point{
     x:number;
     y:number;
}

const point : Point = {
    x:10,
    y:10,
}
console.log(point)

point.x = 15
console.log(point)

interface newPoint{
    xx:number;
    yy:number;
}

const newpoint : newPoint = {
    xx:40;
    yy:30;
}

newpoint.xx = 90
console.log(newpoint);