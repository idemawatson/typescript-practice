{
  let data: string;
  // data = null; nullの代入は不可能
  // data = undefined undefinedも無理
  data = "hoge";
  let data2: string | null = "foo";
  console.log(data2?.trim()); //data2がnull/undefinedの場合は、undefinedを返す
  console.log(data2?.length ?? 0); // data2がnull/undefinedの場合は0を返す
}
