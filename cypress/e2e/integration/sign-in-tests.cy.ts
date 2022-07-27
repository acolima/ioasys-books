/// <reference types="cypress" />
// @ts-check

describe('Sign In page tests', () => {
	const loginData = {
		email: 'desafio@ioasys.com.br',
		password: '12341234',
	};

	it('should sign in sucessfully', () => {
		cy.visit('http://localhost:5173');

		cy.get('#email-input').type(loginData.email);
		cy.get('#password-input').type(loginData.password);

		cy.intercept('POST', 'https://books.ioasys.com.br/api/v1');

		cy.get('#sign-in-button').click();

		cy.wait(500);

		cy.url().should('equal', 'http://localhost:5173/books');
	});

	it('should appear error message given incorrect password', () => {
		cy.visit('http://localhost:5173');

		cy.get('#email-input').type(loginData.email);
		cy.get('#password-input').type('1234');

		cy.intercept('POST', 'https://books.ioasys.com.br/api/v1');

		cy.get('#sign-in-button').click();

		cy.wait(500);

		cy.contains('Usuário ou senha inválida.').should('be.visible');
	});
});
