import React from 'react';
import FlashMessage from './FlashMessage';
import './BookLibrary.css';

import axios from 'axios';

import BookTable from './BookTable.js';

class BookLibrary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            loading: false,
            error: false,
            warning: '',
            warningCount: 0
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
                .catch(error => {
                    this.setState({
                        warningCount: this.setState.warningCount + 1,
                        warning: 'Delete failed'
                    });
                    console.log(error)});
        }
    }

    refresh() {
        this.setState({
            error: false,
            loading: true
        });

        axios(process.env.REACT_APP_SERVER_URL)
            .then(result => this.setState({
                books: result.data,
                loading: false
            }))
            .catch(err => {
                this.setState({
                    error: true,
                    loading: false
                });
                console.log(err);
            });
    }

    render() {
        console.log('render', this.state.books);

        let content = '';

        if (this.state.loading) {
            content = <div className="loading">Loading...</div>;
        }
        else if (this.state.error) {
            content = <div className="error">An error occurred. Please try later.</div>;
        }
        else {
            content = (
                <dv className='book-library'>
                    <FlashMessage key={this.state.warningCount} duration='3000' message={this.state.warning} />
                    <BookTable books={this.state.books} handleDelete={this.handleDelete} />
                </dv>
            );
        }

        return content;
    }
}

export default BookLibrary;
