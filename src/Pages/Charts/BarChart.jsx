import React from "react";
import ReactEcharts from "echarts-for-react";
function BarChart() {
  return (
    <div>
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            name: "Day",
            nameTextStyle: {
              align: "center",
              height: 12,
              textShadowOffsetY: 11.5,
              verticalAlign: "top",
              padding: [3, 0, 0, 0],
              lineHeight: 25,
            },
            nameLocation: "middle",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
            name: "Kbit/s",
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: "bar",
            },
          ],
        }}
      />
    </div>
  );
}

export default BarChart;
