import './Book.css';

function Book() {

console.log('env', process.env);

    return (
        <div>
            <form>
                <label htmlFor="author">Author:</label>
                <input type="text" name="author" id="author"/>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title"/>
                <label htmlFor="publishedr">Published:</label>
                <input type="text" name="published" id="published"/>
                <input type="submit" value="Save"/>
            </form>
        </div>
    );
}

export default Book;