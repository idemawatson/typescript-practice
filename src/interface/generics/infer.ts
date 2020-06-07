{
  // Type inference in conditional types
  class Book {
    constructor(public code: number, public name: string) {}
  }
  const orderedBook = [
    new Book(1, 'hoge'),
    new Book(2, 'foo'),
    new Book(3, 'bar'),
  ]
  class Ticket {
    constructor(public code: string, public name: string) {}
  }
  const orderedTicket = [
    new Ticket('a', 'aaa'),
    new Ticket('b', 'bbb'),
    new Ticket('c', 'ccc'),
  ]

  // codeプロパティをU型としてキャプチャできる
  type Code<T> = T extends { code: infer U } ? U : never
  // Code<Book> = Book extends { code: infer number } ? number: never --> number
  // Code<Ticket> = Ticket extends { code: infer string } ? string: never --> string

  // <T>にBook,Ticketを付与した時にItem<T>が決定する
  type Item<T> = { code: Code<T> }
  // Item<Book> = { code: number }
  // Item<Ticket> = { code: string }

  function filter<U>(list: Item<U>[], code: Code<U>): Item<U>[] {
    return list.filter((item) => item.code === code)
  }

  console.info(filter<Book>(orderedBook, 2))
  console.info(filter<Ticket>(orderedTicket, 'a'))
  // console.info(filter<Book>(orderedBook, 'b')) error
}
{
  type Value<T> = T extends () => Promise<infer U> ? U : never
  type Fetch<T> = () => Promise<Value<T>>
  async function series<T>(...fetches: Fetch<T>[]) {
    let responses: Value<T>[] = []
    for (let fetch of fetches) {
      responses.push(await fetch())
    }
    return responses
  }

  series<() => Promise<{ data: string }>>(
    () => Promise.resolve({ data: 'first' }),
    () => Promise.resolve({ data: 'second' })
    // () => Promise.resolve({ dataa: 'third' })
    // () => Promise.resolve({ data: 2 })
  ).then((responses) =>
    responses.forEach((response) => {
      console.log(response.data)
    })
  )
}
