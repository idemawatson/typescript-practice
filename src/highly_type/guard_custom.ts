{
  //a.型ガード関数の定義
  class Book {
    public isbn: string;
    constructor(isbn: string) {
      this.isbn = isbn;
    }
  }
  class Magazine extends Book {
    public name: string;
    constructor(name: string, isbn: string) {
      super(isbn);
      this.name = name;
    }
  }
  const isBook = (inf: Book | Magazine): inf is Book => {
    //型ガード関数 inf is Book が引数の型をBookに固定している。
    return (inf as Book).isbn != undefined;
  };
  const b = new Book("isbn1");
  if (isBook(b)) {
    console.log(b.isbn);
  }
}
