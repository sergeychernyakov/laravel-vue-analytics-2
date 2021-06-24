<template>
  <b-card-code
    title="Sticky columns and headers"
    no-body
  >
    <b-card-body>
      <b-form-checkbox
        v-model="stickyHeader"
        inline
      >
        Sticky header
      </b-form-checkbox>
      <b-form-checkbox
        v-model="noCollapse"
        inline
      >
        No border collapse
      </b-form-checkbox>
    </b-card-body>

    <!-- table -->
    <b-table
      :sticky-header="stickyHeader"
      :no-border-collapse="noCollapse"
      responsive
      :items="items"
      :fields="fields"
      class="mb-0"
    >

      <!-- We are using utility class `text-nowrap` to help illustrate horizontal scrolling -->
      <template #head(id)>
        <div class="text-nowrap">
          Row ID
        </div>
      </template>

      <template #head()="scope">
        <div class="text-nowrap">
          {{ scope.label }}
        </div>
      </template>

      <template #cell(avatar)="data">
        <b-avatar
          class="mr-1"
          :src="data.value"
        />
      </template>

      <template #cell(status)="data">
        <b-badge :variant="status[1][data.value]">
          {{ status[0][data.value] }}
        </b-badge>
      </template>

      <template #cell()="data">
        <span class="text-nowrap">{{ data.value }}</span>
      </template>
    </b-table>

    <template #code>
      {{ codeSticky }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import axios from '@axios'
import {
  BTable, BFormCheckbox, BAvatar, BBadge, BCardBody,
} from 'bootstrap-vue'
import { codeSticky } from './code'

export default {
  components: {
    BCardCode,
    BTable,
    BCardBody,
    BFormCheckbox,
    BAvatar,
    BBadge,
  },
  data() {
    return {
      stickyHeader: true,
      noCollapse: false,
      fields: [
        {
          key: 'increment_id', stickyColumn: true, isRowHeader: true, variant: 'primary',
        },
        'created_at',
        'total_paid',
        'customer_email',
        'status',
      ],
      /* eslint-disable global-require */
      items: [],
      /* eslint-disable global-require */
      status: [{
        'complete': 'complete', 'pending': 'Pending', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        'complete': 'light-primary', 'pending': 'light-success', 3: 'light-danger', 4: 'light-warning', 5: 'light-info',
      }],
      codeSticky,
    }
  },
            mounted() {
    axios
      .get('/api/auth/omni').then(response => {
            this.items = response.data.items
          })
  },
}
</script>
