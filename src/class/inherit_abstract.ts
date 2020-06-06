{
  abstract class Figure {
    constructor(protected width: number, protected height: number) {}
    abstract getArea(): number
  }
  class Triangle extends Figure {
    getArea(): number {
      return (this.width * this.height) / 2
    }
  }
  let t = new Triangle(5, 10)
  console.log(t.getArea())
}
