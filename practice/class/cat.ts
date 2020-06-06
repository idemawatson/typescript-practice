import Animal from './animal'

class Cat extends Animal {
  public bark(): string {
    return super.bark() + 'みゃーお'
  }
}

export default Cat
