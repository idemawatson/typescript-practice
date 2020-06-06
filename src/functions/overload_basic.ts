{
  function show(value: number | boolean): void; //先に関数のシグニチャだけを定義する。これにより、any型の引数を型チェックすることができる
  function show(value: any): void {
    if (typeof value === "number") {
      console.log(value.toFixed(0));
    } else {
      console.log(value ? "true" : "false");
    }
  }

  show(10.35);
  show(false);
  // show("aaa");
}
