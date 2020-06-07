{
  interface Figure {
    //コンストラクタシグニチャ
    //new キーワードを使用して、コンストラクタの引数と生成する型を定義する
    new (width: number, height: number): Triangle
  }

  class Triangle {
    constructor(width: number, height: number) {}
  }

  let Tri: Figure = Triangle
}
