import React from "react";
import ReactApexChart from "react-apexcharts";

class BarChartSales extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Author",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Customer",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
      ],
      options: {
        fill: {
          colors: ["#5d77ff", "#afb4d4"],
        },
        labels: ["Author", "Customer"],
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " thousands";
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
          height={350}
        />
      </div>
    );
  }
}

export default BarChartSales;
