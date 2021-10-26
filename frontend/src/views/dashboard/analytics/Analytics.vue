<template>
  <section id="dashboard-analytics">
    <b-row class="match-height">
      <b-col
        lg="6"
        md="12"
      >
        <analytics-avg-sessions :data="data.avgSessions" />
      </b-col>
      <b-col
        lg="6"
        md="12"
      >
        <statistic-card-with-area-chart
          icon="UsersIcon"
          :statistic="kFormatter(data.subscribersGained.analyticsData.subscribers)"
          statistic-title="Visitors"
          :chart-data="data.subscribersGained.series"
        />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="6">
        <ananlytics-session-donut-chart />
      </b-col>
      <b-col cols="6">
        <ananlytics-total />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <analytics-visitors-table />
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <analytics-users-by-countries />
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from "bootstrap-vue";

import StatisticCardWithAreaChart from "@core/components/statistics-cards/StatisticCardWithAreaChart.vue";
import { kFormatter } from "@core/utils/filter";
import InvoiceList from "@/views/apps/invoice/invoice-list/InvoiceList.vue";
import AnalyticsCongratulation from "./AnalyticsCongratulation.vue";
import AnalyticsAvgSessions from "./AnalyticsAvgSessions.vue";
import AnalyticsSupportTracker from "./AnalyticsSupportTracker.vue";
import AnalyticsTimeline from "./AnalyticsTimeline.vue";
import AnalyticsSalesRadarChart from "./AnalyticsSalesRadarChart.vue";
import AnalyticsAppDesign from "./AnalyticsAppDesign.vue";
import AnalyticsVisitorsTable from "./AnalyticsVisitorsTable.vue";
import axios from "axios";
import AnalyticsUsersByCountries from "./AnalyticsUsersByCountries.vue";
import AnanlyticsSessionDonutChart from "./AnanlyticsSessionDonutChart.vue";
import AnanlyticsTotal from './AnalyticsTotal.vue';

export default {
  components: {
    BRow,
    BCol,
    AnalyticsCongratulation,
    AnalyticsAvgSessions,
    StatisticCardWithAreaChart,
    AnalyticsSupportTracker,
    AnalyticsTimeline,
    AnalyticsSalesRadarChart,
    AnalyticsAppDesign,
    InvoiceList,
    AnalyticsVisitorsTable,
    AnalyticsUsersByCountries,
    AnanlyticsSessionDonutChart,
    AnanlyticsTotal
  },
  data() {
    return {
      data: {},
    };
  },
  async created() {
    this.$http.get("/analytics/data").then((response) => {
      this.data = response.data;
    });
    axios.get("http://localhost:8081/api/analytics/users").then((response) => {
      this.data.subscribersGained = response.data;
    });
    axios
      .get("http://localhost:8081/api/analytics/sessions")
      .then((response) => {
        this.data.avgSessions = response.data;
      });
  },
  methods: {
    kFormatter,
  },
};
</script>
