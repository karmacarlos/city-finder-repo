describe('Sad path testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    .intercept('Get', 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=20&countryIds=Q30&minPopulation=600000', { fixture: 'bigCities'})
    .as('big-cities-search')
  })

  it('Should be able to see proper message if no data is retrieved', () => {

  })

  it('Should be able to see a message if no image of the city was retrieved', () => {

  })

  it('Should be able to see a message if no info of the city was retrieved', () => {

  })

  it('Should be able to see a message if comparison chart is full', () => {

  })

  it('Should be able to se a proper message if comparison chart is empty', () => {

  })
})