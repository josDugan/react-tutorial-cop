import { Link } from 'react-router-dom';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import './BookTable.css';

function BookTable(props) {
    let books = props.books.map((book) => {

        let date = book.published.substr(0, 4);

        return (
            <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{date}</td>
                <td><Link to={'/edit/' + book.id}><EditIcon /></Link></td>
                <td><Link onClick={() => props.handleDelete(book.id)} to='/'><DeleteForeverIcon /></Link></td>
            </tr>
        );
    });

    return (
        <div>
            <table>
                <thead>
                    <tr><th>Title</th><th>Author</th><th>Published</th></tr>
                </thead>
                <tbody>
                    {books}
                </tbody>
            </table>
        </div>
    );
}

export default BookTable;
