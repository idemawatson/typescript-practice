{
  let data: string | boolean;
  data = "hoge";
  data = false;
  // data = 1;

  const square = (value: number): number | boolean => {
    if (value < 0) {
      return false;
    } else {
      return Math.sqrt(value);
    }
  };
  console.log(square(4));
  console.log(square(-1));
  // console.log(square("a"));
}
