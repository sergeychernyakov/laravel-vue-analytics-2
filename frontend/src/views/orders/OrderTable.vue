<template>
  <b-card-code
    title="Orders"
    no-body
  >
    <div>
      <b-table
        :items="items"
        :fields="fields"
        striped
        responsive
        class="mb-0"
      >
        <template #cell(show_details)="row">

          <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
          <b-form-checkbox
            v-model="row.detailsShowing"
            @change="row.toggleDetails"
          >
            {{ row.detailsShowing ? 'Hide' : 'Show' }}
          </b-form-checkbox>
        </template>

        <!-- full detail on click -->
        <template #row-details="row">
          <b-card>
            <b-row class="mb-2">
              <b-col
                md="4"
                class="mb-1"
              >
                <strong>Full Name : </strong>{{ row.item.full_name }}
              </b-col>
              <b-col
                md="4"
                class="mb-1"
              >
                <strong>Post : </strong>{{ row.item.post }}
              </b-col>
              <b-col
                md="4"
                class="mb-1"
              >
                <strong>Email : </strong>{{ row.item.customer_email }}
              </b-col>
              <b-col
                md="4"
                class="mb-1"
              >
                <strong>City : </strong>{{ row.item.city }}
              </b-col>
              <b-col
                md="4"
                class="mb-1"
              >
                <strong>Salary : </strong>{{ row.item.salary }}
              </b-col>
              <b-col
                md="4"
                class="mb-1"
              >
                <strong>Age : </strong>{{ row.item.age }}
              </b-col>
            </b-row>

            <b-button
              size="sm"
              variant="outline-secondary"
              @click="row.toggleDetails"
            >
              Hide Details
            </b-button>
          </b-card>
        </template>

        <template #cell(avatar)="data">
          <b-avatar :src="data.value" 
                :to="{ name: 'apps-users-view', params: { id: data.item.entity_id } }"/>
        </template>

        <template #cell(status)="data">
          <b-badge :variant="status[1][data.value]">
            {{ status[0][data.value] }}
          </b-badge>
        </template>
      </b-table>
    </div>

    <template #code>
      {{ codeRowDetailsSupport }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BTable, BFormCheckbox, BButton, BCard, BRow, BCol, BAvatar, BBadge,
} from 'bootstrap-vue'
import axios from '@axios'
import { codeRowDetailsSupport } from './code'

export default {
  components: {
    BCardCode,
    BTable,
    BButton,
    BFormCheckbox,
    BCard,
    BRow,
    BCol,
    BBadge,
    BAvatar,
  },
  data() {
    return {
      fields: ['show_details', 'increment_id', { key: 'avatar', label: 'Avatar' }, 'full_name', 'created_at', 'customer_email', 'grand_total', { key: 'status', label: 'Status' }],
      /* eslint-disable global-require */
      items: [ ],
      /* eslint-disable global-require */
      status: [{
        'complete': 'Complete', 'pending': 'Pending', 3: 'Rejected', 4: 'Resigned', 5: 'Applied',
      },
      {
        1: 'light-primary', 'complete': 'light-success', 3: 'light-danger', 'pending': 'light-warning', 'new': 'light-info',
      }],
      codeRowDetailsSupport,
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
