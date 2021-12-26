// eslint-disable-next-line no-undef
describe('Cypress basics',()=>{
    // eslint-disable-next-line no-undef
    it.only('Should visit a page and assert title',()=>{
        // eslint-disable-next-line no-undef
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        
        // eslint-disable-next-line no-undef
        cy.pause()

        // eslint-disable-next-line no-undef
        cy.title().should('be.equal','Campo de Treinamento')
        // eslint-disable-next-line no-undef    
        cy.title().should('contain','Campo')

        // eslint-disable-next-line no-undef 
        cy.title()
            .should('be.equal','Campo de Treinamento')
            .should('contain','Campo')
    })

    // eslint-disable-next-line no-undef
    it('Should find and inspect with an element', ()=>{
        // eslint-disable-next-line no-undef
        cy.visit('https://wcaquino.me/cypress/componentes.html')

        // eslint-disable-next-line no-undef
        cy.get('#buttonSimple').click()
            .should('have.value','Obrigado!')
    })
})