// colors
const chartColors = {
    column: {
      series1: '#826af9',
      series2: '#d2b0ff',
      bg: '#f8d3ff',
    },
    success: {
      shade_100: '#7eefc7',
      shade_200: '#06774f',
    },
    donut: {
      series1: '#ffe700',
      series2: '#00d4bd',
      series3: '#826bf8',
      series4: '#2b9bf4',
      series5: '#FFA1A1',
    },
    area: {
      series3: '#a4f8cd',
      series2: '#60f2ca',
      series1: '#2bdac7',
    },
  }

export default {
    series: [0, 0],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: 'Montserrat',
      },
      colors: [
        chartColors.donut.series5,
        chartColors.donut.series2,
      ],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: 'Montserrat',
              },
              value: {
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                // label: 'Operational',
                // formatter() {
                //   return '31%'
                // },
              },
            },
          },
        },
      },
      labels: ['Desktop', 'Mobile'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  }