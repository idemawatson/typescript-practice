{
  interface Person {
    name: string
    age: number
    // [index: string]: any 任意のプロパティを許容する場合、インデックスシグニチャを追加しておくとよい
  }

  const greet = (p: Person): void => {
    console.log(`こんにちは、${p.name}さん`)
  }

  let pl = {
    name: 'サクラ',
    age: 25,
    gender: 'female',
  }
  //構造的部分型の考え。Personにはないgenderプロパティを持つが、互換性があると見なされgreetの引数にとれる
  greet(pl)
  greet({
    name: 'ミカン',
    age: 24,
    // gender: 'female' これはできない。
  })
}
