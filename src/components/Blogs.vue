<template>
    <div>   
      
        <div  id="maindiv">
         <div id="distitle">
          <div id="title">
            <v-row>
              <v-col col="2" sm="3">
                <img  width="25px" height="25px" src="../assets/blog-icon.png"   /> 
              </v-col>
              <v-col><h3>Blogs</h3></v-col>
            </v-row>
          </div>
          <div id="actions">
            <v-btn
              class="mx-2"
              fab
              dark
              small
              color="#6AE6D1"
              @click="addBlog"
            >
              <v-icon dark> mdi-plus </v-icon>
            </v-btn>
          </div>
        </div>
        <div style="margin-left:400px"><pulse-loader  :loading="loading" color="#6AE6D1" size="20px" margin="30px"></pulse-loader></div>
        <div id="bloglistdiv"  v-for="blog in blogs" :key=blog.id>
            <v-card
   
    class="mx-auto my-12"
    
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <!-- <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img> -->

    <v-card-title>{{blog.title}}</v-card-title>

    <v-card-text>
      {{blog.description}}
    </v-card-text>
    <v-carousel>
    <v-carousel-item
      v-for="img in blog.images"
      :key="img"
      :src="img"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
    <v-divider class="mx-4"></v-divider>
  </v-card>
            
        </div>
        </div>
    </div>
</template>
<script>
// import { mapGetters } from "vuex";
import db from './firebaseInit';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
export default {
  data(){
   return{
     blogs:[],
     blogImages:[],
     loading:true,
        
   }
  },
  components:{
    'PulseLoader': PulseLoader

  },

  created(){
    
   db.collection('Blogs').get().then(querySnapshot =>{
     querySnapshot.forEach(doc =>{
       console.log(doc.data().images.length);
       
       const data={
          'title':doc.data().title,
          'description':doc.data().description,
          'images':doc.data().images
       }
       
       this.blogs.push(data);
       this.loading=false;
     })
   }) ;
   

  },
  methods:{
    addBlog(){
      this.$router.push({path:'/addBlogs'});
    },

  getImgUrl(pic) {
    console.log(pic);
    if(pic.includes("blob")==true)
    {
      return pic;
    }
    else
    {
       return require('../assets/'+pic)
    }
   
}

  },
   computed: {
    
    // ...mapGetters(["allBlogs"]),
    
  }, 
  
}
</script>
<style scoped>
#maindiv{
  margin: 0 auto;
  max-width: 1200px;
  margin-top: 10%;
  margin-bottom: 5%;
  background-color: rgb(32, 32, 32);
  box-sizing: border-box;
  border-radius: 15px;
  color: #cbcbcb;
  padding: 5%;
  border:1px solid #6AE6D1;
}
#distitle {
  display: flex;
}
#title {
  width: 130px;
  height: 50px;
  margin-left: 12px;
  background-color: #262626;
  border-radius: 25px;
  text-align: left;
  padding: 1%;
}
#actions {
  margin-left: 2%;
  margin-top: 5px;
}
#bloglistdiv{
    margin-top: 2%;
    margin-left: 12px;
   

}
.v-progress-circular {
  margin: 1rem;
}
</style>
