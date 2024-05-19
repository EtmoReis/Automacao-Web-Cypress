describe('validar tela de Login', () => {
  it('acessar tela de Login', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.contains("Login")
  })
})