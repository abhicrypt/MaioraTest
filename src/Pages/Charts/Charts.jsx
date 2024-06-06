import React from 'react'
import ReactEcharts from 'echarts-for-react';
import LIneChart from './LIneChart'
import BarChart from './BarChart';
import './Chart.css'

function Charts() {
  return (
    <>
    <h1>Graphs</h1>
      <div className="rowTwo" style={{backgroundColor:'#f9f9f9' , paddingTop:'0.1rem',marginTop:'0.2rem'}}>
        
      <LIneChart/>

      <BarChart/>
    </div>
    </>
      
  )
}

export default Charts
