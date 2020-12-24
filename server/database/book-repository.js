
class BookRepository {
    constructor(connectionPoolService) {
        this.connectionPoolService = connectionPoolService;
    }

    get pool() {
        return this.connectionPoolService.getPool();
    }

    save(book, callback) {
        this.pool.query('insert into books set ?', book, callback);
    }

    get(id, callback) {
        this.pool.query('select * from books where id = ?', id, callback);
    }

    getAll(callback) {
        this.pool.query('select * from books', callback);
    }

    update(id, book, callback) {
        this.pool.query('update books set ? where id = ?', [book, id], callback);
    }

    delete(id, callback) {
        this.pool.query('delete from books where id = ?', id, callback);
    }
}

module.exports = BookRepository;
