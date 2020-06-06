{
  const hoge = (): never => {
    throw new Error("Error");
  };
  console.log(hoge());
}
