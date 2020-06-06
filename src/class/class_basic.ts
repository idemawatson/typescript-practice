{
  class Person {
    private name: string
    private age: number
    #sex: string //ハードプライベート
    address!: string //constructorでの初期化が不要
    constructor(name: string, age: number, sex: string) {
      this.name = name
      this.age = age
      this.#sex = sex
    }
    public show(): string {
      return `${this.name}は${this.age}歳, ${this.#sex}です。`
    }
  }
  let p = new Person('Jack', 24, '男')
  console.log(p.show())
  console.log(p['name'])
  // console.log(p.#sex) private
}
