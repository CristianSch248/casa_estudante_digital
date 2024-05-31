<template>
    <div class="container">
        <div class="card">
            <div class="row">
                <div class="col">
                    <h2>Controle Usuários</h2>
                </div>
                <div class="col">
                    <button type="button" class="btn btn-outline-primary" @click="novoUsuario">Novo Usuário</button> 
                </div>
            </div>
        </div>

        <div class="card">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Opções</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in usuarios" :key="user.id">
                        <td>{{user.nome}}</td>
                        <td>
                            <button type="button" class="btn btn-outline-primary" @click="editarUsuario(user.id)" >Editar</button> 
                            <button v-if="user.ativo === false" type="button" class="btn btn-outline-success" @click="ativarUsuario(user.id)" >Ativar</button>
                            <button v-if="user.ativo === true" type="button" class="btn btn-outline-danger" @click="desativarUsuario(user.id)" >Desativar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>
      
<script>
    // imports
    import { 
        getAllUsers, 
        ativarUser,
        desativarUser
    } from '../services/UsuarioService'

    
    export default {
        // nome do componente
        name: "ControleUsuarios",
        
        data() {
            return {
            // variaveis
                usuarios: []
            }
        },
    
        async created() {
            await this.getUsers()
        },
    
        methods: {
            // funçoes

            async getUsers(){
                getAllUsers({ tipo: 1 }).then(users => {
                    console.log(users)
                    this.usuarios = users
                }).catch(error => {
                    console.error(error)
                })
            },

            novoUsuario(){

            },

            editarUsuario(id){

            },

            ativarUsuario(id){
                ativarUser(id).then(response => {
                    this.getUsers()
                }).catch(error => {
                    console.error(error)
                })
            },
            
            desativarUsuario(id){
                desativarUser(id).then(response => {
                    this.getUsers()
                }).catch(error => {
                    console.error(error)
                })
            },
        },
    }
</script>
      
<style scoped>
</style>