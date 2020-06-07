{
  interface Article {
    url: string
  }
  let a: Readonly<Article> = {
    url: 'http://aaaa.com',
  }
  // a.url = 'http://bbb.com' error
}
{
  //Record<K, T>
  interface ContentInfo {
    url: string
    title: string
    count: number
  }
  // K型で指定されたプロパティを持つ型。その際のプロパティの型はT型となる。
  let mySite: Record<'top' | 'contact' | 'about', ContentInfo> = {
    top: { url: 'index.php', title: 'トップ', count: 100 },
    contact: { url: 'mail.php', title: '問い合わせ', count: 105 },
    about: { url: 'me.php', title: '概要', count: 108 },
  }
}
{
  interface Book {
    isbn: string
    title: string
    price: number
    published: Date
  }
  // title/priceだけを抜き出したSubBook型を生成
  type SubBook = Pick<Book, 'title' | 'price'>
  type SubBook2 = Omit<Book, 'isbn' | 'published'>
}
{
  type Type1 = string | number | boolean
  //Exclude<T, U> 共有型Tから指定の型Uを除外する
  type NewType1 = Exclude<Type1, string | boolean>
  // stringのみ抽出
  type NewType2 = Extract<Type1, string | object>

  type Type2 = string | number | undefined
  type NewType3 = NonNullable<Type2>
}
{
  function hoge(arg1: string, arg2?: boolean): string | number {
    return '1'
  }
  type TypeP = Parameters<typeof hoge> //hogeの引数型
  type TypeR = ReturnType<typeof hoge> //hogeの戻り値型
}
