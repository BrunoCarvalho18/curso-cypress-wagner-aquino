// eslint-disable-next-line no-undef
describe('Work with basic elements',()=>{
    // eslint-disable-next-line no-undef
    it('Text',()=>{
        // eslint-disable-next-line no-undef
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        // eslint-disable-next-line no-undef
        cy.get('body').should('contain','Cuidado')
    })
    
})