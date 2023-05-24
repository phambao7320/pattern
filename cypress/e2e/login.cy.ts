describe('My First Login Test', () => {
    it('login devlandnow', () => {
        cy.visit('https://pr-2194--landnow-ui.netlify.app/')

        // Should go to the login
        cy.url().should('include', '/login')

        // Show form login
        cy.contains('Welcome to Landnow')

        // Form
        cy.get('input[name="userName"]').type('jenny')
        cy.get('input[name="password"]').type('Test123!')
        cy.get('button[type="submit"]').click()
        cy.wait(7000)

        // Login Succesfully
        cy.get('[data-testid="user-fullname"]').contains('Jenny Perry')
    })
})
