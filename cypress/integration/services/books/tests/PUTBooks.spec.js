import * as PUTBooks from '../requests/PUTBooks.request';
import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe('PUT Books', () => {
    it('Alterando um livro', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.ChangeBooks(resAllBooks.body[0].ID).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.Title).to.eq('The Book and the table III')
            })
        })
    });

    it('Criar e alterar um livro', () => {
        POSTBooks.addBooks().then((resAddBooks) => {
            PUTBooks.ChangeBooks(resAddBooks.body.ID).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null;
                expect(resChangeBook.body.Title).to.eq('The Book and the table III')
            })
        })
    });
});