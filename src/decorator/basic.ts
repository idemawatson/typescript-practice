{
  // target: クラスのprototypeオブジェクト, key: メソッド名, desc: メソッド本体
  function log(tag: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      console.log(target)
      let origin = desc.value
      desc.value = function () {
        console.group(tag)
        console.log(`${key} start...`)
        let start = Date.now()
        let result = origin.apply(this, arguments)
        let end = Date.now()
        console.log(`${key} end...`)
        console.log(`Process Time ${end - start}ms`)
        console.groupEnd()
        return result
      }
    }
  }

  class MyClass {
    @log('Add Method')
    add(x: number, y: number): number {
      let s = Date.now()
      while (Date.now() - s < 4500);
      return x + y
    }
  }
  let c = new MyClass()
  console.log(c.add(100, 200))
}
