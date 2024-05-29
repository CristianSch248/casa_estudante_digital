<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <h3>Casa do Estudante Digital</h3>
      <!-- <router-link to="/">MyApp</router-link> -->
    </div>
    <div class="navbar-menu-user">
      <div class="col">
        <h4>
          <router-link to="/users" class="nav-link">{{ Usuario ? Usuario.nome : 'Aluno' }}</router-link>
        </h4>
        <div class="tipoUsuario" v-if="Usuario">
          <p v-if="Usuario.tipo === 1"> Aluno </p>
          <p v-if="Usuario.tipo === 2"> PRAE </p>
          <p v-if="Usuario.tipo === 3"> Manutenção </p>
        </div>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="opcoes" v-if="Usuario">
        <router-link to="/users" class="nav-link">Apartamentos</router-link>
        <router-link to="/users" class="nav-link">Patrimônios</router-link>
        <router-link to="/users" class="nav-link">Vistorias</router-link>
        <router-link to="/users" class="nav-link">Alocar Alunos</router-link>
        <router-link to="/users" class="nav-link">Usuários</router-link>
      </div>
      <div class="sair">
        <router-link to="/" class="nav-link">Sair</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { fetchUserData } from '../services/UsuarioService'
export default {
  name: "Navbar",

  data() {
    return {
      // variaveis
      Usuario: null
    }
  },

  async mounted() {},
  async created() {
    await this.getUserData()
  },

  methods: {
    // funçoes
    async getUserData(){
      console.log('em async getUserData(){')
      const userData = await fetchUserData()
      this.Usuario = userData
      console.log("🚀 ~ getUserData ~ this.Usuario:", this.Usuario)
    }
  },
}
</script>

<style scoped>

.tipoUsuario{
  background-color: #ffffff;
  border-radius: 15px;
  padding-left: 25px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #c5d9ff;
  color: #000000;
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-brand a {
  color: #fff;
  text-decoration: none;
}

.navbar-menu-user {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.navbar-menu-user h4 {
  margin: 0;
}

.navbar-menu-user p {
  margin: 0;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.opcoes {
  display: flex;
  gap: 1rem;
  overflow-x: auto;
}

.nav-link {
  color: #000000;
  text-decoration: none;
  font-weight: bold;
  margin-right: 1rem;
}

.nav-link.router-link-active {
  color: #007BFF;
}

.sair {
  margin-right: 2rem;
}
</style>
