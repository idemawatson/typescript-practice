export default abstract class Animal {
  #name: string
  constructor(name: string) {
    this.#name = name
  }
  get name() {
    return this.#name
  }
  bark(): string {
    return `${this.#name}: `
  }
}
