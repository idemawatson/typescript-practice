{
  class MyCollection {
    static addAll<T>(data: T[], ...values: T[]): T[] {
      return data.concat(values)
    }
  }
  let x = [10, 15, 30]
  console.log(MyCollection.addAll(x, 35, 50))
}
{
  function merge<T, R>(obj1: T, obj2: R): T & R {
    let result = <T & R>{}
    //obj1のメンバーをresultにコピー
    for (let key in obj1) {
      ;(<any>result)[key] = obj1[key]
    }
    for (let key in obj2) {
      ;(<any>result)[key] = obj2[key]
    }
    return result
  }

  let book = {
    title: 'hoge',
    price: 2980,
    toString() {
      return `${this.title} ${this.price}`
    },
  }

  let logger = {
    debug() {
      console.log(this.toString())
    },
  }
  let m = merge(book, logger)
  m.debug()
}
