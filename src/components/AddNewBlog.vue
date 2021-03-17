<template>
  <div id="formdiv">
    <div style="padding: 5%">
      <div id="title">
            <v-row>
              <v-col><h3>Add New Blog</h3></v-col>
            </v-row>
      </div>
      <div id="stepper">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step
            :complete="e1 > 1"
            step="1"
            color="#6A76AB"
          >Add Title</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            :complete="e1 > 2"
            step="2"
            color="#6A76AB"
          >Add Photos</v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step
            step="3"
            :complete="isOkay"
            color="#6A76AB"
          >Save</v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <form @submit.prevent="submit">
                <validation-provider
                  v-slot="{ errors }"
                  rules="required"
                >
                  <v-text-field
                    v-model="blogtitle"
                    :error-messages="errors"
                    label="Title"
                    required
                    color="#6A76AB"
                  >
                  </v-text-field>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors }"
                  name="Description"
                  rules="required|min:100"
                >
                  <v-textarea
                    v-model="blogdescription"
                    :error-messages="errors"
                    color="#6A76AB"
                    required
                  >
                    <template v-slot:label>
                      <div>Bio</div>
                    </template>
                  </v-textarea>
                </validation-provider>

                <v-btn style="color:white" color="#6a76ab" @click="e1 = 2" :disabled="invalid">
                  Next
                </v-btn>
              </form>
            </validation-observer>
          </v-stepper-content>
          <v-stepper-content step="2">
            
              
                  <v-file-input
                    :rules="rules"
                    accept="image/*"
                    label="Image Input"
                    prepend-icon="mdi-camera"
                    @change="onchangeimg1"
                  ></v-file-input>
                
                <v-file-input
                  accept="image/*"
                  label="Image Input"
                  prepend-icon="mdi-camera"
                  @change="onchangeimg2"
                  v-show="img2"
                ></v-file-input>
                <v-file-input
                  accept="image/*"
                  label="Image Input"
                  prepend-icon="mdi-camera"
                  @change="onchangeimg3"
                  v-show="img3"
                ></v-file-input>
                <v-file-input
                  accept="image/*"
                  label="Image Input"
                  prepend-icon="mdi-camera"
                  @change="onchangeimg4"
                  v-show="img4"
                ></v-file-input>
                <v-file-input
                  accept="image/*"
                  label="Image Input"
                  prepend-icon="mdi-camera"
                  @change="onchangeimg5"
                  v-show="img5"
                ></v-file-input>
                <v-btn style="color:white" color="#6a76ab" @click="e1 = 3"  v-show="showNext"> Next </v-btn>
             
          </v-stepper-content>
          <v-stepper-content step="3">
            <div style="padding: 10%">
              <v-row class="mb-5">
                <h2 style="color: #6a76ab">{{ blogtitle }}</h2></v-row
              >
              <v-row>
                <div class="blogdesdiv">{{ blogdescription }}</div></v-row
              >
              <v-row>
                <v-col v-for="img in img1url" :key="img" sm="4">
                  <v-container class="">
                    <v-img :src="img" aspect-ratio="1.7"></v-img>
                  </v-container>
                </v-col>
              </v-row>
            </div>
            <v-btn style="margin-left:42%;width:150px;color:white" @click="AddNew" color="#6a76ab">Save</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      </div>
    </div>
  </div>
</template>
<script>
import {  mapMutations } from "vuex";
import { required, min } from "vee-validate/dist/rules";
import {
  extend,
  ValidationObserver,
  ValidationProvider,
  setInteractionMode,
} from "vee-validate";

setInteractionMode("eager");

extend("required", {
  ...required,
  message: "{_field_} can not be empty",
});
extend("min", {
  ...min,
  message: "{_field_} may not be less than {length} characters",
});
export default {
  name: "MultiStepForm",
  data() {
    return {
      e1: 1,
      blogtitle: "",
      blogdescription: "",
      isOkay: false,
      img2: false,
      img3: false,
      img4: false,
      img5: false,
      img1url: [],
      images:[],
      imgurl: null,
      showNext:false,
      blog:{
        title:"",
        description:"",
        image:[]
      },
      rules: [
   v => !!v || 'File is required',
   v => (v && v.size > 0) || 'File is required',
],
    };
  },
  
  methods: {
    ...mapMutations(["addBlog"]),
    onchangeimg1(e) {
      this.img2 = true;
      this.imgurl = URL.createObjectURL(e);
      this.img1url.push(URL.createObjectURL(e));
      this.showNext=true;
    },
    onchangeimg2(e) {
      this.img3 = true;
      this.img2 = true;
      this.imgurl = URL.createObjectURL(e);
      this.img1url.push(this.imgurl);
      console.log(this.img1url);
      console.log(this.images);
    },
    onchangeimg3(e) {
      this.img4 = true;
      this.img2 = true;
      this.imgurl = URL.createObjectURL(e);
      this.img1url.push(URL.createObjectURL(e));
    },
    onchangeimg4(e) {
      this.img5 = true;
      this.img2 = true;
      this.imgurl = URL.createObjectURL(e);
      this.img1url.push(URL.createObjectURL(e));
    },
    onchangeimg5(e) {
      this.img2 = true;
      this.imgurl = URL.createObjectURL(e);
      this.img1url.push(URL.createObjectURL(e));
    },
    AddNew(){
      this.blog.title=this.blogtitle;
      this.blog.description=this.blogdescription;
      this.blog.image=this.img1url;
      this.$store.commit("addBlog",this.blog);
      this.$router.push({path:'/'});
    }

  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
};
</script>
<style scoped>

.blogdesdiv {
  border: 2px solid #6a76ab;
  padding: 5%;
  border-radius: 15px;
}
#title {
  width: 200px;
  height: 50px;
  margin-bottom: 25px;
  background-color: #262626;
  border:1px solid #6AE6D1;
  border-radius: 25px;
  text-align: center;
  padding: 1%;
  color:white;
}
#formdiv {
  margin: 0 auto;
  max-width: 1200px;
  height: inherit;
  margin-top: 10%;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: rgb(32, 32, 32);
  padding: 1%;
  margin-bottom: 5%;
  
}
#stepper
{
  border:5px solid #6AE6D1;
  border-radius: 10px;
}
</style>