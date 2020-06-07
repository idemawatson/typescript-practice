{
  class MyGenerics<T = string> {
    value!: T
    getValue(): T {
      return this.value
    }
  }

  let g = new MyGenerics()
  let g2 = new MyGenerics<number>()
  g.value = 'hoge'
  g2.value = 100
  console.log(g.getValue())
  console.log(g2.getValue())
}
