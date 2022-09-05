<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart"></highcharts>
  </div>
</template>

<script>

export default {
  name: "LineChart",
  props: ['chartData'],
  data() {
    //alert(this.chartData.datasets[0].data )
    let today = new Date();
    return {
      chartOptions: {
        title: {
          text: `${this.chartData.datasets[0].label} chart`
        },
        xAxis: {
          title: {
            text: ''
          },
          type: 'datetime',
          tickPositioner: function () {
            return this.series[0].xData;
          }, 
          labels: {
            format: '{value:%e %b}'
          }
        },
        plotOptions: {
          series: {
            color: '#FF0000'
          }
        },

        series: [{
          name: this.chartData.datasets[0].name,
          data: this.chartData.datasets[0].data || {},
          pointStart: today.setDate(today.getDate() - 7),
          pointInterval: 24 * 3600 * 1000
        }]
      }
    };
  }
};
</script>
