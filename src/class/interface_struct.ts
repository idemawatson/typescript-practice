{
  interface Figure {
    getArea(): number
  }

  class Triangle {
    constructor(private width: number, private height: number) {}
    getArea(): number {
      return (this.width * this.height) / 2
    }
  }

  let t: Figure = new Triangle(10, 5) // TriangleはFigureインターフェースを実装してはいないが、構造から互換性があるとみなされる
  console.log(t.getArea())
}
