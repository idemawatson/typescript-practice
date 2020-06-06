{
  class Person {
    protected name: string
    protected age: number
    constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
    show(): string {
      return `${this.name}は${this.age}歳です。`
    }
  }
  class BusinessPerson extends Person {
    protected clazz: string
    constructor(name: string, age: number, clazz: string) {
      super(name, age)
      this.clazz = clazz
    }
    work(): string {
      return `${this.name}は働いています。`
    }
    show(): string {
      return super.show() + `${this.clazz}です。`
    }
  }
  let bp = new BusinessPerson('詩織', 25, '部長')
  console.log(bp.show())
  console.log(bp.work())
}
