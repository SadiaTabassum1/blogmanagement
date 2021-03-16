<template>
  <v-app id="mainapp">
    <v-main>
       <v-app-bar
      fixed
      color="#6A76AB"
      dark
    >
      <!-- <v-app-bar-nav-icon><img width="70px" height="60px" style="margin-left:20px" src="./assets/Free_Sample_By_Wix.jpeg"></v-app-bar-nav-icon> -->
       <div style="width:30px"></div>
      <v-toolbar-title>Blog MANAGEMENT</v-toolbar-title>

      <v-spacer></v-spacer>
      
      <v-btn style="margin-right:20px;" to="/" icon>
        <v-icon size="30px">mdi-home</v-icon>
      </v-btn>
   
     
    </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
   
  },

  data: () => ({
    //
  }),
};
</script>
<style>
#mainapp{
  background-color: rgb(48, 48, 50);
}
</style>
