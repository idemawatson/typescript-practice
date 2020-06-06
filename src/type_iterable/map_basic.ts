{
  let data: string[] = ["aaa", "bbb"];
  let obj: { [index: string]: string } = {
    hoge: "a",
    foo: "f",
  };

  // obj.bar = 100; error

  let obj_not_assert = {
    hoge: "a",
  };

  obj_not_assert.foo = "b";
  //インデックスシグニチャでの型宣言がないため、
  //宣言時のプロパティを持ったオブジェクトと判定される。結果、宣言時に存在しないプロパティにアクセスできない。
}
