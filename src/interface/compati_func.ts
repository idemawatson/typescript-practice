{
  interface Hoge {
    x: number
    y: number
  }

  interface Foo {
    x: number
  }

  // Hoge型はFoo型のプロパティ: xを持つので、型の互換性がある
  let func1: (obj: Hoge) => void = (x: Foo) => {}
  // Foo型はHoge型のプロパティ: yを持たないので、互換性がない
  let func2: (obj: Foo) => void = (x: Hoge) => {}
}
