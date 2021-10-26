<template>
  <b-card style="padding-bottom: 30px;">
    <b-card-title class="mb-1">
      Device Ratio
    </b-card-title>
    <b-card-sub-title class="mb-2">
      Last 7 days
    </b-card-sub-title>

    <vue-apex-charts
      v-if="!loading"
      type="donut"
      height="350"
      :options="donutsOptions.chartOptions"
      :series="donutsOptions.series"
    />
  </b-card>
</template>

<script>
import { BCard, BCardTitle, BCardSubTitle } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import axios from "axios";
import donutsOptions from "./chartOptions.js";

export default {
  components: {
    VueApexCharts,
    BCard,
    BCardTitle,
    BCardSubTitle,
  },
  data() {
    return {
      loading: false,
      donutsOptions: donutsOptions,
    };
  },
  async created() {
    this.loading = true;
    const response = await axios.get(
      "http://localhost:8081/api/analytics/sessions-by-device"
    );
    this.donutsOptions.series = response.data;
    this.loading = false;
  },
};
</script>
