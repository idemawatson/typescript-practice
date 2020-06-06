{
  type Season = 'spring' | 'summer' | 'autumn' | 'winter'
  const getScene = (s: Season): number => {
    return s.length
  }
  console.log(getScene('spring'))
  // console.log(getScene(" fall"));
}
