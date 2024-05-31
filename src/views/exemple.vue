<template>
    <div class="container">
       <h1>exemplo</h1>
    </div>
</template>
      
<script>
    // imports
    import { getAllUsers } from '../services/UsuarioService'

    
    export default {
        // nome do componente
        name: "example",
        
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
            }
        },
    
        mounted() {},
        created() {
        },
    
        computed: {},
        
        watch: {},
        
        methods: {
            // funçoes
            novoUsuario(){

            }
        },
    }
</script>
      
<style scoped>
</style>