{
  const sum = (...values: number[]): number => {
    let result = 0;
    for (let v of values) {
      result += v;
    }
    return result;
  };
  console.log(sum(1, 2, 3, 4, 5, 6, 7, 8));
}
