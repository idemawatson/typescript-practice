import Factory, { AnimalType } from './factory'
import Animal from './class/animal'
const animalMap: {
  [index: string]: AnimalType
} = {
  dog: AnimalType.Dog,
  cat: AnimalType.Cat,
}
const createAnimal = (type: string, name: string = 'john'): Animal => {
  const factory = new Factory()
  return factory.create(animalMap[type], name)
}

$('#startBtn').on('click', () => {
  const type: string = String($('#animalType').val())
  try {
    const animal: Animal = createAnimal(type)
    alert(animal.bark())
  } catch (e) {
    alert(e.message)
  }
})
