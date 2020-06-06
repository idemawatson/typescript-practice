{
  interface Calculate {
    //コールシグニチャ
    //関数型(引数, 戻り値)を定義する
    (x: number, y: number): number
  }

  let add: Calculate = function (a: number, b: number): number {
    return a + b
  }
  add(2, 3)
}
{
  interface Calculate {
    //メソッドシグニチャ
    //関数型のプロパティを定義する
    add(x: number, y: number): number
    //下も同じ
    minus: (x: number, y: number) => number
  }
  let obj: Calculate = {
    add(a: number, b: number): number {
      return a + b
    },
    minus: (a: number, b: number) => {
      return a - b
    },
  }
  obj.add(1, 2)
}
