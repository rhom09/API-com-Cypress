import * as DELETEBook from '../requests/DELETEBooks.request';
import * as GETBook from '../requests/GETBooks.request';
import * as POSTBook from '../requests/POSTBooks.request';

describe('DELETE Books', () => {
    it('Excluindo um livro', () => {
        GETBook.allBooks().then((resAllBooks) => {
            DELETEBook.deleteBooks(resAllBooks.body[0].ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });

    it('Criar e excluir um livro', () => {
        POSTBook.addBooks().then((resAddBook) => {
            DELETEBook.deleteBooks(resAddBook.body.ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    });
});