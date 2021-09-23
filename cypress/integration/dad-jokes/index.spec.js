describe('Dad Jokes Index', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('displays jokes list with 10 items', () => {
        cy.get('.MuiListItem-root').should('have.length', 10);
    });

    it('searches for jokes about eggs', async () => {
        cy.get('.MuiList-root').should('be.visible');
        cy.get('.MuiOutlinedInput-input').type('egg');
        await cy.contains('.MuiList-root', /egg/i).should('be.visible');
    });

    it('searches for jokes with no results', async () => {
        const searchTerm = 'asdifjas9je';
        cy.get('.MuiList-root').should('be.visible');
        cy.get('.MuiOutlinedInput-input').type(searchTerm);
        await cy
            .contains(`No jokes found for ${searchTerm}`)
            .should('be.visible');
    });
});
