{
  type Intersection<T, U> = T extends U ? T : never
  type CommonType = Intersection<
    string | boolean | number,
    boolean | string[] | string
  >
}
