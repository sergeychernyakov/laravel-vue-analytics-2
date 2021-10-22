<template>
  <section id="card-actions">
  <b-card>
    <!-- media -->
    <b-media no-body>
      <b-media-aside>
        <b-link>
          <b-img
            ref="previewEl"
            rounded
            :src="'http://54.74.138.56/pub/media/catalog/product/5/1/51472219794-01_5290.jpg'"
            height="80"
          />
        </b-link>
        <!--/ avatar -->
      </b-media-aside>

      <b-media-body class="mt-75 ml-75">
        <b-card-text>{{productData.name}}</b-card-text>
      </b-media-body>
    </b-media>
    <!--/ media -->

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col sm="6">
          <b-form-group
            label="Name"
            label-for="account-username"
          >
            <b-form-input
              v-model="productData.name"
              placeholder="Username"
              name="Name"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="SKU"
            label-for="account-name"
          >
            <b-form-input
              v-model="productData.sku"
              name="SKU"
              placeholder="sku"
            />
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group
            label="Company"
            label-for="account-company"
          >
            <b-form-input
              v-model="optionsLocal.company"
              name="company"
              placeholder="Company name"
            />
          </b-form-group>
        </b-col>

      
        <!--/ alert -->
        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-2 mr-1"
          >
            Save changes
          </b-button>
        </b-col>
      </b-row>
      
    </b-form>
  </b-card>
    <b-card>
    <!-- media -->
    <b-media no-body>
      <b-media-aside>
        <b-link>
          <b-img
            ref="previewEl"
            rounded
            :src="'http://54.74.138.56/pub/media/catalog/product/5/1/51472219794-01_5290.jpg'"
            height="80"
          />
        </b-link>
        <!--/ avatar -->
      </b-media-aside>

      <b-media-body class="mt-75 ml-75">
        <b-card-text>{{productData.name}}</b-card-text>
      </b-media-body>
    </b-media>
    <!--/ media -->

    <!-- form -->
    <b-form class="mt-2">
      <b-row>
        <b-col sm="6">
          <b-form-group
            label="Name"
            label-for="account-username"
          >
            <b-form-input
              v-model="productData.name"
              placeholder="Username"
              name="Name"
            />
          </b-form-group>
        </b-col>
        <b-col sm="6">
          <b-form-group
            label="SKU"
            label-for="account-name"
          >
            <b-form-input
              v-model="productData.sku"
              name="SKU"
              placeholder="sku"
            />
          </b-form-group>
        </b-col>

        <b-col sm="6">
          <b-form-group
            label="Company"
            label-for="account-company"
          >
            <b-form-input
              v-model="optionsLocal.company"
              name="company"
              placeholder="Company name"
            />
          </b-form-group>
        </b-col>

      
        <!--/ alert -->
        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-2 mr-1"
          >
            Save changes
          </b-button>
        </b-col>
      </b-row>
      
    </b-form>
  </b-card>
  </section>
</template>

<script>
import {
  BFormFile, BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BAlert, BCard, BCardText, BMedia, BMediaAside, BMediaBody, BLink, BImg,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'

export default {
  components: {
    BButton,
    BForm,
    BImg,
    BFormFile,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BAlert,
    BCard,
    BCardText,
    BMedia,
    BMediaAside,
    BMediaBody,
    BLink,
  },
  directives: {
    Ripple,
  },
  props: {
        productData: {
      type: Object,
      required: true,
    },
    generalData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      optionsLocal: JSON.parse(JSON.stringify(this.generalData)),
      profileFile: null,

        items: {},
    }
  },
  methods: {
    resetForm() {
      this.optionsLocal = JSON.parse(JSON.stringify(this.generalData))
    },
  },
  setup() {
    const refInputEl = ref(null)
    const previewEl = ref(null)
    const { inputImageRenderer } = useInputImageRenderer(refInputEl, previewEl)

    return {
      refInputEl,
      previewEl,
      inputImageRenderer,
    }
  },
    computed: {
    image1() {
              return `http://54.74.138.56/pub/media/catalog/product${this.productData.media_gallery_entries[0].file}`
    }
},
}
</script>
