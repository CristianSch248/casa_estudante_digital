<template>
  <div class="layout">
    <Navbar/>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
    
<script>
  // imports
  // import HelloWorld from './components/HelloWorld.vue';
  import Navbar from '../components/Navbar.vue';
  
  export default {
    // nome do componente
    name: "Layout",
  
    // Componente impotado
    components: {
      // HelloWorld
      Navbar
    },
  
    props: {
      // message: String
    },
  
    data() {
      return {
        // variaveis
      };
    },
  
    mounted() {},
    created() {},
  
    computed: {},
  
    watch: {},
  
    methods: {
      // funçoes
    },
  };
  </script>
    
  <style scoped></style>