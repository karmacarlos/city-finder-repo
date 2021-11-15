import React, { createContext, useReducer, useEffect } from "react"
import { chartReducer } from "../reducer/chartReducer";

export const ChartContext = createContext()

const ChartContextProvider = (props) => {
  const [ chart, dispatch ] = useReducer(chartReducer, [], () => {
    const localData = localStorage.getItem('chart')
    return localData ? JSON.parse(localData) : []
  })

  useEffect(() => {
    localStorage.setItem('chart', JSON.stringify(chart))
  })

  return ( 
    <ChartContext.Provider value={{ chart, dispatch }}>
      {props.children}
    </ChartContext.Provider>
   );
}
 
export default ChartContextProvider;