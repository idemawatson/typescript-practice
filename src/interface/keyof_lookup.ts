{
  interface Product {
    name: string
    price: number
  }
  //Product型のプロパティセットを取得
  type ProductKeys = keyof Product

  function getProp(obj: Product, name: ProductKeys) {
    return obj[name]
  }

  let p: Product = { name: 'ねじ', price: 100 }
  getProp(p, 'name')
  getProp(p, 'price')
}
{
  interface Product {
    name: string
    price: number
  }

  type NameType = Product['name'] // string
  type NamePriceType = Product['name' | 'price'] //string | number
  // type HogeType = Product['hoge'] error

  function getProp<T, K extends keyof T>(obj: T, name: K) {
    return obj[name]
  }
  let p = { name: 'ねじ', price: 100 }
  getProp(p, 'name')
  getProp(p, 'price')
}
