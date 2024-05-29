<template>
    <div class="users">
        <h1>userrs</h1>
    </div>
    <button @click="dashboard">Go to Dashboard Screen</button>
  </template>
    
  <script>  
  // imports
  // import HelloWorld from './components/HelloWorld.vue';
  
  export default {
    // nome do componente
    name: "Usuarios",
  
    // Componente impotado
    components: {
      // HelloWorld
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
      dashboard() {
        this.$router.push({ name: 'Dashboard' });
      }
    },
  };
  </script>
    
<style>
    .users {
        background-color: #b87b9d;
    }
</style>