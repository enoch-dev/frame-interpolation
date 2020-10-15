<template>
  <v-app>
    <v-app-bar app></v-app-bar>

    <v-main>
      <FrameInterpolation />
    </v-main>
  </v-app>
</template>

<script>
import FrameInterpolation from './components/FrameInterpolation'

export default {
  name: 'App',

  components: {
    FrameInterpolation
  },

  data: () => ({
    //
  }),
}
</script>
