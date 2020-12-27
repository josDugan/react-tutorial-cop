import React from 'react';
import './BookLibrary.css';

import axios from 'axios';

import BookTable from './BookTable.js';

class BookLibrary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: []
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.refresh();
    }

    handleDelete(id) {
        console.log('delete', id);

        if (window.confirm('Really delete this book?')) {
            axios.delete(process.env.REACT_APP_SERVER_URL + '/' + id)
                .then(result => this.refresh())
                .catch(error => console.log(error));
        }
    }

    refresh() {
        axios(process.env.REACT_APP_SERVER_URL)
            .then(result => this.setState({ books: result.data }))
            .catch(err => console.log(err));
    }

    render() {
        console.log('render', this.state.books);

        return <BookTable books={this.state.books} handleDelete={this.handleDelete} />
    }
}

export default BookLibrary;
