<template>
  <v-container fluid>
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
        <h1 class="display-2 font-weight-bold mb-3">Frame Interpolation</h1>

        <p class="subheading font-weight-regular">
          Upload your video to increase frame rate.
        </p>
        
      </v-col>

      <v-container fluid>
        <v-row cols="12">
          <v-col class="mb-4"
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-card-title class="text-center" v-text="card.title"></v-card-title>
              <v-img
                :src="card.src"
                class="white--text align-end"
                height="400px"
                width="100%"
              >
              </v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!--<v-col class="mb-5" style="margin-left:auto; margin-right:auto; width:50%;max-width:400" cols="12">
        <v-row>
          <div> 
            <div class="subheading pt-4">
              Original Image
            </div>
            <v-img
              :src="originalImage"
            ></v-img>
          </div> 
        </v-row>
        <v-row>
          <div flex=6>
            <div class="subheading pt-4">
              Sharpened Image
            </div>
            <v-img
              src="https://picsum.photos/510/300?random"
            ></v-img>
          </div>
        </v-row>
      </v-col>-->

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-3">{{frame.title}}</h2>
        <template>
          <v-file-input @change="onFileChange"
            accept="image/*, video/*"
            show-size
            label="Upload a video or an image"
            v-model="selectedFile"
          ></v-file-input>
        </template>
        <!-- error dialog displays any potential error messages -->
        <v-dialog v-model="errorDialog" max-width="300">
          <v-card>
            <v-card-text class="subheading">{{errorText}}</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="errorDialog = false" flat>Got it!</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <!--<v-btn
          :loading="loading"
          :disabled="loading"
          color="blue-grey"
          class="ma-2 white--text"
          @click="loader = 'loading'"
        >
          Upload
          <v-icon right dark> mdi-cloud-upload </v-icon>
        </v-btn>-->
      </v-col>

      <v-col>
        <div class="my-2">
            <v-btn @click="processFile"
              x-large
              color="success"
              dark
            >
              Process Image
            </v-btn>
          </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FrameInterpolation',
  data: () => ({
    loader: null,
    loading: false,
    originalImage: null,
    sharpenedImage: null,
    playing: true,
    frame:{
      title: 'Movie or Image File Upload'
      //originalImage: this.originalImage
    },
    cards: [
        //{ title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Original Image', src: '', flex: 6 },
        { title: 'Sharpened Image', src: '', flex: 6 },
      ],
    errorDialog: null,
    errorText: '',
    uploadFieldName: 'file',
    maxSize: 1024,
    selectedFile: null, // <- initialize the v-model prop
    fileToProcess: null,
    data: null,
    sharpenedData: null
  }),
  methods:{
      processFile(selected){
        var reader = new FileReader();
        const axios = require('axios')
        console.log("This is the file" + this.fileToProcess);
        //console.log("This is the file2" + this.data);
        //console.log("This is the file3" + this.selectedFile);
        //axios.post('https://frame-sharpening.herokuapp.com/', {data: this.fileToProcess}, {crossDomain: true},{
        axios.post('http://127.0.0.1:5000/', {data: this.fileToProcess}, {crossDomain: true},{
            headers: {
              'Access-Control-Allow-Origin' : 'http://127.0.0.1:5000',
              'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              'crossorigin':true
            }
        })
        .then((resp) => {
            let data = resp.data
            console.log("This is the response data " + data)
            if(data && data.length > 0){
              reader.readAsArrayBuffer(data)
              reader.onload = () => {
                this.sharpenedData = reader.result;
                let sharpenedDataUrl = URL.createObjectURL(this.sharpenedData)
                console.log(sharpenedData); 
                console.log("This is the file 13" + this.selectedFile);
              }
            }
        })
        .catch(error => console.log("This is error" + error));
      
      //await Vue.axios.post('/')
      //var url = URL.createObjectURL(this.selectedFile)
      console.log("This is the file 14" + this.selectedFile);
    },
    onFileChange() {
       if (!this.selectedFile) {this.data = "No File Chosen"}
        var reader = new FileReader();
        //reader.readAsArrayBuffer(this.selectedFile)
        reader.readAsDataURL(this.selectedFile)
        reader.onload = () => {
          this.data = reader.result;
          //this.cards[0].src = this.originalImage;
          this.fileToProcess = this.data;
          console.log(this.fileToProcess)
        }
      
      let imageURL = URL.createObjectURL(this.selectedFile)
      this.originalImage = imageURL
      this.cards[0].src = this.originalImage;
      this.fileToProcess = this.selectedFile;
      console.log(imageURL)
      console.log("This is the file" + this.selectedFile)

    /*const { maxSize } = this
    let imageFile = file[0]
    console.log("imageFile");
    if (file.length>0) {
      let size = imageFile.size / maxSize / maxSize
      if (!imageFile.type.match('image.*')) {
        // check whether the upload is an image
        this.errorDialog = true
        this.errorText = 'Please choose an image file'
      } else if (size>1) {
        // check whether the size is greater than the size limit
        this.errorDialog = true
        this.errorText = 'Your file is too big! Please select an image under 1MB'
      } else {
        // Append file into FormData and turn file into image URL
        let formData = new FormData()
        let imageURL = URL.createObjectURL(imageFile)
        formData.append(fieldName, imageFile)
        // Emit the FormData and image URL to the parent component
        this.$emit('input', { formData, imageURL })
      }
    }*/
  }
  },
  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    },
  },
}
</script>

<style scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
.v-file-input{
  margin-left: auto;
  margin-right: auto;
  width: 25%;
}
.container--fluid {
    max-width: 100%;
    width: 70em;
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
