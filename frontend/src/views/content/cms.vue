<template>
  <b-row>
    <b-col cols="12">
      <table-rowdetails-support />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import TableRowdetailsSupport from './OrderTable.vue'

export default {
  components: {
    BRow,
    BCol,
    TableRowdetailsSupport,
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
