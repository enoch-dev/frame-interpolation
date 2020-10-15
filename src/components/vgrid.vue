 <template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="X">
        Before
      </v-col>
      <v-col cols="X">
        After
      </v-col>
    </v-row>
    <v-row v-for="(item, itemObjKey) in dataset" :key="(item, itemObjKey)">
      <v-col cols="X">
      <v-img
          :src="item.before.src"
          :lazy-src="item.before.lazy"
          aspect-ratio="1"
          class="grey lighten-2"
          contain
        >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      </v-col>
       <v-col cols="X">
      <v-img
          :src="item.after.src"
          :lazy-src="item.after.lazy"
          aspect-ratio="1"
          class="grey lighten-2"
          contain
        >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'vgrid',
  data: () => ({
    size: 10,
    dataset: [
      {
        name: "item1",
        isEnabled: false,
        before: {
          src: "https://picsum.photos/500/300?image=1",
          lazy: "https://picsum.photos/10/6?image=1"
        },
        after: {
          src: "https://picsum.photos/500/300?image=2",
          lazy: "https://picsum.photos/10/6?image=2"
        },      
      }
    ]
  })
}
</script>