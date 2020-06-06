import Animal from './animal'

class Dog extends Animal {
  public bark(): string {
    return super.bark() + 'わんわん！'
  }
}

export default Dog
