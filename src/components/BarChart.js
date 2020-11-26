import React from "react";
import ReactApexChart from "react-apexcharts";

class BarChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Net Profit",
          data: [5, 2, 7, 4.5, 6, 5.1, 3],
        },
      ],
      options: {
        fill: {
          colors: ["#5d77ff"],
        },
        chart: {
          type: "bar",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "20%",
            endingShape: "rounded",
            // size: 100,
            // customScale: 0.3,
          },
        },
        dataLabels: {
          enabled: false,
        },
        // stroke: {
        //   show: true,
        //   width: 1,
        //   colors: ["transparent"],
        // },

        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={140}
        />
      </div>
    );
  }
}

export default BarChart;
