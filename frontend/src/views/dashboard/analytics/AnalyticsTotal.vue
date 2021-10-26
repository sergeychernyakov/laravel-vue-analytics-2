<template>
  <b-card no-body>
    <b-card-header>
      <b-card-title class="mb-sm-0 mb-1">
        Percent for this Week(Month).
      </b-card-title>
    </b-card-header>

    <b-card-body>
      <vue-apex-charts
        v-if="!loading"
        type="radialBar"
        height="400"
        :options="apexChatData.chartOptions"
        :series="apexChatData.series"
      />
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardTitle, BCardBody, BCardHeader,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import apexChatData from './radialChartOptions.js'
import axios from 'axios'

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardBody,
    BCardHeader,
  },
  data() {
    return {
        loading: false,
      apexChatData,
    }
  },
  async created() {
    this.loading = true;
    const response = await axios.get(
      "http://localhost:8081/api/analytics/statistics"
    );
    this.apexChatData.series = response.data;
    this.loading = false;
  },
}
</script>
