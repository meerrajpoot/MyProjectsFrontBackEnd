// Data Grouping: Write a function that groups books by their author and returns an array where each key is an author's name and its value their books.

function groupBooksByAuthor(books) {
    const groupedBooks = {};
    books.forEach(book => {
        if (!groupedBooks[book.author]) {
            groupedBooks[book.author] = [];
        }
        groupedBooks[book.author].push(book.title);
    });
    return groupedBooks;
}

const books = [
    { title: 'Book 1', author: 'Author A' },
    { title: 'Book 2', author: 'Author A' },
    { title: 'Book 3', author: 'Author B' }
];

const groupedBooks = groupBooksByAuthor(books);
console.log(groupedBooks);
