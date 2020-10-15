<template>
  <v-app>
<<<<<<< HEAD
    <v-app-bar app></v-app-bar>

    <v-main>
      <FrameInterpolation />
    </v-main>
  </v-app>
</template>

<script>
import FrameInterpolation from './components/FrameInterpolation'
=======
  <!-- <v-app-bar app></v-app-bar> -->

  <v-main>
    <Main/>
  </v-main>
</v-app>
</template>

<script>
import Main from './components/Main';
>>>>>>> cb408a2ca5e190f9ad402a28ab3f89876a90fdf1

export default {
  name: 'App',

  components: {
<<<<<<< HEAD
    FrameInterpolation
=======
    Main,
>>>>>>> cb408a2ca5e190f9ad402a28ab3f89876a90fdf1
  },

  data: () => ({
    //
  }),
}
</script>
