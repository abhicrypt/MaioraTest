import React from 'react'
import ReactEcharts from 'echarts-for-react';
function LIneChart() {
  return (
    <div>
      <ReactEcharts
              option = {{
                xAxis: {
                  type: 'category',
                  name: "Day",
                  nameTextStyle: {
                    align: "center",
                    height: 12,
                    textShadowOffsetY: 11.5,
                    verticalAlign: "top",
                    padding:[3,0,0,0],
                    lineHeight: 25
                  },
                  nameLocation: "middle",
                  boundaryGap: false,
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                  type: 'value',
                  name: 'Kbit/s',
                },
                series: [
                  {
                    data: [150, 230, 224, 218, 135, 147, 260],
                    type: 'line'
                  }
                ]
              }}
           />
    </div>
  )
}

export default LIneChart
