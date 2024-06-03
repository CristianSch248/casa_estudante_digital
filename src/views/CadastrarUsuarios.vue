<template>
    <div class="container">
      <div class="col shadow">
        <h1>Cadastrar Novo Usuário</h1>
        <form>
          <div class="form-group">
            <label for="nome">Nome:</label>
            <input type="text" id="nome" v-model="usuario.nome" required placeholder="José Silva"/>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="usuario.email" required placeholder="silvajose@gmail.com"/>
          </div>
          <div class="form-group">
            <label for="senha">Senha:</label>
            <input type="password" id="senha" v-model="usuario.senha" required placeholder="**********"/>
          </div>
          <div class="form-group">
            <label for="telefone">Telefone:</label>
            <input type="tel" id="telefone" v-model="usuario.telefone" required placeholder="xx000000000"/>
          </div>
          <div class="form-group">
            <label for="tipo">Tipo:</label>
            <select id="tipo" v-model="usuario.tipo" required>
              <option value=null>Selecione</option>
              <option value=2>PRAE</option>
              <option value=3>Manutenção</option>
            </select>
          </div>
          <div class="form-actions">
            <button @click="Salvar()" type="button" class="btn btn-outline-success">Salvar</button>
            <button @click="Cancelar()" type="button" class="btn btn-outline-danger">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { novoUsuario } from '../services/UsuarioService'
  
  export default {
    name: "CadastrarUsuarios",
  
    data() {
      return {
        usuario: {
          nome: null,
          email: null,
          senha: null,
          tipo: null,
          telefone: null
        },
      }
    },
    methods: {
        Salvar(){
            novoUsuario(this.usuario).then(response => {
                if (response.status === 200) { 
                    this.$router.push({ path: '/controle/usuarios' })
                    this.usuario = {
                        nome: null,
                        email: null,
                        senha: null,
                        tipo: null,
                        telefone: null
                    }
                }
            }).catch(error => {
                console.log("novoUsuario ~ error:", error)
            })
        },

        Cancelar(){
            this.usuario = {
                nome: null,
                email: null,
                senha: null,
                tipo: null,
                telefone: null
            },
            this.$router.push({ path: '/controle/usuarios' })
        }
    }
  }
</script>  
<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
    background-color: #f4f4f9;
    min-height: 50vh;
  }
  
  .col {
    flex: 1;
    max-width: 500px;
    padding: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
  }
  
  .form-group {
    margin-bottom: 15px;
    width: 100%;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #555;
  }
  
  input, select {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  input:focus, select:focus {
    border-color: #007bff;
    outline: none;
  }
  
  .form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    width: 100%;
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
  }
  
  .btn-outline-success {
    border: 1px solid #28a745;
    color: #28a745;
  }
  
  .btn-outline-success:hover {
    background-color: #28a745;
    color: #fff;
  }
  
  .btn-outline-danger {
    border: 1px solid #dc3545;
    color: #dc3545;
  }
  
  .btn-outline-danger:hover {
    background-color: #dc3545;
    color: #fff;
  }
</style>
