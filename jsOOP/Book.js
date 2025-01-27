export class Book {
  constructor(name, author, year) {
    this._name = name;
    this._author = author;
    this._year = year;
  }

  static findOldestBook(booksArray) {
    let minYear = 2025;
    let oldestBook;
    if (booksArray.length !== 0) {
      for (const book of booksArray) {
        if (book.year < minYear) {
          minYear = book.year;
          oldestBook = book;
        }
      }
      return oldestBook;  
    } else {
      return 0;
    }
  }

  set name(name) {  
    if (typeof name === "string") {
      this._name = name;
    }
  }

  get name() {
    return this._name;
  }

  set author(author) {
    if (typeof author === "string") {
      this._author = author;
    }
  }

  get author() {
    return this._author;
  }

  set year(year) {
    if (!isNaN(year) && year < 2025) {
      this._year = year;
    }
  }

  get year() {
    return this._year;
  }

  printInfo() {
    console.log(
      `${this._name} was written by ${this._author} in ${this._year}`,
    );
  }
}
