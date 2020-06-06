import Animal from './class/animal'
import Dog from './class/dog'
import Cat from './class/cat'

export enum AnimalType {
  Dog,
  Cat,
}

interface AnimalConstructor {
  new (name: string): Animal
}

export default class Factory {
  private classMap: Map<AnimalType, AnimalConstructor>
  constructor() {
    this.classMap = new Map<AnimalType, AnimalConstructor>()
    this.classMap.set(AnimalType.Dog, Dog)
    this.classMap.set(AnimalType.Cat, Cat)
  }
  create(type: AnimalType, name: string): Animal {
    if (!this.classMap.has(type)) {
      throw new Error('いない動物です！')
    } else {
      const animalConstructor: AnimalConstructor = this.classMap.get(type)
      return new animalConstructor(name)
    }
  }
}
