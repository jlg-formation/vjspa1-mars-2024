// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('Gestion Stock')
    cy.contains('efficacement votre stock')
    cy.contains('Voir le stock').click()
    cy.get('a[title="Ajouter"]').click()

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `x-${id}`

    cy.get('input').eq(0).clear()
    cy.get('input').eq(0).type(testname)
    cy.get('input').eq(1).clear()
    cy.get('input').eq(1).type('123')
    cy.get('input').eq(2).clear()
    cy.get('input').eq(2).type('234')

    cy.contains('button', 'Ajouter').click()

    cy.contains('td', testname).click()
    cy.get('button[title="Supprimer"]').click()
  })
})
