  // Restored app
  const getCities = (minPopulation) => {
    return fetch(`https://city-finder-server.herokuapp.com/geoDB/${minPopulation}`)
    .then(response => checkResponse(response))
  }
    
  const getCitySummary = (cityName) => {
    const fetchQuery = cityName.split(' ')
    if (fetchQuery.length === 1) {
      return wikiFetch(cityName)
    } else {
      const multipleWordsQuery = fetchQuery.join('_')
      return wikiFetch(multipleWordsQuery)
    } 
  }
  
  const wikiFetch = (fetchQuery) => {
    return fetch(`https://city-finder-server.herokuapp.com/wiki/${fetchQuery}`)
    .then(response => checkResponse(response))
  }
  
  const getWalkScores = (city, state, latitude, longitude) => {
    const fetchQuery = city.split(' ')
    if (fetchQuery.length === 1) {
      return walkScoresFetch(city, state, latitude, longitude)
    } else {
      const multipleWordsQuery = fetchQuery.join('%20')
      return walkScoresFetch(multipleWordsQuery, state, latitude, longitude)
    }   
  }
  
  const walkScoresFetch = (city, state, latitude, longitude) => {
    return fetch(`https://city-finder-server.herokuapp.com/walkScores/${city}/${state}/${latitude}/${longitude}`)
    .then(response => checkResponse(response))
  }

  const checkResponse = response => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status} message: ${response.statusText}`)
    }
    return response.json()
  }
  
  export { getCities, getCitySummary, getWalkScores }