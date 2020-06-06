{
  let data: unknown; //型を自由に受け入れるが、型ガードしない限りその後の操作を許容しない。
  data = "hoge ";
  if (typeof data === "string") data.trim();
}
