export const chartReducer = (state, action) => {
  switch (action.type){
    case 'ADD_CITY' :
      if(state.length < 3) {
        return [...state, action.city]
      }
    break;
    case 'REMOVE_CITY' :
      const filteredCities = state.filter(cityState => {
        return action.city.id !== cityState.id
      })
      return filteredCities
    default :
    return state
  }
}