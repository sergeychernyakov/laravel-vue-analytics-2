// colors
const chartColors = {
  column: {
    series1: "#826af9",
    series2: "#d2b0ff",
    bg: "#f8d3ff",
  },
  success: {
    shade_100: "#7eefc7",
    shade_200: "#06774f",
  },
  donut: {
    series1: "#ffe700",
    series2: "#00d4bd",
    series3: "#826bf8",
    series4: "#2b9bf4",
    series5: "#FFA1A1",
  },
  area: {
    series3: "#a4f8cd",
    series2: "#60f2ca",
    series1: "#2bdac7",
  },
};

export default {
  series: [0, 0, 0],
  chartOptions: {
    colors: [
      chartColors.donut.series1,
      chartColors.donut.series2,
      chartColors.donut.series4,
    ],
    plotOptions: {
      radialBar: {
        size: 185,
        hollow: {
          size: "25%",
        },
        track: {
          margin: 15,
        },
        dataLabels: {
          name: {
            fontSize: "2rem",
            fontFamily: "Montserrat",
          },
          value: {
            fontSize: "1rem",
            fontFamily: "Montserrat",
          },
          total: {
            show: true,
            fontSize: "1rem",
            label: "Operational",
            formatter() {
              return "34.5%";
            },
          },
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Users", "Sessions", "Pages"],
  },
};
