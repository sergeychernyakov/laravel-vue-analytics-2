<template>
  <div>
    <b-table
      striped
      hover
      :items="items"
      :fields="fields"
    ></b-table>
  </div>
</template>

<script>
import { BTable } from "bootstrap-vue";
import axios from 'axios';

export default {
  components: { BTable },
  name: "analytics-visitors-table",
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: "date",
          label: "Date",
        },
        {
          key: "pageTitle",
          label: "Page Title",
        },
        {
          key: "visitors",
          label: "Visitors",
        },
        {
          key: "pageViews",
          label: "Page Views",
        },
      ],
      items: [
          {date: '', pageTitle: '', visitors: '', pageViews: ''}
      ],
    };
  },
  async created() {
    await axios
      .get("http://localhost:8081/api/analytics/visitors")
      .then((response) => {
        this.items = response.data;console.log('response', response.date);
      });
  },
};
</script>