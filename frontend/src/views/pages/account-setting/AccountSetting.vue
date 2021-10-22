<template>
  <b-tabs
    vertical
    content-class="col-12 col-md-9 mt-1 mt-md-0"
    pills
    nav-wrapper-class="col-md-3 col-12"
    nav-class="nav-left"
  >

    <!-- general tab -->
    <b-tab active
    v-for="item in items"
       :key="items" >

      <!-- title -->
      <template #title>
        <feather-icon
          icon="UserIcon"
          size="18"
          class="mr-50"
        />
        <span class="font-weight-bold">{{item.component}}</span>
      </template>
<template>
  <b-card
    :img-src="require('@/assets/images/banner/banner-12.jpg')"
    img-alt="Profile Cover Photo"
    img-top
    class="card-profile"
  >
    <div class="profile-image-wrapper">
      <div class="profile-image p-0">
        <b-avatar
          size="114"
          variant="light"
          :src="require('@/assets/images/portrait/small/avatar-s-9.jpg')"
        />
      </div>
    </div>
    <h3>{{item.Title}}</h3>
    <h6 class="text-muted">
      {{item.Sub_title}}
    </h6>
    <b-badge
      class="profile-badge"
      variant="light-primary"
    >
      Pro Level
    </b-badge>
    <hr class="mb-2">

    <!-- follower projects rank -->
    <div class="d-flex justify-content-between align-items-center">
      <div>
        <h6 class="text-muted font-weight-bolder">
          Followers
        </h6>
        <h3 class="mb-0">
          10.3k
        </h3>
      </div>
      <div>
        <h6 class="text-muted font-weight-bolder">
          Projects
        </h6>
        <h3 class="mb-0">
          156
        </h3>
      </div>
      <div>
        <h6 class="text-muted font-weight-bolder">
          Rank
        </h6>
        <h3 class="mb-0">
          23
        </h3>
      </div>
    </div>
    <!--/ follower projects rank -->
  </b-card>
</template>

    </b-tab>
    <!--/ general tab -->

  </b-tabs>
</template>

<script>
import { BTabs, BTab } from 'bootstrap-vue'
import AccountSettingGeneral from './AccountSettingGeneral.vue'
import AccountSettingPassword from './AccountSettingPassword.vue'
import AccountSettingInformation from './AccountSettingInformation.vue'
import AccountSettingSocial from './AccountSettingSocial.vue'
import AccountSettingNotification from './AccountSettingNotification.vue'
import axios from '@axios'

export default {
  components: {
    BTabs,
    BTab,
    AccountSettingGeneral,
    AccountSettingPassword,
    AccountSettingInformation,
    AccountSettingSocial,
    AccountSettingNotification,
  },
  data() {
    return {
       fields: ['component'],
      options: {},
      items: [ ],
    }
  },
                 mounted() {
    axios
      .get('/api/auth/content').then(response => {
            this.items = response.data.story.content.body
          })
  },
  beforeCreate() {
    this.$http.get('/account-setting/data').then(res => { this.options = res.data })
  },
}
</script>
