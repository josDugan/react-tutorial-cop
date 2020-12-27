import React from 'react';
import { Link } from 'react-router-dom';
import './BookLibrary.css';

import axios from 'axios';

import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

class BookLibrary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        };
    }

    componentDidMount() {
        axios(process.env.REACT_APP_SERVER_URL)
            .then(result => this.setState({ books: result.data }))
            .catch(err => console.log(err));
    }

    render() {
        console.log('render', this.state.books);

        let books = this.state.books.map((book) => {

            let date = book.published.substr(0, 4);
            
            return (
                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{date}</td>
                    <td><Link to={'/edit/' + book.id}><EditIcon/></Link></td>
                    <td><DeleteForeverIcon/></td>
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
}

export default BookLibrary;
