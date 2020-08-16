/// <reference types="cypress" />

const payloadChangeBook = require('../payloads/change-book.json');

function ChangeBooks(idBook) {
    
    return cy.request({
        method: 'PUT',
        url: `Books/${idBook}`,
        headers: {
            'Content-Type': 'application/json',
        },
        failOnStatusCode: false,
        body: payloadChangeBook,
    });

}

export {ChangeBooks};