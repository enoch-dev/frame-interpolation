<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/batman.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Frame Interpolation
        </h1>

        <p class="subheading font-weight-regular">
          Upload your image or video to improve clarity.
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          Image / Video File Upload
        </h2>
<v-btn
      :loading="loading"
      :disabled="loading"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading'"
    >
      Upload
      <v-icon
        right
        dark
      >
        mdi-cloud-upload
      </v-icon>
    </v-btn>
       </v-col>

    </v-row>
    <vgrid></vgrid>
  </v-container>
</template>

<script>
import vgrid from './vgrid';

  export default {
    name: 'Main',
    data: () => ({
      loader: null,
      loading: false,
      ecosystem: [
      ],
      importantLinks: [
      ],
      whatsNext: [
      ],
    }),
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },

  components: {
    vgrid,
  },
  }
</script>
<style scoped>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>