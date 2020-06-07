{
  interface Person {
    //プロパティシグニチャ
    readonly name: string
    age?: number
  }
  let p: Person = {
    name: '田中',
  }
  p.age = 30
  // p.name = '鈴木' readonly
}
