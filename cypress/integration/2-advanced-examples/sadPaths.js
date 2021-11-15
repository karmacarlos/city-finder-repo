describe('Sad path testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    
  })

  it('Should be able to see proper message if no data is retrieved when searching for cities', () => {
    cy.intercept('Get', 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=20&countryIds=Q30&minPopulation=600000', {})
    .as('big-cities-search-error')
    .get(':nth-child(3) > .css-1yrzk2j > .MuiTypography-root')
    .click()
    .get('h3')
    .should('contain', 'Something went wrong, please try again later')
  })

  it('Should be able to see a message if no image and information of the city was retrieved', () => {
    cy.visit('http://localhost:3000/Chicago/IL/41.8819/-87.6278')
    .intercept('https://en.wikipedia.org/api/rest_v1/page/summary/Chicago', { })
    .as('chicago-wiki-error')
    .intercept('https://fe-cors-proxy.herokuapp.com/', {})
    .as('chicago-walk-score-error')
    .get('h2')
    .should('contain', 'We are sorry, we don\'t have an image for this city')
    .get('h3')
    .should('contain', 'We are sorry, try again with another city')
  })

  it('Should be able to see a message if comparison chart is full', () => {

  })

  it('Should be able to se a proper message if comparison chart is empty', () => {

  })
})