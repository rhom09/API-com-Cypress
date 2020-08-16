import * as POSTBook from '../requests/POSTBooks.request';

describe('POST Books', () => {
    it('Adicionar um novo livro', () => {
        POSTBook.addBooks().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.Title).to.eq("The Book and the table");
        })
    });
});