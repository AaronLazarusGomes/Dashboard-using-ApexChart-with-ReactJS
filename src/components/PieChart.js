import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41],
      options: {
        colors: ["#5d77ff", "#656c9a", "#afb4d4"],
        labels: ["Angular", "HTML", "Java"],
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: "donut",
        },
        plotOptions: {
          pie: {
            size: 100,
            customScale: 0.8,
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
          type="donut"
        />
      </div>
    );
  }
}

export default ApexChart;
