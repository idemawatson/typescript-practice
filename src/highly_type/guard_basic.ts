{
  //型ガード
  const process = (value: string | number) => {
    if (typeof value === "string") {
      return value.toUpperCase(); //ifブロック内ではvalueの型が確定している。
    } else {
      return value.toFixed(1);
    }
  };
  console.log(process("hoge"));
  console.log(process(35.67));
}
