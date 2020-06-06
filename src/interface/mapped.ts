{
  interface Product {
    name: string
    price: number
  }

  type ReadOnlyProduct = {
    readonly [K in keyof Product]: Product[K]
  }

  type OptionalProduct = {
    [K in keyof Product]?: Product[K]
  }
}
{
  interface ReadOnlyProduct {
    readonly name: string
    readonly price: number
  }
  type Product = {
    -readonly [K in keyof ReadOnlyProduct]: Product[K]
  }
}
