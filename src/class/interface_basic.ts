{
  interface Figure {
    getArea(): number
  }
  class Triangle implements Figure {
    constructor(protected width: number, protected height: number) {}
    getArea(): number {
      return (this.width * this.height) / 2
    }
  }
  let t = new Triangle(5, 10)
  t.getArea()
}
