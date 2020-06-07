{
  //generics
  interface Something<T> {
    id: number
    flag: T // 型Tは未定
  }
  const something1: Something<boolean> = { id: 1, flag: true }
  const something2: Something<string> = { id: 2, flag: 'hoge' }
  // const something3: Something<string> = { id: 2, flag: 1 } error
}
