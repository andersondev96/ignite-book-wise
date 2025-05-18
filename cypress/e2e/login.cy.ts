describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('Renderiza todos os botões de login', () => {
    cy.get('[data-testid="login-google"]').should('exist')
    cy.get('[data-testid="login-github"]').should('exist')
    cy.get('[data-testid="guest-access"]').should('exist')
  })

  it('Acessa como visitante e redireciona para home', () => {
    cy.get('[data-testid="guest-access"]').click()
    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
  })

  it('Clica no login com o Google', () => {
    cy.intercept('GET', '**/auth/**').as('authGoogle')
    cy.get('[data-testid="login-google"]').click()
    cy.wait('@authGoogle')
  })
})
