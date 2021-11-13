import React, { createContext, useState } from "react"

export const ChartContext = createContext()

const ChartContextProvider = (props) => {
  const [chart, setChart] = useState([])

  const addCity = (city) => {
    chart.length < 3 && setChart([...chart, city])
  }

  const removeCity = (city) => {
    const filteredCities = chart.filter(cityState => {
      return city.id !== cityState.id
    })
    setChart(filteredCities)
  }

  return ( 
    <ChartContext.Provider value={{ chart, addCity, removeCity }}>
      {props.children}
    </ChartContext.Provider>
   );
}
 
export default ChartContextProvider;