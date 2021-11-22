describe('Sad path testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    
  })

  it('Should be able to see proper message if no data is retrieved when searching for cities', () => {
    cy.intercept('Get', 'https://city-finder-server.herokuapp.com/geoDB/600000', {})
    .as('big-cities-search-error')
    .get(':nth-child(3) > .css-1yrzk2j > .MuiTypography-root')
    .click()
    .get('h3')
    .should('contain', 'Something went wrong, please try again later')
  })

  it('Should be able to see a message if no image and information of the city was retrieved', () => {
    cy.visit('http://localhost:3000/Chicago/IL/41.8819/-87.6278')
    .intercept('Get','https://city-finder-server.herokuapp.com/wiki/Chicago', { })
    .as('chicago-wiki-error')
    .intercept('Get','https://city-finder-server.herokuapp.com/walkScores/Chicago/IL/41.8819/-87.6278', { })
    .as('chicago-walk-score-error')
    .get('h2')
    .should('contain', 'We are sorry, we don\'t have an image for this city')
    .get('h3')
    .should('contain', 'We are sorry, try again with another city')
  })

  it('Should be able to se a proper message if comparison chart is empty', () => {
    cy.intercept('Get', 'https://city-finder-server.herokuapp.com/geoDB/600000', { fixture: 'bigCities'})
    .as('big-cities-stub')
    .get(':nth-child(3) > .css-1yrzk2j > .MuiTypography-root')
    .click()
    .get('.nav > :nth-child(3)')
    .click()
    .get('h2')
    .should('contain', 'Try adding some cities to compare')
  })
})