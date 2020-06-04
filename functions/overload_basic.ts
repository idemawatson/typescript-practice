{
  function show(value: number): void; //先に関数のシグニチャだけを定義する
  function show(value: boolean): void; //これにより、any型の引数を型チェックすることができる
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
