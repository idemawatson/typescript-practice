{
  interface MyConfig {
    title: number
    debug: boolean
  }

  //a.MyConfigの全プロパティを任意型に
  type MyConfigOption = Partial<MyConfig>
  // interface MyConfigOption {
  //   title?: number
  //   debug?: boolean
  // }
  type RequiredOption = Required<MyConfigOption>

  let conf: MyConfigOption = {}
  // let conf2: RequiredOption = {}
}
