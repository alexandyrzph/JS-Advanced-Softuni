class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        return (Math.sqrt((a.x - b.x) **2 + (a.y - b.y) ** 2));
    }
}

const p1 = new Point(1, 1);
const p2 = new Point(4, 5);

console.log(p1,p2);
console.log(Point.distance(p2, p1));