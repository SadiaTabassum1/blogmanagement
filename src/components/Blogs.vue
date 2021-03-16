<template>
    <div>   
        <div id="maindiv">
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
        <div id="bloglistdiv" v-for="blog in allBlogs" :key=blog.id>
            <h1>{{blog.title}}</h1>
            <h2>{{blog.description}}</h2>
        </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  methods:{
    addBlog(){
      this.$router.push({path:'/addBlogs'});
    }

  },
   computed: {
    
    ...mapGetters(["allBlogs"]),
    
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
    border: 1px solid black;

}
</style>
