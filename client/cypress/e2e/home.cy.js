// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
describe('Home Page', () => {
  it('should load successfully', () => {
    cy.visit('http://localhost:3000/');
   cy.get('img[alt="SocialEcho"]').should('be.visible'); // Adjust text as needed
  });
});