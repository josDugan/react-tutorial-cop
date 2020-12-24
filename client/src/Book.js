import './Book.css';

function Book() {

console.log('env', process.env);

    return (
        <div id="book-message">
            Hello I'm a book
        </div>
    );
}

export default Book;