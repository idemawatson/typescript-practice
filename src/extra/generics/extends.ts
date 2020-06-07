{
  class Hoge {}
  class Foo extends Hoge {}

  class MyGenerics<T extends Hoge> {
    value!: T
    getValue(): T {
      return this.value
    }
  }
  let g = new MyGenerics<Foo>()
  let g2 = new MyGenerics<Hoge>()
  g.value = new Foo()
  g2.value = new Hoge()
  console.log(g.getValue())
  console.log(g2.getValue())

  let g3 = new MyGenerics<string>()
  g3.value = 'foo'
  console.log(g3.getValue())
}
