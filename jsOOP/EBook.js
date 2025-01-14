import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(name, author, year, fileType) {
    super(name, author, year);
    this._fileType = fileType;
  }

  static transformBook(book, fileType) {
    return new EBook(book.name, book.author, book.year, fileType);
  }

  set fileType(fileType) {
    if (typeof fileType === "string") {
      this._fileType = fileType;
    }
  }

  get fileType() {
    return this._fileType;
  }

  printInfo() {
    super.printInfo();
    console.log(`File format of the book is ${this.fileType}`);
  }
}
