import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const book1 = new Book('The Count of Monte Cristo', 'Alexandre Duma', 1846);
const book2 = new Book('Don Quixote', 'Miguel de Cervantes', 1605);

book1.printInfo();
book2.printInfo();
console.log(); // skipping a line

const ebook1 = new EBook('The Fall of the House of Usher', 'Edgar Allan Poe', 1839, 'pdf');
const ebook2 = new EBook('The Old Man and the Sea', 'Ernest Hemingway', 1952, 'docx');

ebook1.printInfo();
ebook2.printInfo();
console.log(); // skipping a line

console.log(Book.findOldestBook([book1, book2, ebook1, ebook2]));
console.log(); // skipping a line

const ebook3 = EBook.transformBook(book1, 'doc');

console.log(ebook3);
