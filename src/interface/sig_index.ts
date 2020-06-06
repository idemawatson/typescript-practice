{
  interface NumberAssoc {
    //インデックスシグニチャ 連想配列の型を定義する
    [index: string]: number
  }
  let list: NumberAssoc = {
    hundred: 100,
    thousand: 1000,
  }
  console.log(list.hundred)
}
