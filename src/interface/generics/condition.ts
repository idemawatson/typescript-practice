{
  type Intersection<T, U> = T extends U ? T : never
  type CommonType = Intersection<
    string | boolean | number,
    boolean | string[] | string
  >
}
{
  //　型Tが関数型であれば、その戻り値型を、でなければ元の型Tを返す
  type ReturnedType<T> = T extends (...args: any[]) => infer R ? R : T
}
{
  interface Animal {
    name: string
    color: string
  }

  class Dog implements Animal {
    constructor(public name: string, public color: string) {}
  }

  class Cat implements Animal {
    constructor(public name: string, public color: string) {}
  }

  interface Virus {
    name: string
    type: string
  }

  class Influenza implements Virus {
    constructor(public name: string, public type: string) {}
  }

  type Creature = Dog | Cat | Influenza
  function filterByName(creatures: Creature[], name: string) {
    return creatures.filter((creature) => creature.name === name)
  }

  filterByName(
    [
      new Dog('Bob', 'white'),
      new Cat('Steve', 'white'),
      new Influenza('H1N1', 'A'),
      new Influenza('H3N2', 'A'),
      new Influenza('H7N9', 'A'),
    ],
    'H1N1'
  )

  // Dog -> T, Cat -> T, Influenza -> never
  // 与えられた型TのうちAnimalと互換性のある型かどうかを判定する
  type IsAnimal<T> = T extends Animal ? T : never
  // Dog | Cat
  type AnimalType = IsAnimal<Creature>
  function filterByColor(animals: AnimalType[], color: string): AnimalType[] {
    return animals.filter((animal) => animal.color === color)
  }

  filterByColor(
    [
      new Dog('Bob', 'white'),
      new Cat('Steve', 'brown'),
      new Dog('Mel', 'brown'),
    ],
    'white'
  )
  // filterByColor([new Influenza('H1N1', 'A')], 'A') error
}
