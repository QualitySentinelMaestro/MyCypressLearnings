
it ('Google Search' , function()
{
  cy.visit('https://cypress.io.com')

  cy.get('#APjFqb').type('Automation Step by STep') 

  cy.contains('Google Search').click()
  

  
}
)
